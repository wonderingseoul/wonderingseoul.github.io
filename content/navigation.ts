// 메인 프로필로 돌아가는 첫 메뉴. enabled: false로 숨길 수 있습니다.
export const homeNavigation = { label: "Home", href: "/#home", enabled: true };

// 상단 메뉴. 홈 섹션 메뉴는 content/home.ts의 menuLabel에서 자동으로 만들어지고,
// 아래 항목은 그 뒤에 붙습니다.
export const navigation = [{ label: "CV", href: "/cv/", enabled: true }];
