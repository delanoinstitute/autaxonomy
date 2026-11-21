import { SITE, pageMeta } from "@/content/site";
import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";
import WikiLink from "@/components/WikiLink";

// The Family page — a private profile for one kind of reader: a family, or the
// agency or family office that represents one. UNLISTED by design: it is not in
// NAV_GROUPS (so it stays out of the menu and the sitemap) and its metadata
// tells search engines not to index it; the link is sent, never found.
// Structure follows the site standard: three branches, exactly two bands each.
// Service (Offer) restates Offers (Register) in a parent's words: Thinking ·
// Producing · Health for Principals · Children · Staff. Record (Proof) shows the
// range of people taught, by role only: NO client or family names on this page,
// ever (consent rule); references are given on request. Engagement (Hiring)
// gives the method and the terms a recruiter needs to place me.

const SERVICE: StatTableData = {
  title: "Service",
  groups: [
    {
      domain: "Family Care",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Principals (decisions)",
          metrics: [
            ["", "I return your time, your health, and your clear thinking", false],
            ["Thinking", "I question the decision in front of you until it fits on one page", true],
            ["Producing", "I arrange your week, devices, files, and home so each one saves you hours", true],
            ["Health", "I assess your bloods and fitness, then train you and plan meals that fit your week", true],
          ],
        },
        {
          category: "Children (learning)",
          metrics: [
            ["", "I teach your children how to think, focus, and move", false],
            ["Thinking", "I tutor by asking questions and mentor each child on a project of their own", true],
            ["Producing", "I set up a school-week schedule and a study space they keep themselves", true],
            ["Health", "I coach movement skills through play, programmed for each child’s age", true],
          ],
        },
      ],
    },
    {
      domain: "Household Operations",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Staff (standards)",
          metrics: [
            ["", "I train your staff to one written standard, then step back", false],
            ["Thinking", "I write each role and its checklists, and review them with your team every week", true],
            ["Producing", "I build the registers, shopping lists, and routines that run the home", true],
            ["Health", "I train your chef to cook to your lab results and your trainer to follow one program", true],
          ],
        },
      ],
    },
  ],
};

const RECORD: StatTableData = {
  title: "Record",
  groups: [
    {
      domain: "Private Households",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Families (in residence)",
          metrics: [
            ["", "I have taught or trained every generation of a household", false],
            ["Children", "I helped raise children at home as my own", true],
            ["Parents", "I coached a family in Utah to change their behavior for the results they sought (2022)", true],
            ["Grandparents", "I coached and trained the grandparents of a company founder", true],
          ],
        },
        {
          category: "Individuals (live-in)",
          metrics: [
            ["", "I move in, reset the environment, and train in person", false],
            ["Public figures", "I reset the homes and routines of celebrities and entrepreneurs in person (2019, Los Angeles)", true],
            ["Professionals", "I profiled 20+ professionals through my marketing and education agencies (2015, New York)", true],
          ],
        },
      ],
    },
    {
      domain: "Public Programs",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Schools (classroom)",
          metrics: [
            ["", "I taught children in classrooms and on sports fields before I taught adults", false],
            ["Kindergarten", "I taught English from kindergarten to adults at a language school in China (2007)", true],
            ["Athletics", "I coached athletics at a primary school", true],
          ],
        },
        {
          category: "Organizations (teams)",
          metrics: [
            ["", "I train the people who train others", false],
            ["Coaches", "I certified 500+ coaches to teach a method that 90,000+ students completed (10X, 2020–2025)", true],
            ["Employees", "I trained Mindvalley’s employees in its learning method as Learning Director (2016–2019)", true],
            ["Instructors", "I hired and trained the instructors at my own studio (2011–2014)", true],
          ],
        },
      ],
    },
  ],
};

const ENGAGEMENT: StatTableData = {
  title: "Engagement",
  groups: [
    {
      domain: "Working Method",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Steps (sequence)",
          metrics: [
            ["", "I measure first, arrange second, train third, and hand over last", false],
            ["Assess", "I measure each person against a benchmark before I change anything", true],
            ["Arrange", "I set up the home and its tools so the right action is the easy one", true],
            ["Train", "I teach each person to run their part alone, then raise the level", true],
            ["Hand over", "I write the standard down and train the family or its staff to keep it", true],
          ],
        },
      ],
    },
    {
      domain: "Standing Terms",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Commitment (one household)",
          metrics: [
            ["", "I serve one household at a time and give it all of my working hours", false],
            ["Role", "Private educator and household chief of staff", true],
            ["Basis", "Full time, as an employee or on retainer", true],
            ["Location", "New York City and the New York area", true],
          ],
        },
        {
          category: "Assurances (checks)",
          metrics: [
            ["", "I work unseen: your family’s life stays yours", false],
            ["Discretion", "I sign a confidentiality agreement and name no client, here or anywhere", true],
            ["References", "Available on request", true],
            ["Clearance", "Authorized to work in the US and ready for a background check", true],
            ["Safety", "CPR and AED certified by the American Heart Association (valid to November 2028)", true],
            ["Driving", "New York driver’s license in progress", true],
            ["Languages", "English, Afrikaans, and Mandarin Chinese", true],
          ],
        },
      ],
    },
  ],
};

// References (Evidence) — only public material already cited elsewhere on the
// site; private engagements are evidenced by references on request.
const FAMILY_EVIDENCE: ReferenceSection[] = [
  {
    label: "My work with families and individuals",
    items: [
      {
        id: "ev-family-report",
        cite: (
          <>
            <strong>Assessment</strong>: <em><WikiLink href="https://youtu.be/BKUrYsoItLc">Client Report</WikiLink> (2022, Cape Town)</em>; my reports combine maps, status, goals, and the plans to achieve them • video (YouTube)
          </>
        ),
      },
      {
        id: "ev-family-coaching",
        cite: (
          <>
            <strong>Coaching</strong>: <em>Behavioral Change (2022, Utah)</em>; I help people change behavior for the results they seek: <WikiLink href="https://youtu.be/8p5pAPpmy1o">this family</WikiLink> is no exception • video (YouTube)
          </>
        ),
      },
    ],
  },
  {
    label: "My published programs and my own results",
    items: [
      {
        id: "ev-family-training",
        cite: (
          <>
            <strong>Training</strong>: <em>Programmed Practice (since 2008)</em>; build muscle and stay fit in under an hour a week with the <WikiLink href="https://youtube.com/playlist?list=PLkxFhm6Fhw9qCpUj7zoLbLQ4OvAQzRAYQ">10X Method</WikiLink>, my <WikiLink href="/health">health page</WikiLink> the proof • course (YouTube)
          </>
        ),
      },
      {
        id: "ev-family-time",
        cite: (
          <>
            <strong>Time</strong>: <em>Life Management (since 2015)</em>; design an organized life with the <WikiLink href="https://www.youtube.com/playlist?list=PLkxFhm6Fhw9q6XAQg-BMKvFWNqs_AmXWh">Lifestyle Design</WikiLink> course, as my <WikiLink href="/lifestyle">lifestyle page</WikiLink> shows • course (YouTube)
          </>
        ),
      },
      {
        id: "ev-family-method",
        cite: (
          <>
            <strong>Method</strong>: <em><WikiLink href="/knowledge#works">Design Methodologies</WikiLink> (since 2017)</em>; the learning and teaching methods behind everything on this page • page (Web)
          </>
        ),
      },
    ],
  },
];

export const metadata: Metadata = {
  ...pageMeta(
    "Family",
    "A private profile for families and the agencies that represent them: what I do for one household, my record, and how to engage me.",
    "/family",
  ),
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function FamilyPage() {
  return (
    <div className="zoned">
      <PageHeading
        title="Family"
        hatnote={<>This page is private. I share it by link with families and the agencies that represent them.</>}
      />

      <p id="introduction" className="page-hook">I give a family back its time, its health, and its clear thinking.</p>
      <p className="page-promise">
        I work with <strong>one household</strong> at a time, as private educator and household chief of staff. I counsel the parents, teach the children, and train the staff, then arrange the home so the right action is the easy one.
      </p>
      <p>
        Everything I teach I have tested on myself first, and the rest of this site is the record of that. To discuss a placement, write to <WikiLink href={`mailto:${SITE.email}`}>{SITE.email}</WikiLink>.
      </p>

      <hr className="zone-rule" />

      <h2 id="service">
        Service <span className="heading-paren">(Offer)</span>
      </h2>
      <p>
        What a household gains is a function of its <strong>people</strong> (taught) and its <strong>systems</strong> (built), the two best predictors of whether a change lasts. Mine: I counsel the parents, teach the children, train the staff, and build the systems that hold it all together.
      </p>
      <NestedTable {...SERVICE} defaultOpen />

      <h2 id="record">
        Record <span className="heading-paren">(Proof)</span>
      </h2>
      <p>
        Whom to trust with a family is a function of <strong>record</strong> (years) and <strong>range</strong> (ages), the two best predictors of how someone acts unsupervised. Mine: teaching and training since 2007, from kindergarten classrooms to grandparents, in homes and in companies.
      </p>
      <NestedTable {...RECORD} defaultOpen />

      <h2 id="engagement">
        Engagement <span className="heading-paren">(Hiring)</span>
      </h2>
      <p>
        How we work together is a function of <strong>method</strong> (four steps) and <strong>terms</strong> (one household), the two best predictors of whether the work outlives me. Mine: assess, arrange, train, and hand over, for one family at a time, in New York.
      </p>
      <NestedTable {...ENGAGEMENT} defaultOpen />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Evidence)</span></>}
        sections={FAMILY_EVIDENCE}
      />
    </div>
  );
}
