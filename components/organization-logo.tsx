import Image from "next/image";
import { organizations } from "@/content/organizations";
import { assetPath } from "@/lib/assets";
export function OrganizationLogo({ id }: { id: string }) {
  const organization = organizations[id];
  if (!organization?.logo) return null;
  return <a className={`organization-logo organization-logo--${id}`} href={organization.url} aria-label={organization.name}>
    <Image src={assetPath(organization.logo)} alt="" width={76} height={62} />
  </a>;
}
