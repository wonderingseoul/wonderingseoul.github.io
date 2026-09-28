import Link from "next/link";
import { projectHref } from "@/lib/content";
import type { Project } from "@/content/types";
import { site } from "@/content/site";
import { ProjectMedia } from "./media";
import { ResearchTags } from "./research-tags";
export function ProjectCard({ project }: { project: Project; featured?: boolean }) {
  const hasMedia = Boolean(project.image || project.video) || (process.env.NODE_ENV === "development" && site.showMediaSlots);
  return <article className={`project ${hasMedia ? "project--media" : ""}`}>
    {hasMedia && <div className="project-thumbnail"><ProjectMedia project={project} /></div>}
    <div className="project-copy">
      <div className="badges"><ResearchTags tags={project.tags} /></div>
      <h3><Link href={projectHref(project.slug)!}>{project.title} <span aria-hidden="true">↗</span></Link></h3>
      <p className="project-type">{[project.type, project.year].filter(Boolean).join(" · ")}</p>
      <p className="project-summary">{project.summary}</p>
      {project.recognition && <p className="project-recognition">{project.recognition}</p>}
      {project.role && <p className="project-role">Role: {project.role}</p>}
      <Link className="text-link" href={projectHref(project.slug)!}>{project.externalUrl ? "View external project" : "Explore project"} <span aria-hidden="true">→</span></Link>
    </div>
  </article>;
}
