# CO1 Documentation — Digital Timeline of Indian Art History

**Author:** Manus AI  
**Prototype:** *Kala Chronicle*  
**Scope:** Interactive web-based timeline with virtual artifact replicas for Course Outcome 1 (10 marks)

## Educational intent

*Kala Chronicle* is an interactive study environment rather than a static date chart. It presents landmark works in sequence while allowing the learner to move between chronology, material, site, style, and cultural context. The central bronze rail makes time a visible navigational object; each stop leads to a curated dossier that treats the work as evidence. The virtual replicas are original educational visualisations and are explicitly framed as virtual exhibition studies, not substitutes for the original works.

## Historical progression and chosen objects

The collection begins with the compact bronze *Dancing Girl* from Mohenjo-daro, a valuable starting point for studying Indus Valley lost-wax casting and figural confidence.[1] It then moves to the Lion Capital at Sarnath, where the four lions, dharmachakra, animal abacus, and lotus combine Buddhist and imperial meanings in a Mauryan pillar setting.[2] The Gandharan Buddha introduces the iconic Buddhist image, while the two Gupta entries contrast painted and sculpted ideals: Ajanta’s *Padmapani* makes devotional meaning through mural form, and the Sarnath Buddha demonstrates a composed, idealised sculptural idiom.[3] [4]

The later part of the chronology tracks a shift from sacred bronze to courtly manuscript painting. The Chola *Nataraja* is included as a processional, lost-wax bronze image of Shiva’s cosmic dance. The final Mughal object, *Jahangir Preferring a Sufi Shaikh to Kings*, provides a focused entry into opaque watercolor, gold, portraiture, and imperial workshop culture. Mughal miniature painting flourished within a wide manuscript tradition, shaped by Persianate practice and adapted by Indian ateliers.[5] [6]

| Sequence | Required historical period | Landmark artifact / virtual study object | Learning focus |
| --- | --- | --- | --- |
| 01 | Indus Valley Civilization, c. 2500–1700 BCE | *Dancing Girl*, Mohenjo-daro | Lost-wax bronze, jewellery, figural stance, Indus material culture. |
| 02 | Mauryan & Sunga, c. 3rd–1st century BCE | Lion Capital of Ashoka, Sarnath | Sandstone, pillar architecture, Mauryan polish, dharmachakra, imperial Buddhism. |
| 03 | Buddhist & Jain / Gandhara & Mathura, c. 1st–4th century CE | Seated Buddha, Gandhara tradition | Sculptural drapery, halo, meditation, formation of Buddhist iconography. |
| 04 | Gupta Golden Age, c. 4th–6th century CE | *Padmapani*, Ajanta Cave 1 | Cave mural, mineral colour, lotus symbolism, image within monastic architecture. |
| 05 | Gupta Golden Age, c. 5th century CE | Standing Buddha, Sarnath school | Sandstone, subtle robe treatment, serene classical ideal. |
| 06 | Medieval South Indian / Chola, c. 9th–13th century CE | Shiva as *Nataraja* | Copper alloy, processional bronze, cosmic dance, temple context. |
| 07 | Mughal & Rajput miniature painting, c. 16th–18th century CE | *Jahangir Preferring a Sufi Shaikh to Kings* | Opaque watercolor, gold, manuscript folio, allegorical courtly portraiture. |

## Interactive and technical implementation

The prototype uses a responsive React and Tailwind CSS frontend. Its dark slate and exhibition-gold visual system is deliberately museum-oriented: gold identifies chronology, selected states, provenance, and primary curatorial actions rather than becoming general decoration. Cormorant Garamond is reserved for interpretive display type, while DM Sans maintains readable interface labels and descriptive text.

| Requirement | Implemented feature |
| --- | --- |
| Smooth chronological structure | A keyboard-focusable horizontal timeline rail with millennial ticks, object stations, arrow controls, and a mobile-friendly scroll interaction. |
| Period and medium filtering | Medium chips for **Sculpture**, **Painting**, and **Architecture**, alongside a period selector. Filters update the visible stations while preserving the chronology’s role as the central navigation metaphor. |
| Rich artifact detail view | Each object opens a modal dossier with title, era, medium, current location, origin or discovery context, stylistic features, interpretive significance, and a linked educational reference. |
| Virtual replicas | Four original high-resolution vitrined exhibition images and three original CSS-built material studies: the Lion Capital, a Gandharan Buddha, and a Mughal manuscript folio. Further CSS-built studies support the Ajanta, Sarnath, and Chola selections. |
| Audio and visual enhancement | Browser-native text-to-speech narrates the active object; hover lift, vitrine glass, gold corner registrations, controlled modal motion, and reduced-motion handling support engagement without distracting from the object. |
| Responsive accessibility | Semantic headings, labelled controls, keyboard navigation, Escape-to-close modal behaviour, readable contrast, and responsive mobile reflow are included. |

## CO1 / 10-mark alignment

The design aligns with a 10-mark CO1 evaluation because it demonstrates both **historical coverage** and **visual analysis**. Learners can identify a period’s landmark object and then connect that object to medium, style, iconography, place, and cultural role. This supports comparison across time—for example, from the small lost-wax bronze of the Indus Valley to Chola metal casting, or from the devotional image at Ajanta to the allegorical manuscript page of the Mughal court.

| Assessment dimension | Evidence in the prototype |
| --- | --- |
| Chronology and coverage | Seven study objects span all six required periods in an ordered, interactive sequence. |
| Formal and material understanding | Dossiers foreground medium, visual features, and object-specific terminology rather than period names alone. |
| Cultural and historical context | Each dossier includes place, present collection or comparable collection context, iconography, and concise significance. |
| Digital interactivity | Timeline nodes, filters, dossier modals, high-resolution/CSS replicas, lightbox treatment, and text-to-speech narration create multiple study pathways. |
| Presentation quality | The responsive dark museum interface creates a coherent, accessible exhibition experience across desktop and mobile views. |

## References

[1]: [Smarthistory, “Dancing Girl from Mohenjo-daro.”](https://smarthistory.org/dancing-girl-mohenjodaro/)  
[2]: [UC Berkeley ORIAS, “Lion Capital of Ashoka.”](https://orias.berkeley.edu/lion-capital-ashoka)  
[3]: [Smarthistory, “Images of Enlightenment: Aniconic vs. Iconic Depictions of the Buddha in India.”](https://smarthistory.org/aniconic-vs-iconic-depictions-of-the-buddha-in-india/)  
[4]: [Smarthistory, “The Gupta Period.”](https://smarthistory.org/gupta-period/)  
[5]: [Victoria and Albert Museum, “The Arts of the Mughal Empire.”](https://www.vam.ac.uk/articles/the-arts-of-the-mughal-empire)  
[6]: [Princeton University Art Museum, “Miniature Paintings from South Asia.”](https://artmuseum.princeton.edu/art/collections/themes/miniature-paintings-south-asia)
