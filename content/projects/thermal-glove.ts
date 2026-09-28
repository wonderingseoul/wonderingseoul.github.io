import type { Project } from "../types";

// visible: false → 홈과 상세 페이지에서 숨김. sections의 항목은 자유롭게 추가·삭제하세요.
const project: Project = {
  slug: "thermal-glove",
  title: "Thermal Feedback Glove",
  subtitle: "Exploring temperature as a channel for interaction",
  year: "",
  type: "Course project",
  summary:
    "A wearable haptic interface exploring thermal feedback for augmented human interaction.",
  tags: ["Haptics", "Wearables", "XR"],
  image: "",
  imageAlt: "Thermal feedback glove prototype",
  video: "",
  links: [],
  sections: [
    {
      title: "Overview",
      body: "Developed for the Augmented Humans course, this project explores a glove-based approach to thermal feedback.",
    },
    {
      title: "Prototype & process",
      body: "Prototype photographs, implementation details, and individual contributions will be added here.",
    },
  ],
  visible: false,
  category: "course",
};

export default project;
