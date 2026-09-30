// 이름·소개·연락처·사이트 공통 설정. 빈 링크는 화면에서 자동으로 숨겨집니다.
export const site = {
  name: "Hyung Wook Yi",
  authorNames: ["Hyung Wook Yi", "이형욱"],
  // 프로필 사진(선택). public/images/profile.jpg에 파일을 두고 "/images/profile.jpg"로 적습니다.
  // 상단 로고. public/brand/logo.svg를 교체하면 됩니다.
  logo: "/brand/logo.svg",
  portrait: "/images/profile.jpg",
  portraitAlt: "Portrait of Hyung Wook Yi",
  // npm run dev에서만 이미지 삽입 위치 표시. 빌드 결과에는 표시하지 않습니다.
  showMediaSlots: true,
  role: "Ph.D. student",
  affiliation: "KAIST",
  // 첫 화면 소개. 지금 사이트에서 보여줄 수 있는 작업에 맞춰 적습니다.
  introduction:
    "My research focuses on sensor fabrication and toolkits for creating interactive sensing systems. I also work on haptic interfaces.",
  // CV 페이지의 짧은 프로필. 빈 문자열이면 프로필 섹션을 숨깁니다.
  bio: "",
  links: {
    email: "taleweaver@kaist.ac.kr",
    github: "",
    scholar: "https://scholar.google.com/citations?user=LhL3KO4AAAAJ&hl=ko&oi=sra",
    cvPdf: "/documents/cv.pdf",
    linkedin: "https://www.linkedin.com/in/hyung-wook-yi-673828178/",
  },
  language: "en",
  titleSuffix: "Sensor Fabrication & Sensing Toolkits",
  footerText: "",
  cvEnabled: true,
};
