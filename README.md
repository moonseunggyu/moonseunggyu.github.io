# 상상이상 LMS (moonseunggyu.github.io)

미코스쿨 상상이상 LMS 1단계 화면 프로토타입. 사이트 주소: https://moonseunggyu.github.io/

## 폴더 구조

```
/
├─ index.html               루트 주소 → main.dc.html 로 이동
│
├─ main.dc.html             메인 (반응형 완료)
├─ courses.dc.html          교육 과정
├─ course-detail.dc.html    과정 상세
├─ my-learning.dc.html      나의 학습
├─ about.dc.html            연수원 안내
├─ support-center.dc.html   지원센터
├─ error.dc.html            오류 · 점검
│
├─ GNB.dc.html              공통 상단 메뉴 (모든 화면이 불러옴, 햄버거 메뉴 포함)
├─ Footer.dc.html           공통 푸터
│
├─ support.js               .dc.html 화면을 그려 주는 런타임
├─ image-slot.js            이미지 슬롯 (연수원 안내에서 사용)
├─ .image-slots.state.json  이미지 슬롯 상태
├─ ds/                      디자인 시스템 (tokens.css · bundle.css · bundle.js · 폰트)
├─ assets/                  이미지 · 영상 · 로고
│   ├─ hero/                메인 히어로 영상 · 사진
│   ├─ family/              계열사 로고
│   ├─ facility/            연수원 시설 사진
│   ├─ space/ talent/       연수원 안내 이미지
│   └─ fonts/               Pretendard
│
├─ reference/               디자인 참고용 (실서비스 화면 아님)
│   ├─ courses-mobile.dc.html         교육 과정 모바일 시안
│   ├─ my-learning-mobile.dc.html     나의 학습 모바일 시안
│   ├─ support-center-mobile.dc.html  지원센터 모바일 시안
│   └─ screen-map.dc.html             WYD 화면 대응표
│
├─ EBS/                     기존 EBS 수기 공모전 페이지
└─ CLAUDE.md                디자인 · 개발 규칙
```

## 규칙 요약
- 파일명은 영어(URL에 한글 X).
- 모바일은 별도 파일이 아니라 같은 화면의 반응형(태블릿 ≤1023px · 모바일 ≤767px).
- GNB · Footer는 `support.js`가 화면과 **같은 폴더**에서 불러오므로 루트에 둔다. 화면 파일을 하위 폴더로 옮기지 않는다.
- 디자인 툴에서 받은 zip(한글 파일명)은 `zip file/`에 두고 커밋하지 않는다(.gitignore). 반영할 때 영어 파일명으로 바꿔 넣는다.

| 디자인 툴 파일명 | 저장소 파일 |
|---|---|
| 메인 | main.dc.html |
| 교육 과정 | courses.dc.html |
| 과정 상세 | course-detail.dc.html |
| 나의 학습 | my-learning.dc.html |
| 연수원 소개 | about.dc.html |
| 지원센터 | support-center.dc.html |
| 오류·점검 | error.dc.html |
| 교육 과정 모바일 · 나의 학습 모바일 · 지원센터 모바일 | reference/…-mobile.dc.html |
| 메인 모바일 | (반응형으로 대체, 사용 안 함) |
| WYD 화면 대응표 | reference/screen-map.dc.html |
