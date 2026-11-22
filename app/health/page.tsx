import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";
import MovementLevels from "@/components/MovementLevels";
import WikiLink from "@/components/WikiLink";

export const metadata = pageMeta(
  "Health",
  "Lorenzo Delano's health, lab-verified: body composition, blood chemistry, and performance benchmarks, with the reports behind every number.",
  "/health",
);

// Data (pages 1–2 of the health-status source). Each table holds grouped
// sub-sections; a group is one accent header row (domain | instrument) with
// category rows underneath. supportive metrics render italic + indented.
// The 4th element on a metric is a hover definition (dotted underline).

const FUNCTIONAL_HOMEOSTASIS: StatTableData = {
  title: "Functional homeostasis",
  groups: [
    {
      domain: "Blood Biochemistry",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Cardiovascular (low-risk transport)",
          metrics: [
            ["", "My lipids and inflammation sit at low-risk levels, with iron and oxygen transport in full supply", false],
            ["ApoB", "0.70 g/L / 70 mg/dL (~15th percentile)", true, "Apolipoprotein B — the count of atherogenic (artery-clogging) cholesterol particles. The strongest single lipid predictor of heart disease, and causal for it. Optimal is ≤0.6 g/L."],
            ["Hemoglobin", "14.1 g/dL", true, "The oxygen-carrying protein in red blood cells; the primary screen for anemia. 14–16.5 g/dL is optimal for men."],
            ["Ferritin", "166 µg/L", true, "Stored iron, the reserve for making hemoglobin. It falls before anemia appears and rises with inflammation. 50–150 µg/L is optimal for men."],
            ["hs-CRP", "<1.0 mg/L", true, "High-sensitivity C-reactive protein — the standard marker of systemic inflammation and an independent cardiovascular risk predictor. An acute-phase reactant, so it is read in a recovered, resting state; mine sits below 1 whenever measured there (2026). Optimal is <1.0 mg/L."],
          ],
        },
        {
          category: "Endometabolic (sensitive disposal)",
          metrics: [
            ["", "My blood sugar and insulin run low: a metabolism efficient even under load", false],
            ["HbA1c", "5.2% (eAG: 5.7 mmol/L)", true, "Average blood sugar over the past ~3 months; eAG restates it as an average glucose reading. The diabetes diagnostic and a predictor of vascular disease and mortality. Optimal is ≤5.2%."],
            ["Fasting insulin", "4.2 mIU/L", true, "Insulin at rest — it flags insulin resistance about five years before blood sugar begins to rise. Optimal is ≤5 mIU/L."],
            ["Lactate threshold", "1.8 mmol/L at 70% VO₂max (2.5 W/kg)", true, "The intensity where lactate starts to accumulate — an endurance and metabolic-fitness marker, roughly co-equal with VO₂max and more trainable. ≥85% of VO₂max is elite."],
          ],
        },
        {
          category: "Hepatorenal (low-stress clearance)",
          metrics: [
            ["", "My liver and kidneys clear at full function, unstressed", false],
            ["eGFR", "101 mL/min/1.73m²", true, "Estimated glomerular filtration rate — how fast the kidneys clear the blood, estimated from creatinine (CKD-EPI); declining filtration is an aging hallmark. ≥95 mL/min/1.73m² is optimal under 40."],
            ["ALT", "26 IU/L", true, "A liver enzyme — high signals liver stress, but unusually low signals muscle loss and frailty. 17–30 IU/L is optimal."],
            ["Uric acid", "0.28 mmol/L / 4.7 mg/dL", true, "A purine waste product cleared by the kidneys; high levels cause gout and predict cardiovascular disease and mortality. 0.20–0.36 mmol/L is optimal."],
          ],
        },
      ],
    },
    {
      domain: "Blood Circulation",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Cardiovascular (autonomic resilience)",
          metrics: [
            ["", "My heart idles low, opens a wide reserve, and recovers fast", false],
            ["Blood pressure", "110/65 mmHg (<30th percentile)", true, "Resting pressure of blood against the artery walls (systolic / diastolic); the graded driver of vascular mortality. 105–120 / 65–80 mmHg is optimal."],
            ["Heart rate reserve", "126 bpm", true, "Max minus resting heart rate — the range the heart can call on; a wide reserve reflects cardiac fitness and autonomic range."],
            ["Resting heart rate", "50 bpm", true, undefined, undefined, true],
            ["Max heart rate", "176 bpm (measured)", true, undefined, undefined, true],
            ["Heart rate recovery", "36 bpm", true, "The fall in heart rate one minute after peak effort; ~30–40 bpm signals strong parasympathetic rebound."],
          ],
        },
      ],
    },
  ],
};

const STRUCTURAL_INTEGRITY: StatTableData = {
  title: "Structural integrity",
  groups: [
    {
      domain: "Body Composition",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Fat mass (metabolic protection)",
          metrics: [
            ["", "I run leaner than 19 in 20 men, with minimal visceral fat", false],
            ["Percent body fat", "8.2% (<5th percentile)", true, "Body fat as a share of soft tissue (the DEXA measure, excluding bone); both too-high and too-low are adverse for health. 10–18% is optimal for men."],
            ["Total mass", "74.3 kg", true, undefined, undefined, true],
            ["Fat mass", "5.9 kg", true, undefined, undefined, true],
            ["Visceral adipose tissue", "114 g", true, "Fat packed around the internal organs — the most metabolically harmful kind, with a strong gradient to cardiometabolic disease. Below 500 g is the target."],
          ],
        },
        {
          category: "Muscle mass (force reserve)",
          metrics: [
            ["", "I carry more muscle than 4 in 5 men my age", false],
            ["ALMI", "9.4 kg/m² (>85th percentile)", true, "Appendicular lean mass index — arm and leg muscle relative to height. The strongest body-composition marker; low defines sarcopenia. ≥8.0 kg/m² is optimal for men."],
            ["Height squared", "3.09 m²", true, undefined, undefined, true],
            ["Appendicular lean mass", "29.1 kg", true, undefined, undefined, true],
          ],
        },
        {
          category: "Bone density (skeletal strength)",
          metrics: [
            ["", "My whole-body bone density is sound, near the age-matched average", false],
            ["Whole-body BMD", "1.213 g/cm² (37th percentile)", true, "Bone mineral density — the mineral content and strength of bone, measured across the whole body; higher is better."],
            ["Bone mineral content", "2.753 kg", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Body Geometry",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Waistline (central adiposity)",
          metrics: [
            ["", "My waist is well under half my height: low central-fat risk", false],
            ["Waist-to-height ratio", "0.45", true, "Waist ÷ height — the best simple predictor of central-fat risk, beating BMI; under 0.5 is the target."],
            ["Height", "176 cm", true, undefined, undefined, true],
            ["Waist circumference", "80 cm", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const FUNCTIONAL_CAPACITY: StatTableData = {
  title: "Functional capacity",
  groups: [
    {
      domain: "Muscular Biomechanics",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Hip (lower-body strength)",
          metrics: [
            ["", "I squat on one leg, pull double bodyweight, and curl my own hamstrings", false],
            ["Balancing strength", "6 pistol squats per leg (L5)", true, { text: (
              <MovementLevels
                summary="Unilateral strength, balance, and range: the pistol squat ladder."
                measure="1 Rep Skill"
                male={["1 bilateral air-squat (deep)", "1 twisting-squat/side (sit-rise)", "1 side-squat/side (low)", "1 split-squat/side (KOT)", "1 pistol-squat/side (deep)"]}
              />
            ) }],
            ["Hinge strength", "150 kg barbell deadlift (L4)", true, { text: (
              <MovementLevels
                summary="Posterior-chain hip-extension pulling strength: the barbell deadlift ladder."
                measure="1 Rep Max"
                male={["60 kg (~0.8× BW)", "90 kg (~1.2× BW)", "120 kg (~1.6× BW)", "150 kg (~2.0× BW)", "180 kg (~2.4× BW)"]}
                female={["40 kg (~0.65× BW)", "60 kg (~1.0× BW)", "80 kg (~1.35× BW)", "100 kg (~1.65× BW)", "120 kg (~2.0× BW)"]}
              />
            ) }],
            ["Curl strength", "1 hinge Nordic curl (L3)", true, { text: (
              <MovementLevels
                summary="Hamstring knee-flexion strength: the Nordic curl ladder."
                measure="1 Rep Skill"
                male={["1 one-leg leg-curl/side (supine)", "1 eccentric-hinge Nordic curl", "1 hinge Nordic curl", "1 eccentric Nordic curl", "1 Nordic curl"]}
              />
            ) }],
          ],
        },
        {
          category: "Core (midline stability)",
          metrics: [
            ["", "I hold my trunk rigid through levers, front and back", false],
            ["Compression strength", "0:15 V-sit (L5)", true, { text: (
              <MovementLevels
                summary="Anterior-chain trunk compression under active hip flexion: the V-sit ladder."
                measure="Max Skill Time"
                male={["1:00 L-tuck", "0:40 low-L or high-tuck", "0:30 L-sit", "0:15 straddle-L", "0:05 V-sit (90°)"]}
              />
            ) }],
            ["Press tensegrity", "0:15 back lever (L5)", true, { text: (
              <MovementLevels
                summary="Straight-arm pressing tension through the trunk: the back lever ladder."
                measure="Max Skill Time"
                male={["1:00 German hang", "0:40 back-lever tuck", "0:30 flat-tuck or half-straddle", "0:20 half-lay or straddle", "0:10 back lever"]}
              />
            ) }],
            ["Pull tensegrity", "0:05 front lever (L5)", true, { text: (
              <MovementLevels
                summary="Straight-arm pulling tension through the trunk: the front lever ladder."
                measure="Max Skill Time"
                male={["1:00 hollow-body hang", "0:40 front-lever tuck", "0:30 flat-tuck or half-straddle", "0:15 half-lay or straddle", "0:05 front lever"]}
              />
            ) }],
          ],
        },
        {
          category: "Shoulder (upper-body strength)",
          metrics: [
            ["", "I pull 20 reps, dip 25, and press 60 kg overhead", false],
            ["Climbing strength", "20 pull-ups (L4)", true, { text: (
              <MovementLevels
                summary="Bent-arm (shoulder-extension) pulling strength: the pull-up ladder."
                measure="Max Reps / 1 Rep Max"
                male={["1 parallel row (0.65× BW)", "1 pull-up (1.0× BW)", "10 PUs or +20 kg (~1.3× BW)", "18 PUs or +40 kg (~1.5× BW)", "24 PUs or +55 kg (~1.7× BW)"]}
                female={["1 incline row", "1 parallel row (0.65× BW)", "1 pull-up (1.0× BW)", "5 PUs or +10 kg (~1.15× BW)", "10 PUs or +20 kg (~1.35× BW)"]}
              />
            ) }],
            ["Pushing strength", "25 chest dips (L4)", true, { text: (
              <MovementLevels
                summary="Bent-arm (shoulder-flexion) pressing strength: the chest-dip ladder."
                measure="Max Reps / 1 Rep Max"
                male={["1 push-up (0.65× BW)", "1 dip (1.0× BW)", "15 dips or +30 kg (~1.4× BW)", "25 dips or +55 kg (~1.7× BW)", "35 dips or +80 kg (~1.9× BW)"]}
                female={["1 incline push-up", "1 push-up (0.65× BW)", "1 dip (1.0× BW)", "10 dips or +20 kg (~1.35× BW)", "20 dips or +40 kg (~1.65× BW)"]}
              />
            ) }],
            ["Overhead strength", "60 kg barbell press (L3)", true, { text: (
              <MovementLevels
                summary="Vertical overhead pressing strength: the barbell shoulder press ladder."
                measure="1 Rep Max"
                male={["barbell (20 kg)", "35 kg (~0.4× BW)", "50 kg (~0.6× BW)", "65 kg (~0.8× BW)", "80 kg (~1.0× BW)"]}
                female={["barbell (15 kg)", "20 kg (~0.35× BW)", "30 kg (~0.5× BW)", "40 kg (~0.65× BW)", "45 kg (~0.75× BW)"]}
              />
            ) }],
          ],
        },
        {
          category: "Global (work capacity)",
          metrics: [
            ["", "I move my whole body fast, far, and under load", false],
            ["Global stability", "60 kg barbell overhead squat (L3)", true, { text: (
              <MovementLevels
                summary="Squat and overhead midline stability: the barbell overhead squat ladder."
                measure="1 Rep Max"
                male={["barbell (20 kg)", "40 kg (~0.4× BW)", "60 kg (~0.8× BW)", "80 kg (~1.0× BW)", "100 kg (~1.2× BW)"]}
                female={["barbell (15 kg)", "30 kg (~0.5× BW)", "40 kg (~0.65× BW)", "50 kg (~0.85× BW)", "60 kg (~1.0× BW)"]}
              />
            ) }],
            ["Jumping power", "2.4 m broad jump (L4)", true, { text: (
              <MovementLevels
                summary="Explosive lower-body power: the standing broad jump ladder."
                measure="1 Jump Max"
                male={["1.8 m (~1.0× height)", "2.0 m (~1.15× height)", "2.2 m (~1.25× height)", "2.4 m (~1.35× height)", "2.6 m (~1.45× height)"]}
                female={["1.45 m (~0.9× height)", "1.6 m (~0.95× height)", "1.75 m (~1.05× height)", "1.9 m (~1.15× height)", "2.1 m (~1.25× height)"]}
              />
            ) }],
            ["Locomotive power", "200 m sprint in 32 sec (L5)", true, { text: (
              <MovementLevels
                summary="Locomotive speed across the speed–duration spectrum: the sprinting ladder."
                measure="Best Time"
                male={["5 km walk <55:00", "3 km run <16:30", "1 mile run <6:30", "800 m sprint <2:40", "200 m sprint <0:33"]}
                female={["5 km walk <55:00", "3 km run <19:30", "1 mile run <7:30", "800 m sprint <3:00", "200 m sprint <0:40"]}
              />
            ) }],
          ],
        },
      ],
    },
    {
      domain: "Metabolic Bioenergetics",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Global (energy efficiency)",
          metrics: [
            ["", "I take up oxygen in the top decile for my age, burning fat deep into effort", false],
            ["Maximum VO₂", "53 ml/kg/min (L5)", true, { text: (
              <MovementLevels
                summary="Peak rate of oxygen use during exercise: the VO₂max ladder."
                measure="Peak Rate"
                ageBand="Age 35–39"
                male={["30 ml/kg/min (low)", "38 ml/kg/min (fair)", "44 ml/kg/min (average)", "49 ml/kg/min (good)", "53 ml/kg/min (elite)"]}
                female={["25 ml/kg/min (low)", "32 ml/kg/min (fair)", "38 ml/kg/min (average)", "43 ml/kg/min (good)", "47 ml/kg/min (elite)"]}
              />
            ) }],
            ["FatMax intensity", "60% VO₂max (L4)", true, { text: (
              <MovementLevels
                summary="Exercise intensity where fat-burning peaks: the FatMax ladder."
                measure="Peak Intensity"
                male={["35% VO₂max (low)", "43% VO₂max (fair)", "50% VO₂max (average)", "58% VO₂max (good)", "65% VO₂max (elite)"]}
              />
            ) }],
          ],
        },
      ],
    },
  ],
};

const HEALTH_REFERENCE_SECTIONS: ReferenceSection[] = [
  {
    label: "My data derived from tests performed under resting, fasted conditions",
    items: [
      {
        id: "biochemistry",
        cite: (
          <>
            <strong>Biochemistry</strong>: <em>Phlebotomy (Jan 2026)</em>; tests for ApoB, HbA1c, fasting insulin, ferritin, hemoglobin, hs-CRP, eGFR, ALT, and uric acid (biochemistry &amp; hematology) • report (Pathcare)
          </>
        ),
      },
      {
        id: "composition",
        cite: (
          <>
            <strong>Composition</strong>: <em>Densitometry (May 2026)</em>; tests for height, total mass, ALMI, percent body fat, VAT, and bone density (Lunar iDXA) • report (Cape Radiology)
          </>
        ),
      },
      {
        id: "geometry",
        cite: (
          <>
            <strong>Geometry</strong>: <em>Anthropometry (Jan 2026)</em>; tests for waist circumference (Iliac Crest &lsquo;NHANES&rsquo; method) • reading (tape)
          </>
        ),
      },
      {
        id: "circulation",
        cite: (
          <>
            <strong>Circulation</strong>: <em>Sphygmomanometry (Jan 2026)</em>; tests for blood pressure and resting heart rate (OMRON) • reading (monitor)
          </>
        ),
      },
    ],
  },
  {
    label: "My data derived from tests performed under load",
    items: [
      {
        id: "bioenergetics",
        cite: (
          <>
            <strong>Bioenergetics</strong>: <em>Indirect calorimetry (Sep 2024)</em>; tests for VO&#8322;max, peak power output, and maximum heart rate (Cosmed Quark CPET) • <a className="wikilink external" href="/evidence/cpet-2024-09.pdf" target="_blank" rel="noopener noreferrer">report<span className="sr-only"> (opens in a new tab)</span></a> (Science2Sport)
          </>
        ),
      },
      {
        id: "lactate",
        cite: (
          <>
            <strong>Lactate</strong>: <em>Capillary prick (Sep 2024)</em>; tests for blood lactate (Nova Biomedical Lactate Plus) • reading (device)
          </>
        ),
      },
      {
        id: "heart-rate",
        cite: (
          <>
            <strong>Heart rate</strong>: <em>Electrocardiography (Jan 2026)</em>; tests for maximum heart rate and heart rate recovery (Polar H10) • reading (app)
          </>
        ),
      },
      {
        id: "biomechanics",
        cite: (
          <>
            <strong>Biomechanics</strong>: <em>Total-fitness battery (Jan 2026)</em>; tests for local hip, core, shoulder, and global functional capacity (multi-modal testing facility) • report (video){/* TODO: link "report" to the single combined test video once filmed */}
          </>
        ),
      },
    ],
  },
];

// The studies behind the reference-range targets, ranked by mortality-reduction
// / prevention impact (VO₂max first, no observed ceiling of benefit). One
// most-credible study per marker; lagging/redundant markers deliberately
// omitted. Archived copy in docs/health-methodology-references.md.
const HEALTH_EVIDENCE: ReferenceSection[] = [
  {
    label: "The studies informing my reference range targets for lifespan",
    items: [
      {
        id: "vo2max",
        cite: (
          <>
            <strong>VO&#8322;max</strong>: Mandsager, R., et al. (2018). Association of cardiorespiratory fitness with long-term mortality among adults undergoing exercise treadmill testing. <em>JAMA Network Open</em>, 1(6).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/30646252/",
        urlLabel: "PubMed",
      },
      {
        id: "bloodpressure",
        cite: (
          <>
            <strong>Blood pressure</strong>: Lewington, S., et al. (2002). Age-specific relevance of usual blood pressure to vascular mortality. <em>Lancet</em>, 360(9349).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/12493255/",
        urlLabel: "PubMed",
      },
      {
        id: "apob",
        cite: (
          <>
            <strong>ApoB</strong>: Sniderman, A. D., et al. (2019). Apolipoprotein B particles and cardiovascular disease: a narrative review. <em>JAMA Cardiology</em>, 4(12).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/31642874/",
        urlLabel: "PubMed",
      },
      {
        id: "hba1c",
        cite: (
          <>
            <strong>HbA1c</strong>: Selvin, E., et al. (2010). Glycated hemoglobin, diabetes, and cardiovascular risk in nondiabetic adults. <em>New England Journal of Medicine</em>, 362(9).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/20200384/",
        urlLabel: "PubMed",
      },
      {
        id: "hscrp",
        cite: (
          <>
            <strong>hs-CRP</strong>: Emerging Risk Factors Collaboration (2010). C-reactive protein concentration and risk of coronary heart disease, stroke, and mortality: an individual participant meta-analysis. <em>The Lancet</em>, 375(9709).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/20031199/",
        urlLabel: "PubMed",
      },
      {
        id: "hrrecovery",
        cite: (
          <>
            <strong>HR recovery</strong>: Cole, C. R., et al. (1999). Heart-rate recovery immediately after exercise as a predictor of mortality. <em>New England Journal of Medicine</em>, 341(18).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/10536127/",
        urlLabel: "PubMed",
      },
      {
        id: "hrreserve",
        cite: (
          <>
            <strong>HR reserve</strong>: Lauer, M. S., et al. (1999). Impaired chronotropic response to exercise stress testing as a predictor of mortality. <em>JAMA</em>, 281(6).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/10022108/",
        urlLabel: "PubMed",
      },
      {
        id: "almi",
        cite: (
          <>
            <strong>ALMI</strong>: Cruz-Jentoft, A. J., et al. (2019). Sarcopenia: revised European consensus on definition and diagnosis (EWGSOP2). <em>Age and Ageing</em>, 48(1).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/30312372/",
        urlLabel: "PubMed",
      },
      {
        id: "vat",
        cite: (
          <>
            <strong>VAT</strong>: Britton, K. A., et al. (2013). Body fat distribution, incident cardiovascular disease, cancer, and all-cause mortality. <em>Journal of the American College of Cardiology</em>, 62(10).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/23850922/",
        urlLabel: "PubMed",
      },
      {
        id: "whtr",
        cite: (
          <>
            <strong>Waist-to-height ratio</strong>: Ashwell, M., Gunn, P., and Gibson, S. (2012). Waist-to-height ratio is a better screening tool than waist circumference and BMI. <em>Obesity Reviews</em>, 13(3).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/22106927/",
        urlLabel: "PubMed",
      },
      {
        id: "bmd",
        cite: (
          <>
            <strong>Bone density</strong>: Marshall, D., Johnell, O., and Wedel, H. (1996). Meta-analysis of how well measures of bone mineral density predict occurrence of osteoporotic fractures. <em>BMJ</em>, 312(7041).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/8634613/",
        urlLabel: "PubMed",
      },
    ],
  },
  {
    label: "The sources informing my performance standards for healthspan",
    items: [
      {
        id: "balance-sources",
        cite: (
          <>
            <strong>Lower-body strength</strong>: Pistol squat and Nordic curl ladders from personal experience, benchmarked against <WikiLink href="https://www.gymnasticbodies.com">GymnasticBodies</WikiLink>, the <WikiLink href="https://pubmed.ncbi.nlm.nih.gov/23242910/">sit-to-rise test</WikiLink>, and <WikiLink href="https://www.atgonlinecoaching.com">ATG</WikiLink> standards
          </>
        ),
      },
      {
        id: "barbell-sources",
        cite: (
          <>
            <strong>Barbell strength</strong>: Deadlift, overhead press, and overhead squat ladders from personal experience, adapted from <WikiLink href="https://drive.google.com/file/d/1HD4nwuWCbWrShbVMrU6N8H6JZzxmVP0A/view?usp=sharing">CrossFit</WikiLink> standards
          </>
        ),
      },
      {
        id: "weighted-sources",
        cite: (
          <>
            <strong>Upper-body strength</strong>: Weighted pull-up and chest dip ladders from personal experience, benchmarked against <WikiLink href="https://strengthlevel.com">StrengthLevel</WikiLink> standards
          </>
        ),
      },
      {
        id: "core-sources",
        cite: (
          <>
            <strong>Core stability</strong>: Compression strength and tensegrity ladders from personal experience, benchmarked against <WikiLink href="https://www.gymnastics.sport">FIG</WikiLink>, MAG, and <WikiLink href="https://www.gymnastics.sport/site/rules/">COP</WikiLink> standards
          </>
        ),
      },
      {
        id: "global-sources",
        cite: (
          <>
            <strong>Global power</strong>: Broad jump and sprint ladders from personal experience, benchmarked against <WikiLink href="https://exrx.net">ExRx</WikiLink>, <WikiLink href="https://www.topendsports.com">Top End Sports</WikiLink>, and world-record marks
          </>
        ),
      },
    ],
  },
];

export default function HealthPage() {
  return (
    <div className="zoned">
      <PageHeading title="Health" />

      <p id="introduction" className="page-hook">Your body decides how long your best years last.</p>
      <p className="page-promise">
        Health refers to the three states of a body: <strong>integrity</strong> (how it&rsquo;s built), <strong>balance</strong> (how it rests), and <strong>capacity</strong> (what it can do). Your health predicts your span: how many years you get, and how good they are.
      </p>
      <p>
        Frame and bone are largely fixed; fat, muscle, blood, and fitness are not. Each is best measured in a lab: DEXA for <WikiLink href="#integrity">structure</WikiLink>, blood at <WikiLink href="#balance">rest</WikiLink>, CPET at <WikiLink href="#capacity">full effort</WikiLink>. To master your health is to keep every marker in range, with a reserve to spare.
      </p>

      <hr className="zone-rule" />

      <h2 id="integrity">Integrity <span className="heading-paren">(Structure)</span></h2>
      <p>
        How my body is built: its <strong>composition</strong> (fat, muscle, and bone) and its <strong>geometry</strong> (waist to height). Together they predict injury risk and metabolic health. I am leaner than 19 in 20 men, with more muscle than 4 in 5.
      </p>
      <NestedTable {...STRUCTURAL_INTEGRITY} />

      <h2 id="balance">Balance <span className="heading-paren">(Homeostasis)</span></h2>
      <p>
        How my body rests: its <strong>biochemistry</strong> (what my blood carries) and its <strong>circulation</strong> (how my heart moves it). Together they predict how I age and what I can absorb. My lipids, sugar, and inflammation run low, and my heart idles low.
      </p>
      <NestedTable {...FUNCTIONAL_HOMEOSTASIS} />

      <h2 id="capacity">Capacity <span className="heading-paren">(Performance)</span></h2>
      <p>
        What my body can do: its <strong>biomechanics</strong> (strength by joint) and its <strong>bioenergetics</strong> (the engine behind it). Together they predict late-life independence. I squat on one leg, pull double bodyweight, and sit in the top decile for oxygen uptake.
      </p>
      <NestedTable {...FUNCTIONAL_CAPACITY} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={HEALTH_REFERENCE_SECTIONS}
      />

      <References
        id="evidence"
        title={<>References <span className="heading-paren">(Guidelines)</span></>}
        sections={HEALTH_EVIDENCE}
      />
    </div>
  );
}
