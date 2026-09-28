import { organizations } from "@/content/organizations";
import { assetPath } from "@/lib/assets";
import { newestFirst } from "@/lib/dates";
import { OrganizationLogo } from "./organization-logo";
import { OptionalImage } from "./optional-image";
import Link from "next/link";
import { cvSections } from "@/content/cv";
import { projectHref } from "@/lib/content";
import { ResourceLinks } from "./resource-links";
import { Advisor } from "./advisor";
import type { CVEntry } from "@/content/types";

// 프로젝트 수행 기록과 수상 기록을 id로 연결합니다.
const records = cvSections.flatMap((section) =>
  section.entries.map((entry, index) => ({
    ...entry, domId: entry.id || `${section.id}-${index}`,
  })),
);

function yearGroups<T extends CVEntry>(entries: T[]) {
  const years = [...new Set(entries.map((entry) => entry.year || ""))]
    .sort((a, b) => Number(b || 0) - Number(a || 0));
  return years.map((year) => ({ year, entries: entries.filter((entry) => (entry.year || "") === year).sort(newestFirst) }));
}

export function CVSections({ selectedOnly = false }: { selectedOnly?: boolean }) {
  return (
    <>
      {cvSections.map((section) => {
        const entries = section.entries.map((entry, index) => ({
          ...entry, domId: entry.id || `${section.id}-${index}`,
        })).filter((entry) => entry.visible && (!selectedOnly || entry.selected));
        if (!entries.length) return null;
        return (
          <section id={section.id} className="section" key={section.id}>
            <h2>{section.title}</h2>
            {section.intro && <p className="cv-section-intro">{section.intro}</p>}
            {(section.groupByYear === false ? [{ year: "", entries: [...entries].sort(newestFirst) }] : yearGroups(entries)).map(({ year, entries: group }) => (
              <div className={`cv-year-group ${section.groupByYear === false ? "cv-year-group--flat" : year ? "" : "cv-year-group--undated"}`} key={year || "undated"}>
                {year && <h3 className="cv-year">{year}</h3>}
                <div className="cv-year-entries">
                  {group.map((entry) => {
                    const href = projectHref(entry.projectSlug);
                    const awards = entry.id ? records.filter((record) => record.visible && record.relatedEntryId === entry.id) : [];
                    const Heading = year ? "h4" : "h3";
                    return (
                      <article className={`cv-entry ${entry.image ? "cv-entry--media" : ""} ${entry.organizationId && organizations[entry.organizationId]?.logo ? "organization-entry" : ""}`} id={entry.domId} key={entry.domId}>
                        {entry.organizationId && <OrganizationLogo id={entry.organizationId} />}
                        {entry.image && <a className="cv-entry-teaser" href={assetPath(entry.image)} aria-label={`${entry.title} — view full image`}><OptionalImage src={entry.image} alt={entry.imageAlt} aspectRatio={entry.imageAspectRatio} label="" variant="publication" /></a>}
                        <div className="cv-entry-content">
                        <div className="cv-entry-heading"><Heading>{entry.title}</Heading>{entry.date && <span className="cv-entry-date">{entry.date}</span>}</div>
                        {entry.subtitle && <p className="cv-entry-affiliation">{entry.subtitle}</p>}
                        {entry.description && <p className="cv-entry-description preserve-lines">{entry.description}</p>}
                        {entry.details?.map((detail) => <p className="cv-detail" key={detail.label}><span className="detail-label">{detail.label}:</span>{" "}{detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}</p>)}
                        {entry.advisorId && <p className="cv-detail"><Advisor id={entry.advisorId} /></p>}
                        {awards.map((award) => <a className="cv-award-link" href={`#${award.domId}`} key={award.domId}>{award.title}</a>)}
                        {href && <Link className="text-link" href={href}>Project ↗</Link>}
                        {entry.relatedEntryId && <a className="text-link" href={`#${entry.relatedEntryId}`}>Related project ↑</a>}
                        <ResourceLinks links={[...(entry.links || []), ...(entry.url ? [{ label: entry.urlLabel || "Details", href: entry.url, kind: "news" as const }] : [])]} />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}
