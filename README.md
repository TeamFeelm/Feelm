# React v18 + [Vite](https://github.com/vitejs/vite)⚡
## ⛏ 클론 후 초기 셋팅
> 🧨🎃 클론 후 꼭 하위폴더로 이동하세요!!  

0. yarn 미설치시 yarn부터 설치합니다
```javascript
$ npm i -g yarn
```
  
1. 터미널에 $ yarn 을 치면  
: package.json에 의존성으로 등록한 라이브러리들이 자동으로 설치됩니다
```javascript
$ yarn  
  
(설치가 끝나면)
$ yarn husky-init
```  
  
2. 로컬페이지 보기 및 빌드
```javascript
$ yarn dev
$ yarn build
```
## 🛠 기술 스택 (일단 확정된 것!!?)

```json
"axios": "^0.27.2",
"react-redux": "^8.0.2",
"@reduxjs/toolkit": "^1.8.1",
"styled-components": "^5.3.5",
...
```

<br />

## ✉ 커밋 컨벤션

| 제목      | 내용                             |
| -------- | ------------------------------- |
| init     | 작업 세팅 커밋 (패키지 설치 등)       |
| feat     | 기능 추가 및 변경 (화면 영향 o)       |
| design   | only css 변경                    |
| fix      | 기존의 버그 수정                    |
| refactor | 더 좋은 코드 개선 (화면 영향 x)       |
| etc      | 문서 작성 or 그 외 커밋(주석, 개행 등) |

<br />

## 🚀🚀 팀원

- [🤴 우재윤](https://github.com/jae5419)
- [🧑 김준용](https://github.com/djdj4275)
- [👱‍♂️ 구자경](https://github.com/koqun)
- [👶 박광훈](https://github.com/10004ok)




# 깃허브 협업 (Fork & upstream)
1. 협업할 저장소의 프로젝트를 Fork 합니다.
2. Fork 해온 프로젝트를 내 로컬컴퓨터로 Clone 합니다.

3. 클론을 마친 뒤 VS-Code의 터미널에서 다음을 입력합니다.
```javascript
$ git remote add upstream https://github.com/Team-SPSP/SPSP.git
: 협업할 (원본)저장소에도 원격 접속을 이어놓는 것
```
3-1. 제대로 이어졌는지 확인해 줍니다.
```javascript
$ git remote -v
```
origin, upstream 둘다 뜨면 성공

4. 브랜치 설정
푸쉬를 할 때 brach 이름을 꼭 명시해 줍니다. 
```javascript
$ git push origin 광훈 
```
 
이렇게 하면 내 원격 레포지토리(origin)에 내용이 저장됩니다.
? 근데 우린 원본 저장소(upstream)에 이를 반영해야 하는디요

5. 위의 푸쉬를 성공했다면 본인 계정의 저장소에 pull request 버튼이 활성화 됩니다
버튼을 클릭하며 작업 내용에 추가할 메세지를 작성 후, request를 진행하면
upstream에서 이를 확인/검토 후 Merge 여부를 결정합니다.

6. 우리는 이렇게 최종적으로 승인된 결과를 바탕으로 작업을 이어나가야 합니다.. 귀찮;
자동 페치가 있었던 거 같은데 일단 동기화의 방법은
```javascript
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
```
```javascript
$ git push
```
귀찮으면 깃허브에서 버튼 누르면 한번에 다됨