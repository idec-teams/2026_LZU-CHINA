# iDEC 2026 | LZU-CHINA

The team wiki is built with MkDocs Material. It presents the supplied Engineering document and manuscript as a public-facing research narrative, with the original figures, methods, reported results, limitations, and responsible-research notes.

## Edit and preview

1. Install Python 3.12.
2. Install the pinned wiki dependencies: `python -m pip install -r requirements.txt`.
3. Start the local preview: `mkdocs serve`.
4. Edit pages under `docs/`; update `mkdocs.yml` when changing navigation.
5. Build the static site: `mkdocs build --strict`.

Pushing changes to `main` runs the GitHub Actions workflow and publishes the wiki to [idec-teams.github.io/2026_LZU-CHINA](https://idec-teams.github.io/2026_LZU-CHINA/).

## Website structure

- `docs/index.md`: Evolution Atlas homepage, a four-chapter journey through signals, selection, evidence and shared practice.
- `docs/atlas/index.md`: searchable, filterable directory of all project content pages.
- `docs/research/index.md`, `docs/library/index.md`: research questions and complete-record hubs.
- `docs/project/story.md`, `docs/learn/index.md`, `docs/project/evidence.md`: plain-language story, interactive learning and claim-to-evidence map.
- `docs/human-practices/`: six Community sections (IHP, Education, Entrepreneurship, Inclusivity, Sustainability and Collaboration), plus complete `*-record.md` archives. Original photographs and tables remain available; referenced media are hosted locally.
- `docs/stylesheets/atlas.css`: Evolution Atlas visual system and responsive layouts; `editorial.css` and `extra.css` retain learning, archive and member components.
- `docs/javascripts/experience.js`: keyboard-accessible concept interactions, feedback and reading time. No external JavaScript dependencies.
- `docs/javascripts/atlas.js`: chapter tracking, scroll-driven comparison illustration, reading progress and atlas filters; supports instant navigation and reduced motion.
- `overrides/main.html`: chapter context and related reading with explicit reasons for each next step.
- `IDEC-DESIGN-REFERENCES.txt`: iDEC design context and the Evolution Atlas rationale.
- `BEST-WIKI-RESEARCH-2026.md`: official requirements, verified winners and design rationale.
- `SUBMISSION-CHECKLIST.md`: evidence and submission work still requiring team materials.

The site uses local SVG artwork and system fonts. Concept interactions have static explanations; they must never be presented as measured experimental results. Before publishing, run `mkdocs build --strict` and check the homepage, learning lab, archive tables and member cards on both desktop and mobile.

## Evidence boundaries

The website is a working draft based on the files supplied to the project workspace. Check the page-level notes about raw data, promoter assignments, assay timing, and approvals before final submission. Do not add results, dates, member roles, or approvals unless they are supported by project records.

## License

The wiki contents are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). MkDocs Material is distributed under its own license.
