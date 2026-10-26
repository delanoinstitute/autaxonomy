import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import WikiLink from "@/components/WikiLink";
import { References, type ReferenceSection } from "@/components/References";

export const metadata = pageMeta(
  "Story",
  "Where Lorenzo Delano came from and where he is going: inheritance, development, and emergence, from South Africa through Malaysia to the United States.",
  "/story",
);

// A life read as a causal chain in three branches, assigned by when a fact
// became true: Inheritance (true at the instant of birth, no response possible),
// Development (administered over time, a response possible), Emergence (chosen
// against what the first two predicted). Every table runs exactly two bands,
// the site-wide taxonomy standard; Inheritance splits on transmission — down a
// germline (biological) or with a birth certificate (social). Development marks
// lived stages "Record" and unlived ones "Intent" so a plan is never mistaken
// for a fact. Genotype values are read from the raw 23andMe v5 export
// (631,991 markers, February 2022); ancestry from the 23andMe composition
// report (November 2025). The retired prose and era timeline live in git
// history and content/timeline.tsx.

const INHERITANCE: StatTableData = {
  title: "Inheritance",
  groups: [
    {
      domain: "Biological Identity",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Constitution (individual)",
          metrics: [
            ["", "I was issued a body, and the code that wrote it, before anything was done with either", false],
            ["Genotype (4)", "APOE (\u03b53/\u03b53; baseline Alzheimer\u2019s risk), ACTN3 (R/X; mixed power-endurance), lactase (persistent), and alcohol metabolism (ALDH2 typical; no flush response)", true],
            ["Phenotype (5)", "Sex (male; XY), blood type (O negative), eyes (blue), hair (brown), and height (176 cm)", true],
            ["Ancestry (2)", "Composition (94.8% European; 2.2% Sub-Saharan African; 1.9% Central and South Asian; 0.7% Melanesian), European detail (Belgian, Rhinelander and Southern Dutch 46.9%; Dutch and Northern German 34.5%; Austrian and Southern German 5.0%; French 4.0%)", true],
          ],
        },
        {
          category: "Descent (familial)",
          metrics: [
            ["", "Grouped by generation, named only where consent is mine to give", false],
            ["Parents (2)", "Mother (living; no cardiac, neurological, oncological, or metabolic history; major trauma at 17) and father (living; history not available)", true],
            ["Siblings (1)", "Brother (died at 18 of necrotizing pneumonia with multiple lung abscesses; respiratory failure, septic shock, and DIC; Streptococcus milleri and Escherichia coli, both sensitive to the antibiotics given; recurrent tonsillitis; IgG and IgM below reference range)", true],
            ["Grandparents (3)", "Maternal grandfather (died at 73 of myocardial infarction; gout from 50; renal calculi; heavy smoker to 50, daily spirits until death), maternal grandmother (died at 57 of pulmonary fibrosis secondary to rheumatoid arthritis; type 2 diabetes; RA from 44; heavy smoker to 43, daily alcohol until death), and paternal grandparents (history unavailable)", true],
            ["Extended (3)", "Maternal uncle (died at 60 of bone cancer of the cervical spine; occupational pesticide exposure), maternal uncle (died at 4 of bronchopneumonia), and maternal aunt (living; type 2 diabetes; obstructive sleep apnea from 54; neither smoker nor drinker)", true],
            ["Great-grandparents (2)", "Maternal great-grandfather (died at 85 of hepatosplenic disease; type 1 diabetes; smoker from 11 to 55) and maternal great-grandmother (died at 89; cause not recorded)", true],
          ],
        },
      ],
    },
    {
      domain: "Sociological Identity",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Circumstance (social)",
          metrics: [
            ["", "I was handed a state, a people, and an era, and consulted about none of them", false],
            ["Civic (3)", "Born (7 December 1987; Krugersdorp, Gauteng), citizenship (South African), and name (Lorenzo Roos at birth; Maritz from 1996, a stepfather\u2019s)", true],
            ["Cultural (3)", "Ethnicity (Afrikaner), language (Afrikaans first; English second), and religion of origin (Dutch Reformed; the NG Kerk)", true],
            ["Historical (4)", "Political era (apartheid under a nationwide State of Emergency at birth; democracy from 1994, age six), geopolitical era (the Cold War ending; the Soviet collapse took apartheid\u2019s anti-communist justification with it), generation (Gen-Y; 1981\u20131996), and technological era (pre-internet childhood; no private mobile network in the country until I was six)", true],
          ],
        },
      ],
    },
  ],
};

const DEVELOPMENT: StatTableData = {
  title: "Development",
  groups: [
    {
      domain: "Early Years",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Early childhood (age 0–5)",
          metrics: [
            ["", "Where attachment is meant to settle, mine settled across six households and a divorce", false],
            ["1987 (birth)", "I was born on 7 December in Krugersdorp, to a mother of 21 and a father of 19 who managed at Joshua Doore, with a brother two years ahead of me; we lived in Sunward Park (Space). I rocked rhythmically from the start, and still do (Energy).", true],
            ["1990 (age 2)", "My parents divorced on 21 September. I lived in four households across the year — Little Falls, a flat in Kenmare, the farm again, then a house in Witpoortjie (Space) — and started pre-primary with my brother (Energy).", true],
            ["1991–1993 (age 3–5)", "The Witpoortjie house sold and we returned to Kenmare (Space). My mother started a construction business (Energy) and later took a new partner. The farm dog bit my head open, and a fall down a three-step drop broke my left arm.", true],
          ],
        },
        {
          category: "Middle-late childhood (age 6–12)",
          metrics: [
            ["", "The years competence and friendship are built; I built both on a skateboard", false],
            ["1994–1996 (age 6–8)", "We moved back to the farm at Muldersdrift so my mother could nurse hers, and I started at Laerskool Muldersdrif — both inside the Cradle of Humankind (Space); we left for Roodekrans in 1996. My grandmother died at 57 in 1995, the year the Mortal Kombat film was released. A Super Nintendo arrived (Matter) and I played it daily (Energy).", true],
            ["1997 (age 9)", "My mother met my stepfather in Standerton and we moved to Evander, where my brother and I entered Laerskool Hoëveld (Space). A child ran into the road in front of her car and was killed; a motorcycle accident later cost her a finger, and her construction business closed. I trained gymnastics for six months (Energy).", true],
            ["1998 (age 10)", ["A dog ran in front of my bicycle and the straddle injury led to an orchiectomy. I cycled everywhere otherwise (Energy), was given a SEGA console (Matter), played Mortal Kombat 3 daily, and took up skateboarding with my closest school friend, ", <WikiLink key="charl" href="https://www.instagram.com/skipper_skate_87/">Charl Steyn</WikiLink>, ", who became one of the best skateboarders in Gauteng."], true],
            ["1999–2000 (age 11–12)", "My mother and stepfather married on 3 August 1999 and adopted my brother and me. She drove us to the skateparks at Edenvale and Thrashers in Pretoria (Space), and I spent a short spell at Secunda High. In 2000 a skateboarding fall broke my right forearm, which was plated (Energy).", true],
          ],
        },
        {
          category: "Adolescence (age 13–18)",
          metrics: [
            ["", "Identity is meant to form at school among peers; mine formed abroad, alone, after a death", false],
            ["2001–2002 (age 13–14)", ["My mother left my stepfather and we returned to Sunward Park, spent a short time back in Evander, then settled in Garsfontein, Pretoria (Space). My brother and I moved to homeschooling with ", <WikiLink key="intec" href="/knowledge#education">INTEC College</WikiLink>, " in 2001, the year of the September 11 attacks (Energy); I dropped formal schooling entirely the following year."], true],
            ["2003 (age 15)", "We moved to Glen Park apartments in Waterkloof Glen (Space), where I made three friends at Thrashers skatepark. My first job was performing magic at a kiosk in Menlyn Park Mall, and my brother found me a second at Sidewalk Surfer (Energy). My mother worked at Virgin Active Menlyn, and I used her membership to get online.", true],
            ["2004 (age 16)", ["My brother died on 9 March. I joined Tang Lang Cuan Wushu, where Shi Fu Yang Long Fei became my first mentor; I dropped skateboarding for kung fu and started running (Energy). We moved to Kempton Park, then Tipperary Mews in Pretoria, and in October I went to Shijiazhuang, China, to ", <WikiLink key="tefl04" href="/knowledge#works">teach English</WikiLink>, " (Space). John Little’s ", <em key="ww">Warrior Within</em>, " returned me to reading."], true],
            ["2005 (age 17)", ["My grandfather died in February and my kung-fu teacher left for New York. I moved in with a friend’s family and took on their Christian values, while my mother went to Rustenburg, then KwaZulu-Natal (Space). I waited tables at Java and took weekly ", <WikiLink key="mand" href="/knowledge#education">Mandarin at the Pretoria Chinese School</WikiLink>, " (Energy)."], true],
            ["2006 (age 18)", ["We moved to Ballinderry in Garsfontein, where a break-in left my mother assaulted (Space). I worked at the Adidas outlet, trained at the gym, played squash, ran races, and earned a ", <WikiLink key="tefl" href="/knowledge#education">TEFL certification</WikiLink>, " (Energy). Jaco van der Merwe of Bittereinder taught me to drive; I met my first girlfriend, and wrote and directed short kung-fu films after ", <em key="tjkd">Tao of Jeet Kune Do</em>, "."], true],
          ],
        },
      ],
    },
    {
      domain: "Adult Years",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Emerging adulthood (age 19–28)",
          metrics: [
            ["", "Instability defines this stage; I used mine to choose a name, a partner, and a trade", false],
            ["2007–2008 (age 19–20)", ["I returned to China twice more to teach English and lived with a friend’s family in Pretoria (Space). I was promoted to manage ", <WikiLink key="java" href="/knowledge#works">Java</WikiLink>, ", sprinted at TUKS, took up yoga, and earned a fitness-trainer certificate at ", <WikiLink key="eta" href="/knowledge#education">ETA College</WikiLink>, " (Energy). I met ", <WikiLink key="brad" href="https://www.movefreely.co.za">Brad Openshaw</WikiLink>, ", who became my best friend and business partner; Tony Robbins and NLP began unsettling my Christian faith."], true],
            ["2009 (age 21)", ["Still living with a friend’s family in Pretoria (Space), I placed first nationally at the ", <WikiLink key="cb" href="/knowledge#education">Chinese Bridge competition</WikiLink>, " in April and represented South Africa among 130 countries at the Beijing finals in September (Energy). I certified as a massage therapist, and changed my surname from Maritz to Delano on 1 December."], true],
            ["2010 (age 22)", ["I certified in NLP and life coaching under Robert Simic at Evolved Coaching, was recruited to coach at ", <WikiLink key="bx" href="/knowledge#works">Ballistix</WikiLink>, ", and competed at the CrossFit Africa regionals (Energy). I left the church as the dissonance became unbearable, moved in with my mother at my uncle’s house (Space), and began teaching CrossFit classes from a friend’s house."], true],
            ["2011–2012 (age 23–24)", ["Brad and I opened Quantum Physiques, a pop-up gym in Menlo Park (Space), and ran it from five to ten each morning (Energy). ", <WikiLink key="jl" href="https://www.jelenalakic.com/">Jelena Lakic</WikiLink>, " joined as a client and became my partner. We kept a year of vegetarianism, and my mother sent me Neale Donald Walsch’s ", <em key="cwg">Conversations with God</em>, "."], true],
            ["2013–2014 (age 25–26)", ["The gym became Wi-move and I sold my share back to Brad; Jelena and I spent two weeks in China sourcing equipment (Space). Mark Sisson’s ", <em key="pb">Primal Blueprint</em>, " ended the vegetarianism, Doug McGuff’s ", <em key="bbs">Body by Science</em>, " moved me to minimum-effective-dose training (Energy), and Ken Wilber redirected me toward education."], true],
            ["2015–2016 (age 27–28)", ["I interviewed John Demartini and Tim Noakes, then studied marketing and software after job applications went nowhere (Energy). Jelena and I separated; I sold my belongings (Matter) and left South Africa for New York, Los Angeles and San Francisco from October 2015, and Kuala Lumpur from May 2016 when ", <WikiLink key="mv" href="https://www.mindvalley.com/">Mindvalley</WikiLink>, " hired me (Space)."], true],
          ],
        },
        {
          category: "Established adulthood (age 29–43)",
          metrics: [
            ["", "Career consolidation is the task; I settled on one method and taught ninety thousand", false],
            ["2017 (age 29)", ["I quit marketing at Mindvalley and was rehired as a learning designer, then built the first courses with Ken Wilber and Neale Donald Walsch (Energy). ", <WikiLink key="tenx" href="/knowledge#works">10X</WikiLink>, " was named and born at Mindvalley-U. I moved back to South Africa from Kuala Lumpur, and ran a four-week trial in Barcelona (Space)."], true],
            ["2018–2019 (age 30–31)", "I designed courses with Ben Greenfield, Steven Kotler and Ken Wilber, and ran a live-in training intervention for Gerard Butler (Energy), working across Sardinia, Tallinn, Croatia, Denver and Spokane (Space). Jelena, her children and I moved in together as a family, I registered my first US company, and started studying science in earnest.", true],
            ["2020–2021 (age 32–33)", ["I trained clients in Seattle and Costa Rica, then flew home days before the lockdown; we moved to Camps Bay in March 2021 (Space). I codified the ", <WikiLink key="m10x" href="/knowledge#works">10X method</WikiLink>, " and published it free, and the ", <WikiLink key="quest" href="/knowledge#works">10X Quest</WikiLink>, " launched, since completed by over 90,000 people (Energy). I certified in nutritional biochemistry, then blood chemistry analysis."], true],
            ["2022–2023 (age 34–35)", ["I produced a course in Spokane and we moved into a Camps Bay house in April 2023 (Space). We launched the ", <WikiLink key="cert" href="/knowledge#works">10X coach certification</WikiLink>, " to 500 coaches (Energy), and I took my highest-paying contract, as a learning systems designer. Jelena and I did Demartini’s five-day method, the most transformative training we had done."], true],
            ["2024 (age 36)", ["I brokered, designed and directed the ", <WikiLink key="vf" href="/knowledge#ref-values-factor">Values Factor course</WikiLink>, " with Dr. John Demartini, and produced the ", <WikiLink key="bf" href="/knowledge#works">BodyFirst Quest</WikiLink>, " (Energy). Jelena and I registered Erfaring, a property company (Matter). I left Mindvalley and sold my 10X company shares, and studied Daniel Lieberman and lifespan development."], true],
            ["2025 (age 37)", "My mother and I moved to Val de Vie in Paarl that September, she to her own place and I to a studio (Space). Jelena and I ended the romance and stayed friends. I rebuilt my exercise taxonomy with the time (Energy).", true],
          ],
        },
      ],
    },
  ],
};

const EMERGENCE: StatTableData = {
  title: "Emergence",
  groups: [
    {
      domain: "Creative Dispositions",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Extrinsic (authentic influences)",
          metrics: [
            ["", "I recognized myself in these before I could explain why", false],
            ["Stories", [<em key="mk">Mortal Kombat</em>, "’s Liu Kang (1995), ", <em key="dr">Dragon</em>, "’s Bruce Lee (1997), ", <em key="dbz">Dragon Ball Z</em>, "’s Goku (2003), ", <em key="tls">The Last Samurai</em>, "’s Nathan Algren (2005), ", <em key="im">Iron Man</em>, "’s Tony Stark (2008), and Benedict Cumberbatch’s Sherlock Holmes (2017)"], true],
            ["Exemplars", "Bruce Lee (2004–2006); Tony Robbins and Greg Glassman (2008–2011); John Demartini, Neale Donald Walsch, and Mark Sisson (2011–2014); Doug McGuff, Ken Wilber, and Alan Watts (2014–2017); Christopher Sommer, Jordan Peterson, and Naval Ravikant (2017–2021); Peter Attia, David Deutsch, Aswath Damodaran, and Elon Musk (2021–)", true],
            ["Disciplines", "Eastern philosophy (2004), languages and theology (2005), exercise physiology (2008), education psychology (2013), western philosophy and marketing (2014), finance (2016), medicine (2018), epistemology (2021), chemistry (2022), and computer science and knowledge organization (current)", true],
          ],
        },
      ],
    },
    {
      domain: "Transformative Decisions",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Intrinsic (personal convictions)",
          metrics: [
            ["", "Hard decisions I took blind, and every one changed my life for the better", false],
            ["Schooling", "Left school at fourteen with nothing lined up; self-taught since (2002)", true],
            ["Skateboarding", "Quit the sport and its community the day I found kung fu (2004)", true],
            ["China", "Flew out alone to teach English at sixteen, months after my brother died (2004)", true],
            ["Surname", "Took my own name at twenty-one, over a birth name and a stepfather’s (2009)", true],
            ["Faith", "Left the church at twenty-two when the dissonance broke, losing my social world (2010)", true],
            ["Quantum Physiques", "Sold the gym back to my partner while it was still working (2013)", true],
            ["America", "Sold everything and flew out at twenty-seven with no job and no money (2015)", true],
            ["Mindvalley", "Moved to Malaysia for the job, resigned inside a year, was rehired better (2017)", true],
            ["The Demartini method", "Signed us onto a five-day training on impulse, with no expectation (2023)", true],
            ["10X", "Sold my shares in the company built on six years of my method (2024)", true],
            ["Partnership", "Ended things with Jelena twice, in 2015 and again in 2025, before leaving SA", true],
            ["Citizenship", "Gave up my country to arrive in the United States as a refugee (2026)", true],
          ],
        },
      ],
    },
  ],
};


const STORY_DATA: ReferenceSection[] = [
  {
    label: "My data derived from genotyping, admixture analysis, and family interview",
    items: [
      {
        id: "genotype",
        cite: (
          <>
            <strong>Genotype</strong>: <em>Autosomal genotyping (Feb 2022)</em>; 631,991 markers, from which APOE (rs429358 TT; rs7412 CC), ACTN3, lactase persistence, and alcohol metabolism are read (23andMe v5) • raw export (23andMe)
          </>
        ),
      },
      {
        id: "ancestry",
        cite: (
          <>
            <strong>Ancestry</strong>: <em>Admixture analysis (Nov 2025)</em>; composition across European, Sub-Saharan African, Central and South Asian, and Melanesian populations, with the timing of each segment (23andMe) • report (23andMe)
          </>
        ),
      },
      {
        id: "family-history",
        cite: (
          <>
            <strong>Family history</strong>: <em>Structured questionnaire (2026)</em>; ages and causes of death, conditions, and exposures across three generations, collected from relatives and clinical records (Attia Medical instrument) • record (family)
          </>
        ),
      },
    ],
  },
];

const STORY_MEDIA: ReferenceSection[] = [
  {
    label: "My life as others have filmed it, and the voices I keep returning to",
    items: [
      {
        id: "self-portrait",
        cite: (
          <>
            <strong>Emerging adulthood</strong>: <em><WikiLink href="https://youtu.be/iogu9akcur4">Self Portrait</WikiLink> (2015)</em>; a nine-minute film shot in the months before my first departure for the United States, released the following February, narrated in my own words (directed by Ique Langa) • film (YouTube)
          </>
        ),
      },
      {
        id: "exemplars",
        cite: (
          <>
            <strong>Exemplars</strong>: <em>Lessons (ongoing)</em>; curated lectures from the voices I return to, on <WikiLink href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9p4Raa9N8d_A5467agmvgMk">health</WikiLink>, <WikiLink href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9r1sgnpJGcmZ5Ab_tKQF-JI">creativity</WikiLink>, and <WikiLink href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9rOYMzQ_cKKsfY-O7t5sVFD">wealth</WikiLink> • playlists (YouTube)
          </>
        ),
      },
    ],
  },
];

export default function StoryPage() {
  return (
    <div className="zoned">
      <PageHeading
        title="Story"
      />

      <p id="introduction" className="page-hook">Your story is how you meet what comes next.</p>
      <p className="page-promise">
        Story refers to the three phases of a life: <strong>inheritance</strong> (what you were given), <strong>development</strong> (what shaped you), and <strong>emergence</strong> (what you chose). Your story predicts your trajectory: what you make of what you were given.
      </p>
      <p>
        <WikiLink href="#inheritance">Inheritance</WikiLink> is fixed; <WikiLink href="#development">development</WikiLink> is done; only <WikiLink href="#emergence">emergence</WikiLink> is still being written. Each is best measured by record: the genome and the family tree, then a dated timeline. To master your story is to treat the given as material, and to keep choosing.
      </p>

      <hr className="zone-rule" />

      <h2 id="inheritance">
        Inheritance <span className="heading-paren">(Identity)</span>
      </h2>
      <p>
        What you were given is a function of <strong>biology</strong> (fixed) and <strong>circumstance</strong> (fixed at birth), the two best predictors of your starting odds and defaults. Mine: a European body, O negative; Afrikaner, born under apartheid&rsquo;s last emergency.
      </p>
      <NestedTable {...INHERITANCE} />

      <h2 id="development">
        Development <span className="heading-paren">(Timeline)</span>
      </h2>
      <p>
        How you develop is a function of <strong>stage</strong> (fixed) and <strong>setting</strong> (variable), the two best predictors of what you trust and what you can bear. Mine: six households by age five, a skateboard, a death and China at sixteen, a trade in transformative education.
      </p>
      <NestedTable {...DEVELOPMENT} />

      <h2 id="emergence">
        Emergence <span className="heading-paren">(Agency)</span>
      </h2>
      <p>
        What you choose is a function of <strong>influences</strong> (arriving unbidden) and <strong>decisions</strong> (made blind), the two best predictors of who you become next. Mine: Bruce Lee to Wilber; twelve blind decisions, school left at fourteen, America entered a refugee.
      </p>
      <NestedTable {...EMERGENCE} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={STORY_DATA}
      />

      <References
        id="media"
        title={<>References <span className="heading-paren">(Media)</span></>}
        sections={STORY_MEDIA}
      />
    </div>
  );
}
