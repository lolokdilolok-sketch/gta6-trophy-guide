// Filtering and the spoiler setting: which trophies the list shows, and how a
// hidden story trophy looks until it is earned.
import { isUnconfirmed, WATCH_IDS } from './sources.js';
export const KIND_LABELS = {
  all: 'All',
  story: 'Story',
  missable: 'Missable',
  watch: 'Watch',
  collectibles: 'Collectibles',
  activities: 'Activities',
  platinum: 'Platinum',
};

export function kindMatches(trophy, kind) {
  if (kind === 'all') return true;
  if (kind === 'missable') return trophy.missable === true;
  if (kind === 'watch') return WATCH_IDS.has(trophy.id);
  if (kind === 'unconfirmed') return isUnconfirmed(trophy);
  return trophy.kind === kind;
}

export function filterTrophies(trophies, filters, earnedIds) {
  const query = (filters.query ?? '').trim().toLowerCase();
  return trophies.filter((t) => {
    if (!kindMatches(t, filters.kind)) return false;
    if (filters.grade !== 'all' && t.grade !== filters.grade) return false;
    if (filters.earned === 'earned' && !earnedIds.has(t.id)) return false;
    if (filters.earned === 'unearned' && earnedIds.has(t.id)) return false;
    if (query) {
      const hay = `${t.name} ${t.description} ${t.guide} ${(t.steps ?? []).join(' ')}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });
}

export function isMasked(trophy, spoilerOn, earnedIds) {
  return spoilerOn && trophy.hidden && !earnedIds.has(trophy.id);
}

export function displayName(trophy, spoilerOn, earnedIds) {
  return isMasked(trophy, spoilerOn, earnedIds) ? 'Hidden trophy' : trophy.name;
}

export function displayDescription(trophy, spoilerOn, earnedIds) {
  return isMasked(trophy, spoilerOn, earnedIds)
    ? 'Hidden until earned — tick this trophy off to reveal it.'
    : trophy.description;
}

export function gradeLabel(grade) {
  return grade.charAt(0).toUpperCase() + grade.slice(1);
}
