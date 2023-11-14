//! JS 즉시 호출(, 즉시 실행) 함수
//: IIFE (Immediately invoked function expression)
  //? IIFE 정의
  //: 정의되자마자 흑시 호출(실행)되는 함수
  //: 주로 변수의 스코프(범위)를 제한하여 전역 스코프의 오염을 방지하는 데 사용

  //? IIFE의 대표적 형태
  //: 익명함수를 생성하고 즉시 호출하는 형태
  // (function() {

  // })();

  //? 1. 이름 충돌 문제
  //: 다른 스크립트나 라이브러리와 변수명이 출돌하는 문제를 해결

let PI = 3.14;
console.log(`파이의 값은 ${PI}입니다.`);

// > JS에선 스코프 충돌을 방지하기 위해서 중괄호를 사용 | 함수를 생성하여 블록을 생성

// 함수 블록을 사용한 스코프 생성
function sample() {
  let PI = 3.1415942;
  console.log(`파이의 값은 ${PI}입니다.`);
}
sample();

// 즉시 호출 함수를 사용한 이름 충돌 문제 해결
{
  let commonVar = '전역 변수';
  console.log(commonVar);
  // 스코프의 충돌 방지 위해 함수를 사용하였지만, 일반적인 스코프 내의 작성 코드와 동일하게 동작하기 위해 사용 
  (function() {
    let commonVar = 'IIFE 내부 변수';
    console.log(commonVar);
  })();
  console.log(commonVar); // 전역변수 값이 유지

}