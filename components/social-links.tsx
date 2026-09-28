import { site } from "@/content/site";
import { assetPath } from "@/lib/assets";
export function SocialLinks() {
  const links = [
    {
      label: "Email",
      href: site.links.email ? `mailto:${site.links.email}` : "",
    },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "Google Scholar", href: site.links.scholar },
    {
      label: "Download CV",
      href: site.links.cvPdf ? assetPath(site.links.cvPdf) : "",
    },
  ].filter((link) => link.href);
  if (!links.length) return null;
  return (
    <div className="social-links">
      {links.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
