import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import { NestedTable } from "@/components/NestedTable";
import type { StatTableData } from "@/components/StatTable";
import { References, type ReferenceSection } from "@/components/References";
import WikiLink from "@/components/WikiLink";

export const metadata = pageMeta(
  "Wealth",
  "Lorenzo Delano's finances run as a firm of one: security, efficiency, and growth, debt-free with top-tier credit, every decision on the record.",
  "/wealth",
);

// Wealth in three branches, hierarchical as well as independent: Security
// (insure the downside, then earn), Efficiency (spend and settle like an income
// statement), Growth (allocate what remains, investments before ventures).
// Two bands per branch, per the site standard. Actual figures — balances, net
// worth, holdings — are deliberately excluded site-wide; this page publishes
// the system and the benchmarks it runs against, not the account values.
// Primary metrics carry the benchmark; constituents hang indented beneath
// (the ALMI pattern from /health). Benchmarks marked "pending" are unset.

const SECURITY: StatTableData = {
  title: "Security",
  groups: [
    {
      domain: "Personal Insurance",
      hue: "red",
      label: "",
      rows: [
        {
          category: "Personal (first-party cover)",
          metrics: [
            ["", "I insure my capacity and possessions before chasing any upside", false],
            ["Health", "HSA-qualified high-deductible plan; out-of-pocket maximum held within cash reserves", true, "In the US, an HSA-qualified plan pairs lower premiums with a Health Savings Account — the only triple-tax-advantaged account (deductible in, growing untaxed, untaxed out for medical costs). The benchmark: the plan's worst-case annual cost never exceeds the cash reserve."],
            ["Disability", "Own-occupation cover replacing ~60% of income", true, "The insurance on earning capacity itself — statistically likelier to be needed before 65 than life cover. Own-occupation pays if I cannot do my work, not merely any work."],
            ["Property", "Coverage ratio >1.0 — insured at or above replacement cost", true, "Insured value ÷ replacement cost. Below 1.0 a loss is partly mine; at or above it the asset is made whole."],
            ["Renters", "Liability-first at $300k+ with replacement-cost contents", true, undefined, undefined, true],
            ["Auto", "None owned — non-owner liability while carless; 250/500/100 when owned", true, undefined, undefined, true],
            ["Homeowners", "No purchase planned anytime soon — the benchmark waits on ownership", true, undefined, undefined, true],
          ],
        },
        {
          category: "Social (third-party cover)",
          metrics: [
            ["", "I cover what my life or liability could cost other people", false],
            ["Umbrella", "$1M+ excess liability, layered above renters and non-owner auto cover", true, "A personal umbrella policy sits on top of the liability limits in the underlying policies — renters, and auto or non-owner auto while carless — and is priced in the low hundreds per year per million. The standard sizing: at least net worth, rounded up to the next million."],
            ["Life", "Coverage ratio >1.0 of obligations — term only; minimal while no dependents", true, "Term life pays others when I cannot. Sized to obligations left behind (debts, dependents, commitments), not to income; whole-life products are an investment and an insurance doing both jobs badly."],
          ],
        },
      ],
    },
    {
      domain: "Earned Income",
      hue: "orange",
      label: "",
      rows: [
        {
          category: "Active (earning capacity)",
          metrics: [
            ["", "Income bought with my hours: the assets it leverages do not scale", false],
            ["Service", "Hourly rate ($500); leverages time", true, "Time exchanged directly for money. The rate is the single lever: it prices every engagement, whether billed as professional fees, salary, or wage."],
            ["Professional", "Consulting and design engagements", true, undefined, undefined, true],
            ["Salary", "Employment — none held", true, undefined, undefined, true],
            ["Wage", "Hourly work — none held", true, undefined, undefined, true],
            ["Prizes", "Performance awards", true, undefined, undefined, true],
            ["Product", "Sales margin (higher is better); leverages materials and technology", true, "Things sold rather than hours billed; margin is the fraction of each sale kept after its costs."],
            ["Commission", "Sales of others’ products", true, undefined, undefined, true],
            ["Capital gains", "Assets sold above basis", true, undefined, undefined, true],
          ],
        },
        {
          category: "Passive (ownership performance)",
          metrics: [
            ["", "Income my assets earn: people, capital, and technology scale where hours cannot", false],
            ["Partnership", "Percentage share (higher is better); leverages people and technology", true, "Income from association rather than labor or capital: a share of someone else's sales or audience."],
            ["Royalty", "Intellectual property licensed out", true, undefined, undefined, true],
            ["Sponsorship", "Audience access sold", true, undefined, undefined, true],
            ["Affiliate", "Referral percentages", true, undefined, undefined, true],
            ["Platform", "Content, subscriptions, and ad revenue", true, undefined, undefined, true],
            ["Investment", "Coverage ratio \u22652.0 — returns covering expenses twice over; leverages capital", true, "Total investment returns \u00f7 expenses. At 1.0 the bills are paid but inflation eats the principal; at 2.0 I spend half and reinvest half, so capital keeps its real value — roughly 29\u00d7 annual expenses. On a die-with-zero plan the requirement falls as the horizon shortens."],
            ["Interest", "Debt instruments and cash", true, undefined, undefined, true],
            ["Dividends", "Equity distributions", true, undefined, undefined, true],
            ["Rental", "Property lease income", true, undefined, undefined, true],
            ["Insurance", "Policy payouts and annuities", true, undefined, undefined, true],
            ["Gifts", "Share of income (lower is better); leverages nothing", true, "Unearned inflows — the null case: income with no exchange and no leverage behind it, which is why this is the one benchmark that runs lower-is-better. Welcome, never planned on — a rising share signals dependence rather than fortune."],
            ["Bonuses", "Discretionary awards", true, undefined, undefined, true],
            ["Grants", "Institutional awards and scholarships", true, undefined, undefined, true],
            ["Donations", "Personal gifts", true, undefined, undefined, true],
            ["Inheritance", "Estate transfers", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const EFFICIENCY: StatTableData = {
  title: "Efficiency",
  groups: [
    {
      domain: "Living Expenses",
      hue: "yellow",
      label: "",
      rows: [
        {
          category: "Operational (monthly burn)",
          metrics: [
            ["", "The recurring cost of running my life, held under a third of income", false],
            ["Fixed", "Gross margin >70% (income surviving the recurring burn)", true, "Read the corporate way: the share of gross income kept after fixed costs — everything that arrives monthly whether or not anything happens, held under 30%. With variable spending under 5%, total expenses hold under 35% of gross; tax takes under 15%; at least half of every dollar flows on to payments, savings, and investment."],
            ["Home", "Facilities (rent; utilities; services) and consumables (groceries; detergents; toiletries)", true, undefined, undefined, true],
            ["Health", "Care (fitness; beauty; therapy; childcare; eldercare; pet care)", true, undefined, undefined, true],
            ["Mobility", "Transit (rideshare; public transit) and vehicle (lease; fuel; charging)", true, undefined, undefined, true],
            ["Finance", "Insurance (health; disability; property; umbrella; life) and services (fees)", true, undefined, undefined, true],
            ["Personal", "Experiences (dining; entertainment; education) and goods (software subscriptions)", true, undefined, undefined, true],
          ],
        },
        {
          category: "Capital (one-off costs)",
          metrics: [
            ["", "The lumpy costs, capped so they never set the pace", false],
            ["Variable", "Operating margin >65% (income surviving all burn)", true, "What remains of gross once fixed and variable costs are both paid. The variable line itself — irregular and one-off spending, averaged annually — is capped under 5%, because lumpy costs are where budgets quietly die."],
            ["Home", "Equipment (furniture; appliances) and repairs (services)", true, undefined, undefined, true],
            ["Health", "Medical (out-of-pocket; diagnostics)", true, undefined, undefined, true],
            ["Mobility", "Vehicle (repairs)", true, undefined, undefined, true],
            ["Finance", "Services (professional fees)", true, undefined, undefined, true],
            ["Personal", "Goods (devices; clothing; toys) and experiences (travel)", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Owed Payments",
      hue: "green",
      label: "",
      rows: [
        {
          category: "Debt (interest repayments)",
          metrics: [
            ["", "Credit kept expensive to lose and cheap to use", false],
            ["Credit", "FICO >800 (the top scoring tier)", true, "The US credit score (300–850); above 800 is the tier where every lender's best rate is on the table. Built from five weighted factors."],
            ["Payment history", "35% (never a missed payment)", true, undefined, undefined, true],
            ["Utilization", "30% (balances under 10% of limits)", true, undefined, undefined, true],
            ["Credit history", "15% (average account age, kept long)", true, undefined, undefined, true],
            ["New credit", "10% (inquiries kept rare)", true, undefined, undefined, true],
            ["Credit mix", "10% (revolving and installment both held)", true, undefined, undefined, true],
            ["Load", "Debt service \u226436% of gross (the lenders\u2019 own ceiling)", true, "The 28/36 rule, the standard US underwriting ceiling: housing debt service within 28% of gross income, all debt service within 36%. Access and price mean nothing without a cap on quantity."],
            ["Housing", "\u226428% of gross", true, undefined, undefined, true],
            ["Interest", "Blended cost of debt <5% APR", true, "The weighted average rate across everything owed, kept below what invested capital conservatively returns so debt never outruns assets. Cards and personal loans are unsecured — extended on credit alone; the rest is secured on the asset it bought."],
            ["Credit cards", "Paid in full monthly (0% effective)", true, undefined, undefined, true],
            ["Unsecured", "Personal, student, and business loans (none held)", true, undefined, undefined, true],
            ["Auto loan", "None preferred; <7% APR if held", true, undefined, undefined, true],
            ["Mortgage", "Market rate; refinanced when it pays", true, undefined, undefined, true],
            ["HELOC", "Revolving credit secured on home equity", true, undefined, undefined, true],
            ["SBLOC", "<6% APR (borrowing against the portfolio)", true, undefined, undefined, true],
          ],
        },
        {
          category: "Tax (civic dues)",
          metrics: [
            ["", "Paid in full, on time, and never a percent more than the law asks", false],
            ["Income", "Effective rate <15% (money arriving)", true, "The levers, by mechanism — deferrals: 401(k) and HSA. Deductions: standard or itemized (charitable), QBI, self-employed health insurance, half of self-employment tax, and Schedule C business costs (home office at business-use %, mileage, equipment, software). Credits: foreign tax, saver’s, education, premium. Exclusions: employer-paid benefits and Roth growth."],
            ["Federal", "Income (progressive); self-employment (15.3% — Social Security and Medicare)", true, undefined, undefined, true],
            ["State", "Income (0–13% by state; a relocation criterion)", true, undefined, undefined, true],
            ["Deductions", "Standard or itemized (charitable giving); QBI (pass-through income)", true, undefined, undefined, true],
            ["Consumption", "Effective rate <5% (money leaving)", true, "Thin levers: most states exempt groceries and medicine; rates vary by where you buy; and every unspent dollar is untaxed — the savings margin is the real consumption shelter."],
            ["Sales", "State and local, by jurisdiction", true, undefined, undefined, true],
            ["Excise", "Fuel, tires, and specific goods", true, undefined, undefined, true],
            ["Fees", "Tolls, permits, and licenses", true, undefined, undefined, true],
            ["Ownership", "Effective rate <2% (assets held)", true, "Levers: the homestead exemption on an owned primary residence, protesting the appraisal, and renting — the tax rides inside rent but the liability stays the landlord’s. Municipal bond interest is the classic tax-exempt holding income."],
            ["Property", "Local rates on real estate held", true, undefined, undefined, true],
            ["Transfer", "Effective rate <15% (assets transferred)", true, "Levers: hold past one year for long-term rates, harvest losses against gains, realize in low-income years (the 0% bracket), the home-sale exclusion, the annual gift exclusion, and step-up at death under the estate exemption — though dying with zero retires most of this."],
            ["Capital gains", "Long-term rates (0/15/20%) by holding past one year", true, undefined, undefined, true],
            ["Gift", "Annual exclusion per recipient; unified with the estate exemption above it", true, undefined, undefined, true],
            ["Estate", "Federal exemption; none owed below it", true, undefined, undefined, true],
          ],
        },
        {
          category: "Profits (free cash flow)",
          metrics: [
            ["", "I run myself as a firm: free cash has three uses, each with a rule", false],
            ["Financing", "Repayment margin ≥15% (principal retired first)", true, "The financing decision holds the right mix of debt and equity: every dollar of principal retired is a guaranteed return at the loan’s own rate, so the highest rate goes first. While no debt is held, the margin has nothing to retire and folds into investing — the floor binds only when a balance exists."],
            ["Unsecured", "Maximum pace (the highest rate, retired first)", true, undefined, undefined, true],
            ["Secured", "Minimum schedule (the lowest rate, held longest)", true, undefined, undefined, true],
            ["Dividends", "Payout margin ≤15% (the owner’s draw and the giving)", true, "The dividend decision: cash that cannot beat the hurdle rate is returned to the owners — and the owner is me. The Personal rows in Expenses are the operating baseline; the draw is consumption and giving beyond it — upgrades, indulgences, donations. The cap does the quiet work: lifestyle is held to growing slower than capital, whatever income does."],
            ["Investing", "Savings margin ≥70% (the compounding engine)", true, "The investment decision: allocate only to assets returning above the minimum acceptable hurdle rate. The margin is a firm of one’s retained earnings — the share of free cash that becomes capital — and the single ratio the whole page exists to protect."],
            ["Investments", "The standing portfolio (cash, funds, and shares)", true, undefined, undefined, true],
            ["Ventures", "The active positions (real and equity)", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const GROWTH: StatTableData = {
  title: "Growth",
  groups: [
    {
      domain: "Standing Investments",
      hue: "blue",
      label: "",
      rows: [
        {
          category: "Cash (active banking)",
          metrics: [
            ["", "Three months of burn in cash: enough to be calm, too little to be lazy", false],
            ["Liquidity", "Current ratio ≥3.0 (cash covering obligations three times over)", true, "Current assets over current liabilities — the lender’s first read on solvency. Three months of burn against one month of obligations holds the ratio at three; below it the buffer thins, far above it cash sits idle."],
            ["Checking", "Working capital (one month of expenses)", true, "The operating account: enough to clear one month's obligations, no more, since idle cash loses to inflation.", undefined, true],
            ["Savings", "Reserve capital (two months of expenses, in high-yield savings)", true, "The buffer for capital expenses, debt, taxes, and the health plan’s out-of-pocket maximum — sized to the largest single claim, not their sum — held where it earns a market rate while staying a day away.", undefined, true],
          ],
        },
        {
          category: "Funds (passive management)",
          metrics: [
            ["", "Future me funded first, dreams funded on a date: both before the market gets a dollar", false],
            ["Retirement", "Contribution ratio 100% (every shell filled to its annual limit)", true, "The self-employed stack, in funding order. Maximum contribution is the benchmark because the space expires each year it goes unused — a year skipped never comes back."],
            ["Solo 401(k)", "Employee and employer contributions (both sides maxed)", true, "One person plays both roles: the employee elective deferral plus an employer profit-share of ~25% of compensation, stacking to the highest annual limit of any retirement shell.", undefined, true],
            ["HSA", "Triple-tax-advantaged (deductible in, untaxed growth, untaxed out)", true, "The only shell untaxed at all three gates when spent on medical costs, now or reimbursed decades later. Eligibility comes from the HSA-qualified plan in Security — insurance opens the shell, allocation fills it.", undefined, true],
            ["Roth IRA", "Post-tax in, untaxed forever", true, "Funded with taxed dollars, then never taxed again — growth and withdrawals both. Income limits push high earners through the backdoor conversion; contributions, though not growth, stay accessible without penalty — a quiet second reserve.", undefined, true],
            ["Rewards", "Every dream priced, dated, and funded (the system pays its owner)", true, "The level where the waterfall pays its owner: weddings, holidays, homes, a child’s education — the big purchases, planned rather than impulsed. Funded only once retirement is filled; the reward follows the security."],
            ["Deposits", "Goal-dated Treasuries, CDs, and principal-protected notes (maturing when the purchase arrives)", true, "Money with a date on it — matched to the purchase it funds rather than to a return target. Principal-protected notes only through a fee-only fiduciary; retail versions leak their upside in fees.", undefined, true],
          ],
        },
        {
          category: "Shares (active brokerage)",
          metrics: [
            ["", "The market bought whole, with a small budget for opinions", false],
            ["Hedge", "Maximum allocation (a hedge against retirement shortfalls)", true, "Capital grown past what the retirement shells can hold — insurance against needing more than they offer. Diversified indices are stock ownership in its beginner-safe form: the market’s return without requiring anyone to be right."],
            ["ETFs", "Broad index funds (blend, value, and growth; held for decades)", true, undefined, undefined, true],
            ["Bonds", "Treasuries and TIPS held as ballast (rising in the seasons equities fall)", true, "A dollar split evenly is still mostly equity risk — stocks run about three times bonds’ volatility — so the ballast is duration held permanently, not a date-matched deposit.", undefined, true],
            ["Education", "<20% of the portfolio (tuition capped)", true, "Market education paid at market prices: positions sized so being wrong is affordable tuition. The apprenticeship for ventures — judging businesses with money at stake before running one.", undefined, false],
            ["Stocks", "Individual positions (micro to mega caps)", true, undefined, undefined, true],
          ],
        },
      ],
    },
    {
      domain: "Active Ventures",
      hue: "violet",
      label: "",
      rows: [
        {
          category: "Real (active custody)",
          metrics: [
            ["", "Assets I can stand on, hold, or hand over", false],
            ["Space", "Pending (a piece of the earth owned)", true, "The value function is land itself — the one asset nobody makes more of. Its two modes are interchangeable: a residence becomes a rental when I move on, a rental becomes a residence when I move in — the same instrument, a deed, either way; only the use is a decision."],
            ["Residence", "Owner-occupied at minimum viable (a use asset, not an investment)", true, "The use mode: a roof pays imputed rent, never income, so minimum viable keeps capital in the levels that compound. The homeowners benchmark in Security waits on the same purchase.", undefined, true],
            ["Rentals", "Income property at positive leverage (cap rate above the cost of debt)", true, "The business mode: a property earns its place only when its capitalization rate clears the cost of the debt behind it — otherwise the lender keeps the return and I keep the work.", undefined, true],
            ["Haven", "Pending (a hedge, not a bet)", true, "The safe-haven position — a store of value against debasement, sized as insurance rather than conviction. The benchmark waits on the first position."],
            ["Gold", "Precious metals (physical or allocated)", true, undefined, undefined, true],
            ["Crypto", "Digital assets (an allocation, never a thesis)", true, undefined, undefined, true],
            ["Curation", "Pending (the return includes the owning)", true, "The collection curated as a system — assets that pay in enjoyment while they appreciate, the one level where holding is part of the yield. Unbenchmarked until the first acquisition."],
            ["Collectibles", "Element specimens, antique furniture, and historical artifacts", true, undefined, undefined, true],
          ],
        },
        {
          category: "Equity (active ownership)",
          metrics: [
            ["", "Ownership in businesses, mine before anyone else’s", false],
            ["Enterprise", "Pending (equity built to sell at a multiple)", true, "Why anyone starts a company: to build enterprise value — equity that exits at a multiple of earnings, rather than income that stops when the work does. The bet is on yourself, placed inside the circle of competence: the unique skill that makes the business less risky in your hands than in anyone else’s."],
            ["Business", "An operating company held at or near 100%", true, undefined, undefined, true],
            ["Causes", "Pending (others’ businesses, backed where I have edges)", true, "The graduation from operating: capital placed where operating experience compounds into sector, industry, and product edges. Every good investor concentrates on edges, not on business in general."],
            ["Venture", "Early-stage equity in high-growth startups (SAFEs and priced rounds)", true, undefined, undefined, true],
            ["Private equity", "Stakes in mature private businesses (buyouts, GP stakes, secondaries)", true, undefined, undefined, true],
          ],
        },
      ],
    },
  ],
};

const WEALTH_DATA: ReferenceSection[] = [
  {
    label: "My data derived from underwriting, banking, accounting, and analysis",
    items: [
      {
        id: "insurance-data",
        cite: (
          <>
            <strong>Insurance</strong>: <em>Underwriting (2026–present)</em>; coverage for claims on health, disability, <WikiLink href="https://www.lemonade.com/renters">property</WikiLink>, <WikiLink href="https://www.rlicorp.com/personal-umbrella-insurance">liability</WikiLink>, and <WikiLink href="https://www.lgamerica.com/">life</WikiLink> • policy (multiple providers)
          </>
        ),
      },
      {
        id: "banking-data",
        cite: (
          <>
            <strong>Banking</strong>: <em>Source records (2026–present)</em>; recording and storing source transactions for all income, expenses, and payments categories • statements (Chase; Mercury)
          </>
        ),
      },
      {
        id: "credit-data",
        cite: (
          <>
            <strong>Credit</strong>: <em>Scoring (2026–present)</em>; scoring financial behavior across five dimensions to assess lending and leasing risks • score (FICO)
          </>
        ),
      },
      {
        id: "accounting-data",
        cite: (
          <>
            <strong>Accounting</strong>: <em>General-ledger mapping (2026–present)</em>; organizing and reconciling business transactions into financial statements for lenders, the state, and owners • statements (Xero)
          </>
        ),
      },
      {
        id: "performance-data",
        cite: (
          <>
            <strong>Performance</strong>: <em>Analysis (2025–present)</em>; consolidating banking, credit, and accounting into personal performance statements • ledger (Google Sheets)
          </>
        ),
      },
    ],
  },
];

const WEALTH_GUIDELINES: ReferenceSection[] = [
  {
    label: "The policies and standards informing my benchmarks",
    items: [
      {
        id: "fico",
        cite: (
          <>
            <strong>Credit</strong>: the five FICO factor weights — payment history 35%, utilization 30%, history 15%, new credit 10%, mix 10%.
          </>
        ),
        url: "https://www.myfico.com/credit-education/whats-in-your-credit-score",
        urlLabel: "myFICO",
      },
      {
        id: "load",
        cite: (
          <>
            <strong>Load</strong>: the 28/36 qualifying ratios — housing and total debt service against gross income, the lenders&rsquo; own ceiling.
          </>
        ),
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/",
        urlLabel: "CFPB",
      },
      {
        id: "hsa",
        cite: (
          <>
            <strong>HSA</strong>: IRS Publication 969 — the qualifying plan and the triple tax advantage behind the health shell.
          </>
        ),
        url: "https://www.irs.gov/publications/p969",
        urlLabel: "IRS",
      },
      {
        id: "retirement",
        cite: (
          <>
            <strong>Retirement</strong>: IRS Publication 560 — the solo 401(k)&rsquo;s employee and employer contribution mechanics and limits.
          </>
        ),
        url: "https://www.irs.gov/publications/p560",
        urlLabel: "IRS",
      },
      {
        id: "transfer",
        cite: (
          <>
            <strong>Transfer</strong>: IRS Topic 409 — the 0/15/20% long-term capital gains schedule earned by holding past one year.
          </>
        ),
        url: "https://www.irs.gov/taxtopics/tc409",
        urlLabel: "IRS",
      },
    ],
  },
  {
    label: "The randomized experiments informing my benchmarks",
    items: [
      {
        id: "health-cover",
        cite: (
          <>
            <strong>Health</strong>: Finkelstein, A., et al. (2012). The Oregon Health Insurance Experiment: evidence from the first year. <em>Quarterly Journal of Economics</em>, 127(3).
          </>
        ),
        url: "https://academic.oup.com/qje/article/127/3/1057/1923446",
        urlLabel: "Oxford",
      },
      {
        id: "deductibles",
        cite: (
          <>
            <strong>Deductibles</strong>: Manning, W. G., et al. (1987). Health insurance and the demand for medical care: evidence from a randomized experiment. <em>American Economic Review</em>, 77(3).
          </>
        ),
        url: "https://pubmed.ncbi.nlm.nih.gov/10284091/",
        urlLabel: "PubMed",
      },
      {
        id: "cards",
        cite: (
          <>
            <strong>Cards</strong>: Prelec, D., and Simester, D. (2001). Always leave home without it: a further investigation of the credit-card effect on willingness to pay. <em>Marketing Letters</em>, 12(1).
          </>
        ),
        url: "https://doi.org/10.1023/A:1008196717017",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The natural and quasi-experiments informing my benchmarks",
    items: [
      {
        id: "property-uninsured",
        cite: (
          <>
            <strong>Property</strong>: Billings, S. B., Gallagher, E. A., and Ricketts, L. (2022). Let the rich be flooded: the distribution of financial aid and distress after Hurricane Harvey. <em>Journal of Financial Economics</em>, 146(2).
          </>
        ),
        url: "https://doi.org/10.1016/j.jfineco.2021.11.006",
        urlLabel: "DOI",
      },
      {
        id: "windfalls",
        cite: (
          <>
            <strong>Windfalls</strong>: Holtz-Eakin, D., Joulfaian, D., and Rosen, H. S. (1993). The Carnegie conjecture: some empirical evidence. <em>Quarterly Journal of Economics</em>, 108(2).
          </>
        ),
        url: "https://academic.oup.com/qje/article/108/2/413/1917556",
        urlLabel: "Oxford",
      },
      {
        id: "subscriptions",
        cite: (
          <>
            <strong>Subscriptions</strong>: Einav, L., Klopack, B., and Mahoney, N. (2025). Selling subscriptions. <em>American Economic Review</em>, 115(5).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/aer.20231612",
        urlLabel: "AEA",
      },
      {
        id: "scores",
        cite: (
          <>
            <strong>Scores</strong>: Dobbie, W., et al. (2020). Bad credit, no problem? Credit and labor market consequences of bad credit reports. <em>Journal of Finance</em>, 75(5).
          </>
        ),
        url: "https://www.nber.org/papers/w22711",
        urlLabel: "NBER",
      },
      {
        id: "leverage",
        cite: (
          <>
            <strong>Leverage</strong>: Mian, A., and Sufi, A. (2011). House prices, home equity-based borrowing, and the US household leverage crisis. <em>American Economic Review</em>, 101(5).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/aer.101.5.2132",
        urlLabel: "AEA",
      },
      {
        id: "tax-friction",
        cite: (
          <>
            <strong>Tax</strong>: Benzarti, Y. (2020). How taxing is tax filing? Using revealed preferences to estimate compliance costs. <em>American Economic Journal: Economic Policy</em>, 12(4).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/pol.20180664",
        urlLabel: "AEA",
      },
      {
        id: "contributions",
        cite: (
          <>
            <strong>Contributions</strong>: Chetty, R., et al. (2014). Active vs. passive decisions and crowd-out in retirement savings accounts: evidence from Denmark. <em>Quarterly Journal of Economics</em>, 129(3).
          </>
        ),
        url: "https://academic.oup.com/qje/article/129/3/1141/1817647",
        urlLabel: "Oxford",
      },
      {
        id: "access",
        cite: (
          <>
            <strong>Access</strong>: Kalda, A., et al. (2021). Smart(phone) investing? A within investor-time analysis of new technologies and trading behavior. <em>NBER Working Paper</em>, 28363.
          </>
        ),
        url: "https://www.nber.org/papers/w28363",
        urlLabel: "NBER",
      },
      {
        id: "gambling",
        cite: (
          <>
            <strong>Gambling</strong>: Baker, S. R., et al. (2026). Gambling away stability: sports betting’s impact on vulnerable households. <em>Journal of Financial Economics</em>, 183.
          </>
        ),
        url: "https://doi.org/10.1016/j.jfineco.2026.104330",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The administrative and historical records informing my benchmarks",
    items: [
      {
        id: "cash-drag",
        cite: (
          <>
            <strong>Cash</strong>: Dimson, E., Marsh, P., and Staunton, M. (2002). <em>Triumph of the Optimists: 101 Years of Global Investment Returns</em>. Princeton University Press.
          </>
        ),
        url: "https://press.princeton.edu/books/hardcover/9780691091945/triumph-of-the-optimists",
        urlLabel: "Princeton",
      },
      {
        id: "liquidity-buffer",
        cite: (
          <>
            <strong>Liquidity</strong>: Farrell, D., Greig, F., and Yu, C. (2019). Weathering volatility 2.0: a monthly stress test to guide savings. <em>JPMorgan Chase Institute</em>.
          </>
        ),
        url: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/institute/pdf/institute-volatility-cash-buffer-report.pdf",
        urlLabel: "JPMC",
      },
      {
        id: "indexing",
        cite: (
          <>
            <strong>Indexing</strong>: Fama, E. F., and French, K. R. (2010). Luck versus skill in the cross-section of mutual fund returns. <em>Journal of Finance</em>, 65(5).
          </>
        ),
        url: "https://doi.org/10.1111/j.1540-6261.2010.01598.x",
        urlLabel: "DOI",
      },
      {
        id: "hedge-skew",
        cite: (
          <>
            <strong>Hedge</strong>: Bessembinder, H. (2018). Do stocks outperform Treasury bills? <em>Journal of Financial Economics</em>, 129(3).
          </>
        ),
        url: "https://doi.org/10.1016/j.jfineco.2018.06.004",
        urlLabel: "DOI",
      },
      {
        id: "trading",
        cite: (
          <>
            <strong>Trading</strong>: Barber, B. M., and Odean, T. (2000). Trading is hazardous to your wealth: the common stock investment performance of individual investors. <em>Journal of Finance</em>, 55(2).
          </>
        ),
        url: "https://doi.org/10.1111/0022-1082.00226",
        urlLabel: "DOI",
      },
      {
        id: "attention",
        cite: (
          <>
            <strong>Attention</strong>: Barber, B. M., et al. (2022). Attention-induced trading and returns: evidence from Robinhood users. <em>Journal of Finance</em>, 77(6).
          </>
        ),
        url: "https://doi.org/10.1111/jofi.13183",
        urlLabel: "DOI",
      },
      {
        id: "space-returns",
        cite: (
          <>
            <strong>Space</strong>: Jordà, Ò., et al. (2019). The rate of return on everything, 1870–2015. <em>Quarterly Journal of Economics</em>, 134(3).
          </>
        ),
        url: "https://doi.org/10.1093/qje/qjz012",
        urlLabel: "DOI",
      },
      {
        id: "gold-dilemma",
        cite: (
          <>
            <strong>Gold</strong>: Erb, C. B., and Harvey, C. R. (2013). The golden dilemma. <em>Financial Analysts Journal</em>, 69(4).
          </>
        ),
        url: "https://doi.org/10.2469/faj.v69.n4.1",
        urlLabel: "DOI",
      },
      {
        id: "crypto-retail",
        cite: (
          <>
            <strong>Crypto</strong>: Auer, R., et al. (2022). Crypto trading and Bitcoin prices: evidence from a new database of retail adoption. <em>BIS Working Papers</em>, 1049.
          </>
        ),
        url: "https://www.bis.org/publ/work1049.htm",
        urlLabel: "BIS",
      },
      {
        id: "collectibles-returns",
        cite: (
          <>
            <strong>Collectibles</strong>: Dimson, E., and Spaenjers, C. (2011). Ex post: the investment performance of collectible stamps. <em>Journal of Financial Economics</em>, 100(2).
          </>
        ),
        url: "https://doi.org/10.1016/j.jfineco.2010.12.005",
        urlLabel: "DOI",
      },
      {
        id: "exits",
        cite: (
          <>
            <strong>Exits</strong>: Hall, R. E., and Woodward, S. E. (2010). The burden of the nondiversifiable risk of entrepreneurship. <em>American Economic Review</em>, 100(3).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/aer.100.3.1163",
        urlLabel: "AEA",
      },
      {
        id: "private-equity",
        cite: (
          <>
            <strong>Private equity</strong>: Kaplan, S. N., and Schoar, A. (2005). Private equity performance: returns, persistence, and capital flows. <em>Journal of Finance</em>, 60(4).
          </>
        ),
        url: "https://doi.org/10.1111/j.1540-6261.2005.00780.x",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The panels, cohorts, and surveys informing my benchmarks",
    items: [
      {
        id: "disability-shock",
        cite: (
          <>
            <strong>Disability</strong>: Meyer, B. D., and Mok, W. K. C. (2019). Disability, earnings, income and consumption. <em>Journal of Public Economics</em>, 171.
          </>
        ),
        url: "https://www.nber.org/papers/w18869",
        urlLabel: "NBER",
      },
      {
        id: "life-adequacy",
        cite: (
          <>
            <strong>Life</strong>: Bernheim, B. D., et al. (2003). The mismatch between life insurance holdings and financial vulnerabilities. <em>American Economic Review</em>, 93(1).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/000282803321455340",
        urlLabel: "AEA",
      },
      {
        id: "self-employment",
        cite: (
          <>
            <strong>Self-employment</strong>: Hamilton, B. H. (2000). Does entrepreneurship pay? An empirical analysis of the returns to self-employment. <em>Journal of Political Economy</em>, 108(3).
          </>
        ),
        url: "https://doi.org/10.1086/262131",
        urlLabel: "DOI",
      },
      {
        id: "independence",
        cite: (
          <>
            <strong>Independence</strong>: Benz, M., and Frey, B. S. (2008). Being independent is a great thing: subjective evaluations of self-employment and hierarchy. <em>Economica</em>, 75(298).
          </>
        ),
        url: "https://doi.org/10.1111/j.1468-0335.2007.00594.x",
        urlLabel: "DOI",
      },
      {
        id: "enterprise-premium",
        cite: (
          <>
            <strong>Enterprise</strong>: Moskowitz, T. J., and Vissing-Jørgensen, A. (2002). The returns to entrepreneurial investment: a private equity premium puzzle? <em>American Economic Review</em>, 92(4).
          </>
        ),
        url: "https://www.aeaweb.org/articles?id=10.1257/00028280260344452",
        urlLabel: "AEA",
      },
      {
        id: "forecasting",
        cite: (
          <>
            <strong>Forecasting</strong>: Tetlock, P. E. (2005). <em>Expert Political Judgment: How Good Is It? How Can We Know?</em> Princeton University Press.
          </>
        ),
        url: "https://press.princeton.edu/books/hardcover/9780691178288/expert-political-judgment",
        urlLabel: "Princeton",
      },
    ],
  },
  {
    label: "The theory and simulation informing my benchmarks",
    items: [
      {
        id: "diversification",
        cite: (
          <>
            <strong>Diversification</strong>: Markowitz, H. (1952). Portfolio selection. <em>Journal of Finance</em>, 7(1).
          </>
        ),
        url: "https://doi.org/10.1111/j.1540-6261.1952.tb01525.x",
        urlLabel: "DOI",
      },
      {
        id: "education-count",
        cite: (
          <>
            <strong>Education</strong>: Evans, J. L., and Archer, S. H. (1968). Diversification and the reduction of dispersion: an empirical analysis. <em>Journal of Finance</em>, 23(5), the ten-stock answer; Statman, M. (1987), <em>Journal of Financial and Quantitative Analysis</em>, 22(3), argues thirty or more.
          </>
        ),
        url: "https://doi.org/10.1111/j.1540-6261.1968.tb00315.x",
        urlLabel: "DOI",
      },
    ],
  },
  {
    label: "The industry figures informing my benchmarks",
    items: [
      {
        id: "incidence",
        cite: (
          <>
            <strong>Incidence</strong>: Council for Disability Awareness — the roughly one-in-four odds of disability before retirement that put own-occupation cover ahead of life cover.
          </>
        ),
        url: "https://disabilitycanhappen.org/disability-statistic/",
        urlLabel: "CDA",
      },
    ],
  },
];

export default function WealthPage() {
  return (
    <div className="zoned">
      <PageHeading
        title="Wealth"
      />

      <p id="introduction" className="page-hook">Your money system, not your income, sets you free.</p>
      <p className="page-promise">
        Wealth refers to the three jobs of a balance sheet: <strong>security</strong> (insure, then earn), <strong>efficiency</strong> (spend and settle), and <strong>growth</strong> (invest what remains). Your wealth predicts your freedom: how soon your hours are your own.
      </p>
      <p>
        Income is negotiable; the order is not: <WikiLink href="#security">protect</WikiLink>, then earn, <WikiLink href="#efficiency">spend</WikiLink>, <WikiLink href="#growth">invest</WikiLink>. Each is best measured against a named benchmark per account, never a balance. To master your wealth is to run yourself as a firm of one, with free cash on rules.
      </p>

      <hr className="zone-rule" />

      <h2 id="security">
        Security <span className="heading-paren">(Protection)</span>
      </h2>
      <p>
        What I can risk: my <strong>insurance</strong> (cover I buy) and my <strong>income</strong> (capacity I build). Together they decide how long a setback lasts. I insure my capacity and possessions before any upside; hours and assets earn on separate lines.
      </p>
      <NestedTable {...SECURITY} />

      <h2 id="efficiency">
        Efficiency <span className="heading-paren">(Leverage)</span>
      </h2>
      <p>
        How much I keep: my <strong>expenses</strong> (the burn I choose) and my <strong>payments</strong> (the dues I owe). Together they decide how fast free cash appears. I hold living costs under a third of income, pay tax in full, and give free cash three rules.
      </p>
      <NestedTable {...EFFICIENCY} />

      <h2 id="growth">
        Growth <span className="heading-paren">(Allocation)</span>
      </h2>
      <p>
        How far my remainder goes: my <strong>investments</strong> (money left standing) and my <strong>ventures</strong> (assets I work myself). Together they decide the horizon I can afford. I hold three months of burn in cash, fund my future self first, and buy the market whole.
      </p>
      <NestedTable {...GROWTH} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Data)</span></>}
        sections={WEALTH_DATA}
      />

      <References
        id="guidelines"
        title={<>References <span className="heading-paren">(Guidelines)</span></>}
        sections={WEALTH_GUIDELINES}
      />
    </div>
  );
}
