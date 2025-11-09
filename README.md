# ToDo List (React + Vite + TypeScript)

간단한 메모/할일 관리 웹앱입니다. Vite로 React + TypeScript 프로젝트를 구성했고,
추가/완료 토글/삭제 기능을 제공합니다. GitHub Pages로 배포하도록 CI 설정이 포함되어 있습니다.

## 채점 기준 대응표

- 상단 제목 **ToDo List** (10점) → `src/App.tsx`의 `<h1 className="title">ToDo List</h1>`
- 입력 form 및 추가 버튼 (10점) → `src/components/TodoInsert.tsx` (Enter/버튼)
- list 및 list item (10점) → `src/components/TodoList.tsx`, `src/components/TodoItem.tsx`
- 할 일 추가 (20점) → `App.handleAdd()` + `TodoInsert`의 `onSubmit`
- 완료 체크시 취소선 (15점) → `TodoItem`의 체크박스 + `.text.done` 스타일
- 삭제(X) 버튼 (15점) → `TodoItem`의 `✕` 버튼 + `App.handleRemove()`
- GitHub Pages 배포 (20점) → `.github/workflows/deploy.yml` + `vite.config.ts`의 `base` 설정

## 프로젝트 구조 (4개 컴포넌트 설계)

```
src/
  components/
    TodoTemplate.tsx  // 레이아웃
    TodoInsert.tsx    // 입력 폼
    TodoList.tsx      // 리스트
    TodoItem.tsx      // 아이템
  App.tsx             // 상태관리: todos, add/toggle/remove
  main.tsx
  styles.css
```

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

1) GitHub에 **새 public 저장소**를 만들고, 이 프로젝트 파일을 푸시합니다.  
2) 저장소 → **Settings → Pages** 에서 Source를 **GitHub Actions**로 설정합니다.  
3) 기본 브랜치(main)로 푸시할 때 `deploy.yml`이 자동으로 빌드/배포합니다.  
4) 배포 주소: `https://{username}.github.io/{reponame}/`

> `vite.config.ts`는 GitHub Actions 환경에서 자동으로 `base: '/{reponame}/'`로 설정되도록 구성되어 있습니다.
로컬에서 수동으로 테스트하려면 `base`를 직접 지정해도 됩니다.

## 접근성 & 사용성
- 체크박스/버튼에 `aria-label`을 추가했습니다.
- Enter키로도 항목을 추가할 수 있습니다.
