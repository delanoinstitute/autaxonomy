import { pageMeta } from "@/content/site";
import PageHeading from "@/components/PageHeading";
import WikiLink from "@/components/WikiLink";
import { NestedTable } from "@/components/NestedTable";
import { References } from "@/components/References";
import {
  EDUCATION,
  SKILLS,
  WORKS,
  KNOWLEDGE_REFERENCE_SECTIONS,
} from "@/content/knowledge";

export const metadata = pageMeta(
  "Knowledge",
  "What Lorenzo Delano knows and makes: published works, benchmarked skills, and a self-designed education, including 3Squared (Functional Taxonomy) and Benchmark Apprenticeship.",
  "/knowledge",
);

// The knowledge trilogy (see KNOWLEDGE_SPEC.md): Works (production — making),
// Skills (practice — doing), Education (theory — knowing) — ordered evidence
// first for the skimming reader; each split by the individual/social locus
// axis. Data lives in content/knowledge.

export default function KnowledgePage() {
  return (
    <div className="zoned">
      <PageHeading title="Knowledge" />

      <p id="introduction" className="page-hook">Your knowledge picks the problems you get to solve.</p>
      <p className="page-promise">
        My knowledge takes three forms: <strong>works</strong> (what I’ve made), <strong>skills</strong> (what I can do), and <strong>education</strong> (what I know). Together they predict my reach: how much of the world I can transform.
      </p>
      <p>
        My schooling was issued; my skills and works are earned, never finished. I measure each by what I can show: shipped <WikiLink href="#works">work</WikiLink>, demonstrated <WikiLink href="#skills">skill</WikiLink>, a dated <WikiLink href="#education">curriculum</WikiLink>. To master my knowledge, I turn study into practice and practice into works.
      </p>

      <hr className="zone-rule" />

      <h2 id="works">Works <span className="heading-paren">(Production)</span></h2>
      <p>
        What I’ve made: my <strong>professional</strong> experience (for employers and partners) and my <strong>personal</strong> works (authored alone). Together they show what I can be trusted to build next. Start with my two methodologies: one to learn, one to teach.
      </p>
      <NestedTable {...WORKS} />

      <h2 id="skills">Skills <span className="heading-paren">(Practice)</span></h2>
      <p>
        What I can do: my <strong>technical</strong> skills (what I deliver alone) and my <strong>interpersonal</strong> skills (what I deliver through others). Together they show what to hand me. I organize knowledge, design systems, produce content, and teach any subject.
      </p>
      <NestedTable {...SKILLS} />

      <h2 id="education">Education <span className="heading-paren">(Theory)</span></h2>
      <p>
        What I know: my <strong>guided</strong> education (taught in person) and my <strong>independent</strong> learning (chosen and done remotely). Together they show how fast I learn a new domain. I sat seven grades of school and took Mandarin to distinction.
      </p>
      <NestedTable {...EDUCATION} />

      <hr className="zone-rule" />

      <References
        title={<>References <span className="heading-paren">(Evidence)</span></>}
        sections={KNOWLEDGE_REFERENCE_SECTIONS}
      />
    </div>
  );
}
