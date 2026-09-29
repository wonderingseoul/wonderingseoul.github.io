import Link from "next/link";
import { news, newsDisplay } from "@/content/news";
import { ResourceLinks } from "./resource-links";
function dateLabel(value: string) {
  if (/^\d{4}$/.test(value)) return value;
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", ...(day ? { day: "numeric" } : {}), timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day || 1)));
}
export function NewsList({ all = false }: { all?: boolean }) {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const items = all ? sorted : sorted.slice(0, newsDisplay.limit);
  return <><ol className="news-list">{items.map((item) => <li key={item.id}><time dateTime={item.date}>{dateLabel(item.date)}</time><div><p>{item.text}</p>{item.links && <ResourceLinks links={item.links} />}</div></li>)}</ol>
  {!all && sorted.length > newsDisplay.limit && <Link className="text-link news-more" href="/news/">{newsDisplay.archiveLabel} <span aria-hidden="true">→</span></Link>}</>;
}
