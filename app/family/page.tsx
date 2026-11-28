import { SITE, pageMeta } from "@/content/site";
import { CAROUSEL } from "@/content/profile";
import type { Metadata } from "next";
import Image from "next/image";
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
// Service (Offer) restates Offers (List) in a family's words: one category per
// part of the household (Principals · Family · Home), one row per setting
// (Office · Field · Presence). Each sentence runs from the core duties, through
// the ones that depend on the household, to the extras ("I can also"). Record
// (Proof) shows the range of people served, by role only: NO client or family
// names on this page, ever (consent rule); references are given on request.
// Engagement (Hiring) gives the five steps of the list's Practice and the terms
// a recruiter needs to place me.

// At a glance — the ten-second read for a recruiter who will not open the
// tables. Three columns mirror the three branches below (same names, same
// order, the first band hue of each), three lines each. Every line restates a
// row of the tables: change the tables first, then this.
const PORTRAIT = CAROUSEL[0];
const ROLE = "Family chief of staff";
const GLANCE: { id: string; title: string; paren: string; hue: string; rows: [string, string][] }[] = [
  {
    id: "service",
    title: "Service",
    paren: "Offer",
    hue: "red",
    rows: [
      ["Principals", "Calendar, travel, bills, research, errands"],
      ["Home", "Vendors, records, staff, purchasing"],
      ["Family", "Schedules, school, driving, tutoring"],
    ],
  },
  {
    id: "record",
    title: "Record",
    paren: "Proof",
    hue: "yellow",
    rows: [
      ["Years", "Teaching and training since 2007"],
      ["Range", "Kindergarten classrooms to grandparents"],
      ["Scale", "500+ coaches certified (10X, 2020–2025)"],
    ],
  },
  {
    id: "engagement",
    title: "Engagement",
    paren: "Hiring",
    hue: "blue",
    rows: [
      ["Location", "New York City and the New York area"],
      ["Basis", "Full time, for one household"],
      ["Checks", "US work authorization, CPR and AED"],
    ],
  },
];

const SERVICE: StatTableData = {
  title: "Service",
  groups: [
    {
      domain: "Personal Affairs",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Principals (assistant)",
          metrics: [
            ["", "I take the administration of your life off your desk", false],
            ["Office", "I manage your calendar, book your travel, pay bills and track expenses, research what you have no time for, plan your events, and handle correspondence; I can also write your training and meal plans and design a product with you", true],
            ["Field", "I run your personal errands and drive you (New York license in progress); I can also pack for your trips and cook", true],
            ["Presence", "I travel with you, help with your tech, and host your events; I can also train you in person and teach you to use AI and your devices", true],
          ],
        },
        {
          category: "Family (coordinator)",
          metrics: [
            ["", "I keep your children’s week on track and teach them what school leaves out", false],
            ["Office", "I keep the children’s schedules and liaise with their schools; I can also design a learning program for each child", true],
            ["Field", "I run family errands, drive the children (New York license in progress), and care for your pets", true],
            ["Presence", "I supervise the children; I can also tutor them, coach sport and fitness, build healthy habits with their devices, and teach them to use AI", true],
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
          category: "Home (manager)",
          metrics: [
            ["", "I keep your home running to one written standard", false],
            ["Office", "I manage your vendors, keep the household records, coordinate your staff, and do the online purchasing; I write the household procedures, build AI workflows for routine work, and plan seasonal openings", true],
            ["Field", "I walk the house on daily rounds, run household errands, do minor repairs, organize storage, and look after the cars", true],
            ["Presence", "I supervise your staff and vendors on site; I can also hire and train your staff", true],
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
            ["", "I learn your way first, run the core myself, write it down, hand it over, and only then add", false],
            ["Learn", "I learn how your family already does each thing before I change anything", true],
            ["Run", "I do the duties I was hired for myself, without reminders, until nothing is dropped", true],
            ["Document", "I write each recurring duty down as a checklist anyone can follow", true],
            ["Delegate", "I train your staff and vendors to the written procedure, then check their work", true],
            ["Add", "I use the hours this frees to offer one extra at a time: training, tutoring, cooking, or AI lessons", true],
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
            ["Role", "Family chief of staff: personal assistant, house manager, and family coordinator", true],
            ["Basis", "Full time, as an employee or on retainer", true],
            ["Location", "New York City and the New York area", true],
            ["Willingness", "No request is beneath me; when staff are missing I do the work myself, then fix the gap", true],
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
            ["Habits", "Non-smoker and teetotaler: I do not drink alcohol", true],
            ["Status", "Unmarried, with no children of my own", true],
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

      {/* Identity strip: phones and tablets only (hidden in CSS from 1024px); the desktop rail shows the portrait. */}
      <div className="glance-id">
        <div className="glance-photo">
          <Image
            src={PORTRAIT.src}
            alt="Portrait of Lorenzo Delano"
            fill
            sizes="224px"
            quality={82}
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="glance-name">{SITE.name}</div>
          <div>{ROLE}</div>
          <div className="text-muted">New York City</div>
          {PORTRAIT.photographer && <div className="glance-credit">Photograph by {PORTRAIT.photographer}</div>}
        </div>
      </div>

      <p id="introduction" className="page-hook">I take the running of a household off a family’s hands.</p>
      <p className="page-promise">
        I work for <strong>one household</strong> at a time, as assistant to the principals, manager of the home, and coordinator for the family. You hire me for the core duties; once those run, I add training, tutoring, cooking, and AI.
      </p>

      <section className="glance" aria-label="At a glance">
        <div className="glance-grid">
          {GLANCE.map((col) => (
            <div className="glance-col" key={col.id}>
              <a href={`#${col.id}`} className={`glance-head glance-${col.hue} no-wiki`}>
                {col.title} <span className="glance-paren">({col.paren})</span>
              </a>
              <dl>
                {col.rows.map(([term, value]) => (
                  <div className="glance-row" key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="glance-action">
          <a href={`mailto:${SITE.email}?subject=Placement`} className="glance-button no-wiki">
            Discuss a placement
          </a>
          <span>
            or write to <WikiLink href={`mailto:${SITE.email}`}>{SITE.email}</WikiLink>
          </span>
        </p>
      </section>

      <p>
        Everything I offer a household I have tested in my own first, and <WikiLink href="/">the rest of this site</WikiLink> is the record of that. The three sections below give the detail behind each column.
      </p>

      <hr className="zone-rule" />

      <h2 id="service">
        Service <span className="heading-paren">(Offer)</span>
      </h2>
      <p>
        What I do for a household: your <strong>personal</strong> affairs (the principals and their family) and household <strong>operations</strong> (the home). Together they are the whole job. Each line names my duties in one setting (at a desk, out on errands, or in person), from the ones every household hires for to the ones I add.
      </p>
      <NestedTable {...SERVICE} defaultOpen />

      <h2 id="record">
        Record <span className="heading-paren">(Proof)</span>
      </h2>
      <p>
        Whom I’ve served: <strong>private</strong> households (families and individuals at home) and <strong>public</strong> programs (schools and companies). Together they show how I act unsupervised. I have taught since 2007, from kindergarten classrooms to grandparents.
      </p>
      <NestedTable {...RECORD} defaultOpen />

      <h2 id="engagement">
        Engagement <span className="heading-paren">(Hiring)</span>
      </h2>
      <p>
        How we would work: my <strong>method</strong> (five steps) and my <strong>terms</strong> (one household, with the checks you need). Together they decide whether the work outlives me. I learn, run, document, delegate, and add, for one family at a time.
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
