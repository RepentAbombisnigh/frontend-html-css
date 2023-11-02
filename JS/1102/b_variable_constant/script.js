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

      - 전역 유효범위(global scope)
        : 코드의 모든 부문에서 접근할 수 있는 변수, 함수
        : 많이 작성 하지 않는 것이 좋음

      - 지역 유효범위(local scope)
        - 함수 유효범위(function scope)
          : var 키워드로 선언된 변수
            ! 변수를 중복해서 선언할 수 있다는 위험, 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 떄문에 최근엔 사용 X
        - 블록 유효범위(block scope)
          : 블록 ({}, 중괄호) 내에서만 접근할 수 있는 변수
          : let, const 키워드로 선언된 변수

    ? 호이스팅(hoisting): 변수와 함수 선언은 코드 실행 전에 메모리에 저장
      : 변수의 경우, 선언부만 제일 상단부로 호이스팅됌. 

      ? var는 선언부가 호이스팅 됌
      ? let, const는 호이스팅 되지만 TDZ(temporal dead zone) 때문에 접근 불가 

*/

//! 변수의 호이스팅

// var의 호이스팅 (f12로 콘솔창 확인)

console.log(a); //f12 콘솔창에서 undefiend로 나옴. 이전에 var = a; 가 생략되었다고 추론하기 때문.

var a = 5;
console.log(a); //f12 콘솔창에서 5로 나옴. var = a;가 지정되어있기 때문.

// let과 const의 호이스팅

// console.log(b); 
//Uncaught ReferenceError: Cannot access 'b' before initialization 라는 오류 발생, 이전에 b의 초기화가 이루어지지 않았기 때문.
let b = 15;
console.log(b); // b의 초기화가 이루어졌기에 해당 값은 정상 출력
{
  let b = 10;
  console.log(b);
} // 중괄호 내에서만 b 값이 10으로 인정되므로 아래의 콘솔엔 5로 값이 나온다.

console.log(b);

//! var 키워드의 경우: 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 떄문에 최근엔 사용 X
