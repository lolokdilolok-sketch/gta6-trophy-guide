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
  {
    n: 11,
    short: 'damnmodz',
    name: 'damnmodz — GTA 6 Trophies wiki',
    url: 'https://damnmodz.com/wiki/playstation-trophies/gta-6/',
    role: 'guide',
    roleText: 'Guide source — independent wiki guide read 20 Nov 2026. It labels each tip Confirmed (backed by two or more independent guides), Reported (one source so far) or Unknown, so its Confirmed tips count as an independent second confirmation while its Reported tips do not. Confirms 47 trophies below; reports 7 more from one source; lists Bad Luck as Unknown.',
    citedBy: '47 of 55 guides (cross-checked)',
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
// damnmodz labels each tip Confirmed (backed by two or more independent
// guides), Reported (one source so far) or Unknown. Only its Confirmed tips
// count as an independent second confirmation. The eight ids NOT in this
// set are the Reported ones (25, 28, 29, 36, 41, 45, 51) plus Bad Luck
// (49, Unknown).
export const DAMNMODZ_AGREES = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 42, 43,
  44, 46, 47, 48, 50, 52, 53, 54, 55,
]);
// damnmodz states a method for these four but labels it Reported — one
// source so far, not an independent confirmation. They gain [11] as a
// source for the specific detail damnmodz states (see EXTRA_STEPS), but
// [11] does not count as a second confirming source for their method —
// see auditNumbers' singleSource, which keeps Ten Pin single-source.
export const DAMNMODZ_REPORTS = new Set([25, 29, 41, 51]);
// OutputLag lists the exact method as unconfirmed for these four (it gives
// two alternative leads for id 50 instead of a method). No new disagree
// ids — all four are already flagged — but OutputLag joins the disagreeing
// side, so the detail boxes cite it.
export const OUTPUTLAG_DISAGREES = new Set([44, 45, 50, 51]);
// Trophies the player must watch: a timed element (id 25, Race Against
// Yago can expire), a method resting on one guide source (ids 45, 51), or
// no confirmed method yet (id 49). The missable trophy (id 28) already has
// its own chip; ids 44 and 50 are no longer watch — their methods are now
// confirmed by two guides.
export const WATCH_IDS = new Set([25, 45, 49, 51]);

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
  1: [
    { text: 'Do not use cheats on the trophy save — they switch off trophies and saving while active.', cite: [9] },
  ],
  7: [
    { text: 'There is no mission replay and no New Game+, so keep an untouched manual save from just before the final mission.', cite: [9] },
    { text: 'The final mission is called The End of the Road — finish it and watch through the credits.', cite: [11] },
  ],
  14: [
    { text: 'Complete 15 of the 18 collectible card sets — the checklist needs 15, not all 18.', cite: [6] },
    { text: 'Moses and Randy’s vehicle deliveries count toward the 100 optional missions — do their delivery jobs while you work through the checklist.', cite: [1] },
    { text: 'The checklist also needs both unique playlists (2 of 2) — they count toward 100%.', cite: [11] },
  ],
  15: [
    { text: 'The extra challenges on Stunt Jumps are not required — only the stunts themselves count.', cite: [6] },
  ],
  16: [
    { text: 'On the map, filter for Activities (blue dumbbell icon) to find the activity spots.', cite: [1] },
  ],
  17: [
    { text: 'Start on the easiest of the three difficulty tiers at each range and work up.', cite: [6] },
    { text: 'Some challenges are locked until you fulfil other conditions — if a challenge is greyed out, finish the requirement first.', cite: [6] },
    { text: 'The two locations split the 42 golds: Rodgers Ranch & Shooting Range, Port Gellhorn (24 golds over 6 courses) and Griffin Shooting Range, Balsero (18 golds over 6 courses).', cite: [11] },
  ],
  18: [
    { text: 'Some locations charge an entry fee; track them under Map > Activities > Drones > Top Fun Drones.', cite: [6] },
  ],
  19: [
    { text: 'Hire cars from car rental locations if you do not own a fast one; check your Rating under pause menu > Progress > Activities > Races.', cite: [6] },
    { text: 'Track race progress under Activities > Racing.', cite: [6] },
  ],
  20: [
    { text: 'You need a boat and a fishing rod: Cal asks for a Parrotfish over 2kg.', cite: [6] },
  ],
  21: [
    { text: 'If the TV is temporarily unavailable during a story section, try again after the story.', cite: [1] },
  ],
  23: [
    { text: 'The final mission is Kenton’s “Maritime Disputes” — finish it for the trophy.', cite: [6] },
  ],
  25: [
    { text: 'Race Against Yago is timed and can expire — do it the moment it appears, and save first.', cite: [9] },
    { text: 'Only four of the eight counting strands have been identified so far (Kirk, Kyle, Yago, Pilot Pete) — the other four are not known yet.', cite: [11] },
  ],
  26: [
    { text: 'The 16 cars: Zorrusso, Vitello, Infernus, Windsor Drop, Toros, Tempesta, Paragon, Jagular, Jubilee, Itali RSX, Growler, Gauntlet Hellfire, Furia, Dubsta, Banshee, Baller ST-D.', cite: [1] },
  ],
  28: [
    { text: 'Wait for the final “zen” animation at each spot — the meditation only counts once it finishes.', cite: [6] },
    { text: 'Spots show as purple icons on the map when you get close.', cite: [9] },
    { text: 'Meditations are marked on the map under Exploration > Meditate Around Leonida.', cite: [6] },
  ],
  29: [
    { text: 'Take clean head or heart shots — a pristine carcass is what Bret wants.', cite: [9] },
    { text: 'The animal Bret wants for this one is the Snapmatic Buck — hunt it at night north-east of Grayson, between the freeway and the ocean, then have Bret collect it.', cite: [11] },
  ],
  30: [
    { text: 'Selling cards at pawn shops still counts toward the sets.', cite: [6] },
    { text: 'Track card sets under Progress > Collections > Collectible Cards.', cite: [6] },
  ],
  31: [
    { text: 'Track each kind under Progress > Exploration > Landmarks / Curiosities / Sculptures / No Flushers.', cite: [6] },
    { text: 'Check WAiNK progress under Progress > Collections > WAiNK Locations.', cite: [6] },
  ],
  35: [
    { text: 'Getting inside a vehicle also discovers it — scanning is not the only way.', cite: [6, 11] },
  ],
  36: [
    { text: 'Each fish you land adds about 10% to the Focus meter — fish first, then fight.', cite: [9] },
  ],
  37: [
    { text: 'Save first: if the take-off goes wrong, reload and try the jet again.', cite: [9] },
    { text: 'The jet is a Bottcher 020 double-decker — look for the big double-decker at the boarding bridge.', cite: [11] },
  ],
  39: [
    { text: 'A good spot is Richardson Jewelry & Diamonds in Vice City.', cite: [9] },
    { text: 'If you are spotted, reload and try again.', cite: [9] },
    { text: 'Stay out of camera view — cameras can spot you.', cite: [11] },
    { text: 'Destroy the security footage and disable the alarm in the backroom.', cite: [1] },
  ],
  41: [
    { text: 'Direct truck robberies can fail to pop the trophy — the vault-mission route is the surest way.', cite: [11] },
  ],
  44: [
    { text: 'Go to the Ocean View Rooftop Bar on Ocean Beach.', cite: [1] },
    { text: 'Buy an Apple Martini and drink it while standing next to the bar.', cite: [1] },
    { text: 'The bar is in the Oceanview Hotel on Ocean Beach — go past the pool to the rooftop access door and take the elevator up. The Apple Martini costs $10.', cite: [11] },
  ],
  51: [
    { text: 'Ride any bike into a crowded area — Vice City or Ocean Beach.', cite: [1] },
    { text: 'Kick 10 pedestrians with Square within 60 seconds.', cite: [1] },
    { text: 'A bicycle works too — kick with Square.', cite: [11] },
  ],
  53: [
    { text: 'Find shops on the map under Touchpad > Style.', cite: [6] },
  ],
  54: [
    { text: 'The 8 garages: Mitchel Auto Center $4,000; 7th Avenue $12,000; Vela Rota $24,000; Persistence Road $7,600; Wyatt Motors $21,600; Bonita Court $34,000; Atlantic Court $40,000; Store n’ Bolt $16,800.', cite: [6] },
    { text: 'BuckMe’s 20% discount brings the total to $160,000 — $200,000 without it.', cite: [11] },
  ],
  55: [
    { text: 'From Chapter 3 you can also register cars with a standard tracker at any Pay ’n’ Spray.', cite: [9] },
    { text: 'You can register a car at a Mod Shop too — the fee varies by the car’s value.', cite: [6] },
    { text: 'Sell a registered car to free a parking spot.', cite: [11] },
  ],
};

// Update notes for trophies whose guide text predates a published method.
// The guide text in trophies.json was written 18 Nov 2026, when these two
// had no confirmed method; PowerPyx has since published one (page re-read
// 20 Nov 2026), and damnmodz has since confirmed one of them (id 44) and
// repeated the other (id 51, one underlying source). The method is the
// added steps above, cited [1] and [11]; KeenGamer, GTA-Zone, eGamers and
// OutputLag still list both trophies as unconfirmed.
export const GUIDE_UPDATES = {
  44: 'UPDATE 20 NOV 2026 — This guide was written 18 Nov, when no method was confirmed (the first sentence and step 2 below still say so). PowerPyx has since published one: Ocean View Rooftop Bar, Apple Martini, drunk standing next to the bar — steps 3–5 below, cited [1] and [11]. A second guide, damnmodz, independently confirms it (Oceanview Hotel, past the pool, rooftop access door, elevator up). KeenGamer, GTA-Zone, eGamers and OutputLag still list it as unconfirmed.',
  51: 'UPDATE 20 NOV 2026 — This guide was written 18 Nov, when no method was confirmed (the first sentence and step 2 below still say so). PowerPyx has since published one: ride a bike and kick 10 pedestrians with Square within 60 seconds — steps 3–5 below, cited [1] and [11]. damnmodz repeats the same method (one underlying source) and adds that a bicycle works too. KeenGamer, GTA-Zone, eGamers and OutputLag still list it as unconfirmed.',
};

// Source numbers cited by one trophy's data (its `sources` array) plus the
// cross-check sets where they apply. PowerPyx is [1], GTABase [2],
// KeenGamer [5], Push Square [6], GTA-Zone [7], eGamers [8], OutputLag [9],
// damnmodz [11].
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
  if ((DAMNMODZ_AGREES.has(trophy.id) || DAMNMODZ_REPORTS.has(trophy.id)) && !nums.includes(11)) nums.push(11);
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
  let multiSource = 0;
  let steps = 0;
  let guidesCited = 0;
  for (const t of trophies) {
    grades[t.grade] = (grades[t.grade] ?? 0) + 1;
    if (t.hidden) hidden += 1;
    if (t.missable) missable += 1;
    if (isUnconfirmed(t)) unconfirmed += 1;
    // Single-source means the METHOD rests on one guide source. damnmodz's
    // Reported tips (DAMNMODZ_REPORTS) repeat one source, so [11] does not
    // count as a second confirming source for those four — Ten Pin stays
    // single-source even though damnmodz adds the bicycle detail.
    const nums = sourceNumbersFor(t);
    const confirming = DAMNMODZ_REPORTS.has(t.id) ? nums.filter((n) => n !== 11) : nums;
    if (confirming.length <= 1) singleSource += 1;
    if (confirming.length >= 2) multiSource += 1;
    steps += (t.steps ?? []).length + (EXTRA_STEPS[t.id] ?? []).length;
    if ((t.sources ?? []).some((s) => s.url && s.url.includes('http'))) guidesCited += 1;
  }
  // Trophies with any flagged disagreement: a disputed method, a disputed
  // count, or a disputed time. The strip counts what the detail panels flag.
  const disagreeIds = new Set([
    ...KEENGAMER_DISAGREES, ...GTAZONE_DISAGREES, ...EGAMERS_DISAGREES,
    ...OUTPUTLAG_DISAGREES, ...RANGE_DISAGREES, ...COUNT_DISAGREES, ...TIME_DISAGREES,
  ]);
  return {
    total: trophies.length,
    grades,
    hidden,
    missable,
    unconfirmed,
    disagree: disagreeIds.size,
    singleSource,
    multiSource,
    watch: WATCH_IDS.size,
    steps,
    guidesCited,
    sourcesRead: SOURCES.length,
  };
}
