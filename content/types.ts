// 콘텐츠 파일의 필수 항목을 검사하는 공통 형식입니다. 평소에는 수정하지 않습니다.
export type Project = {
  slug: string;
  externalUrl?: string; // 지정하면 자체 상세 페이지 없이 외부 프로젝트로 연결합니다.
  visible: boolean;
  category: "research" | "creative" | "course";
  recognition?: string;
  role?: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageFit?: "contain" | "cover";
  video: string;
  links: { label: string; href: string }[];
  sections: { title: string; body: string; image?: string; imageAlt?: string; imageCaption?: string }[];
};
export type ResourceLink = {
  label: string;
  href: string;
  kind?: "doi" | "paper" | "project" | "video" | "news" | "other";
};
export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueUrl?: string;
  sortDate?: string;
  showImageSlot?: boolean;
  year: string;
  tags: string[];
  status?: string;
  image?: string;
  imageAlt?: string;
  links: ResourceLink[];
};
export type EducationEntry = {
  organizationId?: string;
  institution: string;
  degree: string;
  program?: string;
  majors?: string[];
  date: string;
  note?: string;
  thesis?: { title: string; url?: string };
  advisorId?: string;
  lab?: { name: string; url?: string };
};
export type NewsItem = { id: string; date: string; text: string; links?: ResourceLink[] };
export type HomeSectionId = "news" | "publications" | "projects" | "about" | "contact";
export type HomeSection = {
  id: HomeSectionId;
  enabled: boolean;
  title: string;
  // 빈 문자열이면 섹션은 표시하되 상단 메뉴에서는 생략합니다.
  menuLabel: string;
};

export type CVEntry = {
  imageAspectRatio?: string;
  sortDate?: string;
  organizationId?: string;
  image?: string;
  imageAlt?: string;
  advisorId?: string;
  details?: { label: string; value: string; href?: string }[];
  links?: ResourceLink[];
  id?: string;
  year?: string;
  relatedEntryId?: string;
  urlLabel?: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  selected: boolean;
  visible: boolean;
  url?: string;
  projectSlug?: string;
};
export type CVSection = { groupByYear?: boolean; id: string; title: string; intro?: string; entries: CVEntry[] };
