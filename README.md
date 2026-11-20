# Leonida Legend — GTA VI Trophy Guide & Tracker

[![GTA 6 Trophy Guide](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![Rank](https://make.fun/badge/gta6-trophy-guide-01/lolokdilolok-sketch/gta6-trophy-guide/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![Reward](https://make.fun/badge/gta6-trophy-guide-01/lolokdilolok-sketch/gta6-trophy-guide/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

An offline web app that is the best guide and tracker for the 55 PlayStation 5 trophies of Grand Theft Auto VI — built for the [GTA 6 trophy guide bounty](https://make.fun/bounty/gta6-trophy-guide-01).

## What it does

- **Every trophy, official and complete** — all 55 names, descriptions and grades as PlayStation publishes them (1 platinum, 2 gold, 6 silver, 46 bronze; 28 hidden).
- **A guide for each trophy, in our own words, with cited sources** — what to do, where and how, and when it can be missed. Every guide names its sources (PowerPyx, GTABase, Planet GTA 6 / Exophase / PSNProfiles); nothing is copied from another guide.
- **Tracker** — a checklist saved in the browser (localStorage), export to a file and import back, filters by kind (story, missable, collectibles, activities) and grade, search, and a spoiler setting that hides story trophies until they are earned.
- **Roadmap to the platinum** — three stages in order (story 60–80 h, 100% checklist ~100 h, strangers & clean-up ~10 h), built from the official descriptions.
- **Missable flags** — only one trophy may be missable (Positive Mental Attitude, Chapter 1 meditation); the guide says exactly how to protect it and what is not missable.

## Run it

Static files under `app/` — no build step, no network at run time:

```sh
node serve.ts        # serves app/ at http://localhost:8080
```

Or open `app/index.html` from any static server. `main.ts` (Node 22) hands the entry in: it copies `app/` and `screenshots/` to `/output` and writes `/output/dossier.json`.

## Sources

- PowerPyx — GTA 6 Trophy Guide & Roadmap: https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/
- GTABase — GTA 6 Trophy & Achievement List: https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series
- Planet GTA 6 — trophy list, cross-checked with Exophase and PSNProfiles: https://www.planetgta6.com/en/gta-6-trophies/

## License

MIT — see [LICENSE](LICENSE). Unofficial fan-made guide; Grand Theft Auto and GTA are trademarks of Take-Two Interactive. No Rockstar logo, artwork or game screenshots are used.
