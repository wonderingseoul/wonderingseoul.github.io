import { site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";
import { OptionalImage } from "@/components/optional-image";

export function Hero() {
  const showPhotoArea =
    Boolean(site.portrait) ||
    (process.env.NODE_ENV === "development" && site.showMediaSlots);
  return (
    <section
      className={`profile-hero ${showPhotoArea ? "profile-hero--photo" : ""}`}
      aria-labelledby="hero-title"
    >
      {showPhotoArea && (
        <OptionalImage
          src={site.portrait}
          alt={site.portraitAlt}
          variant="portrait"
          label="프로필 사진 · content/site.ts → portrait"
        />
      )}
      <div>
        <h1 id="hero-title">{site.name}</h1>
        <p className="profile-role">
          {site.role}, {site.affiliation}
        </p>
        <p className="profile-intro">{site.introduction}</p>
        <SocialLinks />
      </div>
    </section>
  );
}
