# 수정 안내 (v0.13.0)

## 자주 하는 수정 — 여기부터 보세요

| 수정할 내용 | 파일 |
|---|---|
| 이름·한 줄 소개·프로필·연락처 | `content/site.ts` |
| News | `content/news.ts` |
| 논문·저자·학회·상태·티저 | `content/publications.ts` |
| 학력·경력·수상·프로젝트 이력 | `content/cv.ts` |
| 홈 섹션·대표 프로젝트 선정·연구 관심사 | `content/home.ts` |
| 프로젝트 카드·상세 내용 | `content/projects/*.ts` |
| 지도교수 이름·링크 | `content/advisors.ts` |
| 기관 이름·로고 | `content/organizations.ts` |
| 태그 이름·색상 분류 | `content/tags.ts` |

### 추가·숨김·삭제
- 기존 항목의 `{ ... }` 블록을 복사하고 내용을 바꾸세요. `id` 또는 `slug`는 중복되지 않게 만듭니다. 쉼표와 따옴표를 유지하세요.
- 논문과 News는 배열에 새 항목을 추가하거나 해당 블록을 삭제합니다. 현재 이 두 종류에는 `visible` 필드가 없습니다.
- CV 이력은 `visible: false`로 화면에서 숨길 수 있습니다. 삭제는 블록을 제거합니다. 연결된 수상·프로젝트의 `relatedEntryId`도 확인하세요.
- 프로젝트는 `templates/project.ts`를 복사하고 `content/projects/index.ts`에 등록합니다. 홈에 올릴 항목은 `content/home.ts`의 `selectedProjectSlugs`에 넣습니다. `visible: false`면 카드와 상세 페이지가 공개되지 않습니다.
- `visible: false`는 화면에서만 숨깁니다. 공개 GitHub 저장소의 소스는 읽을 수 있으므로 비공개 연구 내용은 파일 자체에 쓰지 마세요.
- 이미지가 없으면 `image`를 비웁니다. 논문에 이미지가 없다고 확정했다면 `showImageSlot: false`를 사용합니다.

### 날짜와 정렬
- CV `year`: 왼쪽 연도 그룹, `date`: 화면의 날짜/기간, `sortDate`: 정렬 기준입니다. 세 값을 함께 수정하세요.
- 예: 2022년 1월 수상은 `year: "2022"`, `date: "2022.01"`, `sortDate: "2022-01"`입니다.
- News는 `date: "2022-01"`만으로 날짜 표시와 최신순 정렬을 처리합니다.
- News, 논문, CV 이력은 날짜 기준으로 정렬됩니다. 홈 대표 프로젝트의 순서는 `selectedProjectSlugs` 순서입니다.

### 반영 확인과 업로드
1. `npm run dev`로 로컬 화면을 확인합니다.
2. Ctrl+C 후 `npm run typecheck`, `npm run build`를 실행합니다.
3. 성공하면 `git add .`, `git commit -m "Update portfolio"`, `git push`로 올립니다.

### 다운로드 CV는 별도 갱신
현재 Word/PDF CV는 웹 데이터에서 자동 생성되지 않습니다. Word 문서를 수정하여 PDF로 내보내고, 사이트의 `public/documents/cv.pdf`를 교체해야 합니다. 이번 전달본은 웹과 Word/PDF를 함께 갱신했습니다.


## 실행
`npm ci` 후 `npm run dev`를 실행하고 http://localhost:3000 을 엽니다. 배포 전에는 `npm run build`와 `npm run typecheck`로 확인합니다.

## 구조
- 홈(`/`): 프로필(배경 소개 통합) → News → Publications → Projects. 섹션 순서와 표시 여부는 `content/home.ts`의 `homeSections`.
- 프로젝트 상세(`/projects/슬러그/`): `content/projects/`의 파일 하나가 페이지 하나.
- CV(`/cv/`): `content/cv.ts` + 논문 목록. `public/documents/cv.pdf`가 다운로드 파일.
- 상단 메뉴는 홈 섹션의 `menuLabel`에서 자동으로 만들어지고, `content/navigation.ts` 항목(CV)이 뒤에 붙습니다.

## 파일별 수정 위치
- `content/site.ts`: 이름, 한 줄 소속(role/affiliation), 첫 화면 소개(introduction), CV용 짧은 프로필(bio), 링크. 빈 링크는 자동으로 숨겨집니다. 이메일은 `links.email`에 주소만 적습니다.
- `content/home.ts`: 프로필 배경 소개(profileBackground), 연구 관심사(research), 홈에 보일 프로젝트(selectedProjectSlugs).
- `content/publications.ts`: 논문. 연도 내림차순으로 자동 정렬됩니다. 제목·저자·짧은 학회명만 표시하며, 초록·페이지 범위는 쓰지 않습니다. 아래 예시를 참고하세요.
- `content/projects/`: 프로젝트. 새 작업은 `templates/project.ts`를 복사해 `index.ts`에 등록합니다. `visible: false`면 상세 페이지가 만들어지지 않고 링크도 사라집니다(단, 공개 저장소의 소스는 보입니다). 홈에 올리려면 `home.ts`의 `selectedProjectSlugs`에 slug를 추가합니다.
- `content/cv.ts`: 학력·경력·수상. `visible: false`면 숨깁니다. `selected`는 현재 화면에서 쓰이지 않습니다.
- `app/theme.css`: 색상, 글꼴, 본문 줄 길이. 글꼴 파일은 `app/fonts/`(Inter + Noto Sans KR, OFL)이며 `app/layout.tsx`에서 연결합니다.

## 사진과 그림
- 프로필 사진: `public/images/profile.jpg`에 두고 `content/site.ts`의 `portrait`에 `/images/profile.jpg`를 적습니다. 정사각형에 가까운 사진이 좋고, 화면에서는 160px(모바일 120px) 원형으로 잘려 보입니다.
- 프로젝트 대표 그림: `content/projects/프로젝트명.ts`의 `image`, `imageAlt`, `imageFit`(contain/cover). 16:10 비율 기준. 영상은 `video`에 mp4 경로.
- 프로젝트 본문 그림: `sections[]`의 `image`, `imageAlt`, `imageCaption`.
- 논문 그림(선택): `content/publications.ts`의 `image`, `imageAlt`. 데스크톱에서는 항목 왼쪽, 720px 이하에서는 제목 위에 표시됩니다. 이미지가 없는 논문은 텍스트만으로 전체 너비를 사용합니다.
- 경로가 비어 있으면 이미지 자리가 생기지 않습니다. `npm run dev`에서는 `site.showMediaSlots=true`일 때 점선으로 삽입 위치가 표시되고, 배포 빌드에는 나오지 않습니다.
- 권장 형식: JPG 또는 WebP, 가로 1600px 이하, 파일당 500KB 이하.

## 비공개 자료
`visible: false`나 빈 항목은 화면에서만 숨길 뿐 공개 저장소에서는 소스가 보입니다. 미공개 연구 내용은 소스와 `public/`에 넣지 마세요.

## 역할 문구와 PDF 관리
- Everwhite의 구체적인 기여는 `content/projects/everwhite.ts`의 `everwhiteContribution`에서 수정합니다. 프로젝트 상세와 웹 CV에 함께 반영됩니다. `role`은 공식 크레딧입니다.
- 다운로드 PDF는 자동 생성되지 않습니다. 웹의 학력·논문·경력 등을 수정하면 원본 CV도 수정하고 `public/documents/cv.pdf`를 교체하세요. 웹과 PDF의 역할 문구도 함께 확인하세요.
- 출판 상태는 `content/publications.ts`의 `status`에서 수정합니다. 공식 출판 확인 전에는 날짜만 보고 바꾸지 마세요.

## 이력의 날짜와 분류
- `content/cv.ts`에서 `year`는 연도 그룹, `date`는 학기·월일·기간입니다. 예: year: "2022", date: "2022.07 – 2022.12". 확인된 날짜만 입력하세요. 연도 없는 항목은 해당 섹션 마지막에 표시됩니다.
- 연도는 내림차순이며, 같은 연도에서는 파일에 입력한 순서를 따릅니다.
- Projects는 활동과 역할, Awards는 수상 결과를 기록합니다. 프로젝트에 `id`를 지정하고 수상 기록의 `relatedEntryId`에 같은 값을 넣으면 양쪽에서 자동 연결됩니다. 프로젝트 설명에 수상 내용을 중복 입력하지 마세요.
- `url`과 `urlLabel`로 기사·공식 공지 링크를 추가합니다.
- Invited Talks & Lectures에는 강의와 워크숍을, Personal에는 개인적 관심과 창작 활동을 기록합니다.
- 기간은 YYYY.MM – YYYY.MM 또는 YYYY.MM – Present로 입력합니다. 여러 해에 걸친 경력의 year는 종료 연도를 기준으로 합니다.

## 논문 입력 예시
`content/publications.ts`에 추가합니다. 이름은 `authors` 배열에 순서대로 쓰며, `site.authorNames`에 등록된 본인 이름만 자동으로 굵게 표시됩니다.

```ts
{
  id: "paper-slug", title: "Paper title",
  authors: ["First Author", "Hyung Wook Yi", "Last Author"],
  venue: "Conference short name", year: "2026",
  tags: ["thermal-haptics", "xr"],
  status: "",
  image: "", imageAlt: "",
  links: [
    { label: "DOI", href: "https://doi.org/…", kind: "doi" },
    { label: "Video", href: "https://…", kind: "video" },
  ],
}
```

- `status`는 확인된 상태만 입력합니다. 빈 값은 배지가 없으며 `Forthcoming`과 `Conditionally Accepted`는 다른 상태입니다.
- `links`는 실제 있는 자료만 등록합니다. DOI / PDF / Video / News / Project 등 필요한 버튼을 추가할 수 있습니다. Lab listing이나 국가 분류는 논문 태그·버튼으로 사용하지 않습니다.
- `content/tags.ts`에서 태그 ID → 표시 이름·색상을 한 번에 관리합니다. 색상을 구분하지 못해도 텍스트로 분류를 읽을 수 있습니다.

## 학력
`content/cv.ts`의 `education` 배열에서 학위를 각각 관리합니다. `date`에는 실제 재학 기간을 적습니다. 공개 가능한 학부논문은 `thesis.title`, 지도교수는 `advisorId`로 지정합니다. 석사논문은 현재 비공개이므로 입력하지 마세요. 링크가 있으면 논문 링크는 `thesis.url`에, 지도교수 링크는 `content/advisors.ts`에 넣으세요. 현재 빈 값은 미확인 정보이며 화면에 임시 문구를 출력하지 않습니다. 박사 재학은 candidacy를 의미하지 않습니다.

## News
`content/news.ts`에서 `date`, `text`, 선택적인 `links`를 입력합니다. 날짜는 `YYYY`, `YYYY-MM`, `YYYY-MM-DD` 중 확인된 정밀도로 적고, 최신 항목부터 자동 정렬됩니다. 홈에는 최근 5개가 표시되고 View all news가 /news/ 전체 목록으로 연결됩니다. 빈 배열이면 섹션과 메뉴가 함께 숨겨집니다. 발표·출판·수상·강연처럼 확인된 소식만 기록하세요.

## 모션과 접근성
`components/page-motion.tsx`는 작은 진입 모션만 담당합니다. 초기 콘텐츠를 숨기지 않으므로 JavaScript 없이도 본문을 읽을 수 있습니다. `prefers-reduced-motion`에서는 진입·스크롤·호버 이동을 끕니다. 메뉴의 현재 섹션은 밑줄과 aria-current로 표시합니다.

## v0.12.0 편집 규칙
- `content/advisors.ts`: 지도교수 이름과 개인 링크를 한곳에서 관리합니다. 학력·경력·프로젝트의 `advisorId`에 키(yoon/kim/sul/lee/ko)를 입력합니다. LinkedIn을 우선하며 확인되지 않은 URL은 만들지 않습니다.
- Selected Projects는 제목·기간, 소속, 짧은 기여 설명, 지도교수, 수상 연결로 통일합니다. 팀명 및 Course/Funding/Partner/Program 세부 필드는 현재 공개하지 않습니다.
- `date`는 제목 오른쪽에 표시됩니다. 작은 화면에서는 줄바꿈됩니다. 정확한 월일을 모르면 연도 또는 학기만 입력합니다. 기사 게시일과 행사·수상일은 구분하세요.
- 논문 주제는 색상 태그, 출판 상태는 STATUS 표기와 세로 구분선으로 표시됩니다. `status`는 분류 태그가 아닙니다. `domestic` 필드는 삭제했습니다.
- 프로필은 `public/images/profile.jpg`입니다. 현재 원본 사진을 그대로 사용하며 CSS로 배치합니다.
- 미공개 석사논문 제목은 데이터·주석·문서·PDF 어느 곳에도 입력하지 마세요. 학부논문은 공개 가능한 제목만 표시합니다.
- Media는 인터뷰 기록입니다. 단순 수상 보도는 해당 수상의 News 버튼으로 연결하며 같은 기사로 항목을 중복 생성하지 않습니다.


## v0.12.0 날짜·기관·이미지 편집
- `content/cv.ts`: `year`는 연도 그룹, `date`는 표시 문구, `sortDate`는 최신순 정렬 기준입니다. 기간은 종료일을 기준으로 합니다. 실제 일자가 없으면 월까지만 입력하고, 월도 없으면 `sortDate`를 생략합니다. 같은 해 안에서 날짜 미상 기록은 뒤에 표시됩니다.
- Spring/Fall은 정렬에만 각각 03/09를 사용합니다. 실제 선정 월을 뜻하지 않습니다. 같은 날짜는 입력 순서를 유지합니다.
- `content/publications.ts`에도 `sortDate`를 사용할 수 있습니다. News는 기존 `date`로 자동 최신순 정렬됩니다.
- Selected Projects는 제목·기간, 소속, 짧은 기여 설명, 지도교수, 수상 연결로 통일합니다. 팀명 및 Course/Funding/Partner/Program 세부 필드는 현재 공개하지 않습니다.
- `content/organizations.ts`에서 기관명·주소·로고를 관리하고 학력/경력의 `organizationId`로 연결합니다. logo를 빈 문자열로 두면 빈 로고 칸 없이 텍스트로 표시됩니다.
- 논문 `venueUrl`은 학회명을 클릭했을 때 열릴 주소입니다. DOI·Video·News 등은 기존 `links`에 넣습니다.
- 논문 `showImageSlot: false`는 이미지가 없다고 확정된 항목입니다. 개발 모드에서도 자리 표시를 생략합니다. 이미지가 있으면 논문 왼쪽(모바일은 위)에 표시하며 클릭하면 원본이 열립니다.
- 수상 항목 `image`/`imageAlt`는 선택 티저입니다. 빈 항목은 이미지 공간을 남기지 않습니다.
- 제공된 도식은 전체가 보이도록 contain으로 표시합니다. 프로젝트 사진을 화면에 채워 크롭하려면 `imageFit: "cover"`를 사용하세요. 프로필 원형 크롭은 CSS에서 적용합니다.

## 경력 연도와 새 프로젝트 (v0.12.0)
- `content/cv.ts`의 섹션별 `groupByYear: false`는 왼쪽 연도 그룹 없이 최신순으로 경력을 나열합니다. 오른쪽 `date`는 유지됩니다. Research Experience와 Work Experience에 적용했습니다.
- `imageAspectRatio`는 티저의 표시 비율입니다. 예: `"2 / 1"`, `"16 / 9"`. 원본은 변경하지 않습니다.
- 큐커의 표시명은 Student’s Plan입니다. 기존 수상 연결을 보존하기 위해 내부 id는 `qooker`를 유지합니다.
- 발표 공지·행사 포스터·주최기관 자체 링크는 공개하지 않습니다. 뉴스·논문·프로젝트 자료 링크만 제공합니다.
- 개인 링크가 없는 지도교수는 `content/advisors.ts`의 url을 빈 문자열로 둡니다.

## 최신 편집 원칙
- 수상 날짜는 월까지만 표시합니다. 정렬용 `sortDate`는 별도로 유지할 수 있습니다.
- Academic Honors의 학기는 Spring/Fall로 표시하고 웹의 왼쪽 연도를 반복하지 않습니다.
- 출판 상태는 사용자 확인에 따라 Accepted로 표기했습니다.
- News는 최신순이며 날짜 미상 항목의 월은 추정하지 않습니다. 저음질 음성 데이터 소식은 2022.01 보도 시점입니다.

## v0.12.0 추가 수정
- 소개와 연구 관심사는 Sensor fabrication → Sensing toolkits → Haptic interfaces 순서입니다.
- `externalUrl`이 있는 프로젝트는 홈과 CV에 남지만 자체 상세 페이지는 생성하지 않습니다. Everwhite는 IxDA 소개로 연결합니다.
- CV 티저는 데스크톱 왼쪽, 720px 이하에서는 본문 위입니다. 기관 로고는 작은 왼쪽 표식으로 유지합니다. 이미지가 없는 항목은 빈 열 없이 텍스트로 표시됩니다.
- Thermal Crossing 수락 2026.08, IxDA 선정 2023.03, DNA-HERO 수상 2022.12. Soundinity 수행 기간 2022.06–12.

- `npm run build`는 기존 생성물 `out/`을 먼저 비웁니다. 삭제한 상세 페이지가 이전 빌드에서 남는 것을 방지합니다.

## v0.13.0 UI와 편집 위치
- 하단 About은 프로필에 통합했습니다. 배경 문단과 Personal 문장은 `content/home.ts`의 `profileBackground`, 연구 관심사는 `research`에서 수정합니다.
- 프로필의 CV와 상단 CV 메뉴는 모두 `/cv/`로 연결됩니다. CV 페이지의 Curriculum Vitae (PDF) 버튼만 `content/site.ts`의 `links.cvPdf`를 사용합니다.
- News는 `content/news.ts`의 `newsDisplay.limit`(기본 5)개를 홈에 표시하고, `archiveLabel`로 전체 목록 링크 문구를 바꿉니다. `/news/`도 같은 데이터를 쓰므로 이중 입력하지 않습니다.
- Publications 메뉴와 섹션명을 통일했습니다. 연도별 카드에 티저, 제목, 저자, 학회·상태, 주제, 자료 링크 순으로 배치합니다. PDF CV의 서지 내용은 변경하지 않았습니다.
- 연구 관심사는 현재 방향을 나타내는 텍스트입니다. 미공개 작업을 설명하는 도식이나 빈 Research Roadmap 영역은 만들지 않았습니다.


## v0.13.1: Home 메뉴와 상태 구분선

- 첫 메뉴 Home은 `content/navigation.ts`의 `homeNavigation`에서 이름과 노출 여부를 수정합니다. `/#home`은 메인 프로필로 이동합니다.
- 논문 상태의 `Status | Accepted` 구분선은 `components/publication-list.tsx`, 색상은 `app/theme.css`의 `.publication-status-divider`에서 관리합니다.

## v0.14.0: 로고와 푸터

- 상단 로고 경로: `content/site.ts`의 `logo`. 원본 벡터 파일은 `public/brand/logo.svg`. 최종 1a(세로획 60) 비율을 사용합니다.
- `public/brand/`에 밝은/어두운 배경용, 단색 버전과 파비콘 벡터가 있습니다.
- 브라우저 아이콘: `public/favicon.svg`(16px B안, 어두운 탭 색상 자동 대응), `favicon.ico`(16/32/48px). 수정 시 PNG/ICO도 함께 갱신하세요. Apple 아이콘은 `apple-touch-icon.png`. 연결은 `app/layout.tsx`에서 관리합니다.
- 푸터 키워드는 `content/site.ts`의 `footerText`를 빈 문자열로 설정해 숨겼습니다. 소개 및 연구 관심 분야는 유지합니다.
