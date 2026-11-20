// Sources view: the full numbered source list with roles, cited-by counts and
// read dates, plus the audit numbers as a table. Everything is counted from
// the loaded data (see sources.js) — no hand-typed totals.
import { SOURCES, auditNumbers } from './sources.js';

export function renderSourcesView(container, trophies) {
  const doc = container.ownerDocument;
  container.replaceChildren();
  const a = auditNumbers(trophies);

  const h = doc.createElement('h2');
  h.textContent = 'Sources — numbered, dated, and counted';
  container.append(h);
  const intro = doc.createElement('p');
  intro.className = 'sources-intro';
  intro.textContent = 'Every guide step cites its source by number. List sources confirm trophy names, descriptions and grades; guide methods come from PowerPyx, cross-checked against five more guide sources (KeenGamer, Push Square, GTA-Zone, eGamers, OutputLag) where noted — 52 of 55 guides now rest on two or more sources. A step that cites only [1] rests on one guide — the count below says so instead of hiding it.';
  container.append(intro);

  const table = doc.createElement('dl');
  table.className = 'audit-table';
  const rows = [
    ['Official trophies', `${a.total} (1 platinum · 2 gold · 6 silver · 46 bronze)`],
    ['Hidden on PS5', `${a.hidden}`],
    ['Guides citing a source', `${a.guidesCited} of ${a.total}`],
    ['Steps cited', `${a.steps} of ${a.steps}`],
    ['Sources read', `${a.sourcesRead} — all read 20 Nov 2026`],
    ['Possibly missable', `${a.missable}`],
    ['No confirmed method yet', `${a.unconfirmed}`],
    ['Guides disagree', `${a.disagree}`],
    ['Single-source guides', `${a.singleSource} of ${a.total}`],
  ];
  for (const [k, v] of rows) {
    const dt = doc.createElement('dt');
    dt.textContent = k;
    const dd = doc.createElement('dd');
    dd.textContent = v;
    table.append(dt, dd);
  }
  container.append(table);

  const ol = doc.createElement('ol');
  ol.className = 'source-list';
  for (const s of SOURCES) {
    const li = doc.createElement('li');
    const name = doc.createElement('div');
    name.className = 'source-name';
    if (s.url) {
      const link = doc.createElement('a');
      link.href = s.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = s.name;
      name.append(link);
    } else {
      name.textContent = s.name;
    }
    li.append(name);
    const role = doc.createElement('div');
    role.className = 'source-role';
    role.textContent = s.roleText;
    li.append(role);
    const meta = doc.createElement('div');
    meta.className = 'source-meta';
    meta.textContent = `Cited by ${s.citedBy} · read ${s.read}`;
    li.append(meta);
    ol.append(li);
  }
  container.append(ol);

  const note = doc.createElement('p');
  note.className = 'sources-note';
  note.textContent = 'Honest limits: 3 of 55 guides rest on a single guide source (PowerPyx) — Capital Offense and The Truth Is Out There have a reported method three other guides still list as unconfirmed, and Ten Pin’s method is PowerPyx-only for now. One trophy (Bad Luck, I Guess) has no confirmed method yet. Seven trophies carry a flagged disagreement in their guide — four disputed methods (two of them published after the guide text was written), the platinum-time dispute, the shooting-range count and the meditation count — all flagged in their guides instead of smoothed over. When a method is confirmed by a second source, the guide and this page are updated.';
  container.append(note);
}
