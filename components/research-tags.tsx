import { researchTags } from "@/content/tags";
export function ResearchTags({ tags }: { tags: string[] }) {
  return <>{tags.map((id) => {
    const tag = researchTags[id.toLowerCase().replaceAll(" ", "-")] || { label: id, tone: "neutral" };
    return <span className={`badge badge--${tag.tone}`} key={id}>{tag.label}</span>;
  })}</>;
}
