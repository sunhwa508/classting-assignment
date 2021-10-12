# classting Assignment - [클라팅]

## 📽 미리보기

# 🗓 개발 기간

2021/10/7 ~ 2021/10/13

# 📚 구현 사항

`컴포넌트` - DashBoard, AnswerBoard, QuestionBoard, ResultBoard, AppLauout, Header, Home, Timer, WrongAnswer(오답노트)

`shared` - types, rule 공통 함수, 타입

`config` - globalEnv

# 🔨 기술스택 및 사용 라이브러리

> React, Typescript, antd, cypress, jest, chartjs

1. `"react": "^17.0.2"` <br/>
   리액트 cli 초기파일 구성
2. `"react-chartjs-2"` <br/>
   차트 라이브러리
3. `"antd": "^4.16.13"` <br/>
   디자인 컴포넌트
4. `"cypress": "^8.5.0"` <br/>
   e2e 테스트

# 📱 설치 및 시작하는 법

이 프로젝트는 Create React App으로 생성되었습니다.

> This project was bootstrapped with Create React App.

#### `yarn`

프로젝트에 필요한 npm packages, node_modules 다운로드

#### `yarn start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000 입니다.

#### `yarn build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.

## 💄 코드 스타일 가이드

1. `prettier` 플러그인을 사용하여 스타일을 관리합니다.

## 테스트 코드 가이드

1. e2e 테스트

- cypress를 사용하여 테스트 코드를 작성합니다.

2. 컴포넌트 테스트(유닛)

- jest, jsdom을 사용한 테스트 코드를 작성합니다.
  ![image](https://user-images.githubusercontent.com/61695175/136807272-4360ec9f-6945-4374-9cf2-8f450ff293ca.png)
  (진행중..)

## 🌐 배포

> Netlify 무료배포 사이트를 이용해 배포하였습니다.

### [배포링크](https://mystifying-goldberg-3eb356.netlify.app)

## Reference
