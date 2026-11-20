// Trophy detail panel: the official name and description, its cited sources
// right under the badges (so the screenshots show them), its missable warning,
// the guide in our own words and its steps.
//
// The "Mark as earned" button sits BESIDE the title, not at the bottom: the
// panel is taller than the 720px screenshot fold for the longest guides, and
// the one action in the panel must always be visible. Sources are one compact
// paragraph (header + links inline) instead of a three-line list, for the
// same reason: every pixel of height pushes the guide past the fold.
import { displayName, displayDescription, gradeLabel, isMasked } from './filters.js';

export function renderDetailPanel(container, trophy, earnedIds, spoilerOn, onToggleEarned) {
  container.replaceChildren();
  if (!trophy) {
    const p = document.createElement('p');
    p.className = 'detail-empty';
    p.textContent = 'Pick a trophy on the left to see its guide.';
    container.append(p);
    return;
  }
  const earned = earnedIds.has(trophy.id);
  const masked = isMasked(trophy, spoilerOn, earnedIds);

  const head = document.createElement('div');
  head.className = 'detail-head';
  const title = document.createElement('h2');
  title.textContent = displayName(trophy, spoilerOn, earnedIds);
  head.append(title);
  const earnButton = document.createElement('button');
  earnButton.type = 'button';
  earnButton.className = 'detail-earn' + (earned ? ' earned' : '');
  earnButton.textContent = earned ? '✓ Earned — click to untick' : 'Mark as earned';
  earnButton.addEventListener('click', () => onToggleEarned(trophy.id));
  head.append(earnButton);
  container.append(head);

  const official = document.createElement('p');
  official.className = 'detail-official';
  official.textContent = masked ? 'A hidden story trophy.' : `“${trophy.description}” — official description`;
  container.append(official);

  const meta = document.createElement('div');
  meta.className = 'detail-meta';
  const grade = document.createElement('span');
  grade.className = `grade-chip grade-${trophy.grade}`;
  grade.textContent = gradeLabel(trophy.grade);
  meta.append(grade);
  if (trophy.missable) {
    const warn = document.createElement('span');
    warn.className = 'tag tag-missable';
    warn.textContent = '⚠ Possibly missable';
    meta.append(warn);
  }
  if (trophy.hidden) {
    const hid = document.createElement('span');
    hid.className = 'tag tag-hidden';
    hid.textContent = 'Hidden on PS5';
    meta.append(hid);
  }
  if (trophy.count) {
    const count = document.createElement('span');
    count.className = 'tag tag-count';
    count.textContent = `Target: ${trophy.count.toLocaleString('en-US')}`;
    meta.append(count);
  }
  container.append(meta);

  if (masked) {
    const note = document.createElement('p');
    note.className = 'detail-guide';
    note.textContent = 'Spoilers are hidden: this story trophy stays masked until you earn it. Turn “Hide spoilers” off above, or mark it earned with the button beside the title, to see its guide.';
    container.append(note);
  } else {
    // Sources as one compact paragraph (header + links inline): the old
    // three-line list cost ~70px and pushed the guide past the fold.
    if (trophy.sources && trophy.sources.length > 0) {
      const sources = document.createElement('p');
      sources.className = 'detail-sources';
      const headText = document.createElement('b');
      headText.textContent = 'Sources — where the facts in this guide come from: ';
      sources.append(headText);
      trophy.sources.forEach((s, i) => {
        if (i > 0) sources.append(document.createTextNode(' · '));
        const a = document.createElement('a');
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = s.name;
        sources.append(a);
      });
      container.append(sources);
    }
    if (trophy.missable) {
      const warnBox = document.createElement('p');
      warnBox.className = 'detail-missable';
      warnBox.innerHTML = '<b>⚠ The one missable trophy.</b> Do the Chapter 1 meditation before Chapter 1 ends — every other trophy can wait until after the story.';
      container.append(warnBox);
    }
    const guide = document.createElement('p');
    guide.className = 'detail-guide';
    guide.textContent = trophy.guide;
    container.append(guide);

    if (trophy.steps && trophy.steps.length > 0) {
      const steps = document.createElement('ol');
      steps.className = 'detail-steps';
      for (const step of trophy.steps) {
        const li = document.createElement('li');
        li.textContent = step;
        steps.append(li);
      }
      container.append(steps);
    }
  }
}
