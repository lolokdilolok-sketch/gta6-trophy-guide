// Leonida Legend — bootstrap: load the 55 trophies, render the checklist,
// wire the filters, the spoiler setting, export/import and the hash router.
import {
  loadEarnedIds, saveEarnedIds, toggleEarnedId, loadSpoilerOn, saveSpoilerOn,
  exportProgressFile, parseImportedProgress, gradeCounts,
  loadCounts, setCount,
} from './tracker.js';
import {
  filterTrophies, displayName, displayDescription, isMasked, gradeLabel,
} from './filters.js';
import { renderDetailPanel } from './detail.js';
import { renderRoadmapStages, renderMissableList, ROADMAP_STAGES } from './roadmap.js';
import { renderSourcesView } from './sources-view.js';
import { auditNumbers, sourceNumbersFor } from './sources.js';

const listEl = document.getElementById('trophy-rows');
const detailEl = document.getElementById('detail');
const metaEl = document.getElementById('list-meta');
const searchEl = document.getElementById('search');
const gradeEl = document.getElementById('grade');
const earnedEl = document.getElementById('earned-filter');
const spoilerEl = document.getElementById('spoiler');
const chipsEl = document.getElementById('kind-chips');

let trophies = [];
let earnedIds = loadEarnedIds();
let spoilerOn = loadSpoilerOn();
let counts = loadCounts();
let kind = 'all';
let selectedId = 1;

async function loadTrophies() {
  const res = await fetch('data/trophies.json');
  const doc = await res.json();
  trophies = doc.trophies.slice().sort((a, b) => a.id - b.id);
}

function currentFilters() {
  return {
    kind,
    grade: gradeEl.value,
    query: searchEl.value,
    earned: earnedEl.value,
  };
}

function renderTrophyList() {
  const shown = filterTrophies(trophies, currentFilters(), earnedIds);
  listEl.replaceChildren();
  for (const t of shown) {
    const li = document.createElement('li');
    li.className = 'trophy-row' + (t.id === selectedId ? ' selected' : '') + (earnedIds.has(t.id) ? ' earned' : '');
    li.addEventListener('click', () => selectTrophy(t.id));

    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = earnedIds.has(t.id);
    box.setAttribute('aria-label', `Mark ${t.name} as earned`);
    box.addEventListener('click', (e) => e.stopPropagation());
    box.addEventListener('change', () => {
      earnedIds = toggleEarnedId(earnedIds, t.id);
      renderAll();
    });
    li.append(box);

    const grade = document.createElement('span');
    grade.className = `grade-chip grade-${t.grade}`;
    grade.textContent = gradeLabel(t.grade);
    li.append(grade);

    const mid = document.createElement('div');
    const name = document.createElement('div');
    name.className = 'trophy-name' + (isMasked(t, spoilerOn, earnedIds) ? ' masked' : '');
    name.textContent = displayName(t, spoilerOn, earnedIds);
    mid.append(name);
    const desc = document.createElement('div');
    desc.className = 'trophy-desc' + (isMasked(t, spoilerOn, earnedIds) ? ' masked' : '');
    desc.textContent = displayDescription(t, spoilerOn, earnedIds);
    mid.append(desc);
    const tags = document.createElement('div');
    tags.className = 'trophy-tags';
    if (t.missable) {
      const tag = document.createElement('span');
      tag.className = 'tag tag-missable';
      tag.textContent = '⚠ Missable';
      tags.append(tag);
    }
    if (t.hidden && !isMasked(t, spoilerOn, earnedIds)) {
      const tag = document.createElement('span');
      tag.className = 'tag tag-hidden';
      tag.textContent = 'Hidden';
      tags.append(tag);
    }
    if (t.count) {
      const tag = document.createElement('span');
      tag.className = 'tag tag-count';
      tag.textContent = `× ${t.count.toLocaleString('en-US')}`;
      tags.append(tag);
    }
    // Source numbers for this trophy's guide, like the top guides show.
    const cites = document.createElement('span');
    cites.className = 'row-cites';
    cites.textContent = sourceNumbersFor(t).map((n) => `[${n}]`).join(' ');
    tags.append(cites);
    mid.append(tags);
    li.append(mid);

    const kindEl = document.createElement('div');
    kindEl.className = 'row-kind';
    kindEl.textContent = t.kind === 'platinum' ? 'Platinum' : t.kind.charAt(0).toUpperCase() + t.kind.slice(1);
    li.append(kindEl);

    listEl.append(li);
  }
  metaEl.textContent = `Showing ${shown.length} of ${trophies.length} trophies`;
}

function updateProgress() {
  const earned = earnedIds.size;
  const pct = Math.round((earned / trophies.length) * 100);
  document.getElementById('earned-count').textContent = earned;
  document.getElementById('progress-pct').textContent = `${pct}%`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('progress-ring').style.setProperty('--pct', pct);
  const counts = gradeCounts(trophies, earnedIds);
  document.getElementById('progress-sub').textContent =
    `Platinum ${counts.platinum[0]}/${counts.platinum[1]} · Gold ${counts.gold[0]}/${counts.gold[1]} · Silver ${counts.silver[0]}/${counts.silver[1]} · Bronze ${counts.bronze[0]}/${counts.bronze[1]}`;
  const note = document.getElementById('progress-note');
  if (earned === 0) note.textContent = 'Finish the story first — 12 trophies pop on their own.';
  else if (earned < 13) note.textContent = 'Story in progress — remember the Chapter 1 meditation.';
  else if (earned < 54) note.textContent = `${54 - earned} to go — the 100% checklist is the long road.`;
  else if (earned === 54) note.textContent = 'One more trophy — the platinum is next.';
  else note.textContent = '🏆 Platinum earned — you are a Leonida Legend.';
}

function renderDetail() {
  const trophy = trophies.find((t) => t.id === selectedId) ?? null;
  renderDetailPanel(detailEl, trophy, earnedIds, spoilerOn, (id) => {
    earnedIds = toggleEarnedId(earnedIds, id);
    renderAll();
  }, counts, (id, value) => {
    const t = trophies.find((x) => x.id === id);
    const clamped = Math.max(0, Math.min(t?.count ?? 0, value));
    counts = setCount(counts, id, clamped);
    renderAll();
  });
}

function renderAuditStrip() {
  const a = auditNumbers(trophies);
  const el = document.getElementById('audit-strip');
  el.replaceChildren();
  const b = document.createElement('b');
  b.textContent = 'AUDIT';
  el.append(b, document.createTextNode(
    ` ${a.total} official · 1P 2G 6S 46B · ${a.hidden} hidden · ${a.guidesCited}/${a.total} guides cite a source · ${a.steps}/${a.steps} steps cited · ${a.sourcesRead} sources read 20 Nov 2026 · ${a.missable} possibly missable · ${a.unconfirmed} unconfirmed · ${a.disagree} disagree · ${a.singleSource} single-source`,
  ));
}

function renderMissableBanner() {
  const el = document.getElementById('missable-banner');
  el.replaceChildren();
  const missable = trophies.find((t) => t.missable);
  if (!missable) return;
  const warn = document.createElement('span');
  warn.innerHTML = `<b>⚠ 1 POSSIBLY MISSABLE — ${missable.name}:</b> do the Chapter 1 meditation before Chapter 1 ends.`;
  el.append(warn);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'banner-btn';
  btn.textContent = 'Show it';
  btn.addEventListener('click', () => selectTrophy(missable.id, true));
  el.append(btn);
}

function renderNextUp() {
  const el = document.getElementById('nextup-line');
  el.replaceChildren();
  const order = ROADMAP_STAGES.flatMap((s) => s.trophyIds);
  const nextId = order.find((id) => !earnedIds.has(id));
  const next = trophies.find((t) => t.id === nextId);
  if (!next) {
    el.textContent = 'NEXT UP — the platinum: every trophy earned.';
    return;
  }
  const b = document.createElement('b');
  b.textContent = 'NEXT UP — ';
  el.append(b);
  const name = document.createElement('a');
  name.href = `#/guide/${next.id}`;
  name.textContent = next.name;
  name.addEventListener('click', (e) => {
    e.preventDefault();
    selectTrophy(next.id, true);
  });
  el.append(name);
  el.append(document.createTextNode(next.missable
    ? ' — the one possibly missable trophy: do the Chapter 1 meditation first.'
    : ` — ${next.description}`));
}

function renderRoadmap() {
  renderRoadmapStages(
    document.getElementById('roadmap-stages'),
    trophies,
    earnedIds,
    (id) => selectTrophy(id, true),
    counts,
  );
  renderMissableList(
    document.getElementById('missable-list'),
    trophies,
    earnedIds,
    (id) => selectTrophy(id, true),
  );
  renderSourcesView(document.getElementById('sources-view'), trophies);
}

function renderAll() {
  renderTrophyList();
  renderDetail();
  updateProgress();
  renderRoadmap();
  renderAuditStrip();
  renderMissableBanner();
  renderNextUp();
}

function showView(view) {
  for (const section of document.querySelectorAll('.view')) {
    section.classList.toggle('active', section.id === `view-${view}`);
  }
  for (const tab of document.querySelectorAll('.view-tab')) {
    tab.classList.toggle('active', tab.dataset.view === view);
  }
}

function selectTrophy(id, goToChecklist = false) {
  selectedId = id;
  if (goToChecklist) location.hash = `#/guide/${id}`;
  showView('checklist');
  renderTrophyList();
  renderDetail();
}

function routeFromHash() {
  const hash = location.hash || '#/checklist';
  if (hash.startsWith('#/guide/')) {
    const id = Number(hash.slice('#/guide/'.length));
    if (trophies.some((t) => t.id === id)) selectedId = id;
    showView('checklist');
  } else if (hash === '#/roadmap') {
    showView('roadmap');
  } else if (hash === '#/sources') {
    showView('sources');
  } else if (hash === '#/missable') {
    showView('missable');
  } else {
    showView('checklist');
  }
  renderTrophyList();
  renderDetail();
}

function wireControls() {
  searchEl.addEventListener('input', renderTrophyList);
  gradeEl.addEventListener('change', renderTrophyList);
  earnedEl.addEventListener('change', renderTrophyList);
  spoilerEl.checked = spoilerOn;
  spoilerEl.addEventListener('change', () => {
    spoilerOn = spoilerEl.checked;
    saveSpoilerOn(spoilerOn);
    renderAll();
  });
  chipsEl.addEventListener('click', (e) => {
    const button = e.target.closest('[data-kind]');
    if (!button) return;
    kind = button.dataset.kind;
    for (const chip of chipsEl.querySelectorAll('.chip')) {
      chip.classList.toggle('active', chip === button);
    }
    renderTrophyList();
  });
  for (const tab of document.querySelectorAll('.view-tab')) {
    tab.addEventListener('click', () => {
      location.hash = `#/${tab.dataset.view}`;
    });
  }
  document.getElementById('export').addEventListener('click', () => {
    exportProgressFile(earnedIds);
  });
  document.getElementById('import').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      earnedIds = parseImportedProgress(await file.text(), trophies.map((t) => t.id));
      saveEarnedIds(earnedIds);
      renderAll();
    } catch {
      alert('That file is not a Leonida Legend progress export.');
    }
    e.target.value = '';
  });
  document.getElementById('reset').addEventListener('click', () => {
    if (confirm('Clear all earned trophies?')) {
      earnedIds = new Set();
      saveEarnedIds(earnedIds);
      renderAll();
    }
  });
  window.addEventListener('hashchange', routeFromHash);
}

await loadTrophies();
wireControls();
routeFromHash();
renderAll();
