import Link from "next/link";
import { site } from "@/content/site";
export function SocialLinks({ showCV = true }: { showCV?: boolean }) {
  const links = [
    { label: "Email", href: site.links.email ? `mailto:${site.links.email}` : "" },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "Google Scholar", href: site.links.scholar },
  ].filter((link) => link.href);
  return <div className="social-links">
    {links.map((link) => <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}
    {showCV && site.cvEnabled && <Link href="/cv/">CV <span aria-hidden="true">→</span></Link>}
  </div>;
}
