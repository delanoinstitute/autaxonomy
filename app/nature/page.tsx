import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import Tooltip from "@/components/Tooltip";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";

export const metadata = pageMeta(
  "Nature",
  "Lorenzo Delano's mind, measured: intellect, character, and drive, with published psychometrics and what each predicts about how he works.",
  "/nature",
);

// The mind in the trilogy: Intellect (cognition), Character (affect), Drive
// (conation). Six sub-branches; Temperament, Sentiment, and Motivation carry
// two instruments each. Only irreducible dimensions and composite scores are
// counted — a component is flagged sub (index 5) and hangs indented and
// uncounted under the composite it feeds. The 4th element on a metric is a
// hover definition. "pending" / "—" = not yet taken.

const INTELLECT: StatTableData = {
  title: "Intellect",
  groups: [
    {
      domain: "Cognitive Aptitude",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Intelligence (processing power)",
          metrics: [
            ["", "I measure my general ability with the full RIOT battery (abilities as T-scores: mean 50, SD 10)", false],
            ["Full-scale IQ", "112 (top 21.2%)", true, "General cognitive ability (g) — the composite the six abilities below load onto. Tested August 2026, full battery, ±3.7. Profile: VF+ (verbal and fluid strengths; 7.4% of adults). Flagged non-normed: the norm sample is US-based, so a South African examinee’s comparisons carry extra uncertainty."],
            ["Verbal reasoning", "64 (92.5th percentile)", true, "Reasoning with words, language, and meaning — in my second language, against a US norm sample. Subtests: vocabulary 61, information 60, analogies 66 (94th percentile, my highest single score).", undefined, true],
            ["Fluid reasoning", "60 (84.5th percentile)", true, "Solving novel problems without relying on prior knowledge. Subtests: matrix reasoning 50, visual puzzles 64, figure weights 62.", undefined, true],
            ["Reaction time", "57 (75.5th percentile)", true, "Speed of response to a stimulus. Subtests: simple 57, choice 55.", undefined, true],
            ["Spatial ability", "54 (65.6th percentile)", true, "Reasoning about shapes, space, and visual relationships. Subtests: object rotation 56, SToVeS 54, spatial orientation 51.", undefined, true],
            ["Processing speed", "50 (49.6th percentile)", true, "How quickly information is taken in and acted on. Subtests: symbol search 55, abstract matching 43.", undefined, true],
            ["Working memory", "44 (26.5th percentile)", true, "Holding and manipulating information in mind. Subtests: visual reversal 46, computation span 42 (my lowest single score), exposure memory 50.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Philosophical Perspective",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Worldview (reasoned positions)",
          metrics: [
            ["", "I am an Enlightenment humanist: reason-grounded, humanity-centered", false],
            ["Worldview", "Enlightenment humanist", true, "The composite stance the seven perspectives below resolve into: technically, an integral naturalistic humanism."],
            ["Knowing", "Explanatory fallibilist (knowledge grows by better explanations; none final)", true, "Epistemology — the nature and sources of knowledge; how we know.", undefined, true],
            ["Being", "Physical idealist (one physical reality, in which ideas have real effects)", true, "Metaphysics — what is ultimately real; the fundamental nature of reality.", undefined, true],
            ["Origins", "Evolutionary emergentist (life and mind emerged bottom-up through evolution)", true, "Cosmology — the origin and nature of the universe and of life.", undefined, true],
            ["Purpose", "Self-authored (existence has no inherent purpose; I write my own)", true, "Teleology — whether existence has an inherent purpose or direction.", undefined, true],
            ["Divinity", "Agnostic atheist (I don’t believe in gods, and don’t claim certainty)", true, "Theology — the existence and nature of God or the divine.", undefined, true],
            ["Humanity", "Universalist (all humans share one nature, worth, and potential)", true, "Anthropology — the nature and purpose of human beings.", undefined, true],
            ["Value", "Amoral realist (nature has no morals; values are made by valuers)", true, "Axiology — the nature of value; what is good, bad, right, and wrong.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const CHARACTER: StatTableData = {
  title: "Character",
  groups: [
    {
      domain: "Emotional Temperament",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Personality (default dispositions)",
          metrics: [
            ["", "I am disciplined, honest, and curious (factors scored 1–7)", false],
            ["Conscientiousness", "6.87 (above the 90th percentile)", true, "Diligence, organization, self-discipline, and reliability. Facets: organization 6.35, diligence 6.42, perfectionism 6.96, prudence 5.76."],
            ["Honesty-Humility", "6.25 (~90th percentile)", true, "Sincerity, fairness, and modesty — the integrity factor, which OCEAN doesn’t measure. Facets: sincerity 5.39, fairness 6.49, greed avoidance 6.12, modesty 5.28."],
            ["Openness", "5.79 (above median)", true, "Curiosity, imagination, and openness to new experience. Facets: aesthetic appreciation 5.02, inquisitiveness 6.53, creativity 5.53, unconventionality 5.13."],
            ["Agreeableness", "5.34 (median)", true, "Patience, forgiveness, and cooperation versus temper and criticism. Facets: forgiveness 6.50, gentleness 5.05, flexibility 4.26, patience 5.08."],
            ["eXtraversion", "4.81 (below median)", true, "Sociability, assertiveness, and energy drawn from others. Facets: social self-esteem 4.54, social boldness 5.84, sociability 2.66 (bottom decile), liveliness 6.29."],
            ["Emotionality", "4.73 (below median)", true, "Fearfulness, anxiety, sentimentality, and need for support; low means emotionally tough and independent. Facets: fearfulness 5.95, anxiety 4.51, dependence 3.57, sentimentality 5.38."],
          ],
        },
        {
          category: "Risk tolerance (financial nerve)",
          metrics: [
            ["", "I take financial risk more readily than 96 in 100 adults (scored 0–100)", false],
            ["Risk score", "68 (96th percentile)", true, "Overall financial risk tolerance against a representative adult sample; 68 is a very high score."],
            ["Risk group", "6 of 7", true, "The band my score falls in — group 6 reads risk as opportunity and takes a medium-to-large degree of it.", undefined, true],
            ["Self-estimate", "80 (actual 68)", true, "What I predicted I would score. Most people underestimate their tolerance; I overestimated mine.", undefined, true],
            ["Loss tolerance", "> 50% fall", true, "How far the total value of my investments would have to drop before I began to feel uncomfortable.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Primal Sentiment",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Primal beliefs (felt assumptions)",
          metrics: [
            ["", "I meet a world that is good, safe, and improving, with a mechanistic bent (scored 0–5)", false],
            ["Good", "3.66 (with neutral primals ‘acceptable’ at 1.25 and ‘hierarchical’ at 3.80)", true, "The top-order primal: how good the world is overall, composed of the three below. Five neutral primals sit outside it, orthogonal to Good: acceptable, changing, hierarchical, interconnected, understandable."],
            ["Safe", "3.69 (with ‘progressing’ at 4.75)", true, "Whether the world is safe and nurturing, or dangerous and threatening.", undefined, true],
            ["Enticing", "3.86 (with ‘abundant’ at 4.50)", true, "Whether the world is abundant, beautiful, and worth engaging, or dull and barren.", undefined, true],
            ["Alive", "2.21 (with ‘needs me’ at 2.75)", true, "Whether the world is a conscious, intentional agent aware of you, or impersonal and mechanistic.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const DRIVE: StatTableData = {
  title: "Drive",
  groups: [
    {
      domain: "Personal Motivation",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Portrait values (stated drives)",
          metrics: [
            ["", "I run on autonomy and achievement, kept stable and caring (scored 1–6)", false],
            ["Self-enhancement", "3.90 (with ‘achievement’ at 4.50 and ‘power’ at 3.30)", true, "Pursuing personal success and standing: the mean of achievement (success through demonstrated competence) and power (status, prestige, and control over people and resources)."],
            ["Openness to change", "3.67 (with ‘self-direction’ at 6.00, ‘stimulation’ at 2.70, and ‘hedonism’ at 2.30)", true, "Readiness for new thought and experience: the mean of self-direction (independent thought and action), stimulation (novelty, excitement, and challenge), and hedonism (pleasure and sensuous gratification)."],
            ["Self-transcendence", "3.65 (with ‘benevolence’ at 4.00 and ‘universalism’ at 3.30)", true, "Looking beyond the self: the mean of benevolence (the welfare of those close to you) and universalism (understanding, tolerance, and protection for all people and nature)."],
            ["Conservation", "3.17 (with ‘security’ at 4.20, ‘tradition’ at 2.80, and ‘conformity’ at 2.50)", true, "Preserving order and continuity: the mean of security (safety, harmony, and stability), tradition (respect for cultural or religious custom), and conformity (restraint of actions likely to upset others)."],
          ],
        },
        {
          category: "Behavioral values (revealed drives)",
          metrics: [
            ["", "My time, energy, and money go first to design, then the body, then teaching what I learn", false],
            ["Value hierarchy", "DEE (design first, exercise second, then education)", true, "The code from my top three revealed values; the full ranked five and their shares sit below. Design and Exercise run nearly tied at the top; the next three share a third."],
            ["Design", "33%", true, "My devices, hours, and spaces all serve one activity: designing taxonomies and getting things to fit in my designs.", undefined, true],
            ["Exercise", "31%", true, "My equipment, kitchen, and entire home environment are built around training — maximizing my physical capital (liquid steel).", undefined, true],
            ["Education", "18%", true, "Teaching what I learn, solving problems in education, and coaching the most influential people behind the scenes.", undefined, true],
            ["Truth", "10%", true, "The subjects I read and discuss: philosophy, epistemology, and metaphysics, with psychology, economics, and history behind them.", undefined, true],
            ["Exploration", "8%", true, "Daily studying: the connections and knowledge of the day, gathered through designs and studies.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Professional Vocation",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Interests (work attractions)",
          metrics: [
            ["", "I am drawn to ideas and to making things, in the service of people", false],
            ["Holland code", "IAS (investigative first, artistic second, then social)", true, "The three-letter code from my top three types — the standard summary of a RIASEC profile."],
            ["Investigative", "1st", true, "Drawn to ideas, analysis, and solving abstract problems.", undefined, true],
            ["Artistic", "2nd", true, "Drawn to creativity, self-expression, and unstructured work.", undefined, true],
            ["Social", "3rd", true, "Drawn to helping, teaching, and working with people.", undefined, true],
            ["Enterprising", "4th", true, "Drawn to leading, persuading, and building ventures.", undefined, true],
            ["Conventional", "5th", true, "Drawn to order, data, and structured tasks.", undefined, true],
            ["Realistic", "6th", true, "Drawn to hands-on, physical, and mechanical work.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const IDENTITY_DATA: ReferenceSection[] = [
  {
    label: "My data derived from instruments scored against population norms",
    items: [
      {
        id: "aptitude-data",
        cite: (
          <>
            <strong>Intelligence</strong>: <em><WikiLink href="https://www.riotiq.com/app/share/77c600a4-14df-4c10-8055-59c55f384f3a">Adaptive IQ battery</WikiLink> (Aug 2026)</em>; tests for working memory, processing speed, fluid reasoning, spatial ability, verbal reasoning, and reaction time (RIOT) • report (RIOT IQ)
          </>
        ),
      },
      {
        id: "temperament-personality-data",
        cite: (
          <>
            <strong>Personality</strong>: <em><Tooltip media={{ src: "/reports/hexaco.png", alt: "HEXACO-PI-R report chart: six factors and 25 facets with percentile markers" }} content="HEXACO-PI-R full report (August 2026) — six factors and 25 facets scored 1–7 against the online sample’s 10th, 50th, and 90th percentiles."><em>Personality inventory</em></Tooltip> (Aug 2026)</em>; tests for honesty-humility, emotionality, extraversion, agreeableness, conscientiousness, and openness (HEXACO-PI-R) • report (hexaco.org)
          </>
        ),
      },
      {
        id: "temperament-risk-data",
        cite: (
          <>
            <strong>Risk tolerance</strong>: <em><Tooltip media={{ src: "/reports/risk-tolerance.png", alt: "FinaMetrica risk tolerance report: score 68, risk group 6 of 7, against the population bell curve" }} content="FinaMetrica report (June 2022) — score 68 of 100, risk group 6 of 7, higher than 96% of the representative adult sample. The report notes I estimated 80: a major overestimate."><em>Risk profiling</em></Tooltip> (Jun 2022)</em>; tests for financial risk tolerance (25-item questionnaire) • report (FinaMetrica)
          </>
        ),
      },
      {
        id: "sentiment-primals-data",
        cite: (
          <>
            <strong>Primal beliefs</strong>: <em>Primals survey (Jun 2022)</em>; tests for 26 primal world beliefs (99-item PWB) • report (UPenn Primals Project)
          </>
        ),
      },
      {
        id: "motivation-pvq-data",
        cite: (
          <>
            <strong>Portrait values</strong>: <em>Portrait values questionnaire (2026)</em>; tests for the ten basic values (PVQ-40) • report (self-scored)
          </>
        ),
      },
      {
        id: "vocation-data",
        cite: (
          <>
            <strong>Interests</strong>: <em><Tooltip media={{ src: "/reports/riasec.png", alt: "O*NET Interest Profiler results: profile line across the six RIASEC types, with Investigative, Artistic, and Social as top interests" }} content="O*NET Interest Profiler (3 July 2026) — the profile line across all six types: Investigative peaks, Artistic and Social run close behind, Realistic sits lowest."><em>Interest profiler</em></Tooltip> (Jul 2026)</em>; tests for the six RIASEC types (O*NET Interest Profiler) • report (O*NET)
          </>
        ),
      },
    ],
  },
  {
    label: "My data derived from frameworks I position myself against",
    items: [
      {
        id: "perspective-data",
        cite: (
          <>
            <strong>Worldview</strong>: <em>Worldview positioning (pending)</em>; positions my seven reasoned stances within Funk&rsquo;s 7 worldviews • reading (self-assessed)
          </>
        ),
      },
      {
        id: "motivation-demartini-data",
        cite: (
          <>
            <strong>Behavioral values</strong>: <em><Tooltip media={{ src: "/reports/demartini-values.png", alt: "Demartini value determination results: Design 33%, Exercise 31%, Education 18%, Truth 10%, Exploration 8%" }} content="Value determination report (29 August 2026) — ranked from my answers to the thirteen evidence questions: Design 33%, Exercise 31%, Education 18%, Truth 10%, Exploration 8%. Design and Exercise run nearly tied at the top; the next three share a third."><em>Value determination</em></Tooltip> (Aug 2026)</em>; ranks lived values by where time, energy, and money actually go (Demartini process) • report (self-assessed)
          </>
        ),
      },
    ],
  },
];

const IDENTITY_EVIDENCE: ReferenceSection[] = [
  {
    label: "The studies validating the instruments behind my scores, best-established first",
    items: [
      {
        id: "riot",
        cite: <><strong>Intelligence</strong>: RIOT, an open, adaptive online IQ test.</>,
        url: "https://www.riotiq.com",
        urlLabel: "riotiq.com",
      },
      {
        id: "hexaco",
        cite: <><strong>Personality</strong>: Lee, K. and Ashton, M. C. The HEXACO Personality Inventory&ndash;Revised (HEXACO-PI-R).</>,
        url: "https://hexaco.org",
        urlLabel: "hexaco.org",
      },
      {
        id: "holland",
        cite: (
          <>
            <strong>Interests</strong>: Holland, J. L. (1997). <em>Making Vocational Choices</em> (3rd ed.). Assessed via the O*NET Interest Profiler.
          </>
        ),
        url: "https://www.onetonline.org",
        urlLabel: "onetonline.org",
      },
      {
        id: "schwartz",
        cite: (
          <>
            <strong>Portrait values</strong>: Schwartz, S. H. (2012). An overview of the Schwartz theory of basic values.{" "}
            <em>Online Readings in Psychology and Culture</em>, 2(1).
          </>
        ),
        url: "https://doi.org/10.9707/2307-0919.1116",
        urlLabel: "DOI",
      },
      {
        id: "finametrica",
        cite: (
          <>
            <strong>Risk tolerance</strong>: FinaMetrica. <em>Personal Financial Risk Tolerance Report</em> (June 2022). Assessed via the FinaMetrica Risk Profiling system.
          </>
        ),
      },
      {
        id: "primals",
        cite: (
          <>
            <strong>Primal beliefs</strong>: Clifton, J. D. W., et al. (2019). Primal world beliefs.{" "}
            <em>Psychological Assessment</em>, 31(1).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/30299119/",
        urlLabel: "PubMed",
      },
      {
        id: "funk",
        cite: (
          <>
            <strong>Worldview</strong>: Funk, K. What Is a Worldview? <em>Oregon State University</em>.
          </>
        ),
        url: "https://web.engr.oregonstate.edu/~funkk/Personal/worldview.html",
        urlLabel: "oregonstate.edu",
      },
      {
        id: "demartini",
        cite: (
          <>
            <strong>Behavioral values</strong>: Demartini, J. F. (2013). <em>The Values Factor</em>. Assessed via the Demartini Value Determination Process.
          </>
        ),
      },
    ],
  },
];

export default function IdentityPage() {
  return (
    <div className="zoned">
      <PageHeading title="Nature" />

      <p id="introduction" className="page-hook">Your nature already knows where you belong.</p>
      <p className="page-promise">
        Nature refers to the three constituents of the mind: <strong>intellect</strong> (how you think), <strong>character</strong> (how you&rsquo;re wired), and <strong>drive</strong> (what moves you). Your nature predicts your niche: where you fit, and whom you serve best.
      </p>
      <p>
        <WikiLink href="#intellect">Intelligence</WikiLink> and{" "}
        <WikiLink href="#character">personality</WikiLink> are fixed; beliefs and{" "}
        <WikiLink href="#drive">values</WikiLink> are not. Each is best measured
        psychometrically, then checked against how you live. To master your nature is to
        master your emotions, develop your strengths, and find your fit.
      </p>

      <hr className="zone-rule" />

      <h2 id="intellect">Intellect <span className="heading-paren">(Cognition)</span></h2>
      <p>
        How I think: my <strong>aptitude</strong> (tested intelligence) and my <strong>perspective</strong> (the worldview I reason from). Together they predict the problems I am drawn to. I am an Enlightenment humanist, IQ 112, drawn to making knowledge transformative.
      </p>
      <NestedTable {...INTELLECT} />

      <h2 id="character">Character <span className="heading-paren">(Affect)</span></h2>
      <p>
        How I’m wired: my <strong>temperament</strong> (personality and appetite for risk) and my <strong>sentiment</strong> (how the world feels to me). Together they predict who can live and work with me. I am disciplined, honest, and curious, and the world feels good to me.
      </p>
      <NestedTable {...CHARACTER} />

      <h2 id="drive">Drive <span className="heading-paren">(Conation)</span></h2>
      <p>
        What moves me: my <strong>motivation</strong> (the values I state and the ones I reveal) and my <strong>vocation</strong> (the work I am drawn to). Together they predict what I do unasked. I run on autonomy and achievement, through ideas and making, for people.
      </p>
      <NestedTable {...DRIVE} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={IDENTITY_DATA}
      />

      <References
        id="evidence"
        title={<>References <span className="heading-paren">(Evidence)</span></>}
        sections={IDENTITY_EVIDENCE}
      />
    </div>
  );
}
