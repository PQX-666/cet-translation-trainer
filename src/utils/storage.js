const STORAGE_KEY = 'cet-translator-data';

const INTERVALS = [
  0,
  20 * 60 * 1000,
  60 * 60 * 1000,
  24 * 60 * 60 * 1000,
  2 * 24 * 60 * 60 * 1000,
  6 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000,
  60 * 24 * 60 * 60 * 1000,
];

const STAGE_NAMES = ['新学', '20分钟', '1小时', '1天', '2天', '6天', '14天', '30天', '已掌握'];

const defaultData = () => ({
  patternProgress: {},
  phraseProgress: {},
  vocabProgress: {},
  passageProgress: {},
  errorBook: [],
  stats: {
    dailyStreak: 0,
    lastPracticeDate: null,
    totalSentences: 0,
    passagesCompleted: 0,
    patternAccuracy: {},
    phraseAccuracy: {},
    vocabAccuracy: {},
    topicCount: {},
  },
  dailyQueue: {
    date: new Date().toDateString(),
    recommendedPassageId: null,
    reviewPatternIds: [],
    reviewPhraseIds: [],
    reviewVocabIds: [],
  },
});

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData();
    const parsed = JSON.parse(raw);
    return { ...defaultData(), ...parsed };
  } catch {
    return defaultData();
  }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function exportData() {
  const data = loadData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cet-translator-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.patternProgress && !data.phraseProgress && !data.passageProgress) {
          reject(new Error('无效的备份文件'));
          return;
        }
        const merged = { ...defaultData(), ...data };
        saveData(merged);
        resolve(merged);
      } catch {
        reject(new Error('文件格式错误'));
      }
    };
    reader.onerror = () => reject(new Error('读取失败'));
    reader.readAsText(file);
  });
}

export function ratePattern(patternId, selfRating, sourceInfo) {
  const data = loadData();
  const now = Date.now();
  const prev = data.patternProgress[patternId] || {
    stage: 0, nextReview: null, lastReview: null,
    correctCount: 0, wrongCount: 0, firstSeenAt: now,
    sources: [],
  };

  const qualityMap = {
    0: { correct: false, stageDelta: -2 },
    1: { correct: false, stageDelta: -1 },
    2: { correct: true, stageDelta: 1 },
    3: { correct: true, stageDelta: 2 },
  };
  const q = qualityMap[selfRating] || qualityMap[2];
  const newStage = Math.max(0, Math.min(8, prev.stage + q.stageDelta));

  const nextReview = q.correct
    ? now + INTERVALS[Math.min(newStage, 8)]
    : now + INTERVALS[Math.max(Math.min(newStage, 8), 1)];

  const sources = [...(prev.sources || [])];
  if (sourceInfo && !sources.find(s => s.passageId === sourceInfo.passageId && s.sentenceIndex === sourceInfo.sentenceIndex)) {
    sources.push({ ...sourceInfo, rating: selfRating, at: now });
  }

  data.patternProgress[patternId] = {
    stage: newStage,
    nextReview,
    lastReview: now,
    correctCount: prev.correctCount + (q.correct ? 1 : 0),
    wrongCount: prev.wrongCount + (q.correct ? 0 : 1),
    firstSeenAt: prev.firstSeenAt || now,
    sources,
  };

  const total = data.patternProgress[patternId].correctCount + data.patternProgress[patternId].wrongCount;
  data.stats.patternAccuracy[patternId] = total > 0 ? data.patternProgress[patternId].correctCount / total : 0;

  if (selfRating <= 1) {
    const exists = data.errorBook.find(e => e.type === 'pattern' && e.id === patternId);
    if (!exists) {
      data.errorBook.unshift({
        type: 'pattern',
        id: patternId,
        addedAt: now,
        sourceInfo,
        errorType: selfRating === 0 ? '完全遗忘' : '记忆模糊',
        reviewed: false,
      });
    }
  }

  updateDailyStats(data);
  saveData(data);
  return data;
}

export function ratePhrase(phraseId, selfRating, sourceInfo) {
  const data = loadData();
  const now = Date.now();
  const prev = data.phraseProgress[phraseId] || {
    stage: 0, nextReview: null, correctCount: 0, wrongCount: 0,
  };

  const qualityMap = { 0: false, 1: false, 2: true, 3: true };
  const correct = qualityMap[selfRating] ?? true;
  const stageDelta = selfRating >= 3 ? 2 : selfRating >= 2 ? 1 : selfRating >= 1 ? -1 : -2;
  const newStage = Math.max(0, Math.min(8, prev.stage + stageDelta));
  const nextReview = correct
    ? now + INTERVALS[Math.min(newStage, 8)]
    : now + INTERVALS[Math.max(Math.min(newStage, 8), 1)];

  data.phraseProgress[phraseId] = {
    stage: newStage,
    nextReview,
    lastReview: now,
    correctCount: prev.correctCount + (correct ? 1 : 0),
    wrongCount: prev.wrongCount + (correct ? 0 : 1),
  };

  const total = data.phraseProgress[phraseId].correctCount + data.phraseProgress[phraseId].wrongCount;
  data.stats.phraseAccuracy[phraseId] = total > 0 ? data.phraseProgress[phraseId].correctCount / total : 0;

  if (selfRating <= 1) {
    const exists = data.errorBook.find(e => e.type === 'phrase' && e.id === phraseId);
    if (!exists) {
      data.errorBook.unshift({
        type: 'phrase', id: phraseId, addedAt: now, sourceInfo,
        errorType: selfRating === 0 ? '完全遗忘' : '记忆模糊', reviewed: false,
      });
    }
  }

  saveData(data);
  return data;
}

export function rateVocab(vocabKey, selfRating) {
  const data = loadData();
  const now = Date.now();
  const prev = data.vocabProgress[vocabKey] || {
    stage: 0, nextReview: null, correctCount: 0, wrongCount: 0,
  };

  const qualityMap = { 0: false, 1: false, 2: true, 3: true };
  const correct = qualityMap[selfRating] ?? true;
  const stageDelta = selfRating >= 3 ? 2 : selfRating >= 2 ? 1 : selfRating >= 1 ? -1 : -2;
  const newStage = Math.max(0, Math.min(8, prev.stage + stageDelta));
  const nextReview = correct
    ? now + INTERVALS[Math.min(newStage, 8)]
    : now + INTERVALS[Math.max(Math.min(newStage, 8), 1)];

  data.vocabProgress[vocabKey] = {
    stage: newStage,
    nextReview,
    lastReview: now,
    correctCount: prev.correctCount + (correct ? 1 : 0),
    wrongCount: prev.wrongCount + (correct ? 0 : 1),
  };

  const total = data.vocabProgress[vocabKey].correctCount + data.vocabProgress[vocabKey].wrongCount;
  data.stats.vocabAccuracy[vocabKey] = total > 0 ? data.vocabProgress[vocabKey].correctCount / total : 0;

  if (selfRating <= 1) {
    const exists = data.errorBook.find(e => e.type === 'vocab' && e.id === vocabKey);
    if (!exists) {
      data.errorBook.unshift({
        type: 'vocab', id: vocabKey, addedAt: now, sourceInfo: null,
        errorType: selfRating === 0 ? '完全遗忘' : '记忆模糊', reviewed: false,
      });
    }
  }

  saveData(data);
  return data;
}

export function completePassage(passageId, topic, sentenceResults) {
  const data = loadData();
  const now = Date.now();

  const weakSentences = sentenceResults
    .filter(r => r.rating <= 1)
    .map(r => ({ sentenceId: r.sentenceId, rating: r.rating }));

  const overallRating = sentenceResults.length > 0
    ? Math.round(sentenceResults.reduce((s, r) => s + r.rating, 0) / sentenceResults.length)
    : 2;

  data.passageProgress[passageId] = {
    completed: true,
    completedAt: now,
    timesCompleted: (data.passageProgress[passageId]?.timesCompleted || 0) + 1,
    weakSentences,
    overallRating,
    lastSentenceResults: sentenceResults,
  };

  data.stats.passagesCompleted = (data.stats.passagesCompleted || 0) + 1;
  data.stats.topicCount[topic] = (data.stats.topicCount[topic] || 0) + 1;

  updateDailyStats(data);
  generateDailyQueue(data);
  saveData(data);
  return data;
}

export function generateDailyQueue(data) {
  const now = Date.now();
  if (!data) data = loadData();

  const duePatterns = Object.entries(data.patternProgress)
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id]) => id);

  const duePhrases = Object.entries(data.phraseProgress)
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id]) => id);

  const dueVocabs = Object.entries(data.vocabProgress || {})
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id]) => id);

  data.dailyQueue = {
    date: new Date().toDateString(),
    reviewPatternIds: duePatterns.slice(0, 10),
    reviewPhraseIds: duePhrases.slice(0, 10),
    reviewVocabIds: dueVocabs.slice(0, 10),
  };

  return data;
}

export function getDailyReviewItems(patterns, phrases, vocabItems) {
  const data = loadData();
  const now = Date.now();

  const patternItems = Object.entries(data.patternProgress)
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id, p]) => {
      const pattern = patterns.find(pt => pt.id === id);
      return pattern ? { ...pattern, progress: p, itemType: 'pattern' } : null;
    })
    .filter(Boolean);

  const phraseItems = Object.entries(data.phraseProgress)
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id, p]) => {
      const phrase = phrases.find(ph => ph.id === id);
      return phrase ? { ...phrase, progress: p, itemType: 'phrase' } : null;
    })
    .filter(Boolean);

  const vocabItemsList = Object.entries(data.vocabProgress || {})
    .filter(([_, p]) => p.nextReview && p.nextReview <= now && p.stage < 8)
    .map(([id, p]) => {
      const vocab = vocabItems?.find(v => v.id === id);
      return vocab ? { ...vocab, progress: p, itemType: 'vocab' } : null;
    })
    .filter(Boolean);

  return [...patternItems, ...phraseItems, ...vocabItemsList].sort((a, b) =>
    (a.progress.stage || 0) - (b.progress.stage || 0)
  );
}

export function getNextPassage(passages, currentPassageId) {
  const data = loadData();
  const currentTopic = passages.find(p => p.id === currentPassageId)?.topic;

  const uncompleted = passages.filter(p =>
    p.id !== currentPassageId && !data.passageProgress[p.id]?.completed
  );

  const sameTopic = uncompleted.filter(p => p.topic === currentTopic);
  if (sameTopic.length > 0) return sameTopic[0];

  const leastDoneTopic = uncompleted.reduce((best, p) => {
    const count = data.stats.topicCount?.[p.topic] || 0;
    return count < (best.count ?? Infinity) ? { passage: p, count } : best;
  }, { passage: uncompleted[0], count: Infinity });

  return leastDoneTopic.passage || uncompleted[0] || null;
}

export function getTodayPassage(passages) {
  const data = loadData();
  const today = new Date().toDateString();

  if (data.dailyQueue?.date === today && data.dailyQueue?.recommendedPassageId) {
    const rec = passages.find(p => p.id === data.dailyQueue.recommendedPassageId);
    if (rec) return rec;
  }

  const uncompleted = passages.filter(p => !data.passageProgress[p.id]?.completed);
  if (uncompleted.length === 0) {
    return passages[Math.floor(Math.random() * passages.length)];
  }

  // Adaptive difficulty: calculate user's average rating from completed passages
  let userAvgRating = 2; // default medium
  const completedPassages = Object.values(data.passageProgress).filter(p => p.completed);
  if (completedPassages.length > 0) {
    const total = completedPassages.reduce((s, p) => s + (p.overallRating || 2), 0);
    userAvgRating = total / completedPassages.length;
  }

  // Score each uncompleted passage: prioritize topic balance + difficulty match
  const scored = uncompleted.map(p => {
    const topicCount = data.stats.topicCount?.[p.topic] || 0;
    const difficultyMatch = 1 - Math.abs(p.difficulty - Math.round(userAvgRating)) / 3;
    return { passage: p, score: difficultyMatch * 0.5 - topicCount * 0.3 };
  });

  scored.sort((a, b) => b.score - a.score);
  const pick = scored[0].passage;

  data.dailyQueue.recommendedPassageId = pick.id;
  data.dailyQueue.date = today;
  saveData(data);

  return pick;
}

function updateDailyStats(data) {
  const today = new Date().toDateString();
  if (data.stats.lastPracticeDate === today) return;
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
  if (data.stats.lastPracticeDate === yesterday || !data.stats.lastPracticeDate) {
    data.stats.dailyStreak = (data.stats.dailyStreak || 0) + 1;
  } else {
    data.stats.dailyStreak = 1;
  }
  data.stats.lastPracticeDate = today;
  data.stats.totalSentences = (data.stats.totalSentences || 0) + 1;
}

export function markErrorReviewed(errorKey) {
  const data = loadData();
  const idx = data.errorBook.findIndex(e => `${e.type}:${e.id}:${e.addedAt}` === errorKey);
  if (idx !== -1) {
    data.errorBook[idx].reviewed = !data.errorBook[idx].reviewed;
    saveData(data);
  }
  return data;
}

export function removeError(errorKey) {
  const data = loadData();
  const idx = data.errorBook.findIndex(e => `${e.type}:${e.id}:${e.addedAt}` === errorKey);
  if (idx !== -1) {
    data.errorBook.splice(idx, 1);
    saveData(data);
  }
  return data;
}

export function clearReviewedErrors() {
  const data = loadData();
  const before = data.errorBook.length;
  data.errorBook = data.errorBook.filter(e => !e.reviewed);
  saveData(data);
  return before - data.errorBook.length;
}

export function resetAllData() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultData();
}

export function getStageName(stage) {
  return STAGE_NAMES[Math.min(stage, 8)] || '未知';
}

export function getAccuracyStats() {
  const data = loadData();
  const patternIds = Object.keys(data.patternProgress);
  const phraseIds = Object.keys(data.phraseProgress);
  const vocabIds = Object.keys(data.vocabProgress || {});

  const masteredPatterns = patternIds.filter(id => data.patternProgress[id].stage >= 6).length;
  const masteredPhrases = phraseIds.filter(id => data.phraseProgress[id].stage >= 6).length;
  const masteredVocabs = vocabIds.filter(id => (data.vocabProgress[id]?.stage || 0) >= 6).length;

  const avgPatternAccuracy = patternIds.length > 0
    ? patternIds.reduce((s, id) => s + (data.stats.patternAccuracy[id] || 0), 0) / patternIds.length
    : 0;

  const avgPhraseAccuracy = phraseIds.length > 0
    ? phraseIds.reduce((s, id) => s + (data.stats.phraseAccuracy[id] || 0), 0) / phraseIds.length
    : 0;

  return {
    patternTotal: patternIds.length,
    phraseTotal: phraseIds.length,
    vocabTotal: vocabIds.length,
    masteredPatterns,
    masteredPhrases,
    masteredVocabs,
    avgPatternAccuracy: Math.round(avgPatternAccuracy * 100),
    avgPhraseAccuracy: Math.round(avgPhraseAccuracy * 100),
    dailyStreak: data.stats.dailyStreak,
    passagesCompleted: data.stats.passagesCompleted,
    totalSentences: data.stats.totalSentences,
    errorCount: data.errorBook.filter(e => !e.reviewed).length,
  };
}
