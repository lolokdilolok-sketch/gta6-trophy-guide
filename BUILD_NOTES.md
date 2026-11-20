# BUILD NOTES — Leonida Legend (GTA VI Trophy Guide, gta6-trophy-guide-01)

## What was built

An offline web app, **Leonida Legend**, a guide and tracker for the 55 PlayStation 5
trophies of Grand Theft Auto VI. Static files under `app/`, no build step, no network
at run time. Entry point `main.ts` (Node 22, stdlib only) copies `app/` +
`screenshots/` to `/output` and writes `dossier.json` with the kit's
`vendor/makefun-frontend.ts` (copied byte-identical from the kit, unchanged).

## Files (all written by the recorded agent, except the kit vendor file)

| File | What it is |
|---|---|
| `app/data/trophies.json` (61,490 B) | All 55 trophies: official name/description/grade (exact), hidden flag, kind, missable flag, roadmap stage, count, guide in our own words, steps, cited sources |
| `app/index.html` (6,898 B) | Shell: masthead + progress card, controls, view tabs, checklist split, roadmap + missable views, footer |
| `app/style.css` (10,405 B) | Own look: Vice City sunset (plum night, hot-pink/orange/gold), system fonts only |
| `app/app.js` | Bootstrap, hash router (`#/checklist`, `#/roadmap`, `#/missable`, `#/guide/<id>`), list rendering, progress |
| `app/tracker.js` | Progress state in localStorage, export/import as local JSON, grade counts |
| `app/filters.js` | Kind/grade/search/earned filtering + spoiler masking |
| `app/detail.js` | Detail panel: official description, guide, steps, missable warning, cited sources |
| `app/roadmap.js` | 3 roadmap stages + missable list rendering |
| `main.ts` | Hands the entry in (own rewrite of the starter logic) |
| `serve.ts` | Tiny static server for local trying (own rewrite) |
| `shots.json` | Describes the 4 screenshots |
| `README.md` | With the competition's 3 make.fun badges |
| `LICENSE` | MIT |
| `vendor/makefun-frontend.ts` | Kit file, copied byte-identical (sha256 4c8da1c8…), NOT modified |

## The data (verified)

- All 55 names, descriptions and grades match the kit starter's official list
  exactly (checked by script against the starter file).
- Kinds: platinum 1, story 12, activities 35, collectibles 7. Hidden: 28 (matches
  the official count). Missable: exactly 1 — Positive Mental Attitude.
- Roadmap stages: 1 story (13 trophies, 60–80 h), 2 checklist (37, ~100 h),
  3 strangers & clean-up (5, ~10 h). Total ~200 h (PowerPyx).
- Every trophy has a guide in our own words + at least one cited source.

## Sources cited (exact URLs, all real pages read during the build)

- PowerPyx — GTA 6 Trophy Guide & Roadmap:
  https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/
  (roadmap, mission names, chapters, counts, the one missable trophy, all how-tos)
- GTABase — GTA 6 Trophy & Achievement List:
  https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series
  (roadmap, missable confirmation, 100% checklist)
- Planet GTA 6 — trophy list (Exophase / PSNProfiles cross-check):
  https://www.planetgta6.com/en/gta-6-trophies/
  (the 27 visible / 28 hidden split)
- SixShore and GTA Six Insider were also read for cross-checks (same totals,
  same missable call). No text was copied from any of them — only facts, cited.

## Fix — fit the screenshots in the 720px fold (2026-11-20, unsubmitted)

Boy asked to fix before submitting and to test for top 10. The two visible defects
were: (1) the roadmap stage lists ran past the bottom fold in shot 2; (2) the
detail panel ran past the fold in shots 1/3/4. Measured the real rendered heights
first (header 351px, roadmap 546px, detail panel 640–918px against a 354px content
area), then fixed by layout, not by cutting content:

- Header tightened ~40px (title 54→46px, masthead/controls/tabs padding down,
  progress ring 84→76px) — frees room on every shot.
- Detail panel compacted (padding 18→14px, title 24→22px, guide 15→14px/1.45,
  sources/missable margins down) and the split widened 7fr/5fr → 6fr/5fr.
  Result: shot 3 (A Long Road) guide now fully visible; shot 4 guide + first
  steps visible; shot 1 shows Sources + missable box + ~7 guide lines (was ~3).
- Roadmap: stage titles shortened (Stage 2 now "100% checklist", one line),
  blurbs trimmed with all facts kept, long stages show 3 trophies + "+N more"
  (was 4), stage padding down. Result: all 3 stage cards + the sources foot
  line now fit inside the 720px fold in shot 2.
- `trophies.json` NOT touched (mtime still 19 Nov): 55/55 names, descriptions,
  grades, citations and the 3 "no confirmed method" guides unchanged.

Verified: `node --check` on the changed JS; `verify.py` (55/55, 0 mismatches,
0 blank, 0 uncited, missable 1, hidden 28); screenshots 1280×720 JPEG, all
PASS with 0 page/console errors and 0 failed requests; dossier byte-identical
2 runs, sha256 3b72d7f8… (865,303 B). New screenshots: 1-checklist 141,841 B
8bef3b13…, 2-roadmap 147,153 B 3bf68362…, 3-guide 140,301 B 309faebb…,
4-tracker 139,152 B d0cf3d2e….

Remaining honest gaps: the "Mark as earned" button is below the fold in the
detail shots (the tracker is still shown by the checkboxes + progress ring);
shot 1's long guide (990 chars) is cut mid-text after ~7 lines; the roadmap
foot sources line sits ~2px from the bottom edge. The guide has no numeric
practice board (AI judge 2v2 from screenshot + source outline), so "top 10"
cannot be proven with a score — the entry now meets all four judge criteria
visibly: complete 55-trophy data + saved/filtered/spoiler/export tracker,
complete roadmap + the one missable flagged, cited guides with sources on
screen, and a polished, compact layout.

## Screenshots (real renders, 1280×720 JPEG, taken with headless meta-chromium)

| File | Bytes | sha256 (first 8) | Shows |
|---|---|---|---|
| `screenshots/1-checklist.jpg` | 133,737 | cbe351fc… | Cover: checklist + Positive Mental Attitude guide open (missable warning, steps, sources), progress 12/55, filters |
| `screenshots/2-roadmap.jpg` | 138,989 | 419d83ab… | Roadmap to the Platinum, 3 stages with hours |
| `screenshots/3-guide.jpg` | 132,254 | f5231f15… | A Long Road (gold, 100%) guide open |
| `screenshots/4-tracker.jpg` | 131,927 | 8e73b059… | Tracker with spoiler ON — hidden story trophies masked |

Screenshot route (proven on this machine): `node serve.ts --port 8080` +
a tiny forward proxy (`../proxy.mjs`, outside the repo) on 127.0.0.1:18080 +
`--proxy-server=http://127.0.0.1:18080`, origin `http://lvh.me:8080` — direct
loads are blocked by the browser's Local Network Access check, the proxied
loads are not. Browser: `/opt/meta-chromium/chrome` via `playwright-core`
(from the game rebuild's `tools/node_modules`), with the Hatch WebGL policy
file args. Runner: `../shots.mjs` (outside the repo). All 4 shots: 0 page /
console / request errors. Progress seeded via localStorage before load
(12 story trophies for shots 1–3, 1 for shot 4).

## Verification (run 2026-11-19 ~22:05–22:15 WIB)

- `MAKEFUN_OUTPUT_DIR=out node main.ts` — dossier builds, **byte-identical
  across 2 runs**: sha256 `0e8583ec144e983e3b05fba688514816b5d1e198a4e6c7b0dda3e5d8462a355e`,
  822,283 bytes (cap 1.5 MiB).
- Dossier Load block: first load **7 files, 12,531 bytes gzip-9 (37,945 raw)**;
  whole app 8 files, 99,435 bytes (caps: 993 files, 48 MiB).
- Dossier text 100,465 bytes (cap 160 KiB). URLs named in source: 4 — the SVG
  namespace inside the favicon data URI, and the 3 citation domains (links the
  reader follows; the app fetches nothing).
- Gate checks by hand: `app/index.html` 6,898 B (cap 1 MiB); `trophies.json`
  61,490 B (cap 2 MiB); screenshots 131,927–138,989 B each (cap 256 KiB),
  1280×720 (long side ≤1280, short side ≥480); no loaded network references
  (only the favicon `data:` URI and citation `<a href>` links).
- No commit, upload, seal or submit was done by this build. Recording
  `01a1f44f-44f4-76e9-949a-febf3051b21a` was left running.

## Honest gaps

1. **Three trophies have no confirmed method yet** (PowerPyx, 18 Nov 2026):
   In The Beginning… (cocktail on Ocean Beach), Bad Luck, I Guess (believed
   tied to the Payday Loans store), Ten Pin (believed: melee drive-by from a
   motorcycle). Their guides say so plainly and cite PowerPyx instead of
   inventing a method. No second source had confirmed them either.
2. **Detail panels run below the 720 px fold** in the cover/guide shots — the
   top (name, official description, missable warning, guide start) is visible;
   steps and sources continue below. The judge sheet shows the cover at
   768×480, so the top is what counts.
3. **Roadmap stage lists are cut at the bottom** of shot 2 (only the first
   few trophies per stage show); the full lists are in the app.
4. **No map or images** — deliberate: the app is offline with no artwork
   (and no Rockstar art is allowed); visual richness comes from typography
   and colour only.

## Fix round — Sources moved above the fold (22:10–22:14 WIB)

Parent verification found the one real defect in the shots above: the
"Sources" list rendered *after* the guide text, so in shots 1/3 it fell
below the 720 px fold and the judge could not see any citation (criterion 3
gives no credit for uncited claims). Fixed, same recording `01a1f44f`:

- `app/detail.js` — the Sources block now renders directly after the
  official description + grade/target badges, before the missable warning
  and the guide text. Heading reworded to "Sources — where the facts in
  this guide come from:" (it no longer sits below the facts). Header
  comment updated. No guide text, citation, name, description or grade
  was changed.
- `app/style.css` — `.detail-sources` gains `margin-bottom: 12px` so it
  does not butt against the missable box; new `.stage li.more` style
  (muted italic).
- `app/roadmap.js` — long stage lists are capped at the first 4 trophies
  plus a "+N more in the checklist" line (stages with ≤5 trophies show
  all). DOM-verified: stage 1 = 4 + "+9 more", stage 2 = 4 + "+33 more",
  stage 3 = all 5, no "+N more" line. The full lists stay in the
  checklist view.

**New screenshots** (regenerated with `node shots.mjs`, ALL SHOTS OK, 0
page/console/request errors; `node --check` passes on both edited files):

| File | Bytes | sha256 | Visual check (read directly) |
|---|---|---|---|
| 1-checklist.jpg | 126,515 | `1cab72f7…` | ✅ "Sources — where the facts in this guide come from:" + PowerPyx + GTABase links visible in the detail panel, under the badges, above the missable warning |
| 2-roadmap.jpg | 138,989 | `419d83ab…` | ⚠️ byte-identical to before: the cap is in the DOM (verified above) but the "+N more" lines sit below the 720 px fold (cards end at y≈874), so the visible pixels are unchanged. The lists still look cut at the viewport edge — that is the page being taller than the viewport, normal for a scrollable page. Showing whole cards would need a compact-layout rework, not done here. |
| 3-guide.jpg | 125,540 | `a8bf6ae9…` | ✅ Sources + PowerPyx + GTABase visible under the GOLD / TARGET: 100 badges, before the guide text |
| 4-tracker.jpg | 129,150 | `f179df08…` | ✅ Sources visible in the platinum panel; spoiler ON still masks story trophies ("Hidden trophy"), progress 1/55 |

**Dossier re-run** (`MAKEFUN_OUTPUT_DIR=/tmp/tg-outN node main.ts`):
byte-identical across 2 runs, sha256
`76cdf3de8d49671e6d1f08ea7a6ffa51af16614b16bc32815f3f324487a21de4`,
800,875 bytes (cap 1.5 MiB; smaller than the 822,283 B before because the
new screenshot sheet is smaller). app/ is 120K. No commit, upload, seal or
submit was done. Recording `01a1f44f` left running.

Gap #2 above is now fixed (Sources visible in shots 1, 3, 4). Gap #3 is
half-fixed: the lists are bounded in the app, but the roadmap screenshot
itself looks the same as before.

## Fix round 2 — "benar-benar tidak ada masalah" (2026-11-20, unsubmitted)

Boy (11:44 WIB): fix until there are truly no problems. The 4 remaining
defects from the round-1 report, all measured from real renders first
(before: header 310px, content area 398px; PMA panel 715px, ALR 678px,
Vice 548px; roadmap foot bottom 728):

1. **"Mark as earned" below the fold** — `app/detail.js`: the button now
   sits BESIDE the title in a `.detail-head` flex row (0 vertical cost),
   so it is visible in every detail shot (measured top 27–29px in the
   scrolled shots, 309px in the tracker shot). The masked-note hint text
   was updated ("mark it earned with the button beside the title") since
   the button is no longer below the guide. Same handler, same classes.
2. **PMA guide (990 chars) cut mid-text, steps hidden (shot 1)** — panel
   compacted + the shot is taken scrolled: the runner scrolls just past
   the view tabs, so the sticky panel sits at top:12 and the whole panel
   fits in the frame (a real user state, not an image edit). Measured:
   panel 12–603, guide 227–476 complete to the last sentence, all 3
   steps 484–584 complete.
3. **A Long Road steps hidden (shot 3)** — same scroll state. Measured:
   panel 12–529, guide complete, all 5 steps 348–510 complete.
4. **Roadmap foot sources line ~2px from the bottom edge (shot 2)** —
   header + roadmap compacted (see below). Measured: foot bottom 677,
   43px breathing room.

Layout changes (`app/style.css`, `app/detail.js` only — no content, no
data, no feature removed):

- Header tightened again: masthead 150→138px (h1 46→42px, ring 76→72px),
  controls 105→95px, tabs 56→52px, view padding 12→10px. Content area
  398→~426px — this is what lets the tracker shot fit without scrolling.
- Sources: the 3-line UL became one compact paragraph (bold header +
  both links inline, " · " separator) — saves ~17px, links and header
  text unchanged.
- Panel: padding 14→10px, title 22→20px, guide/steps 14→13.5px/1.42,
  missable 13.5→13px, margins tightened. Panel heights now: PMA 591px,
  ALR 517px, Vice 417px.
- Roadmap: h2 24→22px, intro 15→14.5px, stage padding 11→9px,
  stages margin 8→6px, list gap 3→2px, callout tightened. Stages now
  248px tall, foot at 658–677.

Runner (`../shots.mjs`, outside the repo): shots 1 and 3 now scroll past
the view tabs before capturing; the runner also asserts geometry —
checklist shots require panel bottom ≤712 and earn-button bottom ≤712,
roadmap requires foot bottom ≤700 — and reports scrollY/panelBottom/
footBottom/earnBottom per shot.

**New screenshots** (regenerated, ALL SHOTS OK, 0 page/console/request
errors; `node --check` passes on detail.js/roadmap.js/app.js):

| File | Bytes | sha256 | Visual check (read directly) |
|---|---|---|---|
| 1-checklist.jpg | 146,618 | `7152fbac…` | ✅ Button beside the title; Sources 2 lines; missable box; PMA guide complete to "…only need 15 of 18 meditations."; all 3 steps complete; panel ends 603 |
| 2-roadmap.jpg | 142,986 | `eb2506f1…` | ✅ All 3 stages + "+10/+34 more" + callout; Sources foot line fully visible with ~43px space below |
| 3-guide.jpg | 129,014 | `232398cb…` | ✅ Button beside the title; Sources; A Long Road guide complete to "…the gold pops with it."; all 5 steps complete; panel ends 529 |
| 4-tracker.jpg | 146,794 | `59325b97…` | ✅ Masthead + progress 2% (1 of 55); spoiler ON masks story trophies; button beside the platinum title; Sources; guide + all 3 steps complete; panel ends 711 |

**Verification:** `verify.py` clean (55/55 names, 0 description/grade
mismatches, 0 blank guides, 0 trophies without an http citation,
missable only Positive Mental Attitude, hidden 28, kinds 1/12/35/7,
guide lengths 175–1006). Dossier byte-identical 2 runs, sha256
`b1305679edd150df26d40450109bf3f0a669f4d9e86261468141690f3e2c59f6`.
`trophies.json` NOT touched (mtime still 19 Nov, 61,490 B).

**Honest remaining observation (not a defect):** the checklist is a
scrollable 55-row list, so in shots 1/3 the next row's top edge (8px,
no text) peeks in at the very bottom, and in shot 4 the last visible
row's bottom padding (9px, no text) is cut. No text is truncated
anywhere — every guide, step, source line, button and footer line is
fully visible. No single scroll position or row spacing removes that
sliver without losing the "Showing 55 of 55 trophies" line or breaking
another shot, so it was left as-is: it is how a scrolling list renders.

No commit, upload, seal or submit was done. Recording `01a1f73a`
left running (PID 7509).
