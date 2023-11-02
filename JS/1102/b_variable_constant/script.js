/*
  ! 변수(variable)
    : 변하는 수(값이 달라질 수 있는 데이터)
    : ex. 나이, 연도, 시간, 날짜 etc
    
    : 데이터를 저장하기 위한 '공간'

  ! 변수 선언
    : 변수를 사용하기 위해 변수를 다른 변수들과 구별하기 위해 이름을 붙여 주는 것
    : 값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것

  ! 변수명 명명규칙
    - 첫 글자: 영문자, _(언더스코어), 달러만 사용 가능
    - 띄어쓰기 허용 X
    - 기호 '_', '$' 만 사용 가능
    - 영어 대소문자 구별 (= now와 nOW는 다른 변수)
    - 예약어 사용 X
    ? lowerCamelCase 사용 (시작은 소문자이나 이어지는 단어의 시작은 대문자)
      ex. now, _now, now25, now$25, $now25
          (X) 25now, now 25, *now
    ? 이름의 의미있게 작성
      ex. currentYear, birthPlace, password
          age = currentYear - birthYear;

  ! 자바스크립트의 변수 선언
    : 2가지 키워드: let, var

      ^ 선언과 초기화
      변수 선언: 변수종류 변수명;
      변수 값 할당: 변수명 = 값;
      변수 선언과 동시에 할당 (초기화): 변수종류 변수명 = 값; 

    ? let: 블록 범위 변수(block scope)
      : 재할당 가능
      : 호이스팅 가능 (선언 전에 접근 불가)
    ? var: 함수 범위 변수(function scope)
      : 재할당 가능
      : 호이스팅 가능 (선언 부분이 상단으로 끌어올려짐)

*/

let letVariable; // 변수 선언
var varVariable; // 변수 선언

letVariable = 10; // 값 할당
varVariable = 'Hello World'; // 값 할당

let letVariable2 = 20; //상단 2줄로 선언 할당을 한 줄로 축약(초기화)
var varVariable2 = '안녕 변수' //상단 2줄로 선언 할당을 한 줄로 축약(초기화)

//* practice
//: 나이계산 프로그램 만들기

    // 올해 연도, 태어난 연도, 나이에 대한 변수 선언

    // let currentYear = 2023;
    // let birthYear = prompt('출생 연도를 입력하세요.');
    // document.write(currentYear - birthYear);

/* 
강사 버전
let currentYear = 2023;
let birthYear;
let age;
birthYear = promt('태어난 연도를 입력해주세요');
age = currentYear - birthYear;
document.write('올해는' + currentYear + '입니다 <br />);
document.write(brithYear + '년에 태어난 사람의 나이는 ' + age + '세입니다.');
*/

/*
  ! 상수(constant)
    : 한 번 할당된 값을 변경할 수 x (재할당 X)
    : 상수의 선언과 동시에 할당이 반드시 이루어져야 함
      = 초기화
    : ex. PI, 과학적 공식 숫자값 etc

  ! 상수 명명규칙
    UPPER_SNAKE_CASE 사용
      ex. const MY_CONSTANT_MESSAGE = 'hello there';
          const PI = 3.14159;
  

  ! 유효범위 & 호이스팅
    ? 유효 범위: 변수 | 상수 | 함수가 선언되어 있는 영역
      : 해당 영역에서 변수 및 함수에 접근할 수 있는 범위

      - 전역 유효범위
      - 함수 유효범위
      - 블록 유효범위

*/

