import Link from "next/link";
import { assetPath } from "@/lib/assets";
import type { ResourceLink } from "@/content/types";

export function ResourceLinks({ links }: { links: ResourceLink[] }) {
  const available = links.filter(({ href }) => href.trim());
  if (!available.length) return null;
  return <div className="resource-links">{available.map(({ label, href, kind = "other" }) => {
    const className = `resource-link resource-link--${kind}`;
    const content = <>{label}<span aria-hidden="true">↗</span></>;
    return href.startsWith("/") && !/\.[a-z0-9]+(?:[?#]|$)/i.test(href)
      ? <Link className={className} href={href} key={label + href}>{content}</Link>
      : <a className={className} href={assetPath(href)} key={label + href}>{content}</a>;
  })}</div>;
}
