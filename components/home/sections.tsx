import { NewsList } from "@/components/news-list";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { PublicationList } from "@/components/publication-list";
import { selectedProjects } from "@/lib/content";
import { contact } from "@/content/home";
import type { HomeSection } from "@/content/types";

export function HomeSectionView({ section }: { section: HomeSection }) {
  const heading = <h2 id={`${section.id}-title`}>{section.title}</h2>;
  const label = `${section.id}-title`;

  if (section.id === "news") return <section id="news" className="section news-section" aria-labelledby={label}>{heading}<div><NewsList /></div></section>;

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
