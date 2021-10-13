# classting Assignment - [클라스팅]

## 📽 미리보기

![화면 기록 2021-10-12 오후 10 31 31](https://user-images.githubusercontent.com/61695175/136965898-e4a74837-8088-4765-ae6d-f90491a54e9a.gif)

# 🗓 개발 기간

2021/10/7 ~ 2021/10/12

# 📚 구현 사항

`컴포넌트` - DashBoard, AnswerBoard, QuestionBoard, ResultBoard, AppLayout, Header, Home, Timer, WrongAnswer(오답노트)

`shared` - types, rule 공통 함수, contants, storageManager

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

jest test 명령어로 spec.js 파일을 읽어 테스트를 진행합니다.
(테스트 전 jest.config 파일을 통해 rootDir을 알맞게 설정해주세요)
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

## Acknowledgments & 회고

과제를 받고 주어진 시간내에 디자인, 기능, 테스트코드, 완성도까지 챙기기 위해 컴포넌트 UI 템플릿 사용을 고려하였고, tailwind를 사용해 프로젝트를 해본 경험이 있어 이번기회는 antd를 사용해 보기로 결정!

Unit 테스트 코드는 리액트 문서에서 설명되어 있는 Jest를 사용했고, e2e 테스트로 자체 브라우저를 제공해 테스트 과정을 직접 보고 디버깅 하기 용이한 `cypress`를 사용했다.

이번 과제를 통해 `cypress`, `jest` 테스트 초기 설정과 환경설정을 직접 해 보면서 한단계 레벨업 된 기분이 들었다 🥳

마지막으로 antd UI를 사용했기에.. 테스트하기 모호한 부분이 많아 기한내 coverage를 100% 채우진 못해 아쉽지만, 기존과 다르게 e2e, unit 테스트 까지 작성된 완성도 있는 프로젝트를 구현 하여 뿌듯하다.
