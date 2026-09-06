# Kala Chronicle — Indian Art History Digital Timeline

> **A museum-grade interactive timeline of Indian art history, designed for Course Outcome 1 (CO1).**
>
> **Six required historical periods. Seven landmark study objects. One connected visual journey from the Indus Valley to Mughal miniature painting.**

## Project overview

**Kala Chronicle** is a responsive, browser-based digital timeline that introduces major periods of Indian art history through selected landmark objects. Instead of presenting historical periods as isolated facts, the experience connects date, medium, place, visual language, symbolism, and cultural significance in one continuous exhibition interface.

The project is intentionally designed as a contemporary digital museum guide. A bronze chronology rail acts as the main navigation device, dark slate surfaces establish a gallery-like atmosphere, and exhibition-gold accents identify chronology, provenance, active states, and primary curatorial actions.

The project is deployed through Manus hosting at [indarttime-wtlddrcz.manus.space](https://indarttime-wtlddrcz.manus.space). This README documents the application as a static frontend prototype; no backend, database, authentication, payment system, or external API is required.

## Educational purpose and CO1 alignment

The application supports **Course Outcome 1 (CO1)** by helping learners recognise a chronological progression in Indian art while also interpreting the material and cultural qualities of individual objects. Each object is presented as evidence rather than as a decorative illustration: the learner can examine the medium, site or current collection, formal characteristics, symbolism, historical setting, and cultural significance.

The prototype is suitable for use as a digital learning aid, classroom demonstration, assignment submission, or starting point for a broader art-history collection. It is not intended to replace direct engagement with museum catalogues, conservation records, or original objects.

| Assessment dimension | Evidence in the application |
| --- | --- |
| Historical chronology | Seven study objects are arranged from approximately 2500 BCE to the 18th century CE across all six required period groups. |
| Artifact selection | The collection includes the Dancing Girl, Lion Capital of Ashoka, a Gandharan Buddha, Ajanta’s Padmapani, a Gupta standing Buddha, Chola Nataraja, and a Mughal miniature. |
| Material and formal analysis | Each object dossier identifies medium, visual features, object vocabulary, and interpretive significance. |
| Historical and cultural context | Every entry includes a discovery or origin location and current museum or representative collection context. |
| Digital interaction | The timeline provides clickable nodes, medium and period filters, artifact cards, dossier modals, lightbox-style inspection, and text-to-speech narration. |
| Presentation quality | The interface uses responsive layout, keyboard-reachable controls, contrast-conscious color choices, semantic labels, and reduced-motion support. |

For the fuller academic summary and rubric explanation, see [`CO1_DOCUMENTATION.md`](./CO1_DOCUMENTATION.md).

## Historical collection

The collection follows a chronological path from early bronze casting to courtly manuscript painting. The additional Gupta standing Buddha creates a useful comparison between monumental mural painting and sculptural idealisation within the same broad cultural period.

| No. | Period | Study object | Medium | Main interpretive focus |
| --- | --- | --- | --- | --- |
| 01 | Indus Valley Civilization, c. 2500–1700 BCE | **Dancing Girl**, Mohenjo-daro | Cast bronze, lost-wax process | Metallurgy, figural stance, jewellery, and Indus material culture. |
| 02 | Mauryan & Sunga, c. 3rd–1st century BCE | **Lion Capital of Ashoka**, Sarnath | Polished Chunar sandstone | Pillar architecture, Mauryan polish, dharmachakra, Buddhist and imperial symbolism. |
| 03 | Buddhist & Jain / Gandhara & Mathura, c. 1st–4th century CE | **Seated Buddha**, Gandhara tradition | Grey schist sculpture | Iconic Buddhist imagery, robe folds, meditative pose, and the spread of visual conventions. |
| 04 | Gupta Golden Age, c. 4th–6th century CE | **Padmapani Bodhisattva**, Ajanta Cave 1 | Mural painting on rock-cut cave wall | Mineral pigments, lotus symbolism, expressive modelling, and sacred architecture. |
| 05 | Gupta Golden Age, c. 5th century CE | **Standing Buddha**, Sarnath school | Buff sandstone sculpture | Idealised proportion, subtle robe lines, and spiritual calm. |
| 06 | Medieval South Indian / Chola, c. 9th–13th century CE | **Shiva as Nataraja** | Copper-alloy bronze, lost-wax process | Cosmic dance, processional bronze, temple ritual, and divine presence. |
| 07 | Mughal & Rajput miniature painting, c. 16th–18th century CE | **Jahangir Preferring a Sufi Shaikh to Kings** | Opaque watercolor, ink, and gold on paper | Court atelier practice, Persianate manuscript traditions, allegory, and portraiture. |

The object descriptions are concise educational interpretations. The virtual images and CSS models are original study visualisations created for this application; they should not be mistaken for documentary photographs of the original works.

## Core features

### Interactive chronology

The central timeline is a horizontally scrollable chronology rail with date bounds, indexed stations, a selected-state pulse, and forward/back navigation controls. Clicking a station updates the featured spotlight panel and keeps the wider chronology visible for comparison.

### Medium and period filters

Learners can filter the collection by **Sculpture**, **Painting**, or **Architecture**. A period selector enables direct navigation to a particular historical group. The filters update the visible stations while preserving the overall structure of the timeline.

### Featured object spotlight

The spotlight panel presents the active object in a larger exhibition frame with its date, period, title, subtitle, significance, current location, and medium. The panel provides direct access to the full dossier and to the browser narration control.

### Artifact cards and object dossiers

Every study object is represented by an artifact card. Selecting a card opens an accessible dossier modal with:

| Dossier field | Content |
| --- | --- |
| Object identity | Title, subtitle, sequence number, period, and date or era. |
| Material information | Medium and production process where relevant. |
| Place | Discovery, origin, current museum, or representative collection context. |
| Interpretation | Historical and cultural significance written for student use. |
| Visual vocabulary | Three short stylistic or symbolic features. |
| Study source | A linked educational or museum reference. |
| Audio guide | Browser-native text-to-speech narration of the object summary. |

The modal can be closed with the close control or the **Escape** key. Selecting a different object updates the spotlight and card state without requiring a page reload.

### Virtual artifact replicas

The interface uses two complementary approaches for visual study objects:

1. **High-resolution virtual exhibition frames** present selected objects inside dark glass-like museum vitrines with controlled lighting and exhibition corner marks.
2. **Original CSS-built replicas** provide stylised material studies for the Lion Capital, Gandharan Buddha, Gupta standing Buddha, Ajanta Padmapani mural, Chola Nataraja, and Mughal manuscript folio.

This approach satisfies the requirement for stylised 3D/CSS/SVG-style visual replicas while keeping the project lightweight and avoiding a large local media directory.

### Browser text-to-speech

The audio guide uses the browser’s `SpeechSynthesis` API. No audio files are uploaded or stored. The selected object’s title, date, and interpretive summary are spoken when the learner selects **Listen (TTS)**, **Audio guide**, or **Play object guide**.

Text-to-speech support depends on the browser and operating system. If the API is unavailable, the visual and written experience remains fully functional.

## Design system

The visual direction is called **Archive Noir**: contemporary museography with celestial-chart detailing. It treats the interface as a late-evening digital exhibition guide rather than a generic landing page.

| System element | Decision |
| --- | --- |
| Primary surface | Rich slate / near-obsidian `#0F172A` to keep the object studies visually dominant. |
| Signature color | Exhibition Gold `#D4AF37`, reserved for chronology, provenance, selected states, and primary actions. |
| Display typography | Cormorant Garamond for era names, object titles, and interpretive emphasis. |
| Interface typography | DM Sans for navigation, controls, labels, metadata, and body copy. |
| Signature motif | A bronze chronology rail with accession-style index numbers and fine registration lines. |
| Object treatment | Dark vitrine frames, reflective glass overlays, material studies, and gold corner registration marks. |
| Motion language | Short, restrained ease-out transitions with a reduced-motion fallback. |
| Brand voice | Observational, specific, scholarly, and welcoming without generic marketing filler. |

The full design reasoning, including rejected directions and style decisions, is recorded in [`ideas.md`](./ideas.md).

## Technology stack

| Layer | Technology |
| --- | --- |
| UI framework | React 19 with TypeScript. |
| Build tool | Vite 7. |
| Styling | Tailwind CSS 4 with custom CSS for the museum visual system and CSS-built object studies. |
| Icons | `lucide-react`. |
| Routing | `wouter`, with a single primary route and a fallback 404 route. |
| UI primitives | shadcn/ui-compatible components included in the scaffold. |
| Audio | Browser Web Speech API / `SpeechSynthesis`. |
| Hosting model | Static frontend deployment through Manus hosting. |
| Backend | None. |
| Database | None. |
| Authentication | None. |

## Project structure

```text
indian-art-timeline/
├── client/
│   ├── index.html                 # Document head, metadata, favicon, analytics placeholder
│   └── src/
│       ├── App.tsx                # Theme provider, routing, error boundary, toaster
│       ├── index.css              # Archive Noir design system and responsive styling
│       ├── main.tsx               # React entry point
│       ├── pages/
│       │   ├── Home.tsx           # Timeline data, object UI, filters, modals, narration
│       │   └── NotFound.tsx        # Fallback route
│       ├── components/             # Shared and scaffolded UI components
│       ├── contexts/               # Theme context from the scaffold
│       ├── hooks/                  # Reusable scaffold hooks
│       └── lib/                    # Utility helpers
├── server/
│   └── index.ts                   # Scaffolded static serving wrapper
├── shared/
│   └── const.ts                   # Shared scaffold constants
├── CO1_DOCUMENTATION.md           # Assessment-ready documentation and references
├── ideas.md                       # Design brainstorming and selected visual direction
├── README.md                      # This project guide
├── package.json                   # Scripts and dependencies
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
└── pnpm-lock.yaml                 # Locked dependency versions
```

### Main implementation file

Most of the application behaviour is intentionally kept in [`client/src/pages/Home.tsx`](./client/src/pages/Home.tsx) so that the prototype remains easy to study and extend. The file contains the typed artifact data model, the seven historical entries, virtual visual selection logic, the dossier modal, the timeline filters, browser narration, and the page layout.

### Styling file

[`client/src/index.css`](./client/src/index.css) contains the global design tokens, font imports, responsive breakpoints, museum frame styles, CSS replicas, chronology rail, modal transitions, and reduced-motion rules. Every major frontend file includes an Archive Noir style reminder at its top for future edits.

## Local development

### Prerequisites

Install the following before running the project locally:

- Node.js 20 or newer.
- `pnpm` 10 or a compatible package manager.
- A modern browser with JavaScript enabled.

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

The Vite development server will print the local URL, normally `http://localhost:3000/`.

### Run TypeScript validation

```bash
pnpm check
```

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

## Content and asset notes

The project references generated visual assets through Manus storage URLs. These assets are intentionally not copied into `client/public/` or `client/src/assets/`, because the static web workflow manages media through project-backed storage URLs. If the project is migrated to another hosting provider, the image URLs should be replaced with the destination provider’s persistent asset URLs.

The high-resolution visual assets currently referenced by the application are:

| Asset | Use |
| --- | --- |
| `dancing-girl-vitrine` | Hero, featured object, and Indus Valley artifact card. |
| `nataraja-vitrine` | Generated visual reference asset retained for project visual continuity. |
| `sarnath-buddha-vitrine` | Generated visual reference asset retained for project visual continuity. |
| `padmapani-vitrine` | Generated visual reference asset retained for project visual continuity. |
| `kala-chronicle-mark` | Brand mark, header icon, and favicon. |

The current UI uses the Dancing Girl asset as the featured hero image and uses CSS-built material studies for the remaining object views. This prevents a single generated image from being repeated across unrelated periods and makes the visual treatment of each medium more distinct.

## Accessibility and responsive behaviour

The interface includes semantic headings, descriptive image alternatives, labelled icon buttons, keyboard focus states, keyboard-reachable filters, Escape-to-close modal handling, and a reduced-motion media query. The timeline is horizontally scrollable on smaller screens, while the spotlight, object grid, rubric section, and modal reflow into a single-column mobile layout.

The application avoids relying on color alone for object identity. Selected states are communicated through typography, border treatment, position, and contrast in addition to Exhibition Gold. The browser narration feature is supplementary; the written dossier remains the primary accessible content source.

## Performance considerations

The project has no API calls, database queries, or authentication flow. Most interactivity is client-side state, which keeps the prototype simple and responsive. The build completes successfully with Vite. The production bundle currently emits a chunk-size advisory because the scaffold includes a broad set of UI dependencies; this is acceptable for the prototype, but future production optimisation could split rarely used UI primitives with dynamic imports.

For a larger collection, the next performance step would be to move artifact data into a separate JSON module, lazy-load dossier content, and load only the visual assets required for the active period. If more high-resolution images are added, they should be compressed and referenced through persistent storage rather than placed in the project’s public directory.

## Content maintenance guide

To add another study object, extend the typed `Artifact` object in `client/src/pages/Home.tsx` with the following fields:

```ts
{
  id: "unique-object-id",
  index: "08",
  period: "Historical period name",
  shortPeriod: "Short label",
  dates: "Approximate date",
  sortYear: 1800,
  title: "Object title",
  subtitle: "Object subtitle",
  medium: "Material and process",
  mediums: ["Sculpture"],
  location: "Current museum or collection",
  discovery: "Origin or discovery location",
  significance: "A concise interpretive paragraph.",
  features: ["Feature one", "Feature two", "Feature three"],
  sourceLabel: "Museum or educational source",
  sourceUrl: "https://example.org/source",
  visual: "dancing",
  tone: "bronze"
}
```

When adding content, keep the following editorial rules:

1. Use approximate dates when an object’s date is debated or not securely known.
2. Distinguish a current museum from a discovery location.
3. Describe the medium and visual features before making broad historical claims.
4. Link to a museum, university, or established educational art-history source.
5. Label newly generated imagery as a virtual study object rather than original artifact photography.
6. Keep the interpretive paragraph concise enough for both reading and text-to-speech narration.

## Testing checklist

Before submitting a future revision, run the following checks:

| Check | Expected result |
| --- | --- |
| `pnpm check` | TypeScript completes with no errors. |
| `pnpm build` | Vite production build completes successfully. |
| Desktop timeline | Hero, chronology rail, spotlight, collection, and CO1 sections remain readable at desktop width. |
| Mobile timeline | The rail scrolls horizontally, filters remain usable, and the object grid collapses without clipping. |
| Modal | Every object opens a dossier; Escape and close controls dismiss it. |
| Filters | Medium and period controls update visible timeline stations. |
| Narration | Browser text-to-speech starts and stops where supported. |
| Keyboard access | Buttons, links, select controls, timeline rail, and modal close control are reachable. |
| Reduced motion | Non-essential animations are suppressed when the user requests reduced motion. |
| Source links | Each dossier source opens in a new tab with `rel="noreferrer"`. |

## Known limitations

The collection is intentionally curated as a concise CO1 prototype and does not attempt to represent the full geographic, religious, regional, or material diversity of Indian art history. The Gandharan and Sarnath entries use representative collection context rather than claiming a single universal object record. Some visual replicas are interpretive CSS studies rather than historically exact 3D reconstructions.

The browser audio guide depends on local browser voices and may behave differently across operating systems. The project does not currently provide downloadable audio, student accounts, saved favourites, quiz scoring, or a content management interface.

## Suggested future extensions

Practical next extensions include a quiz mode mapped directly to the CO1 rubric, a comparison view for placing two objects side-by-side, curated human-recorded narration, expandable regional maps, conservation notes, and a teacher-facing worksheet export. A larger version could add additional objects from Jain, Rajput, Pala, Deccan, colonial, modern, and contemporary traditions while keeping the same chronology and dossier model.

## Academic source references

The content is based on the following educational and museum references. The application’s object descriptions are concise interpretive summaries rather than reproduced source text.

[1]: [Smarthistory, “Dancing Girl from Mohenjo-daro.”](https://smarthistory.org/dancing-girl-mohenjodaro/)
[2]: [UC Berkeley ORIAS, “Lion Capital of Ashoka.”](https://orias.berkeley.edu/lion-capital-ashoka)
[3]: [Smarthistory, “Images of Enlightenment: Aniconic vs. Iconic Depictions of the Buddha in India.”](https://smarthistory.org/aniconic-vs-iconic-depictions-of-the-buddha-in-india/)
[4]: [Smarthistory, “The Gupta Period.”](https://smarthistory.org/gupta-period/)
[5]: [Victoria and Albert Museum, “The Arts of the Mughal Empire.”](https://www.vam.ac.uk/articles/the-arts-of-the-mughal-empire)
[6]: [Princeton University Art Museum, “Miniature Paintings from South Asia.”](https://artmuseum.princeton.edu/art/collections/themes/miniature-paintings-south-asia)

## License and educational use

This repository is an educational prototype. Before redistributing generated imagery, third-party fonts, or adapted source material outside the Manus project, review the applicable asset and platform licenses. The historical references remain the property of their respective institutions and authors. The application’s original interface, CSS studies, and documentation should be treated as project materials unless a separate license is added.

---

**No GitHub push was performed for this README request.**
