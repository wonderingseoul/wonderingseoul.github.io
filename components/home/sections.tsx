import { NewsList } from "@/components/news-list";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { PublicationList } from "@/components/publication-list";
import { OptionalImage } from "@/components/optional-image";
import { selectedProjects } from "@/lib/content";
import { aboutStory, contact, research } from "@/content/home";
import { site } from "@/content/site";
import type { HomeSection } from "@/content/types";

export function HomeSectionView({ section }: { section: HomeSection }) {
  const heading = <h2 id={`${section.id}-title`}>{section.title}</h2>;
  const label = `${section.id}-title`;

  if (section.id === "news") return <section id="news" className="section news-section" aria-labelledby={label}>{heading}<NewsList /></section>;

  if (section.id === "publications")
    return (
      <section id="publications" className="section" aria-labelledby={label}>
        {heading}
        <PublicationList />
      </section>
    );

  if (section.id === "projects")
    return (
      <section id="projects" className="section" aria-labelledby={label}>
        {heading}
        <div className="project-grid">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    );

  if (section.id === "about")
    return (
      <section id="about" className="section about-section" aria-labelledby={label}>
        {heading}
        <div className="about-body">
          <div className="about-story">
            {aboutStory.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {aboutStory.personalText && (
              <div className="personal-note">
                <h3>{aboutStory.personalTitle}</h3>
                <p>{aboutStory.personalText}</p>
              </div>
            )}
            {site.cvEnabled && (
              <Link className="text-link" href="/cv/">
                {aboutStory.cvLinkLabel} ↗
              </Link>
            )}
          </div>
          {research.areas.length > 0 && (
            <aside className="interests">
              <h3>{research.title}</h3>
              {research.areas.map((area) => (
                <div key={area.title} className="interest">
                  <strong>{area.title}</strong>
                  {area.description && <p>{area.description}</p>}
                </div>
              ))}
            </aside>
          )}
        </div>
        <OptionalImage
          src={aboutStory.image}
          alt={aboutStory.imageAlt}
          caption={aboutStory.imageCaption}
          label="About 본문 그림(선택) · content/home.ts → aboutStory.image"
        />
      </section>
    );

  if (section.id === "contact")
    return (
      <section id="contact" className="section" aria-labelledby={label}>
        {heading}
        <p className="section-lead">{contact.description}</p>
        <SocialLinks />
      </section>
    );
  return null;
}
