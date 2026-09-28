import { organizations } from "@/content/organizations";
import { OrganizationLogo } from "./organization-logo";
import { Advisor } from "./advisor";
import { education } from "@/content/cv";
export function Education() {
  if (!education.length) return null;
  return <section id="education" className="section"><h2>Education</h2>
    <div className="education-list">{education.map((entry) => <article className={`education-entry ${entry.organizationId && organizations[entry.organizationId]?.logo ? "organization-entry" : ""}`} key={entry.institution + entry.degree}>
      {entry.organizationId && <OrganizationLogo id={entry.organizationId} />}<div>
      <div className="education-heading"><h3>{entry.degree} <span>· {entry.institution}</span></h3>{entry.date && <span className="education-date">{entry.date}</span>}</div>
      {entry.program && <p>{entry.program}</p>}
      {entry.majors?.map((major) => <p key={major}>{major}</p>)}
      {entry.note && <p className="education-note">{entry.note}</p>}
      {entry.thesis?.title && <p className="education-detail"><span>Thesis:</span> {entry.thesis.url ? <a href={entry.thesis.url}>{entry.thesis.title}</a> : entry.thesis.title}</p>}
      {entry.advisorId && <p className="education-detail"><Advisor id={entry.advisorId} /></p>}
      {entry.lab && <p className="education-detail"><span>Lab:</span> {entry.lab.url ? <a href={entry.lab.url}>{entry.lab.name}</a> : entry.lab.name}</p>}
    </div></article>)}</div>
  </section>;
}
