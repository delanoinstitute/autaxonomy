import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";
import WikiLink from "@/components/WikiLink";

export const metadata = pageMeta(
  "Network",
  "Lorenzo Delano's network as a roster: who holds each seat, the standard each is held to, and which seats stand open.",
  "/network",
);

// Network in three branches — the three vectors of every human relationship:
// Care (take — the people who give the organism what it needs, when it
// needs it), Collaboration (share — the people beside me), Contribution (give — the
// people who depend on me). Two bands per branch, per the site standard:
// personal and professional. Categories are named for the page each
// relationship serves (Story, Lifestyle, Knowledge, Health, Wealth) with the
// role class in the gloss. Rows are ROLES ordered by need — each appears in
// the order life requires it, the next hire triggered by getting busier or
// richer — so band counts count relationship types. Each role's value is its
// benchmark: the four A's for people (available, able, affective, advocating)
// shading into the three C's for services (consistent, comprehensive,
// current) as encounters thin. The holder hangs beneath as an unlabelled
// child. Two statuses: "Pending" marks a role whose holder will be published
// and linked once the contact is made; "Private" marks a role held or to be
// held whose details stay unpublished by design — private individuals,
// protected relationships, confidential rooms. Kept deliberately minimal: standing relationships only —
// once-off and referral-reachable experts live in the private plans, not the
// map. Named people appear only in professional capacity or with standing
// consent. Benchmarks marked "Pending" refine band by band.

const NURTURE: StatTableData = {
  title: "Care",
  groups: [
    {
      domain: "Personal Nurturers",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Story (caretakers)",
          metrics: [
            ["", "The care I call on rather than schedule", false],
            ["Family (blood)", "The best families stay available, capable, and affective long after the raising", true],
            ["Mother", "Rizél Delano", true, "The best parents remain the first call — no appointment, no invoice, no judgment.", undefined, true],
            ["Maternal grandfather", "Louis van den Berg (Deceased)", true, "The care two generations up, held now in memory — present when it counted.", undefined, true],
            ["Community (place)", "The best communities are close, warm, and watchful", true],
            ["Neighbors (connectors)", "Private", true, "One of the map’s five connectors — the local world’s map of who shows up and who to trust.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Professional Nurturers",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Lifestyle (attendants)",
          metrics: [
            ["", "My hours bought back, my home kept, my body groomed", false],
            ["Agents (time)", "The best agents are always available, consistent, and fast", true],
            ["Assistant (AI)", "Private (administrator; planner); Claude (researcher; analyst; editor)", true, "The role AI already half-holds — always available, never inconsistent, instant — with the human half arriving when the calendar outvalues the salary.", undefined, true],
            ["Keepers (home)", "The best keepers are capable, consistent, and likable (trusted alone at home)", true],
            ["Housekeeper", "Pending", true, "The first hire of the buying-back-time ladder — the next arrives whenever life gets busier or income gets larger.", undefined, true],
            ["Handyman", "Pending", true, "The best handymen close the gap between the landlord’s contract and daily life — everything smaller than a major break.", undefined, true],
            ["Groomers (body)", "The best groomers are consistent, likable, and close by", true],
            ["Hairdresser", "Pending", true, "Kept for years, they know the head they are working on.", undefined, true],
            ["Esthetician", "Pending", true, "The best estheticians keep the skin on schedule — quarterly, clinical, and honest about what works.", undefined, true],
          ],
        },
        {
          category: "Health (examiners)",
          metrics: [
            ["", "My clinicians, from the first call to the annual scan", false],
            ["Clinicians (care)", "The best clinicians are available, capable, and know exactly who to call next", true],
            ["Pharmacist", "Pending", true, "The best pharmacists are available, consistent, and current on every script. The most frequent health touchpoint in American life — roughly 35 pharmacy visits for every 4 provider visits.", undefined, true],
            ["Physical therapist", "Pending", true, "Clinical anatomy behind the hands: diagnose the injury, rehab it, maintain the tissue. Rehab, prehab, and productive massage in one; you cannot massage yourself.", undefined, true],
            ["Dentist", "Pending", true, "The best dentists diagnose, clean, and operate under one current roof — every additional service is one fewer relationship the network has to carry.", undefined, true],
            ["Doctor (connector)", "Pending", true, "One of the map’s five connectors — the medical world reached through a single relationship.", undefined, true],
            ["Psychologist (AI)", "Dr. John Demartini; Claude (sounding board)", true, "The best psychologists treat below health and refer beyond it — therapy as treatment is care; as development it sits under Collaboration, with the practitioners. The sounding board supplements, never substitutes.", undefined, true],
            ["Veterinarian", "Pending (waits on pets)", true, "The best veterinarians are available, capable, and gentle.", undefined, true],
            ["Diagnosticians (data)", "The best diagnosticians measure the same way using the latest tech", true],
            ["Optometrist", "Pending", true, "The best optometrists are consistent and current, one prescription to the next.", undefined, true],
            ["Physiologist", "Tim Klein; Reece McDonald", true, "The best physiologists test consistently and on the latest protocols — the product is the trend line, not the reading.", undefined, true],
            ["Radiologist", "Cape Radiology", true, "The best radiologists scan on the same current machine year after year.", undefined, true],
          ],
        },
        {
          category: "Knowledge (transmitters)",
          metrics: [
            ["", "Instruction on demand, from one tutor to many shelves", false],
            ["Educators (mind)", "The best educators are capable, current, and clear", true],
            ["Tutor (AI)", "Claude (researcher; explainer; evaluator)", true, "The best tutors are clear, patient, and paced to the student — and the LLM is all three at once, on demand.", undefined, true],
            ["Role models", "Bruce Lee (body); John Demartini (mind); Tony Robbins (humanity); David Deutsch (progress); Elon Musk (future)", true, "The furthest instruction: never addressed to you — the exemplar teaches by being watched, chosen young, chosen precisely, and kept for life.", undefined, true],
            ["Virtual mentors", "Creators (YouTube); Authors (Kindle; Audible); Podcasters (Apple)", true, "Instruction at broadcast distance — a faculty assembled shelf by shelf, one subscription at a time.", undefined, true],
          ],
        },
        {
          category: "Wealth (advisors)",
          metrics: [
            ["", "One firm reads the whole balance sheet, personal and corporate in one conversation", false],
            ["Counselors (money)", "The best counselors read the whole position and sell nothing", true],
            ["Banker", "Andrea Juarez (Chase)", true, "The best bankers put a face on the branch: a named officer who answers, expedites, and escalates — the retail tier the fiduciary doesn’t cover.", undefined, true],
            ["Accountant (AI)", "Eugene Park (Baker Tilly); Claude (analyst)", true, "The best CPAs hold the person and the business at one firm — two ledgers that never contradict each other.", undefined, true],
            ["Fiduciary (connector)", "Pending; Claude (researcher; analyst; planner)", true, "The best fiduciaries are fee-only, capable, and conflict-free. The episodic experts — attorneys, brokers, agents — are reached through this tier’s advocacy, not kept on retainer. One of the map’s five connectors — the money world behind one fee-only relationship.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const PROGRESS: StatTableData = {
  title: "Collaboration",
  groups: [
    {
      domain: "Personal Partners",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Story (companions)",
          metrics: [
            ["", "The people I share life with, the one tier of the map that is the point rather than a means", false],
            ["Family (blood)", "The best families turn shared history into chosen friendship", true],
            ["Brother", "JP Maritz (Deceased)", true, "The relationship that starts unchosen and earns its re-choosing.", undefined, true],
            ["Cousin", "Imelda van den Berg", true, "The best cousins pick up mid-conversation after years apart.", undefined, true],
            ["Friends (heart)", "The best friends are present, honest, and glad when you win", true],
            ["Confidants", "Jelena, Brad, Federico, Vadim, and David (the closest five)", true, "The ones who hear the news before it is good.", undefined, true],
            ["Circle", "Vishen, Federico, Pam (the wider fifteen)", true, "The friendships that survive on monthly attention.", undefined, true],
            ["Intimates (love)", "The best intimates share the values, the direction, and the load", true],
            ["Partner", "Private", true, "Chosen once, kept daily.", undefined, true],
            ["Pets", "Pending", true, "The best pets keep no ledger (affection without account).", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Professional Partners",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Health (practitioners)",
          metrics: [
            ["", "The professionals pushing me past baseline in behavior, technique, and program", false],
            ["Coaches (behavior)", "The best coaches bring strategy, accountability, and tiny experiments", true],
            ["Performance coach (AI)", "Claude (life)", true, "In person or virtual, toward the endpoint of self-sufficiency: needing them less. Sports coaching sits here too: half mind, half mechanics.", undefined, true],
            ["Instructors (technique)", "The best instructors demonstrate, correct, and progress the technique", true],
            ["Fitness trainer", "Self-sufficient", true, "The best trainers pull peak work from their subjects on well-designed programs: assess, motivate, track as it happens — a craft I hold myself.", undefined, true],
            ["Martial arts master", "Pending", true, "The art taught the only way it can be: under a teacher's eye, one correction at a time.", undefined, true],
            ["Planners (program)", "The best planners assess, design, and adjust what I follow", true],
            ["Dietitian (AI)", "Self-sufficient; Claude (researcher; planner)", true, "Dietitian, not nutritionist: the licensed clinical tier — medical nutrition therapy read off labs. Behavioral nutrition is my own craft; a dietitian would be hired only for the clinical margin beyond it.", undefined, true],
          ],
        },
        {
          category: "Knowledge (competitors)",
          metrics: [
            ["", "The minds I trade with, wisdom shared rather than bought", false],
            ["Cohorts (circumstance)", "The best cohorts share the era, the craft, or the arena", true],
            ["Mates", "Private", true, "The peers of shared eras — classrooms, teams, homelands — who knew you before the record existed.", undefined, true],
            ["Colleagues", "None", true, "The peers of the same craft: the ones who understand the work without the backstory.", undefined, true],
            ["Rivals", "Private", true, "The peers of the arena — the other school, the rival shop: opposed on the day, improving each other across the years.", undefined, true],
            ["Associates (purpose)", "The best associates share the room, the build, and the candor", true],
            ["Members (connectors)", "Abundance360; Integral Life; GymnasticBodies", true, "The peers of chosen rooms — masterminds, clubs, cohorts — joined on purpose and sworn to candor. One of the map’s five connectors — every member a gateway to their own cluster.", undefined, true],
            ["Collaborators", "Private", true, "The peers of the shared build — often from different crafts entirely, met over one project and kept long after the credits.", undefined, true],
          ],
        },
        {
          category: "Wealth (venturers)",
          metrics: [
            ["", "The people building alongside me, stakes aligned", false],
            ["Owners (equity)", "The best owners share the risk, the upside, and the values", true],
            ["Cofounders", "Pending", true, "The best cofounders are opposite in skill, identical in values — mismatched skills compound, mismatched values detonate.", undefined, true],
            ["Investors (connectors)", "Pending", true, "The best investors bring the network and the patience, not just the check. One of the map’s five connectors — the deal world behind the check.", undefined, true],
            ["Counterparties (contracts)", "The best counterparties bring capital, distribution, and incentives", true],
            ["Distributors", "Pending", true, "The institutional affiliate: platforms, retailers, and publishers carrying the product for a margin paid from the sale.", undefined, true],
            ["Lenders", "Pending", true, "The fixed claim on the venture: paid first, capped, indifferent to the upside — kept cheap and kept close.", undefined, true],
            ["Affiliates", "Pending", true, "The best affiliates sell what they already use.", undefined, true],
            ["Vendors", "Pending", true, "The inputs by invoice: paid regardless of revenue — the counterparty on the cost side, seated when the relationship matters, not just the invoice.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const CONTRIBUTION: StatTableData = {
  title: "Contribution",
  groups: [
    {
      domain: "Personal Dependents",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Story (beneficiaries)",
          metrics: [
            ["", "The people my work is finally for, holding first claim on what I build", false],
            ["Family (blood)", "The best families inherit the time before the money", true],
            ["Children", "None", true, "The claim that does not exist yet — the map holds the slot.", undefined, true],
            ["Mother", "Rizél Delano", true, "The first claim runs upstream: the warm-hand inheritance — time and experiences given while they can still be shared. The proxy travels with the claim: advocacy granted in advance, held for the person who once held mine.", undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Professional Dependents",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Knowledge (receivers)",
          metrics: [
            ["", "The learners downstream of what I know", false],
            ["Learners (mind)", "The best learners outgrow the teacher", true],
            ["Students", "Pending", true, "The most immersive seat: enrolled and interactive, in person or virtual — the teaching’s full bandwidth.", undefined, true],
            ["Attendees", "Pending", true, "Present for the live transmission — the room’s energy without the enrollment.", undefined, true],
            ["Readers", "Website", true, "The oldest bandwidth: text — slowest, deepest, most re-readable.", undefined, true],
            ["Viewers", "YouTube; Mindvalley", true, "The recorded lesson, watched: full picture, no presence.", undefined, true],
            ["Listeners", "None", true, "Audio only — the lesson that travels with the listener.", undefined, true],
          ],
        },
        {
          category: "Wealth (multipliers)",
          metrics: [
            ["", "The people who turn my output into income, theirs and mine", false],
            ["Patrons (demand)", "The best patrons buy the hours, the outcomes, the products, or the attention", true],
            ["Employers", "None", true, "The patron at zero distance: one buyer of all the hours.", undefined, true],
            ["Clients (referrers)", "Private", true, "The patron at arm’s length: they buy outcomes, and the rate prices the value rather than the time — and the best bring the next client with them.", undefined, true],
            ["Customers", "None", true, "The patron at scale: they buy the product, never the person — the only demand that compounds.", undefined, true],
            ["Sponsors", "None", true, "The patron of the audience: they buy access to attention, not hours or products — demand wearing a marketing budget.", undefined, true],
            ["Stakeholders (supply)", "The best stakeholders share the labor, the capital, and the upside", true],
            ["Employees (referrers)", "None", true, "The stake paid in labor: the best employees treat the venture as their own, and are given reason to — the best hires arrive by their referral.", undefined, true],
            ["Contractors", "None", true, "Labor by agreement, not employment — the lead followed without the payroll.", undefined, true],
            ["Representatives", "None", true, "The venture’s voice at the customer: they sell as you, not just for you — where the affiliate endorses to their audience, the representative carries yours.", undefined, true],
            ["Trainees", "None", true, "The student with a hire date: taught with intent — the knowledge category’s learner, grown toward the payroll.", undefined, true],
            ["Shareholders", "None", true, "The stake paid in capital: fortunes shared both ways.", undefined, true],
          ],
        },
      ],
    },
  ],
};

const NETWORK_DATA: ReferenceSection[] = [
  {
    label: "My standing providers from care and collaboration, recommended by use",
    items: [
      {
        id: "rec-assistant",
        cite: (
          <>
            <strong>Assistant</strong>: <em>Claude (2025–present)</em>; researcher, analyst, editor, tutor, and sounding board, the roles it holds across this page • LLM (<WikiLink href="https://www.anthropic.com">Anthropic</WikiLink>)
          </>
        ),
      },
      {
        id: "rec-dentist",
        cite: (
          <>
            <strong>Dentist</strong>: <em>Dr. JJ Serfontein (2023–2026)</em>; examination, hygiene, and dental work under one roof • dentistry (<WikiLink href="https://www.jjteeth.co.za/">JJS Dentistry</WikiLink>)
          </>
        ),
      },
      {
        id: "rec-psychologist",
        cite: (
          <>
            <strong>Psychologist</strong>: <em>Dr. John Demartini (2023–present)</em>; values work and emotional and mental mastery, systematized rather than essayed • human behavior (<WikiLink href="https://drdemartini.com">Demartini Institute</WikiLink>)
          </>
        ),
      },
      {
        id: "rec-physiologist",
        cite: (
          <>
            <strong>Physiologist</strong>: <em>Reece McDonald (2023–present)</em>; CPET, lactate, and performance testing on repeatable protocols • exercise physiology (<WikiLink href="https://www.science2sport.com">Science2Sport</WikiLink>, SSISA)
          </>
        ),
      },
      {
        id: "rec-virtual-mentors",
        cite: (
          <>
            <strong>Virtual mentors</strong>: <em>Top-60 YouTube Resources (2025)</em>; the curated faculty and guidelines for continuous self-education • presentation (<WikiLink href="https://youtu.be/h8FYdFHeDtg">YouTube</WikiLink>)
          </>
        ),
      },
      {
        id: "rec-coach",
        cite: (
          <>
            <strong>Coach</strong>: <em>Jelena Lakic (2018–present)</em>; behavior, accountability, and health strategy, in person and virtual • health coaching (<WikiLink href="https://jelenalakic.com/">jelenalakic.com</WikiLink>)
          </>
        ),
      },
      {
        id: "rec-instructor",
        cite: (
          <>
            <strong>Instructor</strong>: <em>Brad Openshaw (2011–present)</em>; strength and movement instruction, the standard the self-sufficiency was built on • personal training (<WikiLink href="https://movefreely.co.za/">MoveFreely</WikiLink>)
          </>
        ),
      },
    ],
  },
];

const NETWORK_GUIDELINES: ReferenceSection[] = [
  {
    label: "The meta-analyses informing my benchmarks",
    items: [
      {
        id: "survival",
        cite: (
          <>
            <strong>Survival</strong>: Holt-Lunstad, J., Smith, T. B., and Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7).
          </>
        ),
        url: "https://doi.org/10.1371/journal.pmed.1000316",
        urlLabel: "DOI",
      },
      {
        id: "grandparents",
        cite: (
          <>
            <strong>Grandparents</strong>: Sear, R., and Mace, R. (2008). Who keeps children alive? A review of the effects of kin on child survival. <em>Evolution and Human Behavior</em>, 29(1).
          </>
        ),
        url: "https://doi.org/10.1016/j.evolhumbehav.2007.10.001",
        urlLabel: "DOI",
      },
      {
        id: "screening",
        cite: (
          <>
            <strong>Screening</strong>: Krogsbøll, L. T., Jørgensen, K. J., and Gøtzsche, P. C. (2019). General health checks in adults for reducing morbidity and mortality from disease. <em>Cochrane Database of Systematic Reviews</em>, 1.
          </>
        ),
        url: "https://doi.org/10.1002/14651858.CD009009.pub3",
        urlLabel: "DOI",
      },
      {
        id: "pets-survival",
        cite: (
          <>
            <strong>Pets</strong>: Kramer, C. K., Mehmood, S., and Suen, R. S. (2019). Dog ownership and survival: a systematic review and meta-analysis. <em>Circulation: Cardiovascular Quality and Outcomes</em>, 12(10).
          </>
        ),
        url: "https://doi.org/10.1161/CIRCOUTCOMES.119.005554",
        urlLabel: "DOI",
      },
      {
        id: "coaching",
        cite: (
          <>
            <strong>Coaching</strong>: Jones, R. J., Woods, S. A., and Guillaume, Y. R. F. (2016). The effectiveness of workplace coaching: a meta-analysis of learning and performance outcomes from coaching. <em>Journal of Occupational and Organizational Psychology</em>, 89(2).
          </>
        ),
        url: "https://doi.org/10.1111/joop.12119",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The randomized experiments informing my benchmarks",
    items: [
      {
        id: "neighborhoods",
        cite: (
          <>
            <strong>Neighborhoods</strong>: Chetty, R., Hendren, N., and Katz, L. F. (2016). The effects of exposure to better neighborhoods on children: new evidence from the Moving to Opportunity experiment. <em>American Economic Review</em>, 106(4).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/aer.20150572",
        urlLabel: "AEA",
      },
      {
        id: "time",
        cite: (
          <>
            <strong>Time</strong>: Whillans, A. V., et al. (2017). Buying time promotes happiness. <em>Proceedings of the National Academy of Sciences</em>, 114(32).
          </>
        ),
        url: "https://doi.org/10.1073/pnas.1706541114",
        urlLabel: "DOI",
      },
      {
        id: "giving",
        cite: (
          <>
            <strong>Giving</strong>: Dunn, E. W., Aknin, L. B., and Norton, M. I. (2008). Spending money on others promotes happiness. <em>Science</em>, 319(5870).
          </>
        ),
        url: "https://doi.org/10.1126/science.1150952",
        urlLabel: "DOI",
      },
      {
        id: "luck",
        cite: (
          <>
            <strong>Luck</strong>: Salganik, M. J., Dodds, P. S., and Watts, D. J. (2006). Experimental study of inequality and unpredictability in an artificial cultural market. <em>Science</em>, 311(5762).
          </>
        ),
        url: "https://doi.org/10.1126/science.1121066",
        urlLabel: "DOI",
      },
      {
        id: "exemplars",
        cite: (
          <>
            <strong>Exemplars</strong>: Lockwood, P., and Kunda, Z. (1997). Superstars and me: predicting the impact of role models on the self. <em>Journal of Personality and Social Psychology</em>, 73(1).
          </>
        ),
        url: "https://doi.org/10.1037/0022-3514.73.1.91",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The administrative and historical records informing my benchmarks",
    items: [
      {
        id: "place",
        cite: (
          <>
            <strong>Place</strong>: Chetty, R., et al. (2014). Where is the land of opportunity? The geography of intergenerational mobility in the United States. <em>Quarterly Journal of Economics</em>, 129(4).
          </>
        ),
        url: "https://www.nber.org/papers/w19843",
        urlLabel: "NBER",
      },
      {
        id: "connection",
        cite: (
          <>
            <strong>Connection</strong>: Chetty, R., et al. (2022). Social capital I: measurement and associations with economic mobility. <em>Nature</em>, 608(7921).
          </>
        ),
        url: "https://doi.org/10.1038/s41586-022-04996-4",
        urlLabel: "DOI",
      },
      {
        id: "clinicians-supply",
        cite: (
          <>
            <strong>Clinicians</strong>: Basu, S., et al. (2019). Association of primary care physician supply with population mortality in the United States, 2005–2015. <em>JAMA Internal Medicine</em>, 179(4).
          </>
        ),
        url: "https://doi.org/10.1001/jamainternmed.2018.7624",
        urlLabel: "DOI",
      },
      {
        id: "schooling",
        cite: (
          <>
            <strong>Schooling</strong>: Coleman, J. S., et al. (1966). <em>Equality of Educational Opportunity</em>. United States Government Printing Office.
          </>
        ),
        url: "https://eric.ed.gov/?id=ED012275",
        urlLabel: "ERIC",
      },
      {
        id: "founders",
        cite: (
          <>
            <strong>Founders</strong>: Azoulay, P., et al. (2020). Age and high-growth entrepreneurship. <em>American Economic Review: Insights</em>, 2(1).
          </>
        ),
        url: "https://doi.org/10.1257/aeri.20180582",
        urlLabel: "DOI",
      },
      {
        id: "teams",
        cite: (
          <>
            <strong>Teams</strong>: Wu, L., Wang, D., and Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. <em>Nature</em>, 566(7744).
          </>
        ),
        url: "https://doi.org/10.1038/s41586-019-0941-9",
        urlLabel: "DOI",
      },
      {
        id: "word-of-mouth",
        cite: (
          <>
            <strong>Word of mouth</strong>: Trusov, M., Bucklin, R. E., and Pauwels, K. (2009). Effects of word-of-mouth versus traditional marketing: findings from an internet social networking site. <em>Journal of Marketing</em>, 73(5).
          </>
        ),
        url: "https://doi.org/10.1509/jmkg.73.5.90",
        urlLabel: "DOI",
      },
      {
        id: "investors-smart",
        cite: (
          <>
            <strong>Investors</strong>: Sørensen, M. (2007). How smart is smart money? A two-sided matching model of venture capital. <em>Journal of Finance</em>, 62(6).
          </>
        ),
        url: "https://doi.org/10.1111/j.1540-6261.2007.01291.x",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The cohorts and field studies informing my benchmarks",
    items: [
      {
        id: "status",
        cite: (
          <>
            <strong>Status</strong>: Marmot, M. G., et al. (1991). Health inequalities among British civil servants: the Whitehall II study. <em>Lancet</em>, 337(8754).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/1674771/",
        urlLabel: "PubMed",
      },
      {
        id: "ties",
        cite: (
          <>
            <strong>Ties</strong>: Granovetter, M. S. (1973). The strength of weak ties. <em>American Journal of Sociology</em>, 78(6).
          </>
        ),
        url: "https://doi.org/10.1086/225469",
        urlLabel: "DOI",
      },
      {
        id: "size",
        cite: (
          <>
            <strong>Size</strong>: Hill, R. A., and Dunbar, R. I. M. (2003). Social network size in humans. <em>Human Nature</em>, 14(1).
          </>
        ),
        url: "https://doi.org/10.1007/s12110-003-1016-y",
        urlLabel: "DOI",
      },
      {
        id: "capacity",
        cite: (
          <>
            <strong>Capacity</strong>: Dunbar, R. I. M. (1992). Neocortex size as a constraint on group size in primates. <em>Journal of Human Evolution</em>, 22(6).
          </>
        ),
        url: "https://doi.org/10.1016/0047-2484(92)90081-J",
        urlLabel: "DOI",
      },
      {
        id: "parents-structure",
        cite: (
          <>
            <strong>Parents</strong>: McLanahan, S., and Sandefur, G. (1994). <em>Growing Up with a Single Parent: What Hurts, What Helps</em>. Harvard University Press.
          </>
        ),
        url: "https://eric.ed.gov/?id=ED375224",
        urlLabel: "ERIC",
      },
      {
        id: "friends-contagion",
        cite: (
          <>
            <strong>Friends</strong>: Christakis, N. A., and Fowler, J. H. (2007). The spread of obesity in a large social network over 32 years. <em>New England Journal of Medicine</em>, 357(4).
          </>
        ),
        url: "https://doi.org/10.1056/NEJMsa066082",
        urlLabel: "DOI",
      },
      {
        id: "partners-harvard",
        cite: (
          <>
            <strong>Partners</strong>: Waldinger, R. J., and Schulz, M. S. (2010). What’s love got to do with it? Social functioning, perceived health, and daily happiness in married octogenarians. <em>Psychology and Aging</em>, 25(2).
          </>
        ),
        url: "https://doi.org/10.1037/a0019087",
        urlLabel: "DOI",
      },
      {
        id: "communities",
        cite: (
          <>
            <strong>Communities</strong>: Li, S., et al. (2016). Association of religious service attendance with mortality among women. <em>JAMA Internal Medicine</em>, 176(6).
          </>
        ),
        url: "https://doi.org/10.1001/jamainternmed.2016.1615",
        urlLabel: "DOI",
      },
      {
        id: "rivals-drive",
        cite: (
          <>
            <strong>Rivals</strong>: Kilduff, G. J. (2014). Driven to win: rivalry, motivation, and performance. <em>Social Psychological and Personality Science</em>, 5(8).
          </>
        ),
        url: "https://doi.org/10.1177/1948550614539770",
        urlLabel: "DOI",
      },
      {
        id: "brokerage",
        cite: (
          <>
            <strong>Brokerage</strong>: Burt, R. S. (2004). Structural holes and good ideas. <em>American Journal of Sociology</em>, 110(2).
          </>
        ),
        url: "https://doi.org/10.1086/421787",
        urlLabel: "DOI",
      },
      {
        id: "caregiving",
        cite: (
          <>
            <strong>Caregiving</strong>: Schulz, R., and Beach, S. R. (1999). Caregiving as a risk factor for mortality: the Caregiver Health Effects Study. <em>JAMA</em>, 282(23).
          </>
        ),
        url: "https://doi.org/10.1001/jama.282.23.2215",
        urlLabel: "DOI",
      },
      {
        id: "credentials",
        cite: (
          <>
            <strong>Credentials</strong>: Altonji, J. G., and Zhong, L. (2021). The labor market returns to advanced degrees. <em>Journal of Labor Economics</em>, 39(2).
          </>
        ),
        url: "https://doi.org/10.1086/710959",
        urlLabel: "DOI",
      },
    ],
  },
];

export default function NetworkPage() {
  return (
    <div className="zoned">
      <PageHeading
        title="Network"
      />

      <p id="introduction" className="page-hook">Your network carries your work farther than you can.</p>
      <p className="page-promise">
        My network runs in three directions: <strong>care</strong> (who I lean on), <strong>collaboration</strong> (who I walk beside), and <strong>contribution</strong> (who counts on me). Together they predict my reach: what I can attempt.
      </p>
      <p>
        My family is given; every other seat is chosen, hired, or earned. I measure each by a graded roster: four A’s for people, three C’s for services, open seats listed. To master my network, I fill each seat to the standard it deserves, and hold it.
      </p>

      <hr className="zone-rule" />

      <h2 id="care">
        Care <span className="heading-paren">(Support)</span>
      </h2>
      <p>
        Who I lean on: my <strong>personal</strong> nurturers (family) and my <strong>professional</strong> nurturers (people I hire). Together they decide how far I reach and how fast I recover. I call on care instead of scheduling it, and I hire one seat for each capital.
      </p>
      <NestedTable {...NURTURE} />

      <h2 id="collaboration">
        Collaboration <span className="heading-paren">(Exchange)</span>
      </h2>
      <p>
        Who I walk beside: my <strong>personal</strong> partners (companions) and my <strong>professional</strong> partners (coaches, peers, and owners). Together they set my pace and who I become. I share life with companions, trade wisdom with peers, and build beside owners.
      </p>
      <NestedTable {...PROGRESS} />

      <h2 id="contribution">
        Contribution <span className="heading-paren">(Service)</span>
      </h2>
      <p>
        Who counts on me: my <strong>personal</strong> dependents (family) and my <strong>professional</strong> dependents (learners and patrons). Together they decide what my work is for and how it pays. I build first for family, then for learners downstream of what I know.
      </p>
      <NestedTable {...CONTRIBUTION} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={NETWORK_DATA}
      />

      <References
        id="guidelines"
        title={<>References <span className="heading-paren">(Guidelines)</span></>}
        sections={NETWORK_GUIDELINES}
      />
    </div>
  );
}
