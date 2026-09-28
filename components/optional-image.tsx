import Image from "next/image";
import { site } from "@/content/site";
import { assetPath } from "@/lib/assets";

// 편집용 표시는 개발 서버에서만 출력합니다. 공개 빌드에는 빈 자리를 만들지 않습니다.
export function MediaSlot({ label }: { label: string }) {
  if (process.env.NODE_ENV !== "development" || !site.showMediaSlots) return null;
  return <div className="media-slot">이미지 선택 위치 · {label}</div>;
}

export function OptionalImage({
  src, alt = "", caption, label, aspectRatio, variant = "figure",
}: {
  src?: string;
  aspectRatio?: string;
  alt?: string;
  caption?: string;
  label: string;
  variant?: "figure" | "portrait" | "publication";
}) {
  if (!src) return <MediaSlot label={label} />;
  return (
    <figure className={`optional-image optional-image--${variant}`}>
      <div className="optional-image-frame" style={aspectRatio ? { aspectRatio } : undefined}>
        <Image src={assetPath(src)} alt={alt} fill sizes={variant === "portrait" ? "240px" : "(max-width: 720px) 100vw, 680px"} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
