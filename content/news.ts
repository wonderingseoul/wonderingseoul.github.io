import type { NewsItem } from "./types";
// 확인된 소식 날짜. speech-prize-press는 수상일이 아닌 보도월입니다.
export const news: NewsItem[] = [
  {
    "id": "thermal-crossing-2026",
    "date": "2026-08",
    "text": "Thermal Crossing has been accepted to ACM ISWC Notes and Briefs.",
    "links": [
      {
        "label": "Publication",
        "href": "/#publication-thermal-crossing",
        "kind": "other"
      }
    ]
  },
  {
    "id": "phd-2026",
    "date": "2026-03",
    "text": "I started my Ph.D. studies at KAIST’s HCI Tech Lab, advised by Sang Ho Yoon.",
    "links": [
      {
        "label": "Education",
        "href": "/cv/#education",
        "kind": "other"
      }
    ]
  },
  {
    "id": "ms-graduation",
    "date": "2026-02",
    "text": "I completed my M.S. at KAIST’s Graduate School of Metaverse.",
    "links": [
      {
        "label": "Education",
        "href": "/cv/#education",
        "kind": "other"
      }
    ]
  },
  {
    "id": "ms-start",
    "date": "2023-08",
    "text": "I started my M.S. at KAIST’s Graduate School of Metaverse, advised by Sang Ho Yoon."
  },
  {
    "id": "hci-intern-end",
    "date": "2023-08",
    "text": "I completed my summer research internship at HCI Tech Lab, KAIST."
  },
  {
    "id": "skku-graduation",
    "date": "2023-07",
    "text": "I graduated Cum Laude from Sungkyunkwan University with a double major in Advanced Materials Science and Engineering and Culture and Technology."
  },
  {
    "id": "hci-intern-start",
    "date": "2023-06",
    "text": "I joined HCI Tech Lab at KAIST as a summer research intern."
  },
  {
    "id": "ixda-2023",
    "date": "2023-03",
    "text": "Everwhite was selected as a finalist in the Connecting category of the IxDA Interaction Awards.",
    "links": [
      {
        "label": "Project",
        "href": "https://awards.ixda.org/projects/everwhite.html",
        "kind": "other"
      }
    ]
  },
  {
    "id": "embassy-end",
    "date": "2022-12",
    "text": "I completed my public diplomacy internship at the Embassy of the United States, Seoul."
  },
  {
    "id": "embassy-start",
    "date": "2022-07",
    "text": "I joined the Embassy of the United States, Seoul as a public diplomacy intern."
  },
  {
    "id": "speech-prize-press",
    "date": "2022-01",
    "text": "Our 1st Prize in the AI Ideathon on Low-Quality Speech Data was featured in Korean Lecturer News.",
    "links": [
      {
        "label": "News",
        "href": "https://www.lecturernews.com/news/articleView.html?idxno=86100",
        "kind": "news"
      }
    ]
  },
  {
    "id": "dna-hero-2022",
    "date": "2022-12",
    "text": "Our project Soundinity received 1st Prize in the DNA-HERO industry–academia collaboration program.",
    "links": [
      {
        "label": "Award",
        "href": "/cv/#dna-hero-award",
        "kind": "other"
      }
    ]
  },
  {
    "id": "video-award-2021",
    "date": "2021-12",
    "text": "Our project received 1st Prize in the Everyday Video Data Hackathon.",
    "links": [
      {
        "label": "News",
        "href": "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202112220210",
        "kind": "news"
      }
    ]
  }
];
export const newsDisplay = {"limit":3,"archiveLabel":"Earlier news"};
