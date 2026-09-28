import { news, newsDisplay } from "@/content/news";
import { ResourceLinks } from "./resource-links";
import type { NewsItem } from "@/content/types";
function dateLabel(value: string) {
  if (/^\d{4}$/.test(value)) return value;
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", ...(day ? { day: "numeric" } : {}), timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day || 1)));
}
function Items({ items }: { items: NewsItem[] }) {
  return <ol className="news-list">{items.map((item) => <li key={item.id}><time dateTime={item.date}>{dateLabel(item.date)}</time><div><p>{item.text}</p>{item.links && <ResourceLinks links={item.links} />}</div></li>)}</ol>;
}
export function NewsList() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return <><Items items={sorted.slice(0, newsDisplay.limit)} />{sorted.length > newsDisplay.limit && <details className="news-archive"><summary>{newsDisplay.archiveLabel}</summary><Items items={sorted.slice(newsDisplay.limit)} /></details>}</>;
}
