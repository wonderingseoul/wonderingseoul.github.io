# v0.12.1 validation

- npm run build and npm run typecheck passed.
- Home, CV and Soundinity tested at 320, 390, 768 and 1360px. No horizontal overflow, JavaScript errors or failed local resources. All images decoded.
- All four CV project/award teasers are left of text on desktop and above it on mobile; entries without media have no empty image column. Desktop/mobile screenshots inspected.
- Research introduction and interests prioritize sensor fabrication and sensing toolkits; haptic interfaces remain secondary.
- News dates verified: Thermal Crossing 2026.08; IxDA 2023.03; DNA-HERO 2022.12. Newest-first ordering verified. Soundinity date range 2022.06–2022.12.
- Everwhite home, News and CV links go to IxDA. No Everwhite detail page is exported. prebuild removes stale generated output before every build.
- 80 local links and anchors valid; unpublished research and hidden course project absent from output.
- Updated DOCX rendered to PDF; all 3 pages visually inspected. Website PDF matches downloadable PDF.
- No public deployment or new dependencies. Existing installed dependencies used; fresh npm ci not run.
- ZIP excludes node_modules, .next, out, test artifacts and private uploads.

Dates and research positioning follow the user's latest confirmation. External destinations were not independently rechecked this revision.

## v0.12.1 checks
- Three award dates verified against exported CV HTML, with descending date order.
- Production build, typecheck and 80 local links/anchors passed again.
- All 3 updated DOCX/PDF pages rendered and visually inspected.
- No layout code changes; viewport results above are retained from v0.12.0, not rerun.
- Editing guide now distinguishes data edits, visibility, manual project registration and separate Word/PDF updates.
