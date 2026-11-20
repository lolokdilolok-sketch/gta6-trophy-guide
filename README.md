# Leonida Legend — GTA VI Trophy Guide & Tracker

[![GTA 6 Trophy Guide](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![Rank](https://make.fun/badge/gta6-trophy-guide-01/lolokdilolok-sketch/gta6-trophy-guide/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![Reward](https://make.fun/badge/gta6-trophy-guide-01/lolokdilolok-sketch/gta6-trophy-guide/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

An offline web app that is the best guide and tracker for the 55 PlayStation 5 trophies of Grand Theft Auto VI — built for the [GTA 6 trophy guide bounty](https://make.fun/bounty/gta6-trophy-guide-01).

## What it does

- **Every trophy, official and complete** — all 55 names, descriptions and grades as PlayStation publishes them (1 platinum, 2 gold, 6 silver, 46 bronze; 28 hidden).
- **A guide for each trophy, in our own words, with cited sources** — what to do, where and how, and when it can be missed. Every guide opens with a one-line answer, then numbered steps, and every step cites its source by number (168/168 steps cited). The audit strip at the top of the page counts it all: 55/55 guides cite a source, 11 sources read 20 Nov 2026, 1 possibly missable, 1 unconfirmed, 7 guides disagree, 2 single-source. Nothing is copied from another guide.
- **Tracker** — a checklist saved in the browser (localStorage), grouped by roadmap stage with a GOAL bar toward the platinum, export to a file and import back, filters by kind (story, missable, watch, unconfirmed, collectibles, activities) and grade, search, a spoiler setting that hides story trophies until they are earned, and a running counter for the 20 count trophies (meditations, stunts, …).
- **Roadmap to the platinum** — three stages in order (story 60–80 h, 100% checklist ~100 h, strangers & clean-up ~10 h), built from the official descriptions, with per-stage earned counts and per-trophy source refs.
- **Missable flags** — only one trophy may be missable (Positive Mental Attitude, Chapter 1 meditation); the guide says exactly how to protect it and what is not missable.
- **Sources view** — the full numbered source list with roles, cited-by counts and read dates, plus the audit table. Where guides disagree (7 trophies) or no method is confirmed yet (1 trophy), the guide says so in its own box instead of hiding it.

## Run it

Static files under `app/` — no build step, no network at run time:

```sh
node serve.ts        # serves app/ at http://localhost:8080
```

Or open `app/index.html` from any static server. `main.ts` (Node 22) hands the entry in: it copies `app/` and `screenshots/` to `/output` and writes `/output/dossier.json`.

## Sources

- PowerPyx — GTA 6 Trophy Guide & Roadmap: https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/
- GTABase — GTA 6 Trophy & Achievement List: https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series
- KeenGamer — GTA 6 Trophy Guide & Platinum Roadmap: https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/
- Push Square — GTA 6 Trophy Guide and Roadmap: https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap
- GTA-Zone — GTA 6 Trophies & Achievements: https://gta-zone.com/news/gta-6-trophies-achievements/
- eGamers — GTA 6 Trophy List: All 55 Trophies and Achievements: https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/
- OutputLag — GTA 6 Trophy List: https://outputlag.com/guides/gta-6-trophy-list/
- GTA Vibes — GTA 6 Trophy List & Achievements: https://www.gtavibes.com/guides/gta-6-trophy-list-achievements
- Planet GTA 6 — trophy list, cross-checked with Exophase and PSNProfiles: https://www.planetgta6.com/en/gta-6-trophies/
- Official list — the PS5 trophy list as shipped in this contest's kit (names, descriptions, grades for all 55).

All ten sources read 20 Nov 2026. Guide methods come from PowerPyx, cross-checked against five more guide sources — KeenGamer (3 trophies), Push Square (30), GTA-Zone (47), eGamers (38), OutputLag (38); 52 of 55 guides now rest on two or more sources. GTA-Zone's tips page states its tips come from PowerPyx and GTABase, and eGamers' attributes its tips to GTABase and PowerPyx — both are counted as a second check, not a fully independent method, and the Sources view says so. GTA Vibes and Planet GTA 6 cross-check the list only. Exophase was not readable (403, bot-blocked) and is not claimed as read; PSNProfiles was not verified directly and is not cited.

## License

MIT — see [LICENSE](LICENSE). Unofficial fan-made guide; Grand Theft Auto and GTA are trademarks of Take-Two Interactive. No Rockstar logo, artwork or game screenshots are used.
