/**
 * Archive Noir design system: a dark contemporary museum guide with a bronze chronology rail,
 * vitrine-like objects, Cormorant Garamond display typography, and intentionally sparse gold accents.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Headphones,
  Landmark,
  MapPin,
  Pause,
  Play,
  Search,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

type Medium = "Sculpture" | "Painting" | "Architecture";

type Artifact = {
  id: string;
  index: string;
  period: string;
  shortPeriod: string;
  dates: string;
  sortYear: number;
  title: string;
  subtitle: string;
  medium: string;
  mediums: Medium[];
  location: string;
  discovery: string;
  significance: string;
  features: string[];
  sourceLabel: string;
  sourceUrl: string;
  image?: string;
  visual: "dancing" | "lion" | "buddha" | "fresco" | "sarnath" | "nataraja" | "miniature";
  tone: string;
};

const artifacts: Artifact[] = [
  {
    id: "dancing-girl",
    index: "01",
    period: "Indus Valley Civilization",
    shortPeriod: "Indus Valley",
    dates: "c. 2500–1700 BCE",
    sortYear: -2500,
    title: "Dancing Girl",
    subtitle: "Mohenjo-daro",
    medium: "Cast bronze (lost-wax)",
    mediums: ["Sculpture"],
    location: "National Museum, New Delhi",
    discovery: "Mohenjo-daro, Sindh (present-day Pakistan)",
    significance:
      "This small figure is an exceptional early example of lost-wax bronze casting. Her poised stance, stacked bangles, and confident asymmetry make the object a vivid witness to Indus Valley metallurgical skill and figural imagination.",
    features: ["Lost-wax casting", "Stacked bangles", "Asymmetric contrapposto"],
    sourceLabel: "Smarthistory: Dancing Girl from Mohenjo-daro",
    sourceUrl: "https://smarthistory.org/dancing-girl-mohenjodaro/",
    image: "/manus-storage/dancing-girl-vitrine_f9866aea.jpg",
    visual: "dancing",
    tone: "bronze",
  },
  {
    id: "lion-capital",
    index: "02",
    period: "Mauryan & Sunga",
    shortPeriod: "Mauryan",
    dates: "c. 3rd–1st century BCE",
    sortYear: -250,
    title: "Lion Capital of Ashoka",
    subtitle: "Sarnath pillar capital",
    medium: "Polished Chunar sandstone",
    mediums: ["Sculpture", "Architecture"],
    location: "Sarnath Museum, Uttar Pradesh",
    discovery: "Sarnath, Uttar Pradesh, India",
    significance:
      "Made for an Ashokan pillar at the place associated with the Buddha’s first sermon, the capital turns imperial stonework into a visual language of dharma. Its back-to-back lions, wheel, animals, and lotus connect royal authority with a message imagined to travel in every direction.",
    features: ["Four addorsed lions", "Dharmachakra", "Mauryan polish"],
    sourceLabel: "UC Berkeley ORIAS: Lion Capital of Ashoka",
    sourceUrl: "https://orias.berkeley.edu/lion-capital-ashoka",
    visual: "lion",
    tone: "sandstone",
  },
  {
    id: "gandhara-buddha",
    index: "03",
    period: "Buddhist & Jain / Gandhara & Mathura",
    shortPeriod: "Gandhara & Mathura",
    dates: "c. 1st–4th century CE",
    sortYear: 150,
    title: "Seated Buddha",
    subtitle: "Gandhara tradition",
    medium: "Grey schist sculpture",
    mediums: ["Sculpture"],
    location: "Peshawar Museum, Pakistan (comparable examples)",
    discovery: "Gandhara region, north-western Indian subcontinent",
    significance:
      "Gandharan workshops developed an iconic image of the Buddha that combines monastic subject matter with a highly modelled, draped figural vocabulary. This seated format helped establish enduring visual conventions for Buddhist devotion and teaching across Asia.",
    features: ["Heavy robe folds", "Meditative pose", "Halo and ushnisha"],
    sourceLabel: "Smarthistory: Images of enlightenment in India",
    sourceUrl: "https://smarthistory.org/aniconic-vs-iconic-depictions-of-the-buddha-in-india/",
    visual: "buddha",
    tone: "schist",
  },
  {
    id: "padmapani",
    index: "04",
    period: "Gupta Golden Age",
    shortPeriod: "Gupta",
    dates: "c. 4th–6th century CE",
    sortYear: 475,
    title: "Padmapani Bodhisattva",
    subtitle: "Ajanta Cave 1 mural",
    medium: "Mural painting on rock-cut cave wall",
    mediums: ["Painting", "Architecture"],
    location: "Ajanta Caves, Maharashtra",
    discovery: "Cave 1, Ajanta, Maharashtra, India",
    significance:
      "The Ajanta murals demonstrate highly developed pictorial design: softened modelling, mineral colour, expressive gesture, and dense narrative imagination. Padmapani’s lowered gaze and lotus create an image of compassion within an immersive monastic architectural setting.",
    features: ["Mineral pigments", "Lotus attribute", "Expressive modelling"],
    sourceLabel: "Smarthistory: The Gupta Period",
    sourceUrl: "https://smarthistory.org/gupta-period/",
    visual: "fresco",
    tone: "ochre",
  },
  {
    id: "sarnath-buddha",
    index: "05",
    period: "Gupta Golden Age",
    shortPeriod: "Gupta",
    dates: "c. 5th century CE",
    sortYear: 500,
    title: "Standing Buddha",
    subtitle: "Sarnath school",
    medium: "Buff sandstone sculpture",
    mediums: ["Sculpture"],
    location: "Sarnath Museum, Uttar Pradesh",
    discovery: "Sarnath, Uttar Pradesh, India",
    significance:
      "Gupta-era images from Sarnath favour a composed, idealised calm. The nearly transparent robe and softened contours move attention away from bodily mass toward a spiritual presence, helping define a classical idiom for later Indian Buddhist sculpture.",
    features: ["Subtle robe lines", "Serene expression", "Idealised proportion"],
    sourceLabel: "Smarthistory: The Gupta Period",
    sourceUrl: "https://smarthistory.org/gupta-period/",
    visual: "sarnath",
    tone: "stone",
  },
  {
    id: "nataraja",
    index: "06",
    period: "Medieval South Indian / Chola",
    shortPeriod: "Chola",
    dates: "c. 9th–13th century CE",
    sortYear: 1050,
    title: "Shiva as Nataraja",
    subtitle: "Chola bronze",
    medium: "Copper-alloy bronze (lost-wax)",
    mediums: ["Sculpture"],
    location: "Government Museum, Chennai (representative Chola bronzes)",
    discovery: "Tamil Nadu, India",
    significance:
      "The dancing Shiva visualises cosmic creation, preservation, dissolution, concealment, and grace in one charged image. Chola bronzes were not static display objects: their lost-wax casting and processional use made divine presence materially mobile within temple life.",
    features: ["Ring of fire", "Cosmic dance", "Processional bronze"],
    sourceLabel: "The Met: India, Art and Culture 1300–1900",
    sourceUrl: "https://www.metmuseum.org/met-publications/india-art-and-culture-1300-1900",
    visual: "nataraja",
    tone: "gold",
  },
  {
    id: "jahangir-miniature",
    index: "07",
    period: "Mughal & Rajput Miniature Painting",
    shortPeriod: "Mughal & Rajput",
    dates: "c. 16th–18th century CE",
    sortYear: 1615,
    title: "Jahangir Preferring a Sufi Shaikh to Kings",
    subtitle: "Imperial Mughal album folio",
    medium: "Opaque watercolor, ink, and gold on paper",
    mediums: ["Painting"],
    location: "Freer Gallery of Art, Smithsonian Institution",
    discovery: "Mughal imperial atelier, likely Agra, India",
    significance:
      "Mughal miniature painting brought together Persianate book arts, close observation, and courtly political imagery. This famous allegorical portrait turns a manuscript folio into a carefully staged statement about authority, connoisseurship, and spiritual hierarchy.",
    features: ["Opaque watercolor", "Gold illumination", "Courtly portraiture"],
    sourceLabel: "V&A: The Arts of the Mughal Empire",
    sourceUrl: "https://www.vam.ac.uk/articles/the-arts-of-the-mughal-empire",
    visual: "miniature",
    tone: "vermilion",
  },
];

const periods = Array.from(new Set(artifacts.map((artifact) => artifact.period)));
const mediaFilters: Array<Medium | "All"> = ["All", "Sculpture", "Painting", "Architecture"];

function formatYear(year: number) {
  if (year < 0) return `${Math.abs(year).toLocaleString()} BCE`;
  return `${year} CE`;
}

function ArtifactVisual({ artifact, large = false }: { artifact: Artifact; large?: boolean }) {
  if (artifact.image) {
    return (
      <div className={`artifact-image ${large ? "artifact-image-large" : ""}`}>
        <img src={artifact.image} alt={`Virtual exhibition replica: ${artifact.title}`} />
        <div className="artifact-glass" />
        <div className="artifact-corner artifact-corner-top" />
        <div className="artifact-corner artifact-corner-bottom" />
      </div>
    );
  }

  if (artifact.visual === "lion") {
    return (
      <div className={`css-replica lion-replica ${large ? "css-replica-large" : ""}`} aria-label="Stylized virtual model of the Lion Capital of Ashoka">
        <div className="lion-wheel"><span /></div>
        <div className="lion-head lion-a" /><div className="lion-head lion-b" /><div className="lion-head lion-c" /><div className="lion-head lion-d" />
        <div className="lion-abacus"><i /><i /><i /><i /></div>
        <div className="lion-lotus" />
      </div>
    );
  }

  if (artifact.visual === "buddha" || artifact.visual === "sarnath") {
    return (
      <div className={`css-replica buddha-replica ${artifact.visual === "sarnath" ? "sarnath-replica" : ""} ${large ? "css-replica-large" : ""}`} aria-label={artifact.visual === "sarnath" ? "Stylized virtual model of a Gupta standing Buddha" : "Stylized virtual model of a seated Gandharan Buddha"}>
        <div className="buddha-halo" /><div className="buddha-head" /><div className="buddha-body" /><div className="buddha-robes" /><div className="buddha-seat" />
      </div>
    );
  }

  if (artifact.visual === "fresco") {
    return <div className={`css-replica fresco-replica ${large ? "css-replica-large" : ""}`} aria-label="Stylized museum study of the Padmapani Bodhisattva mural"><div className="fresco-panel"><div className="fresco-halo" /><div className="fresco-face" /><div className="fresco-crown" /><div className="fresco-shoulder" /><div className="fresco-lotus" /><div className="fresco-vine" /></div></div>;
  }

  if (artifact.visual === "nataraja") {
    return <div className={`css-replica nataraja-replica ${large ? "css-replica-large" : ""}`} aria-label="Stylized museum study of the Chola Nataraja bronze"><div className="nataraja-ring" /><div className="nataraja-figure"><i className="nataraja-head" /><i className="nataraja-torso" /><i className="nataraja-arm arm-one" /><i className="nataraja-arm arm-two" /><i className="nataraja-leg leg-one" /><i className="nataraja-leg leg-two" /></div><div className="nataraja-plinth" /></div>;
  }

  return (
    <div className={`css-replica miniature-replica ${large ? "css-replica-large" : ""}`} aria-label="Stylized virtual model of a Mughal miniature painting">
      <div className="miniature-border"><div className="miniature-sun" /><div className="miniature-portrait"><span /></div><div className="miniature-arch" /><div className="miniature-ground" /></div>
    </div>
  );
}

function DetailModal({ artifact, onClose, isNarrating, onNarrate }: { artifact: Artifact; onClose: () => void; isNarrating: boolean; onNarrate: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <section className="dossier-modal" role="dialog" aria-modal="true" aria-labelledby="dossier-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close artifact dossier"><X size={18} /></button>
        <div className="modal-visual"><ArtifactVisual artifact={artifact} large /></div>
        <div className="modal-content">
          <p className="catalogue-label"><span>Object dossier {artifact.index}</span><span>{artifact.dates}</span></p>
          <p className="modal-period">{artifact.period}</p>
          <h2 id="dossier-title">{artifact.title}</h2>
          <p className="modal-subtitle">{artifact.subtitle}</p>
          <div className="modal-facts">
            <div><span>Medium</span><strong>{artifact.medium}</strong></div>
            <div><span>Current location</span><strong>{artifact.location}</strong></div>
            <div><span>Origin / discovery</span><strong>{artifact.discovery}</strong></div>
          </div>
          <p className="modal-copy">{artifact.significance}</p>
          <div className="feature-list">{artifact.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
          <div className="modal-actions">
            <button className="gold-button" onClick={onNarrate}>{isNarrating ? <Pause size={15} /> : <Volume2 size={15} />}{isNarrating ? "Pause guide" : "Play object guide"}</button>
            <a href={artifact.sourceUrl} target="_blank" rel="noreferrer" className="source-link">Read source <ArrowUpRight size={15} /></a>
          </div>
          <p className="source-note">Interpretive summary · {artifact.sourceLabel}</p>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const [activeArtifact, setActiveArtifact] = useState(artifacts[0]);
  const [activeMedium, setActiveMedium] = useState<Medium | "All">("All");
  const [activePeriod, setActivePeriod] = useState("All periods");
  const [dossier, setDossier] = useState<Artifact | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  const visibleArtifacts = useMemo(() => artifacts.filter((artifact) => {
    const mediumMatch = activeMedium === "All" || artifact.mediums.includes(activeMedium);
    const periodMatch = activePeriod === "All periods" || artifact.period === activePeriod;
    return mediumMatch && periodMatch;
  }), [activeMedium, activePeriod]);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 22);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const selectArtifact = (artifact: Artifact) => {
    setActiveArtifact(artifact);
    setActivePeriod("All periods");
    setActiveMedium("All");
  };

  const toggleNarration = () => {
    if (!("speechSynthesis" in window)) return;
    if (isNarrating) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(`${activeArtifact.title}. ${activeArtifact.dates}. ${activeArtifact.significance}`);
    utterance.rate = 0.9;
    utterance.pitch = 0.95;
    utterance.onend = () => setIsNarrating(false);
    utterance.onerror = () => setIsNarrating(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsNarrating(true);
  };

  const scrollRail = (direction: number) => railRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });

  return (
    <div className="archive-shell">
      <header className={`topbar ${isScrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Kala Chronicle home">
          <img src="/manus-storage/kala-chronicle-mark_d682e469.png" alt="" />
          <span><b>KALA</b><em>/</em>CHRONICLE</span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#timeline">Timeline</a><a href="#collection">Collection</a><a href="#method">CO1 brief</a>
        </nav>
        <button className={`audio-status ${isNarrating ? "audio-live" : ""}`} onClick={toggleNarration} aria-label={isNarrating ? "Stop audio guide" : "Play audio guide for selected artifact"}>
          {isNarrating ? <Volume2 size={15} /> : <Headphones size={15} />}<span>{isNarrating ? "Guide playing" : "Audio guide"}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-rail-label"><span>CURATED FOR CO1</span><i /></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={14} /> Digital exhibition · Indian art history</p>
              <h1 id="hero-title">Six objects.<br /><i>Four millennia.</i><br />One changing visual language.</h1>
              <p className="hero-intro">Travel from the bronze casting of the Indus Valley to the concentrated brilliance of Mughal manuscript painting—one landmark object at a time.</p>
              <div className="hero-actions">
                <a className="gold-button" href="#timeline">Enter the chronology <ArrowUpRight size={16} /></a>
                <button className="plain-button" onClick={() => setDossier(activeArtifact)}><Search size={16} /> Open featured dossier</button>
              </div>
            </div>
            <button className="hero-vitrine" onClick={() => setDossier(activeArtifact)} aria-label={`Open dossier for ${activeArtifact.title}`}>
              <ArtifactVisual artifact={activeArtifact} large />
              <div className="vitrine-caption"><span>Featured object</span><strong>{activeArtifact.title}</strong><em>{activeArtifact.dates}</em></div>
            </button>
          </div>
          <div className="hero-footnotes"><span><Clock3 size={14} /> Chronological span: c. 2500 BCE—18th century CE</span><span><Landmark size={14} /> 7 virtual replicas / study objects</span></div>
        </section>

        <section id="timeline" className="timeline-section" aria-labelledby="timeline-title">
          <div className="section-heading">
            <div><p className="eyebrow">Chronological axis</p><h2 id="timeline-title">Walk the collection</h2></div>
            <p>Choose a marker to focus the gallery. Use filters to trace material, image-making, or architectural context without losing the wider chronology.</p>
          </div>

          <div className="filter-bar" aria-label="Timeline filters">
            <div className="filter-group"><span>Medium</span>{mediaFilters.map((medium) => <button key={medium} className={activeMedium === medium ? "filter-active" : ""} onClick={() => setActiveMedium(medium)}>{medium}</button>)}</div>
            <label className="period-select"><span>Period</span><select value={activePeriod} onChange={(event) => setActivePeriod(event.target.value)}><option>All periods</option>{periods.map((period) => <option key={period}>{period}</option>)}</select></label>
          </div>

          <div className="timeline-controls"><span>{visibleArtifacts.length} visible study object{visibleArtifacts.length === 1 ? "" : "s"}</span><div><button onClick={() => scrollRail(-1)} aria-label="Scroll timeline backward"><ChevronLeft size={18} /></button><button onClick={() => scrollRail(1)} aria-label="Scroll timeline forward"><ChevronRight size={18} /></button></div></div>
          <div ref={railRef} className="timeline-rail" tabIndex={0} aria-label="Scrollable chronology of landmark Indian art objects">
            <div className="rail-track"><span className="rail-start">2500 BCE</span><span className="rail-end">1800 CE</span></div>
            <div className="timeline-items">
              {visibleArtifacts.map((artifact) => (
                <button key={artifact.id} className={`timeline-stop ${activeArtifact.id === artifact.id ? "timeline-stop-active" : ""}`} onClick={() => selectArtifact(artifact)}>
                  <span className="stop-dot"><i /></span><span className="stop-date">{formatYear(artifact.sortYear)}</span><span className="stop-index">{artifact.index}</span><strong>{artifact.shortPeriod}</strong><em>{artifact.title}</em>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="collection" className="spotlight-section" aria-label="Selected artifact spotlight">
          <div className="spotlight-panel">
            <div className="spotlight-meta"><span>Object {activeArtifact.index} / {artifacts.length.toString().padStart(2, "0")}</span><span>{activeArtifact.dates}</span></div>
            <div className="spotlight-body">
              <div className="spotlight-copy">
                <p className="eyebrow">{activeArtifact.period}</p><h2>{activeArtifact.title}</h2><p className="object-subtitle">{activeArtifact.subtitle}</p><p>{activeArtifact.significance}</p>
                <div className="object-meta"><div><MapPin size={15} /><span>Held at</span><strong>{activeArtifact.location}</strong></div><div><Landmark size={15} /><span>Medium</span><strong>{activeArtifact.medium}</strong></div></div>
                <div className="spotlight-actions"><button className="gold-button" onClick={() => setDossier(activeArtifact)}>Open object dossier <ArrowUpRight size={16} /></button><button className="listen-button" onClick={toggleNarration}>{isNarrating ? <Pause size={16} /> : <Play size={16} />}{isNarrating ? "Pause narration" : "Listen (TTS)"}</button></div>
              </div>
              <button className="spotlight-vitrine" onClick={() => setDossier(activeArtifact)} aria-label={`Open lightbox for ${activeArtifact.title}`}><ArtifactVisual artifact={activeArtifact} large /><span className="zoom-hint"><Search size={15} /> Inspect replica</span></button>
            </div>
          </div>
        </section>

        <section className="object-grid-section" aria-labelledby="objects-title">
          <div className="section-heading compact"><div><p className="eyebrow">Study objects</p><h2 id="objects-title">The collection, in sequence</h2></div><p>Each card opens a contextual dossier with material, place, meaning, visual cues, and an optional spoken guide.</p></div>
          <div className="object-grid">{artifacts.map((artifact) => <article className={`artifact-card ${activeArtifact.id === artifact.id ? "artifact-card-active" : ""}`} key={artifact.id}>
            <button className="card-visual" onClick={() => { selectArtifact(artifact); setDossier(artifact); }} aria-label={`Open ${artifact.title} dossier`}><ArtifactVisual artifact={artifact} /><span className="card-index">{artifact.index}</span></button>
            <div className="card-copy"><p>{artifact.dates}</p><h3>{artifact.title}</h3><span>{artifact.shortPeriod}</span><button onClick={() => { selectArtifact(artifact); setDossier(artifact); }}>Open dossier <ArrowUpRight size={14} /></button></div>
          </article>)}</div>
        </section>

        <section id="method" className="method-section" aria-labelledby="method-title">
          <div><p className="eyebrow">CO1 / 10-mark rubric</p><h2 id="method-title">Designed for visual literacy, not memorisation.</h2><p>This prototype makes chronology, material, location, style, and cultural context visible together. It uses virtual replicas for close viewing without claiming to replace the original objects.</p></div>
          <div className="rubric-grid"><div><b>01</b><h3>Historical progression</h3><p>Seven objects trace six required periods in chronological order.</p></div><div><b>02</b><h3>Object interpretation</h3><p>Every dossier identifies medium, place, visual features, and significance.</p></div><div><b>03</b><h3>Interactive engagement</h3><p>Timeline navigation, medium/period filters, modals, and browser TTS aid discovery.</p></div><div><b>04</b><h3>Accessible presentation</h3><p>Responsive layout, keyboard-reachable controls, labelled images, and reduced-motion support.</p></div></div>
        </section>
      </main>

      <footer><span>KALA / CHRONICLE</span><p>Digital Timeline of Indian Art History · Educational prototype</p><a href="#top">Back to top ↑</a></footer>
      {dossier && <DetailModal artifact={dossier} onClose={() => { window.speechSynthesis?.cancel(); setIsNarrating(false); setDossier(null); }} isNarrating={isNarrating} onNarrate={toggleNarration} />}
    </div>
  );
}
