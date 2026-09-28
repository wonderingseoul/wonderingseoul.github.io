// 기관 로고는 한 곳에서 관리합니다. 빈 logo는 텍스트만 표시합니다.
export const organizations: Record<string, { name: string; logo: string; url: string }> = {
  "us-army": { name: "U.S. Army", logo: "/images/organizations/us-army.png", url: "https://www.army.mil/" },
  kaist: { name: "KAIST", logo: "/images/organizations/kaist.svg", url: "https://www.kaist.ac.kr/en/" },
  skku: { name: "Sungkyunkwan University", logo: "/images/organizations/skku.png", url: "https://www.skku.edu/eng/" },
  "us-embassy": { name: "Embassy of the United States, Seoul", logo: "/images/organizations/us-embassy.png", url: "https://kr.usembassy.gov/" },
};
