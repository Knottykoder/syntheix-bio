// Data constants for BIONEXT — Precision Gene Therapy & Regenerative Medicine

export interface BioNextSolution {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  metricLabel: string;
  metricValue: string;
  tag: string;
}

export interface ResearchPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const BIONEXT_BRAND = {
  name: "BIONEXT",
  tagline: "Precision Gene Therapy & Regenerative Medicine",
  heroHeadline: "Unlock the Future of Biotechnology. Let Us Lead the Way.",
  heroSubheadline:
    "Developing next-gen biotechnological solutions tailored for real-world medical applications, gene therapy, and cellular regeneration.",
  cuttingEdgeText:
    "Advancing gene therapy and regenerative medicine for a healthier, more resilient future.",
  impactingLivesText:
    "Over 11K+ breakthroughs tested and applied in global medical research and clinical trials.",
  precisionBiotechText:
    "Developing next-gen biotechnological solutions tailored for real-world applications.",
};

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: "gene-therapy",
    number: "01",
    title: "Precision AAV Gene Vector Engineering",
    subtitle: "Targeted capsid tropism & immune evasion",
    description:
      "Engineered adeno-associated viral vectors engineered for tissue-specific gene delivery with sub-nanometer tropism accuracy and minimal off-target immunogenicity.",
    stats: [
      { label: "CAPSID PURITY", value: "99.8%" },
      { label: "TROPISM SPECIFICITY", value: "100x Targeted" },
      { label: "OFF-TARGET RATE", value: "< 0.01%" },
    ],
  },
  {
    id: "regenerative-medicine",
    number: "02",
    title: "Stem Cell Pluripotency & Reprogramming",
    subtitle: "Induced pluripotent stem cell organoid assembly",
    description:
      "Automated microfluidic differentiation of iPSCs into cardiac, neural, and hepatic organoid tissue models for patient-specific therapeutic screening.",
    stats: [
      { label: "DIFFERENTIATION RATE", value: "94.2%" },
      { label: "ORGANOID VIABILITY", value: "> 90 Days" },
      { label: "BATCH REPEATABILITY", value: "99.1%" },
    ],
  },
  {
    id: "synthetic-genomics",
    number: "03",
    title: "De Novo Chromosomal Synthesis",
    subtitle: "Megabase-scale enzymatic DNA assembly",
    description:
      "High-throughput enzymatic synthesis of artificial genetic circuits for metabolic disease correction and cell-based bio-factories.",
    stats: [
      { label: "SYNTHESIS SPEED", value: "10kb / min" },
      { label: "FIDELITY ACCURACY", value: "99.99%" },
      { label: "MAX CIRCUIT SIZE", value: "2.4 Mb" },
    ],
  },
];

export const SOLUTIONS_DATA: BioNextSolution[] = [
  {
    id: "aav-delivery",
    category: "GENE THERAPY",
    title: "Tissue-Targeted AAV Delivery Systems",
    shortDesc: "High-affinity viral capsids tailored for central nervous system and muscular therapies.",
    fullDesc:
      "Our computational capsid optimization platform screens billions of amino acid variants to identify vectors capable of crossing the blood-brain barrier with minimal liver sequestration.",
    metricLabel: "TARGETING ACCURACY",
    metricValue: "99.4% Tropism",
    tag: "FDA Approved Phase II",
  },
  {
    id: "cell-regeneration",
    category: "REGENERATIVE MEDICINE",
    title: "Autologous Cell Regeneration Protocols",
    shortDesc: "Patient-derived cellular reprogramming for tissue restoration and organ repair.",
    fullDesc:
      "Closed-loop cell isolation and expansion protocols produce clinical-grade regenerative therapeutics within 14 days, maintaining genomic stability throughout culture cycles.",
    metricLabel: "CULTURE DURATION",
    metricValue: "14 Days Total",
    tag: "GMP Compliant",
  },
  {
    id: "crispr-prime",
    category: "GENOME EDITING",
    title: "Precision Prime & Base Editing",
    shortDesc: "Double-strand break-free genomic correction for monogenic hereditary disorders.",
    fullDesc:
      "Custom engineered prime editing guide RNAs achieve precise transition, transversion, and insertion corrections with zero double-strand DNA cleavage risk.",
    metricLabel: "EDITING EFFICIENCY",
    metricValue: "88.6% On-Target",
    tag: "Clinical Stage",
  },
  {
    id: "organoid-screening",
    category: "DRUG DISCOVERY",
    title: "3D Microfluidic Organoid Screening",
    shortDesc: "High-content physiological screening using patient-derived 3D organoid tissues.",
    fullDesc:
      "Simultaneous optical and electrical readout channels track tissue responses to drug candidates in real time under realistic physiological shear stress.",
    metricLabel: "THROUGHPUT RATE",
    metricValue: "10,000 Assays/Day",
    tag: "High-Throughput",
  },
];

export const IMPACT_METRICS_DATA: ImpactMetric[] = [
  {
    id: "breakthroughs",
    value: 11000,
    suffix: "+",
    label: "Breakthroughs Tested",
    description: "Therapeutic candidates evaluated across global research labs.",
  },
  {
    id: "trials",
    value: 42,
    suffix: "",
    label: "Active Clinical Trials",
    description: "Phase I-III human clinical trials using BioNext vector technology.",
  },
  {
    id: "precision",
    value: 99.4,
    suffix: "%",
    label: "Delivery Tropism Precision",
    description: "Verified tissue specificity in preclinical primate models.",
  },
  {
    id: "patients",
    value: 18500,
    suffix: "+",
    label: "Patients Impacted",
    description: "Lives reached through regenerative cellular treatments.",
  },
];
