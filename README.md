# classting Assignment - [클라스팅]

## 📽 미리보기

![화면 기록 2021-10-12 오후 10 31 31](https://user-images.githubusercontent.com/61695175/136965898-e4a74837-8088-4765-ae6d-f90491a54e9a.gif)

# 🗓 개발 기간

2021/10/7 ~ 2021/10/12

# 📚 구현 사항

`컴포넌트` - DashBoard, AnswerBoard, QuestionBoard, ResultBoard, AppLauout, Header, Home, Timer, WrongAnswer(오답노트)

`shared` - types, rule 공통 함수, 타입

`config` - globalEnv

# 🔨 기술스택 및 주요 라이브러리

> React, react-router-dom, Typescript

1. `"react-chartjs-2"` <br/>
   차트 라이브러리
2. `"antd": "^4.16.13"` <br/>
   디자인 컴포넌트
3. `"cypress": "^8.5.0"` <br/>
   e2e 테스트

# 📱 설치 및 시작하는 법

이 프로젝트는 Create React App 으로 생성되었습니다.

> This project was bootstrapped with Create React App.

패키지 매니저는 `yarn` 을 사용합니다.

#### `yarn`

프로젝트에 필요한 npm packages, node_modules 다운로드 합니다.

#### `yarn start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000(디폴트) 입니다.

#### `yarn build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.

#### `yarn test`

jest test 명령어로 _/_.spec.js 파일을 읽어 테스트를 진행합니다.

#### `yarn coverage`

jest test coverage 를 확인합니다.

#### `yarn test:cypress`

cypress e2e 테스트 브라우저를 활성화 합니다.
App.e2e.js 파일코드를 읽어 e2e 테스트를 진행합니다.

## 테스트 코드 가이드

1. e2e 테스트

- cypress를 사용하여 e2e 테스트 코드를 작성합니다.

2. 컴포넌트 테스트(유닛)

- jest, jsdom을 사용하여 컴포넌트 유닛(UI) 테스트 코드를 작성합니다.
  ![image](https://user-images.githubusercontent.com/61695175/136965424-d1c13d3d-9e49-45f8-9f6c-c3f09fbcf2b1.png)

## 🌐 배포

## [Netlify 사이트를 이용해 배포하였습니다.](https://mystifying-goldberg-3eb356.netlify.app)

## Reference

https://ko.reactjs.org/docs/testing.html

https://ant.design/
