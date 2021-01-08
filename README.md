## :penguin: 핑크펭귄(Pink-Penguin)
자세 추정 모델을 활용한 유아 대상의 동작 인식 교육서비스.

## 📚 프로젝트 설명
COVID19로 인하여 실내에 머무는 시간이 증가함에 따라 감소하는 신체 활동을 보완하기 위해 기획되었으며,<br>
어린이들을 위한 서비스로 초점을 두어 음악과 함께 캐릭터들의 간단한 동작들을 따라하며 진행하는 방식.

<br><br>

## 📝 사용언어, 기술스택

- Model : [Tensorflow.js(2.0)](https://github.com/tensorflow/tfjs), [ML5(0.6.0)](https://github.com/ml5js)
- Platform : Web
- Language : Javascript
- Framework : Vue.js(2.6.11), Express.js(4.17.1)
- Database : MariaDB(3.6.3)
- Environment: Docker(4.3.1), Docker-compose(1.27.4), AWS EC2(CentOS8)

<br><br>
## :hammer: 주요 개발 내용
- 오픈소스를 활용한 포즈 인식(Posenet)
- 딥러닝 모델을 통한 자세 추정(tensorflow.js, ML5)
- 3D애니메이션 로딩(three.js, VRM)
- 다국어 지원(i18n/ko,en,jp)
- ORM(npm sequelize)
<br>


## 💻 최종 실행 화면
![캐릭터선택](https://user-images.githubusercontent.com/46026674/103983533-bd874500-51c8-11eb-8dbb-082980b84112.gif)
![게임하기](https://user-images.githubusercontent.com/46026674/103983555-ca0b9d80-51c8-11eb-96e1-b91a66e65315.gif)
![display](https://user-images.githubusercontent.com/46026674/103982615-27065400-51c7-11eb-9645-c93b3c2a39ac.png)
<br>

## :rocket: 설치 및 실행
1. 기본 환경에서의 실행
git clone 

cd vuefront
npm install 
npm run serve

cd backend
npm install
npm start

http://localhost/8081

2. Docker 환경에서의 실행
docker-compose build
docker-compose build-d

## :running: 팀원 소개
####  :smiley: 원준수(팀장) : 딥러닝 모델 구현, Docker 설정, 3D 애니메이션 구현
####  :wink: 유재혁(Frontend) : 프론트 구현, UI/UX디자인, 데이터 수집
####  :smile: 김수양(Frontend) : 시장분석, UI/UX설계, 문서 작업
####  :satisfied:김동주(Backend) : 로그인/회원가입 기능 구현, AWS 설정, 데이터 가공 
####  :flushed: 유정호(Backend) : 커뮤니티 기능 구현, DB모델링, 다국어 지원
<br>

