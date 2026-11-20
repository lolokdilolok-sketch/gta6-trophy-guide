// Progress state: which trophies the reader has earned, kept in localStorage
// and exportable / importable as a local JSON file. Nothing leaves the device.
export const PROGRESS_KEY = 'leonida-legend-progress-v1';
export const SPOILER_KEY = 'leonida-legend-spoiler-v1';
export const COUNTS_KEY = 'leonida-legend-counts-v1';

// Per-trophy counters (meditations, stunts, …): the reader's own running
// count toward a trophy's `count` target. Same local-only storage as earned.
export function loadCounts() {
  try {
    const raw = localStorage.getItem(COUNTS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return {};
    const out = {};
    for (const [k, v] of Object.entries(parsed)) {
      const id = Number(k);
      if (Number.isInteger(id) && Number.isInteger(v) && v >= 0) out[id] = v;
    }
    return out;
  } catch {
    return {};
  }
}

export function saveCounts(counts) {
  localStorage.setItem(COUNTS_KEY, JSON.stringify(counts));
}

export function setCount(counts, id, value) {
  const next = { ...counts };
  if (value <= 0) delete next[id];
  else next[id] = value;
  saveCounts(next);
  return next;
}

export function loadEarnedIds() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    const ids = Array.isArray(parsed) ? parsed : parsed.earned;
    return new Set((ids ?? []).filter((n) => Number.isInteger(n)));
  } catch {
    return new Set();
  }
}

export function saveEarnedIds(earnedIds) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify([...earnedIds].sort((a, b) => a - b)));
}

export function toggleEarnedId(earnedIds, id) {
  const next = new Set(earnedIds);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  saveEarnedIds(next);
  return next;
}

export function loadSpoilerOn() {
  const raw = localStorage.getItem(SPOILER_KEY);
  return raw === null ? true : raw === '1';
}

export function saveSpoilerOn(on) {
  localStorage.setItem(SPOILER_KEY, on ? '1' : '0');
}

export function exportProgressFile(earnedIds) {
  const payload = {
    app: 'Leonida Legend — GTA VI Trophy Guide',
    exportedAt: new Date().toISOString(),
    game: 'Grand Theft Auto VI',
    earned: [...earnedIds].sort((a, b) => a - b),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'leonida-legend-progress.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  return payload.earned.length;
}

export function parseImportedProgress(text, validIds) {
  const parsed = JSON.parse(text);
  const ids = Array.isArray(parsed) ? parsed : parsed.earned;
  if (!Array.isArray(ids)) throw new Error('not a progress file');
  const valid = new Set(validIds);
  const earned = ids.filter((n) => Number.isInteger(n) && valid.has(n));
  if (earned.length === 0 && ids.length > 0) throw new Error('no known trophy ids');
  return new Set(earned);
}

export function gradeCounts(trophies, earnedIds) {
  const counts = { platinum: [0, 0], gold: [0, 0], silver: [0, 0], bronze: [0, 0] };
  for (const t of trophies) {
    counts[t.grade][1] += 1;
    if (earnedIds.has(t.id)) counts[t.grade][0] += 1;
  }
  return counts;
}
