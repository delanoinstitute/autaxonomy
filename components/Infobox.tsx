import { INFOBOX, PROFILE, InfoboxGroup, InfoboxValue } from "@/content/profile";
import Chevron from "./Chevron";
import PortraitCarousel from "./PortraitCarousel";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";

type InfoboxProps = {
  /** Eager-load the portrait (use for the visible desktop rail instance only). */
  priority?: boolean;
  /** Cap the portrait width — used for the inline mobile copy. */
  compact?: boolean;
  /** Inside the mobile <details> wrapper: drop the outer frame + landmark. */
  embedded?: boolean;
};

// All groups collapse (native <details>). Sociological defaulted open once (the
// hook); the rest default collapsed.
// Professional opens first: the reader this site is for (an employer, a
// partner) wants the work before the birth record. Sociological stays one click away.
const DEFAULT_OPEN = new Set(["Professional"]);

/**
 * The infobox — the profile across four lenses (Sociological / Professional /
 * Psychological / Personal) as an encyclopedia data panel. Rows are a semantic
 * description list; groups are native <details> collapsibles (zero-JS,
 * keyboard/AT friendly, no CLS). Rendered twice (desktop rail + inline mobile
 * copy); only the rail copy is priority-loaded. See DESIGN_SPEC.md §4.3.
 */
export default function Infobox({
  priority = false,
  compact = false,
  embedded = false,
}: InfoboxProps) {
  const Frame = embedded ? "div" : "aside";

  return (
    <Frame
      {...(embedded ? {} : { "aria-label": "Profile summary" })}
      className="w-full text-sm leading-snug"
    >
      <div className={embedded ? "" : "border border-border-strong bg-surface-subtle"}>
        {/* Title bar */}
        <div className="border-b border-border-strong bg-surface-band px-2 py-2 text-center font-serif text-[1.1875rem] font-semibold text-text">
          {PROFILE.name}
        </div>

        {/* Portrait carousel */}
        <div className="border-b border-border-strong p-2">
          <div className={compact ? "mx-auto max-w-[16rem]" : ""}>
            <PortraitCarousel priority={priority} />
          </div>
        </div>

        {INFOBOX.map((group) => (
          <Group
            key={group.heading}
            group={group}
            defaultOpen={DEFAULT_OPEN.has(group.heading)}
          />
        ))}
      </div>
    </Frame>
  );
}

function Group({ group, defaultOpen }: { group: InfoboxGroup; defaultOpen: boolean }) {
  // Omit any row whose values are all empty — no placeholder.
  const visible = group.rows.filter((r) => r.values.some((v) => v.text.trim() !== ""));
  if (visible.length === 0) return null;

  return (
    <details className="infobox-details" open={defaultOpen}>
      <summary className="infobox-heading">
        <span>
          {group.heading}
          {group.headingLink && (
            <span className="ml-1.5 font-sans text-xs font-normal normal-case">
              (
              <WikiLink href={group.headingLink.href}>
                {group.headingLink.text}
              </WikiLink>
              )
            </span>
          )}
          {group.headingNote && (
            <span className="ml-1.5 font-sans text-xs font-normal normal-case text-muted">
              ({group.headingNote})
            </span>
          )}
        </span>
        <Chevron className="chevron" />
      </summary>
      <dl className="infobox-dl">
        {visible.map((row) => (
          <div className="infobox-row" key={row.label}>
            <dt>
              {row.labelHref ? (
                <WikiLink href={row.labelHref}>{row.label}</WikiLink>
              ) : (
                row.label
              )}
            </dt>
            <dd>
              {row.values.map((v, i) => (
                <span key={i} className="block">
                  <ValueCell value={v} />
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

function ValueCell({ value }: { value: InfoboxValue }) {
  if (value.href && value.note) {
    return (
      <Tooltip content={value.note} interactive>
        <WikiLink href={value.href}>{value.text}</WikiLink>
      </Tooltip>
    );
  }
  if (value.href) {
    return <WikiLink href={value.href}>{value.text}</WikiLink>;
  }
  if (value.note) {
    return <Tooltip content={value.note}>{value.text}</Tooltip>;
  }
  if (value.italic) {
    return <em className="font-serif text-text">{value.text}</em>;
  }
  return <>{value.text}</>;
}
