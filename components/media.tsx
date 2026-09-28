import Image from "next/image";
import { assetPath } from "@/lib/assets";
import type { Project } from "@/content/types";
import { MediaSlot } from "./optional-image";

export function ProjectMedia({
  project, featured = false,
}: { project: Project; featured?: boolean }) {
  if (!project.video && !project.image) {
    return <MediaSlot label={`${project.title} · 대표 이미지 / content/projects/${project.slug}.ts → image`} />;
  }
  return (
    <div className={`project-media ${featured ? "featured-media" : ""}`}>
      {project.video ? (
        <video controls playsInline preload="metadata"
          poster={project.image ? assetPath(project.image) : undefined}
          aria-label={`${project.title} video`}>
          <source src={assetPath(project.video)} />
          Your browser does not support video playback.
        </video>
      ) : (
        <Image src={assetPath(project.image)} alt={project.imageAlt} fill
          style={{ objectFit: project.imageFit ?? "contain" }}
          sizes={featured ? "(max-width: 720px) 100vw, 1120px" : "(max-width: 720px) 100vw, 550px"} />
      )}
    </div>
  );
}
