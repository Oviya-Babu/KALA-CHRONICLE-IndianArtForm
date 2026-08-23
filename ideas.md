# Design Directions — Indian Art History Digital Timeline

## Three initial directions

### 1. Archive Noir
**Very Brief Intro:** A contemporary museum reading room at night, where each artefact glows from a protective vitrine along a luminous historical axis. The atmosphere feels quiet, scholarly, and ceremonial rather than technological.

**Probability:** 0.07

### 2. Painted Procession
**Very Brief Intro:** A warm folio-inspired journey that borrows its rhythm from miniature-painting borders, lacquered pigments, and procession scrolls. It would feel intimate, handcrafted, and narrative-led.

**Probability:** 0.04

### 3. Stone & Sky
**Very Brief Intro:** A monumental gallery direction combining architectural stone, temple shadows, and astronomical navigation marks. It would make the timeline feel like an excavated observatory.

**Probability:** 0.08

---

## Chosen direction: Archive Noir

### Design Movement
**Contemporary museography with celestial-chart detailing.** The interface behaves like a late-evening exhibition guide: guarded darkness, discrete labels, and artefacts suspended as material evidence across time.

### Core Principles
1. **Artefacts lead, interface recedes:** visual replicas and historical dates receive the highest contrast; controls stay precise and low-noise.
2. **Time is a physical object:** the chronology reads as a long bronze rail with illuminated stops and a visible progress position.
3. **Scholarly but welcoming:** archival terminology is paired with direct, readable language and short interpretive summaries.
4. **Material contrast creates hierarchy:** obsidian slate, aged brass, vellum text, and occasional copper bring a sense of material culture without visual clutter.

### Color Philosophy
The base is **rich slate / near-obsidian (#0F172A)**, giving the artefacts and documentary text a controlled exhibition backdrop. **Aged exhibition gold (#D4AF37)** is reserved for chronology, focused states, and collection marks, so it communicates importance rather than decoration. Warm parchment and muted stone neutrals soften reading surfaces; oxidised teal is a rare, quiet counterpoint for active audio states.

### Layout Paradigm
The desktop composition uses a **curatorial rail** rather than a conventional centred page. A narrow editorial masthead runs across the top, a long horizontally scrollable historical axis forms the core exhibition surface, and an asymmetric spotlight panel changes with the selected era. On smaller screens, the rail becomes a vertical guided walk with the selected object presented first.

### Signature Elements
1. **Bronze chronology rail:** a tactile timeline line, locator dots, and millennial tick marks that anchor every era.
2. **Vitrine frames:** angular, glass-dark artefact frames with a gold corner registration mark and a subtle reflected highlight.
3. **Catalogue notation:** small uppercase accession-style labels, fine rules, and period index numbers that make the experience feel collected and intentional.

### Interaction Philosophy
Each interaction should feel like handling a gallery guide: calm, deliberate, and reversible. Timeline stops update the spotlight and status information immediately; artefact cards invite closer inspection through a clear “Open dossier” action. Filters never hide the timeline’s structure—rather, they dim non-matching objects to preserve context.

### Animation
Use a 180–260 ms snappy ease-out for filters, focus rings, and card lifts. The selected chronology marker sends a restrained bronze pulse through the rail. Artefact frames rise by 3–5 px and brighten their bevel on hover; the dossier opens with a 0.95-to-1 scale and opacity transition. A subtle drifting grain and light sweep may appear only when reduced motion is not requested; no perpetual large movement or distracting parallax.

### Typography System
**Cormorant Garamond** is the ceremonial display face for era names, artefact titles, and interpretive pull quotes. **DM Sans** provides precise, accessible body text, labels, and interface controls. Catalogue labels are uppercase, widely tracked, and smaller than body text; content titles are never all caps.

### Brand Essence
**A living gallery guide for students who want to trace Indian art through landmark objects, not disconnected dates.**

Personality: **contemplative, exacting, luminous**.

### Brand Voice
Headlines should be observational and evocative; CTAs should be specific, brief, and curatorial. Avoid generic invitation language and excessive marketing claims.

Example lines:
- “Six objects. Four millennia. One changing visual language.”
- “Open the object dossier.”

### Wordmark & Logo
The wordmark is **KALA / CHRONICLE**, set as a restrained editorial signature with a thin gold separator. The symbol is a bold, textless **bronze disc intersected by a vertical time axis**, with two carved half-arcs suggesting both a museum seal and a rising sun.

### Signature Brand Color
**Exhibition Gold — #D4AF37.**

## Style Decisions

- Retain the requested museum-grade dark mode; use gold only as purposeful navigation, focus, or provenance signal.
- Avoid rounded card stacks, purple gradients, generic centred hero layouts, and default sans-only typography.
- Give each period a distinct, not-repeated virtual replica treatment and maintain accessible contrast on all copy.
- Treat every object depiction as a **museum evidence study**—a vitrine-lit replica, archival plate, sculpture model, or framed material fragment—rather than a flat decorative icon.
- Keep the bronze chronology rail as the primary spatial metaphor for period navigation; its ticks, stations, and indexed labels should remain materially present.
