import { Hero } from "@/components/home/hero";
import { HomeSectionView } from "@/components/home/sections";
import { visibleHomeSections } from "@/lib/content";

// 홈 구성은 content/home.ts에서 조정합니다.
export default function Home() {
  return (
    <div className="wrap">
      <Hero />
      {visibleHomeSections.map((section) => (
        <HomeSectionView key={section.id} section={section} />
      ))}
    </div>
  );
}
