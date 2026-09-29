import { profileBackground, research } from "@/content/home";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";
import { OptionalImage } from "@/components/optional-image";

export function Hero() {
  const showPhotoArea =
    Boolean(site.portrait) ||
    (process.env.NODE_ENV === "development" && site.showMediaSlots);
  return (
    <section
      id="home"
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
        <div className="profile-background">
          {profileBackground.paragraphs.map((text) => <p key={text}>{text}</p>)}
          {profileBackground.personalText && <p className="profile-personal">{profileBackground.personalText}</p>}
        </div>
        {research.areas.length > 0 && <div className="profile-interests"><p>{research.title}</p><ul>{research.areas.map((area) => <li key={area.title}>{area.title}</li>)}</ul></div>}
      </div>
    </section>
  );
}
