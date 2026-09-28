import type { Project } from "@/content/types";

// 공개 가능한 내용만 작성하세요. visible=false여도 공개 저장소의 소스는 노출됩니다.
// 이 파일을 content/projects/my-project.ts로 복사하세요.
// 마지막으로 content/projects/index.ts에서 import하고 목록에 추가하세요.
// 홈에 표시하려면 content/home.ts의 selectedProjectSlugs에도 slug를 추가하세요.
// CV 경력 섹션의 groupByYear=false는 왼쪽 연도 없이 기간만 표시합니다.
// CV의 수행 기간과 수상 시점은 content/cv.ts에서 별도 기록하고 relatedEntryId로 연결합니다.
// 지도교수 링크는 content/advisors.ts에서 관리합니다. CV 프로젝트는 간결한 설명으로 유지합니다.
// About 그림은 프로젝트와 별개로 content/home.ts의 aboutStory.image에서 설정합니다.
const project: Project = {
  slug: "my-project", // 주소에 쓰입니다. 영문 소문자·숫자·하이픈, 중복 금지.
  category: "creative", // research / creative / course
  recognition: "", // 선택: 확인된 수상·선정 결과
  role: "", // 본인이 담당한 역할
  // externalUrl: "https://example.com/project", // 외부 소개 페이지가 있으면 자체 상세 페이지 생략
  visible: true, // false면 상세 페이지도 내보내지 않습니다.
  title: "My Project",
  subtitle: "A short project subtitle",
  year: "2026",
  type: "Research project",
  summary: "One sentence about this project.",
  tags: ["HCI"],
  image: "", // 선택: /images/my-project.jpg. 빈 문자열이면 이미지 공간도 사라집니다.
  imageFit: "contain", // contain: 전체 그림 / cover: 영역을 채우며 일부 자르기
  imageAlt: "", // 사진을 넣으면 실제 사진 설명도 넣어주세요.
  video: "", // /videos/my-project.mp4
  links: [], // [{ label: "Paper", href: "/documents/paper.pdf" }]
  sections: [
    {
      title: "Overview", body: "Describe the project here.",
      image: "", imageAlt: "", imageCaption: "", // 본문 그림(선택)
    },
    { title: "My role", body: "Describe your contributions here." },
  ],
};
export default project;
