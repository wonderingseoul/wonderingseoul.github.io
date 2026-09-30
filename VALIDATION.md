# v0.14.0 validation

- npm run build and npm run typecheck passed using existing project dependencies.
- Home, CV, News and Soundinity tested at 320, 390, 768 and 1360px. No horizontal overflow, page JavaScript errors or failed local resources.
- Header logo decoded on all routes; desktop and mobile screenshots inspected.
- SVG/ICO and Apple icon metadata resolved with HTTP 200. ICO contains 16/32/48px sizes. SVG switches to white geometry for dark browser preference.
- Final 1a vector geometry preserved; compact 16px B used for favicon. Footer keywords hidden through editable site setting.
- PDF CV and research records unchanged. No remote deployment performed.

# v0.13.1 validation

- npm run build and npm run typecheck passed.
- Home is the first navigation item and returns to the main profile from Home, CV and News. Verified at 320, 390, 768 and 1360px with no horizontal overflow or JavaScript errors.
- Status separator is visible and aria-hidden; header and badge screenshots inspected.
- Content and CV PDF unchanged. No remote deployment performed.

# v0.13.0 validation

- npm run build and npm run typecheck passed. No new project dependencies.
- Home, CV, News and Soundinity tested at 320, 390, 768 and 1360px without horizontal overflow, JavaScript errors or failed local resources. All images decoded.
- Desktop/mobile profile and publication screenshots visually inspected.
- About merged into profile; no separate About section or menu. Publications navigation matches the section title.
- Profile CV link goes to /cv/. The CV page contains a downloadable Curriculum Vitae (PDF) button using the configured PDF path.
- Home shows five News items and no details toggle. View all news opens /news/ with 13 entries in descending date order. Navigation also works with JavaScript disabled.
- Publications: three entries; two teasers; own author name bold and colored; venue italic; status separate from topic tags; image-free entry has no blank image column.
- 85 local links/anchors valid. Unpublished research remains absent from public output.
- PDF CV content unchanged from verified v0.12.1. No document regeneration was needed for this UI revision.
- No remote repository edits or deployment performed. No fresh npm ci; existing site dependencies used.
- ZIP excludes node_modules, .next, out and test files.
