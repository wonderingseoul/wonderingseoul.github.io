import { newestFirst } from "./dates";
// 콘텐츠와 화면을 연결하는 작은 모듈입니다. 일반적인 내용 수정은 content/에서 합니다.
import { allProjects } from "@/content/projects";
import { homeSections, selectedProjectSlugs } from "@/content/home";
import { navigation } from "@/content/navigation";
import { publications } from "@/content/publications";
import { news } from "@/content/news";
import { site } from "@/content/site";
import type { HomeSectionId } from "@/content/types";

const slugs = new Set<string>();
for (const project of allProjects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
    throw new Error(
      `프로젝트 slug 오류: "${project.slug}". 영문 소문자·숫자·하이픈을 사용하세요.`,
    );
  }
  if (slugs.has(project.slug))
    throw new Error(
      `중복 프로젝트 slug: "${project.slug}". content/projects/를 확인하세요.`,
    );
  slugs.add(project.slug);
}
if (
  new Set(homeSections.map((section) => section.id)).size !==
  homeSections.length
) {
  throw new Error("content/home.ts: 같은 섹션 id를 두 번 등록할 수 없습니다.");
}

export const projects = allProjects.filter((project) => project.visible);
export const detailProjects = projects.filter((project) => !project.externalUrl);
export const selectedProjects = [...new Set(selectedProjectSlugs)].flatMap(
  (slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  },
);

// 확인된 날짜 기준 최신순. 연도만 있는 기록은 해당 연도의 날짜가 있는 기록 뒤에 표시합니다.
export const sortedPublications = [...publications].sort(
  newestFirst,
);

const hasContent: Record<HomeSectionId, boolean> = {
  news: news.length > 0,
  publications: publications.length > 0,
  projects: selectedProjects.length > 0,
  contact: true,
};
export const visibleHomeSections = homeSections.filter(
  (section) => section.enabled && hasContent[section.id],
);

// 상단 메뉴: 홈 섹션 앵커 + content/navigation.ts 항목.
export const menuItems = [
  ...visibleHomeSections
    .filter((section) => section.menuLabel)
    .map((section) => ({ label: section.menuLabel, href: `/#${section.id}` })),
  ...navigation.filter(
    (item) => item.enabled && (item.href !== "/cv/" || site.cvEnabled),
  ),
];

export function projectHref(slug: string | undefined) {
  const project = projects.find((project) => project.slug === slug);
  return project ? project.externalUrl || `/projects/${project.slug}/` : undefined;
}
