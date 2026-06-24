# 윤성호 포트폴리오 — 설계

날짜: 2026-06-24

## 목표
이력서·경력기술서 데이터를 담은 단일 페이지 개발자 포트폴리오. 화이트+블루 미니멀.

## 결정사항
- 언어: 본문 한국어, 섹션 레이블/직함 영어
- 연락처: 이메일만 (riskyjunk@gmail.com). 전화/GitHub/LinkedIn 제외 (미제공)
- 테마: 라이트/다크 자동 (OS 설정), 라이트는 순수 화이트

## 기반
기존 스캐폴드 디자인 시스템 재사용:
- 폰트: Space Grotesk(display) / Inter(sans) / mono(eyebrow)
- accent blue `#2438ff` (다크 `#6b78ff`)
- `paper` 크림 → 순수 화이트 `#ffffff` 변경

## 구조 (단일 페이지)
1. **Nav** — `Yun.` 로고 + 앵커 (Work / About / Contact)
2. **Hero** — 윤성호 / Backend Engineer / 한 줄 소개 / 이메일 CTA
3. **About** — 백엔드 개발자 소개 + 학력(한양대 ERICA 전자공학) + 부스트캠프 7기
4. **Experience** — 한국축산데이터 2023.04–2024.10 (1년 7개월), 웹 백엔드 개발자, 성과 불릿
5. **Projects** — 4개: 팜스플랜 양돈 매니저 / 양계 매니저 / 사내 어드민 / 비육돈 출하정산. 설명 + 기술 태그
6. **Tech Stack** — Language / Backend / DB·Infra 그룹
7. **Contact** — 이메일

## 데이터
`app/page.tsx` 내 상수 배열 (projects, experience, techStack). 단일 파일 유지.

## 범위 제외
전화번호, GitHub/LinkedIn, 별도 타임라인 섹션(Experience·About에 흡수).

## 검증
`pnpm build` + `pnpm lint` 통과.