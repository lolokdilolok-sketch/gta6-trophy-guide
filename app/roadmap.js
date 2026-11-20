// Roadmap to the platinum and the missable list: three stages built from the
// official descriptions, in the order PowerPyx's roadmap gives them.
import { gradeLabel } from './filters.js';

export const ROADMAP_STAGES = [
  {
    n: 1,
    title: 'Stage 1 — Play the story',
    hours: '60–80 hours',
    blurb: 'Finish Chapters 1–5, taking optional missions as they appear. Checklist progress already counts, though the checklist itself opens only after the story.',
    trophyIds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28],
    callout: '⚠ Do the Chapter 1 meditation (Positive Mental Attitude) before Chapter 1 ends — the only missable trophy.',
  },
  {
    n: 2,
    title: 'Stage 2 — 100% checklist',
    hours: '~100 hours',
    blurb: 'After the credits, open Progress > Stats > 100% Completion — about 60% true completion. Side quests are mostly unneeded, collectibles only partly, and 70 of 80 challenges suffice. Only robberies, underwater discoveries, shooting ranges, drone races and Bret’s Target Decks need everything.',
    trophyIds: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 50, 52, 53, 54, 55],
    callout: null,
  },
  {
    n: 3,
    title: 'Stage 3 — Strangers & clean-up',
    hours: '~10 hours',
    blurb: 'Strangers & Freaks are not part of 100%, so finish the 8 counting strands now, plus the trophies whose method is still being confirmed — and the platinum itself.',
    trophyIds: [1, 25, 44, 49, 51],
    callout: null,
  },
];

export function renderRoadmapStages(container, trophies, earnedIds, onSelectTrophy) {
  container.replaceChildren();
  const byId = new Map(trophies.map((t) => [t.id, t]));
  for (const stage of ROADMAP_STAGES) {
    const card = document.createElement('article');
    card.className = 'stage';
    const h = document.createElement('h3');
    h.innerHTML = `${stage.title} <span class="hours">${stage.hours}</span>`;
    card.append(h);
    const p = document.createElement('p');
    p.textContent = stage.blurb;
    card.append(p);
    const ul = document.createElement('ul');
    // Screenshots are 720px tall: a long stage list runs off the bottom edge,
    // so show the first 3 trophies and a "+N more" line instead (short stages
    // show all of theirs). The full list stays in the checklist view.
    const shownIds = stage.trophyIds.length > 5 ? stage.trophyIds.slice(0, 3) : stage.trophyIds;
    for (const id of shownIds) {
      const t = byId.get(id);
      if (!t) continue;
      const li = document.createElement('li');
      const chip = document.createElement('span');
      chip.className = `g grade-${t.grade}`;
      chip.textContent = gradeLabel(t.grade).slice(0, 4).toUpperCase();
      li.append(chip);
      const link = document.createElement('a');
      link.href = `#/guide/${t.id}`;
      link.textContent = t.name;
      link.addEventListener('click', (e) => {
        e.preventDefault();
        onSelectTrophy(t.id);
      });
      li.append(link);
      if (earnedIds.has(t.id)) {
        const done = document.createElement('span');
        done.className = 'done';
        done.textContent = ' ✓';
        li.append(done);
      }
      ul.append(li);
    }
    if (stage.trophyIds.length > shownIds.length) {
      const more = document.createElement('li');
      more.className = 'more';
      more.textContent = `+${stage.trophyIds.length - shownIds.length} more in the checklist`;
      ul.append(more);
    }
    card.append(ul);
    if (stage.callout) {
      const call = document.createElement('p');
      call.className = 'stage-callout';
      call.textContent = stage.callout;
      card.append(call);
    }
    container.append(card);
  }
}

export function renderMissableList(container, trophies, earnedIds, onSelectTrophy) {
  container.replaceChildren();
  for (const t of trophies.filter((x) => x.missable)) {
    const card = document.createElement('article');
    card.className = 'missable-card';
    const h = document.createElement('h3');
    h.textContent = `${t.name} — ${gradeLabel(t.grade)}`;
    card.append(h);
    const p = document.createElement('p');
    p.textContent = t.guide;
    card.append(p);
    const link = document.createElement('a');
    link.href = `#/guide/${t.id}`;
    link.textContent = 'Open the full guide →';
    link.addEventListener('click', (e) => {
      e.preventDefault();
      onSelectTrophy(t.id);
    });
    card.append(link);
    container.append(card);
  }
}
