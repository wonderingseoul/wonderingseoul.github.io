// 태그의 문구와 색상을 한곳에서 관리합니다. 색상 외에도 텍스트로 의미를 전달합니다.
export const researchTags: Record<string, { label: string; tone: string }> = {
  audio: { label: "Audio", tone: "blue" },
  ai: { label: "AI", tone: "violet" },
  "thermal-haptics": { label: "Thermal Haptics", tone: "coral" },
  haptics: { label: "Haptics", tone: "coral" },
  xr: { label: "XR", tone: "teal" },
  llm: { label: "LLM", tone: "violet" },
  games: { label: "Games", tone: "blue" },
  "interaction-design": { label: "Interaction Design", tone: "teal" },
};
