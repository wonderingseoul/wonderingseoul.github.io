# Hyung Wook Yi — Personal Website v0.13.0

Next.js App Router + TypeScript + Tailwind CSS. GitHub Pages에 배포할 수 있는 정적 사이트 기본 구조입니다.

## 1. 내 컴퓨터에서 실행

Node.js 22 이상(LTS 권장)을 설치하세요. 압축을 푼 뒤 `package.json`이 있는 **hw-yi-website** 폴더를 VS Code로 열고 터미널에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. 종료는 터미널에서 Ctrl+C입니다. 윈도우 PowerShell에서 npm 실행이 차단되면 명령 프롬프트 터미널을 사용하거나 `npm.cmd ci`, `npm.cmd run dev`를 실행하세요.

## 2. v0.13.0 구조와 수정 위치

홈 한 페이지(프로필(배경 소개 통합) → News → Publications → Projects) + 프로젝트 상세 페이지 + CV 페이지입니다.
상단 메뉴의 News / Publications / Projects은 홈 안의 섹션으로 이동하는 링크이고, CV와 전체 News는 별도 페이지입니다.

| 수정할 내용 | 파일 |
| --- | --- |
| 이름·소개·프로필 사진·연락처 | `content/site.ts` |
| 홈 섹션 순서·프로필 배경 소개·연구 관심사·홈에 보일 프로젝트 | `content/home.ts` |
| 논문 | `content/publications.ts` |
| 전체 프로젝트 등록·순서 | `content/projects/index.ts` |
| 프로젝트 본문·역할·이미지 | `content/projects/프로젝트명.ts` |
| 학력·경력·수상 | `content/cv.ts` |
| 메뉴 추가 항목 | `content/navigation.ts` |
| 색상·글꼴 | `app/theme.css`, `app/fonts/` |

자세한 수정 방법은 [EDITING.md](EDITING.md)를 참고하세요. 콘텐츠 확인 사항은 [CONTENT_REVIEW.md](CONTENT_REVIEW.md)에 있습니다.

## 3. 빌드 확인

```bash
npm run build
npm run typecheck
npm run preview
```

완성된 정적 파일은 `out/`에 생성됩니다. 미리보기는 http://localhost:3000 입니다. `npm run dev`와 `npm run preview`를 동시에 실행하지 마세요. 정적 결과는 파일을 더블클릭하는 대신 HTTP 서버로 확인하세요.

## 4. GitHub에 올리기

1. GitHub에 빈 저장소를 만듭니다. 개인 홈페이지라면 **실제 GitHub 아이디.github.io**를 저장소 이름으로 사용하세요. `hwyi`는 확정된 사용자 아이디가 아닙니다.
2. 로컬 프로젝트 루트에서 실행합니다. `<USERNAME>` 등은 본인 값으로 바꿉니다.

```bash
git init
git add .
git commit -m "Create personal research website"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
git push -u origin main
```

3. 저장소의 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
4. **Actions → Deploy website to GitHub Pages → Run workflow**를 실행합니다. 이후에는 `main`에 push할 때 자동 갱신됩니다. Pages 설정 전에 첫 실행이 실패하면 설정 후 다시 실행하세요.
5. 개인 저장소는 `https://<USERNAME>.github.io/`, 일반 저장소는 `https://<USERNAME>.github.io/<REPOSITORY>/`로 열립니다.

배포 워크플로는 GitHub Pages가 알려주는 `base_path`를 사용하므로 두 유형의 경로를 지원합니다. 커스텀 도메인을 설정하거나 바꾸면 워크플로를 다시 실행하세요. 별도 서버/DB는 필요 없습니다.

로컬에서 저장소 하위 경로도 확인하려면 `.env.example`을 `.env.local`로 복사하고 `NEXT_PUBLIC_BASE_PATH=/my-website`를 입력한 뒤 다시 빌드하세요. `npm run preview`에는 같은 환경변수를 전달해야 합니다(이 스크립트는 `.env.local`을 자동 로드하지 않습니다).

PowerShell:
```powershell
$env:NEXT_PUBLIC_BASE_PATH="/my-website"
npm run build
npm run preview
# 확인 주소: http://localhost:3000/my-website/
```

macOS/Linux:
```bash
NEXT_PUBLIC_BASE_PATH=/my-website npm run build
NEXT_PUBLIC_BASE_PATH=/my-website npm run preview
```

## 5. 이후 수정

```bash
npm run dev
# 내용 수정 → 브라우저에서 확인 → Ctrl+C
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

GitHub 로그인은 본인 컴퓨터의 Git Credential Manager 또는 GitHub CLI 등으로 진행하세요. 토큰/비밀번호를 소스코드에 넣지 마세요. `.env.local`, `node_modules/`, `.next/`, `out/`는 Git에서 제외됩니다. 소스 ZIP에도 포함하지 않습니다.

## 기술 자료

- https://nextjs.org/docs/app/guides/static-exports
- https://tailwindcss.com/docs/installation/framework-guides/nextjs
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

이번 산출물은 로컬 실행용 소스입니다. GitHub 저장소 생성, push, 공개 배포는 아직 수행하지 않았습니다.

## 확인한 사항

[VALIDATION.md](VALIDATION.md)에 검증 결과와 제한을 기록했습니다.

### v0.13.0 수정
논문 저자 강조, 주제별 색상 태그, 출판 상태 배지, 독립 자료 버튼, 왼쪽 썸네일을 적용했습니다. News와 현재 섹션 표시, 절제된 진입·호버 모션을 추가하고 시스템의 동작 줄이기 설정을 존중합니다. 학력은 학위별로 분리했고 공허한 소개와 중복 설명을 삭제했습니다. 영문 기관명과 수상 표기를 정리했습니다.

News는 `content/news.ts`, 태그 이름과 색상은 `content/tags.ts`에서 수정합니다. 글꼴은 Inter와 Noto Sans KR를 포함하므로 빌드와 방문 시 외부 글꼴 서버에 의존하지 않습니다.

### v0.13.0 이력과 표시 방식
프로필 사진, 학위·연구 인턴 기간, 학부논문, 프로젝트 수업·팀·지도교수·지원기관, 수상 주최기관·기사, DNA-X 강연, 인터뷰를 반영했습니다. 기간은 제목 오른쪽에 표시하며, 지도교수 링크는 `content/advisors.ts`에서 관리합니다. 주제 태그와 출판 상태를 구분하고 Domestic / Lab listing은 제거했습니다. 동봉 PDF는 3쪽 Full CV입니다.

### v0.13.0 이미지와 정보 정리
- Soundinity 상세 페이지와 홈 카드, Everwhite UX Designer/Connecting Finalist 기록.
- 논문 티저 2개, Everwhite 대표·상세 이미지, Soundinity와 두 공모전 티저.
- 원형 프로필, 기관 로고, 학회명 직접 링크.
- CV 연도 내 최신순, 1st Prize 및 Spring/Fall 통일, 한 학기 전액 장학금 반영.
- `content/organizations.ts`: 기관 로고. `lib/dates.ts`: 공통 날짜 정렬.

### v0.13.0 추가 이력
- Student’s Plan 정식명 및 티저, Jeogiyo와 원더링 서울 프로젝트·교과목·지도교수·수상 연결.
- SKKU Webzine 인터뷰 2022.01.
- Work/Research Experience 왼쪽 연도 그룹 제거, 오른쪽 기간 유지.
- 발표 공지·행사 포스터·주최기관 자체 링크는 공개하지 않습니다. 뉴스·논문·프로젝트 자료 링크만 제공합니다.

## 최신 편집 원칙
- 수상 날짜는 월까지만 표시합니다. 정렬용 `sortDate`는 별도로 유지할 수 있습니다.
- Academic Honors의 학기는 Spring/Fall로 표시하고 웹의 왼쪽 연도를 반복하지 않습니다.
- 출판 상태는 사용자 확인에 따라 Accepted로 표기했습니다.
- News는 최신순이며 날짜 미상 항목의 월은 추정하지 않습니다. 저음질 음성 데이터 소식은 2022.01 보도 시점입니다.

## v0.13.0 추가 수정
- 소개와 연구 관심사는 Sensor fabrication → Sensing toolkits → Haptic interfaces 순서입니다.
- `externalUrl`이 있는 프로젝트는 홈과 CV에 남지만 자체 상세 페이지는 생성하지 않습니다. Everwhite는 IxDA 소개로 연결합니다.
- CV 티저는 데스크톱 왼쪽, 720px 이하에서는 본문 위입니다. 기관 로고는 작은 왼쪽 표식으로 유지합니다. 이미지가 없는 항목은 빈 열 없이 텍스트로 표시됩니다.
- Thermal Crossing 수락 2026.08, IxDA 선정 2023.03, DNA-HERO 수상 2022.12. Soundinity 수행 기간 2022.06–12.

## v0.13.0 UI와 편집 위치
- 하단 About은 프로필에 통합했습니다. 배경 문단과 Personal 문장은 `content/home.ts`의 `profileBackground`, 연구 관심사는 `research`에서 수정합니다.
- 프로필의 CV와 상단 CV 메뉴는 모두 `/cv/`로 연결됩니다. CV 페이지의 Curriculum Vitae (PDF) 버튼만 `content/site.ts`의 `links.cvPdf`를 사용합니다.
- News는 `content/news.ts`의 `newsDisplay.limit`(기본 5)개를 홈에 표시하고, `archiveLabel`로 전체 목록 링크 문구를 바꿉니다. `/news/`도 같은 데이터를 쓰므로 이중 입력하지 않습니다.
- Publications 메뉴와 섹션명을 통일했습니다. 연도별 카드에 티저, 제목, 저자, 학회·상태, 주제, 자료 링크 순으로 배치합니다. PDF CV의 서지 내용은 변경하지 않았습니다.
- 연구 관심사는 현재 방향을 나타내는 텍스트입니다. 미공개 작업을 설명하는 도식이나 빈 Research Roadmap 영역은 만들지 않았습니다.

