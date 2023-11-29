/*
! Node.js 설치
: JS의 '런타임'
: JS의 프로그램들을 실행할 수 있는 환경

: Ts는 JS의 슈퍼셋이므로 Node.js 환경에서 동작

? Node.js 설치 전 삭제
- 윈도우즈
: 프로그램 추가/제거 > Node.js 삭제
: 아래 경로에 해당하는 디렉터리 삭제
 윈도우 키 > 파일 탐색기
c:\program files\Nodejs
c:\program files(x86)\Nodejs
c:\users\user\appdata\roaming\npm
: window key + r > cmd
  node -v
  npm -v
  : 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.
    = 삭제 완료

Node.js 설치
node -v
20.10.0
npm -v
npm install -g npm@10.2.3

! 2. npm이란?
: NPM(node package manager)는 Node.js의 기본 패키지 관리 도구
: NPM을 이용하면 자바스크립트 라이브러리를 쉽게 설치하고 관리
: 프로젝트의 의존성을 관리, 작은 스크립트 실행 등의 기능을 제공

? npm 기본 명령어

1. npm init
  : 새로운 Node.js 프로젝트를 시작하고 기본값으로 package.json 파일 생성
  : -y 옵션
    질문 없이 기본값으로 package.json파일 생성

2. npm install
  : package.json 파일에 명시된 모든 의존성을 설치
  : 특정 패키지 설치 시
    npm instlal 패키지이름
  : -D | --save-dev 옵션 추가
    개발 의존성으로 패키지를 설치

3. npm uninstall
  : 패키지 제거
  : 특정 패키지 제거
    npm uninstall 패키지이름

! 3. 타입스크립트 설치(npm 사용, -g옵션)
: git bash 사용
 : echo #PATH
 : npm install -g typescript

 tsc -v

! 4. tsc란?
: tsc (typescript compiler)
: 타입스크립트(.ts) 파일을 자바스크립트(.js) 파일로 변환하는 도구
: 브라우저와 Node.js가 타입스크립트를 직접 실행할 수 없기 떄문에 tsc로 코드 변환 필수

? tsc 컴파일 명령어
   tsc 파일이름.ts
   : 위 명령어를 실행하면 같은 이름의 .js 파일이 생성
   : 해당 .js 파일은 원래 타입스크립트 코드에서 타입 정보가 제거된 상태
  
? tsc의 옵션
: 일반적으로 tsconfig.json 파일에 정의
: tsc가 해당 파일을 참조하여 컴파일을 수행

target: 컴파일된 js 버전 지정
module: 사용할 모듈 시스템 지정
strict: 모든 엄격한 타입-체크 옵션 활성화
outDir: 컴파일된 파일이 위치할 디렉토리를 지정

! 5. 타입스크립트 패키지 설치
: npm 사용해서 설치

? 프로젝트 디렉토리 생성
  : 프로젝트의 모든 파일과 폴더를 포함
  
  1) 원하는 위치에서 터미널 오픈
  mkdir 프로젝트 이름
  : 프로젝트 디렉토리 생성

  cd 프로젝트 이름
  : 생성한 디렉토리 이동

  cd 명령어: 사용자가 현재 위치하는 디렉토리를 변경할 때 사용
  - 특정 디렉토리 이동
    cd 디렉토리_경로
  - 홈 디렉토리
    cd | cd ~
  - 상위 디렉토리
    cd ..
  - 이전 디렉토리 
    cd -

? npm 초기화
: 새로운 Node.js 프로젝트 시작, 기본값으로 package.json 파일 생성
  npm init -y
: package.json
  Node.js 프로젝트의 메타데이터를 담고 있는 파일
  - 프로젝트의 이름, 버전, 설명, 저자, 라이센스 등의 정보 저장
  - 프로젝트에서 사용하는 패키지의 목록과 버전 정보 관리
  - 프로젝트의 시작점을 지정 | 스크립트를 정의 등의 기능 수행


? npm 이용한 타입스크립트 패키지 설치
: 로컬 설치(프로젝트 내)
npm install typescript --save-dev
  프로젝트 디렉토리 내에서 타입스크립트를 설치
    - 해당 명령은 타입 스크립트 프로젝트의 개발 의존성으로 추가
      devDependecies
    - 배포 시에는 포함 X

: 전역 설치
  npm install -g typescript
  - 시스템 전체에서 타입스크립트를 사용
  - 컴퓨터 어느 위치에서든 타입스크립트 컴파일러 사용 가능

devDependencies: 개발 과정에서만 필요한 패키지들의 목록
dependencies: 프로젝트 실행에 필요한 패키지들의 목록

? tsconfig.json 생성
: 타입스크립트 프로젝트의 설정을 저장하는 파일
: 타입스크립트 컴파일러가 프로젝트를 컴파일하는 방법을 지정
: 예) 출력 디렉토리 위치, 사용할 모듈 시스템, 지원하는 ECMAScript 버전 등 관리
  npx tsc --init
  : 해당 컴파일러 옵션은 주석을 해제하여 사용 가능

  tsconfig.json 옵션 정리
  - compilerOptions: 컴파일러 옵션 설정 객체
  - taget: 컴파일된 코드가 실행될 ECMAScript 버전 지정
  - module: 사용할 모듈 시스템 지정
  - outDir: 컴파일된 자바스크립트 파일이 위치할 디렉토리 지정
  - strict: 모든 엄격한 타입-체킹 옵션을 지정
  - scripts: 프로젝트에서 사용할 스크립트 정의
*/ 

//? tsconfig.json
//:  타입스크립트 컴파일러의 설정 저장
/*


*/ 