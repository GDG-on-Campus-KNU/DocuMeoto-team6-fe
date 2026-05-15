## API 폴더 규칙
- axios 인스턴스는 instance.ts 에서만 관리
- API 호출 함수는 이 폴더 안에서만 작성
- 컴포넌트 내부 직접 API 호출 금지
- 함수명은 동사로 시작 (예: getQuestions, uploadDocument)
- 반환 타입 반드시 명시

## React Query 규칙
- query key는 src/constants/queryKeys.ts 에서 상수로 관리
- 서버 상태는 React Query로만 관리
- 에러 처리는 onError 또는 ErrorBoundary 사용
