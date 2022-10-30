# My Own Calendar

# 기술 스택

- React
- TypeScript
- Styled-Components
- Redux
- Webpack V5
- Babel
- Axios
- ESLint
- Prettier

# 디렉토리 구조

- config : Webpack 및 Babel 설정
- dist : 빌드 결과물
- public : index.html 위치
- src : 소스코드
  - api : 공휴일 정보 Fetching
  - components : 컴포넌트
    - Calendar : 캘린더 전체
    - Date : 각 일자
    - Header : 헤더
    - Modal : 스케쥴 추가 및 제거용 Modal
    - Schedule : 각 일자 내 스케쥴
  - constants : 상수
    - api : 비동기 Fetching 관련 상수
    - date : 일자 관련 상수
    - dayOfWeek : 요일
  - layout : 전체 레이아웃
    - Layout : flexbox 및 높이 설정을 위한 레이아웃
  - modules : Redux 모듈
    - calendar : 캘린더와 관련된 Redux 모듈
      - actions : 캘린더와 관련된 Actions
      - reducer : 캘린더와 관련된 Reducer
      - types : 캘린더와 관련된 Redux 모듈의 타입
    - schedule : 스케쥴과 관련된 Redux 모듈
      - actions : 스케쥴과 관련된 Actions
      - reducer : 스케쥴과 관련된 Reducer
      - types : 스케쥴과 관련된 Redux 모듈의 타입
  - styles : 글로벌 스타일 (스타일 리셋)
  - typings : 프로젝트에서 사용되는 타입
  - utils : 기타 유틸 함수
    - getDaysOfMonth : 이전 월, 현재 월, 다음 월의 일자를 계산하기 위한 함수
    - portal : Modal 렌더링을 위한 React Portal
  - setupProxy : 프록시 서버 설정

# 구현 사항

## 전체

![전체](https://user-images.githubusercontent.com/63948484/190928470-f45a9b96-20a8-4ccd-b712-e835eba141fc.JPG)

## 월별 이동

![월별 이동](https://user-images.githubusercontent.com/63948484/190928467-53103e84-1ec5-4237-bbe1-593478f4d619.gif)

## 일정 추가

![일정추가](https://user-images.githubusercontent.com/63948484/190928469-afaccb50-2478-4dd9-8121-e709f6fc736b.gif)

## 일정 삭제

![일정삭제](https://user-images.githubusercontent.com/63948484/190928471-64f986b0-848d-4aef-b5be-56f8270d21fd.gif)
