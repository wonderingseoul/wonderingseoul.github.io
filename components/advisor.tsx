import { advisors } from "@/content/advisors";
export function Advisor({ id }: { id: string }) {
  const advisor = advisors[id];
  if (!advisor) return null;
  return <><span className="detail-label">Advisor:</span>{" "}{advisor.url ? <a className="advisor-link" href={advisor.url}>{advisor.name}</a> : advisor.name}</>;
}
