import { assetPath } from "@/lib/assets";
import { sortedPublications } from "@/lib/content";
import { site } from "@/content/site";
import { OptionalImage } from "./optional-image";
import { ResourceLinks } from "./resource-links";
import { ResearchTags } from "./research-tags";

export function PublicationList({ compact = false }: { compact?: boolean }) {
  const years = [...new Set(sortedPublications.map(({ year }) => year))];
  return <div className={`publications ${compact ? "publications--compact" : ""}`}>
    {years.map((year) => <section className="publication-group" key={year} aria-label={`Publications ${year}`}>
      <h3 className="publication-year">{year}</h3>
      <ol className="publication-list">{sortedPublications.filter((p) => p.year === year).map((p) => {
        const hasMedia = !compact && (Boolean(p.image) || (process.env.NODE_ENV === "development" && site.showMediaSlots && p.showImageSlot !== false));
        return <li className={`publication ${hasMedia ? "publication--media" : ""}`} key={p.id} id={`publication-${p.id}`}>
          {hasMedia && <div className="publication-media">{p.image ? <a href={assetPath(p.image)} aria-label={`${p.title} — view full teaser`}><OptionalImage src={p.image} alt={p.imageAlt} variant="publication" label="" /></a> : <OptionalImage src={p.image} alt={p.imageAlt} variant="publication" label={`${p.title} · content/publications.ts → image`} />}</div>}
          <div className="publication-body">
            <div className="badges"><ResearchTags tags={p.tags} /></div>
            <h4>{p.title}</h4>
            <p className="publication-authors">{p.authors.map((author, index) => <span key={author}>{index > 0 && ", "}{site.authorNames.includes(author) ? <strong>{author}</strong> : author}</span>)}</p>
            <div className="publication-venue-row"><p className="publication-venue"><em>{p.venueUrl ? <a href={p.venueUrl}>{p.venue}</a> : p.venue}</em></p>{p.status && <span className="publication-status"><span className="publication-status-label">Status</span>{p.status}</span>}</div>
            <ResourceLinks links={p.links} />
          </div>
        </li>;
      })}</ol>
    </section>)}
  </div>;
}
