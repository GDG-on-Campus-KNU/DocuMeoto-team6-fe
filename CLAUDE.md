# DocuMentor Frontend - CLAUDE.md

## 프로젝트 개요
기술 문서 기반 면접/실무형 질문 생성 및 반복 학습 루틴 서비스
스택: React, TypeScript, Vite, React Router, React Query, Axios

## 브랜치 전략
- main: 배포용, 직접 push 금지
- dev: 통합 브랜치, PR을 통해서만 머지
- feature/*: 기능 단위 작업

## 폴더 구조 규칙
- API 호출 함수는 반드시 src/api/ 안에서만 작성
- 페이지 컴포넌트는 src/pages/{PageName}/index.tsx 형태로 작성
- 공통 컴포넌트는 src/components/ 에 작성
- 타입 정의는 src/types/ 에 작성

## 코드 컨벤션
- 컴포넌트: PascalCase (예: QuestionCard.tsx)
- 훅: camelCase, use 접두사 (예: useQuestionList.ts)
- 상수: UPPER_SNAKE_CASE
- 타입/인터페이스: PascalCase, I 접두사 없이 사용

## 컴포넌트 작성 규칙
- 함수형 컴포넌트만 사용
- props 타입은 컴포넌트 파일 상단에 type Props = {} 로 정의
- default export 사용

## API 연동 규칙
- axios 인스턴스는 src/api/instance.ts 에서 관리
- 서버 상태는 React Query로 관리
- 에러 처리는 React Query의 onError 또는 ErrorBoundary 사용

## 환경변수
- .env 파일은 git에 올리지 않음
- 환경변수는 반드시 VITE_ 접두사 사용
- .env.example 파일로 키 목록만 관리
