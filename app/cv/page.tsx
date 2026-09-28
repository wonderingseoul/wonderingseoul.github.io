import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cv } from "@/content/cv";
import { site } from "@/content/site";
import { research } from "@/content/home";
import { Education } from "@/components/education";
import { CVSections } from "@/components/cv-sections";
import { PublicationList } from "@/components/publication-list";
import { publications } from "@/content/publications";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = { title: cv.title };
export default function CV() {
  if (!site.cvEnabled) notFound();
  return (
    <div className="wrap cv-page">
      <header>
        <p className="eyebrow">{cv.title}</p>
        <h1>{site.name}</h1>
        <p className="subtitle">{cv.subtitle}</p>
        <SocialLinks />
      </header>
      {site.bio && (
        <section className="section">
          <h2>{cv.headings.profile}</h2>
          <p className="cv-bio">{site.bio}</p>
        </section>
      )}
      <Education />
      {publications.length > 0 && <section className="section"><h2>Publications</h2><PublicationList compact /></section>}
      <CVSections />
      {research.areas.length > 0 && (
        <section className="section">
          <h2>{research.title}</h2>
          <ul className="cv-interests">
            {research.areas.map((area) => (
              <li key={area.title}>{area.title}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
