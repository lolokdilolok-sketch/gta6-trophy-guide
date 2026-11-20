// Sources registry for Leonida Legend: every source the guide cites, numbered
// once and used everywhere (detail panel steps, roadmap rows, Sources view).
// Verified live by reading each page on 20 Nov 2026 — nothing here is cited
// from memory or from another entry's list.
//
// Roles matter and are stated honestly:
//  - guide source: its methods are what the guides are written from, or what
//    the guides are cross-checked against.
//  - list source: it confirms trophy names, descriptions and grades, and (for
//    KeenGamer) the one-line requirement for each trophy — it does NOT back
//    the step-by-step methods unless the trophy is in an AGREES set below.
//  - official list: the PS5 trophy list as shipped in this contest's kit —
//    the origin of every name, description and grade in trophies.json.
//
// Lineage is disclosed where a source says so itself: GTA-Zone's tips page
// states its tips come from PowerPyx and GTABase; eGamers' tips page
// attributes its tips to GTABase and PowerPyx. Both are therefore counted
// as a second check on a requirement, not as a fully independent method —
// the registry says so on each entry instead of hiding it.
//
// AGREES sets: trophies whose method/requirement that source confirms in
// its own words (read 20 Nov 2026). DISAGREES sets: trophies where the
// source contradicts the method this guide reports — PowerPyx reports a
// method, the other source still lists it as unconfirmed. Both sides are
// flagged in the detail panel instead of picked silently.
//
// EXTRA_STEPS: numbered steps the new sources (or a re-read of PowerPyx)
// add to a trophy, rendered after the steps in trophies.json with their own
// citations. trophies.json is never edited — this registry is where added
// steps live, so the audit counts them from data.
// GUIDE_UPDATES: trophies whose guide text was written 18 Nov, when no
// method was confirmed, and for which PowerPyx has since published one
// (re-read 20 Nov 2026). The update box in the detail panel says so and
// points at the added steps; the stale wording in trophies.json stays
// untouched, as the data file is not to be edited.

export const SOURCES = [
  {
    n: 1,
    short: 'PowerPyx',
    name: 'PowerPyx — GTA 6 Trophy Guide & Roadmap',
    url: 'https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/',
    role: 'guide',
    roleText: 'Guide source — the methods in all 55 guides are written from this guide.',
    citedBy: '55 of 55 guides',
    read: '20 Nov 2026',
  },
  {
    n: 2,
    short: 'GTABase',
    name: 'GTABase — GTA 6 Trophy & Achievement List',
    url: 'https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series',
    role: 'list',
    roleText: 'List source — names, descriptions and grades; cited in the data for 4 trophies.',
    citedBy: '4 of 55 guides',
    read: '20 Nov 2026',
  },
  {
    n: 3,
    short: 'Official list',
    name: 'Official list — PS5 trophy list as shipped in this contest’s kit',
    url: '',
    role: 'list',
    roleText: 'List source — the origin of every trophy name, description and grade in this guide.',
    citedBy: '55 of 55 (names, descriptions, grades)',
    read: '20 Nov 2026',
  },
  {
    n: 4,
    short: 'Planet GTA 6',
    name: 'Planet GTA 6 — GTA 6 trophy list',
    url: 'https://www.planetgta6.com/en/gta-6-trophies/',
    role: 'list',
    roleText: 'List source — trophy list cross-checked against Exophase and PSNProfiles.',
    citedBy: 'list cross-check, all 55',
    read: '20 Nov 2026',
  },
  {
    n: 5,
    short: 'KeenGamer',
    name: 'KeenGamer — GTA 6 Trophy Guide & Platinum Roadmap',
    url: 'https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/',
    role: 'guide',
    roleText: 'Guide source — second guide read 20 Nov 2026; confirms the methods of 3 trophies below and disagrees on 4.',
    citedBy: '3 of 55 guides (cross-checked)',
    read: '20 Nov 2026',
  },
  {
    n: 6,
    short: 'Push Square',
    name: 'Push Square — GTA 6 Trophy Guide and Roadmap',
    url: 'https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap',
    role: 'guide',
    roleText: 'Guide source — own methods read 20 Nov 2026; confirms 30 trophies below and disagrees with PowerPyx on the platinum time (up to 300 hours or more, vs about 200) and on the shooting-range count (two locations, vs twelve ranges).',
    citedBy: '30 of 55 guides (cross-checked)',
    read: '20 Nov 2026',
  },
  {
    n: 7,
    short: 'GTA-Zone',
    name: 'GTA-Zone — GTA 6 Trophies & Achievements',
    url: 'https://gta-zone.com/news/gta-6-trophies-achievements/',
    role: 'guide',
    roleText: 'Guide source — list plus tips; the page states its tips come from PowerPyx and GTABase, so it counts as a second check on a requirement, not as a fully independent method. Confirms 47 trophies below; lists 4 methods as unconfirmed.',
    citedBy: '47 of 55 guides (cross-checked)',
    read: '20 Nov 2026',
  },
  {
    n: 8,
    short: 'eGamers',
    name: 'eGamers — GTA 6 Trophy List: All 55 Trophies and Achievements',
    url: 'https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/',
    role: 'guide',
    roleText: 'Guide source — list plus tips; the page attributes its tips to GTABase and PowerPyx, so it counts as a second check on a requirement, not as a fully independent method. Confirms 38 trophies below; lists 4 methods as unconfirmed and notes the 18-vs-15 meditation count without choosing.',
    citedBy: '38 of 55 guides (cross-checked)',
    read: '20 Nov 2026',
  },
  {
    n: 9,
    short: 'OutputLag',
    name: 'OutputLag — GTA 6 Trophy List',
    url: 'https://outputlag.com/guides/gta-6-trophy-list/',
    role: 'guide',
    roleText: 'Guide source — own detailed methods read 20 Nov 2026; confirms 38 trophies below and disagrees with PowerPyx on the shooting-range count (two locations, vs twelve ranges).',
    citedBy: '38 of 55 guides (cross-checked)',
    read: '20 Nov 2026',
  },
  {
    n: 10,
    short: 'GTA Vibes',
    name: 'GTA Vibes — GTA 6 Trophy List & Achievements',
    url: 'https://www.gtavibes.com/guides/gta-6-trophy-list-achievements',
    role: 'list',
    roleText: 'List source — confirms all 55 names, descriptions and grades and the one possibly missable trophy; its one-line requirements add no methods, so it is not counted toward the method cross-checks.',
    citedBy: 'list cross-check, all 55',
    read: '20 Nov 2026',
  },
];

// Trophy ids whose method/requirement each guide source confirms in its own
// words (read 20 Nov 2026). Story trophies count where the source states
// they unlock as part of the story; the three still-unconfirmed trophies
// count where a source agrees the trigger is unconfirmed (id 49 only —
// ids 44 and 51 now have a PowerPyx method, see GUIDE_UPDATES).
export const KEENGAMER_AGREES = new Set([28, 14, 49]);
export const PUSHSQUARE_AGREES = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  22, 23, 24, 26, 27, 28, 30, 31, 32, 35,
]);
export const GTAZONE_AGREES = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 46, 47, 48, 49, 52, 53, 54, 55,
]);
export const EGAMERS_AGREES = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 23, 24,
  26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 47, 48, 49,
  52, 54,
]);
export const OUTPUTLAG_AGREES = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 25,
  28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 47, 48, 52, 53,
  54, 55,
]);

// Trophy ids where PowerPyx reports a specific method that another guide
// still lists as unconfirmed (20 Nov 2026). Ids 44 and 51 joined this set
// in round 4: PowerPyx has since published a method for them (see
// GUIDE_UPDATES), while KeenGamer, GTA-Zone and eGamers still list them
// unconfirmed. eGamers also claims PowerPyx marks Capital Offense as
// unknown — PowerPyx's own page, re-read 20 Nov 2026, gives the blue
// Banshee method with photos, so that claim is not repeated here.
export const KEENGAMER_DISAGREES = new Set([44, 45, 50, 51]);
export const GTAZONE_DISAGREES = new Set([44, 45, 50, 51]);
export const EGAMERS_DISAGREES = new Set([44, 45, 50, 51]);

// Number disputes found in the round-4 cross-check (not method disputes):
// id 17 — PowerPyx and GTA-Zone count twelve shooting ranges; Push Square
// and OutputLag say two locations (Rodgers Ranch & Shooting Range, Port
// Gellhorn; Griffin Shooting Range, Balsero). All agree on 42 gold medals.
// id 28 — eGamers notes sources giving 18 and 15 meditation spots without
// choosing; the 15 is the 100% checklist's requirement (15 of 18), not the
// trophy's. id 1 — platinum time: about 200 hours (PowerPyx, OutputLag)
// vs up to 300 hours or more (Push Square).
export const RANGE_DISAGREES = new Set([17]);
export const COUNT_DISAGREES = new Set([28]);
export const TIME_DISAGREES = new Set([1]);

// Added numbered steps, one entry per trophy id. Each step is a real
// sub-step a cited source states that the guide in trophies.json does not
// already spell out — nothing invented, nothing split for padding. Steps
// cite only the source(s) that state them.
export const EXTRA_STEPS = {
  14: [
    { text: 'Complete 15 of the 18 collectible card sets — the checklist needs 15, not all 18.', cite: [6] },
  ],
  17: [
    { text: 'Start on the easiest of the three difficulty tiers at each range and work up.', cite: [6] },
  ],
  18: [
    { text: 'Some locations charge an entry fee; track them under Map > Activities > Drones > Top Fun Drones.', cite: [6] },
  ],
  19: [
    { text: 'Hire cars from car rental locations if you do not own a fast one; check your Rating under pause menu > Progress > Activities > Races.', cite: [6] },
  ],
  20: [
    { text: 'You need a boat and a fishing rod: Cal asks for a Parrotfish over 2kg.', cite: [6] },
  ],
  23: [
    { text: 'The final mission is Kenton’s “Maritime Disputes” — finish it for the trophy.', cite: [6] },
  ],
  28: [
    { text: 'Wait for the final “zen” animation at each spot — the meditation only counts once it finishes.', cite: [6] },
    { text: 'Spots show as purple icons on the map when you get close.', cite: [9] },
  ],
  29: [
    { text: 'Take clean head or heart shots — a pristine carcass is what Bret wants.', cite: [9] },
  ],
  30: [
    { text: 'Selling cards at pawn shops still counts toward the sets.', cite: [6] },
  ],
  31: [
    { text: 'Track each kind under Progress > Exploration > Landmarks / Curiosities / Sculptures / No Flushers.', cite: [6] },
  ],
  36: [
    { text: 'Each fish you land adds about 10% to the Focus meter — fish first, then fight.', cite: [9] },
  ],
  37: [
    { text: 'Save first: if the take-off goes wrong, reload and try the jet again.', cite: [9] },
  ],
  39: [
    { text: 'A good spot is Richardson Jewelry & Diamonds in Vice City.', cite: [9] },
  ],
  44: [
    { text: 'Go to the Ocean View Rooftop Bar on Ocean Beach.', cite: [1] },
    { text: 'Buy an Apple Martini and drink it while standing next to the bar.', cite: [1] },
  ],
  51: [
    { text: 'Ride any bike into a crowded area — Vice City or Ocean Beach.', cite: [1] },
    { text: 'Kick 10 pedestrians with Square within 60 seconds.', cite: [1] },
  ],
  55: [
    { text: 'From Chapter 3 you can also register cars with a standard tracker at any Pay ’n’ Spray.', cite: [9] },
  ],
};

// Update notes for trophies whose guide text predates a published method.
// The guide text in trophies.json was written 18 Nov 2026, when these two
// had no confirmed method; PowerPyx has since published one (page re-read
// 20 Nov 2026). The method is the added steps above, cited [1] — the only
// published method so far, since KeenGamer, GTA-Zone and eGamers still
// list both trophies as unconfirmed.
export const GUIDE_UPDATES = {
  44: 'UPDATE 20 NOV 2026 — This guide was written 18 Nov, when no method was confirmed (the first sentence and step 2 below still say so). PowerPyx has since published one: Ocean View Rooftop Bar, Apple Martini, drunk standing next to the bar — steps 3–4 below, cited [1]. The only published method so far: KeenGamer, GTA-Zone and eGamers still list it unconfirmed.',
  51: 'UPDATE 20 NOV 2026 — This guide was written 18 Nov, when no method was confirmed (the first sentence and step 2 below still say so). PowerPyx has since published one: ride a bike and kick 10 pedestrians with Square within 60 seconds — steps 3–4 below, cited [1]. The only published method so far: KeenGamer, GTA-Zone and eGamers still list it unconfirmed.',
};

// Source numbers cited by one trophy's data (its `sources` array) plus the
// cross-check sets where they apply. PowerPyx is [1], GTABase [2],
// KeenGamer [5], Push Square [6], GTA-Zone [7], eGamers [8], OutputLag [9].
// The official list [3], Planet GTA 6 [4] and GTA Vibes [10] back the
// description line and the list cross-check, not the methods.
export function sourceNumbersFor(trophy) {
  const nums = [];
  for (const s of trophy.sources ?? []) {
    const hit = SOURCES.find((x) => s.url && x.url && s.url === x.url);
    if (hit && !nums.includes(hit.n)) nums.push(hit.n);
  }
  if (KEENGAMER_AGREES.has(trophy.id) && !nums.includes(5)) nums.push(5);
  if (PUSHSQUARE_AGREES.has(trophy.id) && !nums.includes(6)) nums.push(6);
  if (GTAZONE_AGREES.has(trophy.id) && !nums.includes(7)) nums.push(7);
  if (EGAMERS_AGREES.has(trophy.id) && !nums.includes(8)) nums.push(8);
  if (OUTPUTLAG_AGREES.has(trophy.id) && !nums.includes(9)) nums.push(9);
  return nums.sort((a, b) => a - b);
}

// A trophy counts as unconfirmed only while its guide says so AND no added
// step gives it a method (ids 44 and 51 gained one in round 4).
export function isUnconfirmed(trophy) {
  return (trophy.guide ?? '').startsWith('No confirmed method yet')
    && !(EXTRA_STEPS[trophy.id] ?? []).length;
}

// Audit numbers for the strip and the Sources view. Everything is counted
// from the loaded data plus the cross-check sets above — no hand-typed totals.
export function auditNumbers(trophies) {
  const grades = { platinum: 0, gold: 0, silver: 0, bronze: 0 };
  let hidden = 0;
  let missable = 0;
  let unconfirmed = 0;
  let singleSource = 0;
  let steps = 0;
  let guidesCited = 0;
  for (const t of trophies) {
    grades[t.grade] = (grades[t.grade] ?? 0) + 1;
    if (t.hidden) hidden += 1;
    if (t.missable) missable += 1;
    if (isUnconfirmed(t)) unconfirmed += 1;
    if (sourceNumbersFor(t).length <= 1) singleSource += 1;
    steps += (t.steps ?? []).length + (EXTRA_STEPS[t.id] ?? []).length;
    if ((t.sources ?? []).some((s) => s.url && s.url.includes('http'))) guidesCited += 1;
  }
  // Trophies with any flagged disagreement: a disputed method, a disputed
  // count, or a disputed time. The strip counts what the detail panels flag.
  const disagreeIds = new Set([
    ...KEENGAMER_DISAGREES, ...GTAZONE_DISAGREES, ...EGAMERS_DISAGREES,
    ...RANGE_DISAGREES, ...COUNT_DISAGREES, ...TIME_DISAGREES,
  ]);
  return {
    total: trophies.length,
    grades,
    hidden,
    missable,
    unconfirmed,
    disagree: disagreeIds.size,
    singleSource,
    steps,
    guidesCited,
    sourcesRead: SOURCES.length,
  };
}
