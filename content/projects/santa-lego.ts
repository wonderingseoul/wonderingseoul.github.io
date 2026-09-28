import type { Project } from "../types";

// 수업 프로젝트. 이미지와 정리된 설명이 준비되면 visible: true로 바꾸세요.
const project: Project = {
  slug: "santa-lego",
  title: "Santa LEGO Machine",
  subtitle: "An interactive LEGO-making experience",
  year: "2023",
  type: "Graduate course project",
  summary:
    "A graduate course project exploring a LEGO vending-machine experience. Submission to the HCI Korea winter conference is planned.",
  tags: ["Physical computing", "Play", "Interaction design"],
  image: "",
  imageAlt: "Santa LEGO machine prototype",
  video: "",
  links: [],
  sections: [
    {
      title: "Overview",
      body: "A small graduate course project exploring an interactive LEGO vending-machine experience.",
    },
    {
      title: "Status",
      body: "Planned submission to the HCI Korea winter conference.",
    },
  ],
  visible: false,
  category: "course",
};

export default project;
