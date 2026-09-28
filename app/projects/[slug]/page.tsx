import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, detailProjects, projectHref } from "@/lib/content";
import { OptionalImage } from "@/components/optional-image";
import { ProjectMedia } from "@/components/media";
import { ResearchTags } from "@/components/research-tags";
import { ResourceLinks } from "@/components/resource-links";

export const dynamicParams = false;
// 빈 프로젝트 목록도 정적으로 빌드하기 위한 내부 404 경로입니다. 실제 프로젝트로 표시되지 않습니다.
export function generateStaticParams() {
  return detailProjects.length
    ? detailProjects.map(({ slug }) => ({ slug }))
    : [{ slug: "__empty__" }];
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  return (
    <div className="wrap project-page">
      <Link className="text-link" href="/#projects">
        ← Projects
      </Link>
      <header className="project-intro">
        <p className="eyebrow">
          {project.type}
          {project.year && ` / ${project.year}`}
        </p>
        <h1>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>
        {project.role && (
          <p className="project-role">My role: {project.role}</p>
        )}
        {project.recognition && <p className="project-recognition">{project.recognition}</p>}
        <div className="badges"><ResearchTags tags={project.tags} /></div>
      </header>
      <ProjectMedia project={project} featured />
      <ResourceLinks links={project.links} />
      <div className="project-body">
        {project.sections.map((section, index) => (
          <section key={section.title} className="project-section">
            <div>
              <span className="eyebrow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
            </div>
            <div className="project-section-content">
              <p className="preserve-lines">{section.body}</p>
              <OptionalImage src={section.image} alt={section.imageAlt}
                caption={section.imageCaption}
                label={`${section.title} · sections[${index}].image`} />
            </div>
          </section>
        ))}
      </div>
      {projects.length > 1 && (
        <div className="next-project">
          <span className="eyebrow">Next project</span>
          <Link href={projectHref(next.slug)!}>{next.title} ↗</Link>
        </div>
      )}
    </div>
  );
}
