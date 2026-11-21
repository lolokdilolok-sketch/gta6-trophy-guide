// Trophy detail panel: the official name and description, its cited sources
// right under the badges (so the screenshots show them), a one-line IN SHORT
// answer first, then the guide as numbered steps — every step citing its
// source by number — then the honesty boxes (count disagreements, unconfirmed
// methods), the reader's own counter for count trophies, and the full guide
// prose. The "Mark as earned" button sits BESIDE the title, not at the
// bottom: the panel is taller than the 720px screenshot fold for the longest
// guides, and the one action in the panel must always be visible.
import { displayName, displayDescription, gradeLabel, isMasked } from './filters.js';
import {
  SOURCES, sourceNumbersFor, isUnconfirmed,
  KEENGAMER_AGREES, KEENGAMER_DISAGREES,
  EXTRA_STEPS, GUIDE_UPDATES,
} from './sources.js';

// First sentence of a guide ("…ends."), the rest after it. The IN SHORT line
// shows the first sentence; the prose below it continues with the rest, so
// nothing is repeated.
function splitFirstSentence(text) {
  const m = (text ?? '').match(/^.*?\.\s/);
  if (!m) return [text, ''];
  return [m[0].trim(), text.slice(m[0].length).trim()];
}

function citeSpan(document, nums) {
  const span = document.createElement('span');
  span.className = 'cite';
  span.textContent = ' ' + nums.map((n) => `[${n}]`).join(' ');
  return span;
}

function linkFor(document, n) {
  const src = SOURCES.find((s) => s.n === n);
  if (!src) return null;
  if (!src.url) {
    const b = document.createElement('b');
    b.textContent = `[${n}] ${src.short}`;
    return b;
  }
  const a = document.createElement('a');
  a.href = src.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = `[${n}] ${src.short}`;
  return a;
}

// Disagreements flagged after the steps. Each entry states both sides and
// cites every source on either side — nothing is picked silently.
const DISAGREE_TEXT = {
  1: {
    text: 'PowerPyx and OutputLag put the platinum at about 200 hours; damnmodz says 200–250; Push Square says up to 300 hours or more. The trophy itself (earn all 54 others) is agreed by all.',
    cites: [1, 6, 9, 11],
  },
  17: {
    text: 'PowerPyx and GTA-Zone count twelve shooting ranges; Push Square, OutputLag and damnmodz say two locations (Rodgers Ranch & Shooting Range, Port Gellhorn — 24 golds over 6 courses; Griffin Shooting Range, Balsero — 18 over 6). All agree on 42 gold medals.',
    cites: [1, 6, 7, 9, 11],
  },
  45: {
    text: 'PowerPyx gives a specific method with photos (blue Banshee through the showroom window, after the Key Cloner); damnmodz repeats the same method (one underlying source). KeenGamer, GTA-Zone, eGamers, OutputLag and GTABase still list the exact method as unconfirmed (20 Nov 2026). Treat the method as reported, not confirmed.',
    cites: [1, 2, 5, 7, 8, 9, 11],
  },
  50: {
    text: 'PowerPyx gives a UFO easter egg method with photos (road north-west of Starlet Motel, after 2AM, alone); damnmodz independently confirms it. OutputLag lists the unlock as unconfirmed and offers a different lead instead (a graffiti code in Crosstown, also unconfirmed). KeenGamer, GTA-Zone, eGamers and GTABase still list it as unconfirmed (20 Nov 2026). Treat the method as reported, not confirmed.',
    cites: [1, 2, 5, 7, 8, 9, 11],
  },
  29: {
    text: 'damnmodz reports the trigger animal as the Snapmatic Buck (labelled Reported — one underlying source); GTABase says which animal triggers the trophy is not confirmed yet. The Bret quest line itself is agreed — only the trigger animal is disputed.',
    cites: [2, 11],
  },
};

// Best lead so far for a trophy with no confirmed method yet — a lead, not
// a method. Shown under the NOT PINNED DOWN YET box; it never turns the
// trophy into a confirmed one (see isUnconfirmed in sources.js).
const LEAD_TEXT = {
  49: {
    text: 'BEST LEAD SO FAR — damnmodz (20 Nov 2026) suggests robbing the Payday Loans store in Little Cuba again, as Lucia and alone, after getting the Dye Pack Jammer in Chapter 3. Still unconfirmed — treat it as a lead, not a method.',
    cites: [11],
  },
};

export function renderDetailPanel(container, trophy, earnedIds, spoilerOn, onToggleEarned, counts = {}, onCountChange = () => {}) {
  const doc = container.ownerDocument;
  container.replaceChildren();
  if (!trophy) {
    const p = doc.createElement('p');
    p.className = 'detail-empty';
    p.textContent = 'Pick a trophy on the left to see its guide.';
    container.append(p);
    return;
  }
  const earned = earnedIds.has(trophy.id);
  const masked = isMasked(trophy, spoilerOn, earnedIds);
  const nums = sourceNumbersFor(trophy);

  const head = doc.createElement('div');
  head.className = 'detail-head';
  const title = doc.createElement('h2');
  title.textContent = displayName(trophy, spoilerOn, earnedIds);
  head.append(title);
  const earnButton = doc.createElement('button');
  earnButton.type = 'button';
  earnButton.className = 'detail-earn' + (earned ? ' earned' : '');
  earnButton.textContent = earned ? '✓ Earned — click to untick' : 'Mark as earned';
  earnButton.addEventListener('click', () => onToggleEarned(trophy.id));
  head.append(earnButton);
  container.append(head);

  const official = doc.createElement('p');
  official.className = 'detail-official';
  official.textContent = masked ? 'A hidden story trophy.' : `“${trophy.description}” — official description`;
  if (!masked) official.append(citeSpan(doc, [3]));
  container.append(official);

  const meta = doc.createElement('div');
  meta.className = 'detail-meta';
  const grade = doc.createElement('span');
  grade.className = `grade-chip grade-${trophy.grade}`;
  grade.textContent = gradeLabel(trophy.grade);
  meta.append(grade);
  if (trophy.missable) {
    const warn = doc.createElement('span');
    warn.className = 'tag tag-missable';
    warn.textContent = '⚠ Possibly missable';
    meta.append(warn);
  }
  if (trophy.hidden) {
    const hid = doc.createElement('span');
    hid.className = 'tag tag-hidden';
    hid.textContent = 'Hidden on PS5';
    meta.append(hid);
  }
  if (trophy.count) {
    const count = doc.createElement('span');
    count.className = 'tag tag-count';
    count.textContent = `Target: ${trophy.count.toLocaleString('en-US')}`;
    meta.append(count);
  }
  container.append(meta);

  if (masked) {
    const note = doc.createElement('p');
    note.className = 'detail-guide';
    note.textContent = 'Spoilers are hidden: this story trophy stays masked until you earn it. Turn “Hide spoilers” off above, or mark it earned with the button beside the title, to see its guide.';
    container.append(note);
    return;
  }

  // Sources as one compact paragraph (header + numbered links inline): the
  // old three-line list cost ~70px and pushed the guide past the fold.
  if (nums.length > 0) {
    const sources = doc.createElement('p');
    sources.className = 'detail-sources';
    const headText = doc.createElement('b');
    headText.textContent = 'Sources: ';
    sources.append(headText);
    nums.forEach((n, i) => {
      if (i > 0) sources.append(doc.createTextNode(' · '));
      sources.append(linkFor(doc, n));
    });
    container.append(sources);
  }
  if (trophy.missable) {
    const warnBox = doc.createElement('p');
    warnBox.className = 'detail-missable';
    warnBox.innerHTML = '<b>⚠ The one missable trophy.</b> Do the Chapter 1 meditation before Chapter 1 ends — every other trophy can wait until after the story.';
    container.append(warnBox);
  }

  // Update note for trophies whose guide text predates a published method
  // (ids 44 and 51): it frames the stale wording below instead of hiding it.
  if (GUIDE_UPDATES[trophy.id]) {
    const update = doc.createElement('p');
    update.className = 'detail-update';
    update.textContent = GUIDE_UPDATES[trophy.id];
    container.append(update);
  }

  // IN SHORT: the guide's first sentence, then the numbered steps — each
  // step citing the trophy's sources by number.
  const [short, rest] = splitFirstSentence(trophy.guide);
  if (short) {
    const p = doc.createElement('p');
    p.className = 'detail-short';
    const label = doc.createElement('b');
    label.textContent = 'IN SHORT — ';
    p.append(label, doc.createTextNode(short));
    p.append(citeSpan(doc, nums));
    container.append(p);
  }
  const extraSteps = EXTRA_STEPS[trophy.id] ?? [];
  if ((trophy.steps && trophy.steps.length > 0) || extraSteps.length > 0) {
    const steps = doc.createElement('ol');
    steps.className = 'detail-steps';
    for (const step of trophy.steps ?? []) {
      const li = doc.createElement('li');
      li.append(doc.createTextNode(step));
      li.append(citeSpan(doc, nums));
      steps.append(li);
    }
    // Added steps continue the numbering, each citing only the source(s)
    // that state it (see sources.js).
    for (const step of extraSteps) {
      const li = doc.createElement('li');
      li.append(doc.createTextNode(step.text));
      li.append(citeSpan(doc, step.cite));
      steps.append(li);
    }
    container.append(steps);
  }

  // Honesty boxes. All wording restates what the cited guides actually say
  // (see sources.js); nothing here invents a method or a disagreement.
  if (trophy.id === 28) {
    const countBox = doc.createElement('p');
    countBox.className = 'detail-disagree';
    countBox.append(doc.createTextNode('COUNT DIFFERS BY LIST — the trophy needs all 18 meditations; the 100% checklist needs only 15 of 18. eGamers lists both numbers without choosing. Do all 18 to be safe.'));
    countBox.append(citeSpan(doc, [1, 5, 8]));
    container.append(countBox);
    const pinned = doc.createElement('p');
    pinned.className = 'detail-pinned';
    pinned.append(doc.createTextNode('NOT PINNED DOWN YET — PowerPyx notes it is still unconfirmed whether the trophy needs the Chapter 1 balcony meditation; KeenGamer lists it as the one missable interaction. Do it anyway and keep a Chapter 1 save.'));
    pinned.append(citeSpan(doc, [1, 5]));
    container.append(pinned);
  } else if (DISAGREE_TEXT[trophy.id]) {
    const box = doc.createElement('p');
    box.className = 'detail-disagree';
    box.append(doc.createTextNode('SOURCES DISAGREE — ' + DISAGREE_TEXT[trophy.id].text));
    box.append(citeSpan(doc, DISAGREE_TEXT[trophy.id].cites));
    container.append(box);
  } else if (isUnconfirmed(trophy)) {
    const box = doc.createElement('p');
    box.className = 'detail-pinned';
    box.append(doc.createTextNode('NOT PINNED DOWN YET — No confirmed method yet. PowerPyx, KeenGamer, GTA-Zone, eGamers, OutputLag, GTABase and damnmodz all still list the trigger as unconfirmed (20 Nov 2026). This entry will be updated when a method is confirmed.'));
    box.append(citeSpan(doc, [1, 2, 5, 7, 8, 9, 11]));
    container.append(box);
    if (LEAD_TEXT[trophy.id]) {
      const lead = doc.createElement('p');
      lead.className = 'detail-lead';
      lead.append(doc.createTextNode(LEAD_TEXT[trophy.id].text));
      lead.append(citeSpan(doc, LEAD_TEXT[trophy.id].cites));
      container.append(lead);
    }
  }

  // The reader's own running count toward this trophy's target.
  if (trophy.count) {
    const cur = Math.max(0, Math.min(trophy.count, counts[trophy.id] ?? 0));
    const box = doc.createElement('div');
    box.className = 'count-box';
    const label = doc.createElement('span');
    label.className = 'count-label';
    label.textContent = 'Your count';
    box.append(label);
    const minus = doc.createElement('button');
    minus.type = 'button';
    minus.className = 'count-btn';
    minus.textContent = '−';
    minus.setAttribute('aria-label', 'one less');
    minus.addEventListener('click', () => onCountChange(trophy.id, cur - 1));
    box.append(minus);
    const value = doc.createElement('span');
    value.className = 'count-value';
    value.textContent = `${cur} / ${trophy.count.toLocaleString('en-US')}`;
    box.append(value);
    const plus = doc.createElement('button');
    plus.type = 'button';
    plus.className = 'count-btn';
    plus.textContent = '+';
    plus.setAttribute('aria-label', 'one more');
    plus.addEventListener('click', () => onCountChange(trophy.id, cur + 1));
    box.append(plus);
    const hint = doc.createElement('span');
    hint.className = 'count-hint';
    hint.textContent = 'Tap + each time you finish one — saved in this browser.';
    box.append(hint);
    container.append(box);
  }

  // The full guide prose, minus the first sentence already shown as IN SHORT.
  if (rest) {
    const guide = doc.createElement('p');
    guide.className = 'detail-guide';
    guide.textContent = rest;
    container.append(guide);
  }
}
