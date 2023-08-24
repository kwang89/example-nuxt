# Directories
## [Assets](https://nuxt.com/docs/guide/directory-structure/assets)
- Stylesheets (CSS, SASS, etc.)
- Fonts
- Images(public/ 디렉토리에서 제공되지 않는 이미지)

## [Components](https://nuxt.com/docs/guide/directory-structure/components)
- 다른 page 또는 components에 적용되는 모든 component
- 파일명으로 컴포넌트명이 정해짐(`BaseFooButton.vue` to `BaseFooButton`)
- 이외 상세 내용은 링크 참조

## [Composables](https://nuxt.com/docs/guide/directory-structure/composables#composables-directory)
- export한 내용을 모든 app에서 접근 가능
  - Auto import(https://nuxt.com/docs/guide/concepts/auto-imports)

## [Layouts](https://nuxt.com/docs/guide/directory-structure/layouts)
- 애플리케이션 전체에서 사용할 수 있는 사용자 정의 가능한 레이아웃

## [Middleware](https://nuxt.com/docs/guide/directory-structure/middleware)
- 페이지 이동 전 실행하려는 코드 작성
- 서버에서 렌더링 및 클라이언트에서 페이지 이동 될 때 실행되며, 해당 조건을 바꾸기 위해서는 [링크](https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs) 참조

## [Pages](https://nuxt.com/docs/guide/directory-structure/pages)
- Vue page 디렉토리
- 디렉토리 경로 및 파일명으로 route

## [Public](https://nuxt.com/docs/guide/directory-structure/public)
- 서버 루트에서 직접 제공되며 이름을 유지해야 하거나(예: robots.txt) 변경되지 않을 가능성이 있는(예: favicon.ico) 공용 파일을 포함

## [Utils](https://nuxt.com/docs/guide/directory-structure/utils)
- util 기능을 모아놓은 파일 위치
- 애플리케이션 전체에서 접근 가능
