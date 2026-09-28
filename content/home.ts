import type { HomeSection } from "./types";

// 홈은 한 페이지입니다. 섹션 순서와 제목을 여기서 정합니다.
// enabled: false면 섹션과 메뉴 항목이 함께 사라집니다. 내용이 비어 있어도 자동으로 숨겨집니다.
export const homeSections: HomeSection[] = [
  { id: "news", enabled: true, title: "News", menuLabel: "News" },
  { id: "publications", enabled: true, title: "Publications", menuLabel: "Research" },
  { id: "projects", enabled: true, title: "Projects", menuLabel: "Projects" },
  { id: "about", enabled: true, title: "About", menuLabel: "About" },
  { id: "contact", enabled: false, title: "Contact", menuLabel: "" }, // 첫 화면에 연락 링크가 있어 기본은 끔
];

// 홈 Projects 섹션에 보일 프로젝트와 순서. content/projects/index.ts에 등록된 slug만 유효합니다.
export const selectedProjectSlugs = ["everwhite", "soundinity"];

export const contact = {
  description:
    "For research conversations and collaborations, reach me through the links below.",
};

// About 섹션 본문. 문단 하나가 배열 항목 하나입니다.
export const aboutStory = {
  // 선택 그림. 파일을 public/images/에 넣고 경로를 적습니다. 빈 값이면 공개 화면에서 숨깁니다.
  image: "",
  imageAlt: "",
  imageCaption: "",
  paragraphs: [
    "I studied Advanced Materials Science and Engineering at Sungkyunkwan University, with a second major in Culture and Technology.",
    "My previous work includes wearable energy harvesting at NESEL, interaction design projects with industry partners, and a public diplomacy internship at the Embassy of the United States, Seoul.",
  ],
  personalTitle: "Personal",
  personalText:
    "Beyond research, I write fiction and screenplays. My screenplay Paperball received an honorable mention in the 29th KAIST Literary Award (2024).",
  cvLinkLabel: "Full CV",
};

// About 섹션과 CV 페이지에 쓰이는 연구 관심사.
export const research = {
  title: "Research interests",
  areas: [
    {
      title: "Sensor fabrication",
      description: "",
    },
    {
      title: "Sensing toolkits",
      description: "",
    },
    {
      title: "Haptic interfaces",
      description: "",
    },
  ],
};
