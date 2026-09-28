import soundinity from "./soundinity";
import everwhite from "./everwhite";
import thermalGlove from "./thermal-glove";
import santaLego from "./santa-lego";
import type { Project } from "../types";

// 새 프로젝트 파일을 위에서 import하고 아래 목록에 넣으면 등록이 끝납니다.
// 표시 순서도 이 목록에서 정합니다. 홈 대표 작업은 content/home.ts의 selectedProjectSlugs에서 별도로 정합니다.
// 삭제: 아래 목록과 위 import에서 함께 제거하세요.
export const allProjects: Project[] = [
  everwhite,
  soundinity,
  thermalGlove, // 2.
  santaLego, // 3.
];
