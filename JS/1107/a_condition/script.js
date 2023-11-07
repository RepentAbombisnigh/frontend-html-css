
// js 구성요소
// 조건문, 반복문, 함수, 이벤트 등

//! js 조건문
  // : 프로그램에게 특정 조건을 검사하고 그 결과에 따라 다른 행도을 하도록 명령하는 방식

  // js 조건문 종류
    //: if, else, else if, switch
      //! 1. if: 가장 기본적 조건문
        //: 특정 조건이 참일 때만 코드 블럭 실행
      /* 기본 문법
        if (조건, 주로 ==, != 같은 비교 연산자) {
          조건이 참일 때 실행되는 코드
        }
        비교 연산자일 경우 리턴값은 boolean타입
        */
number = -10;
if (number > 0) {
  console.log("The number is positive");
}
      //! 2. else 
        //: if 조건을 만족하지 않는 모든 경우에 대해 else문의 코드 블럭이 실행
      /* 기본 문법
        else {
          조건이 거짓일 떄 실행되는 코드
        }
      */
else {
  console.log("The number is negative");
}
        //! if-else 코드 축약
          // 실행될 코드 블럭이 한 줄일 경우 코드 축약 가능
//if (number > 0) console.log("The number is positive");
//else console.log("The number is negative");

//if else 예시
let shoppingDone = false;
let childAllowance;
//쇼핑을 완료한 경우 용돈 10추가, 미완료시 용돈 5추가
if (shoppingDone === true) console.log(childAllowance = 10);
else console.log(childAllowance = 5);

      //! 3. else if
        // if와 else 사이에 여러 개의 조건을 추가
        // if와 else 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

        /* else if 기본 문법 
          if (조건1) {
            조건1 참일 때 실행코드
          } else if (조건 2) {
            조건1 거짓, 조건2 참일 떄 실행코드
          } else if (조건 3) {
            조건1 거짓, 조건3 참일 떄 실행코드
          } else {모든 조건이 거짓일 때 실행 코드};
        */
let num = 0;
if (num > 0) {
  console.log("the number is positive");
} else if (num < 0) {
  console.log("the number is negative");
} else {
  console.log("the number is zero");
}

let childAge = 5;
if (childAge < 8) {
  console.log("미취학 아동입니다.");
} else if (childAge >= 13 && childAge < 20) {
  console.log("청소년 입니다.");
} else{
  console.log("성인 입니다.");
}

// 조건식에 true false 값과의 비교(===, !==)
// boolean 타입에서 false 값으로 인식되는 값
  //= false, 0, '', null, undefined
// 위의 값들을 제외고는 모두 true로 반환하기 떄문에 변수가 참인지 또는 값이 존재하는지를 테스트하기 위해서 변수 이름 그 자체를 사용할 수 있음.
let cheese = '';
if (cheese) { //cheese === true를 사용 안 해도 O
  console.log("Cheese is availalbe to order");
} else {
  console.log("Cheese is not available to order");
}

      //! 4. switch
        // 여러 가지 경우 중 하나를 선택하는데 사용
        // 표현식의 값을 확인 후, 해당 값과 일치하는 case 코드 블록 실행
        // switch문은 여가 가지 가능한 케이스 중 하나를 선태갛여 해당하는 코드 블록을 실행하는 제어 구조
          /* swich 기본 문법
            switch (식) {
              case 값1:
                식이 값1과 일치할 때 실행코드
                break;
              case 값2:
                식이 값2과 일치할 때 실행코드
                break;
              case 값3:
                식이 값3과 일치할 때 실행코드
                break;
              ...
              default:
                식이 어떤 값과도 일치하지 않을 떄 실행되는 코드
            }
          */
            // break 문(필수X 하지만 값과 무관한 아래의 코드도 실행 됌.)
              //: 이전의 선택이 표현식이나 값과 일치한다면 브라우저는 해당 코드 블록에서 실행을 멈추고 switch 문 아래에 있는 코드로 이동
            // default (필수X)
              //: 어떠한 case와도 일치하지 않는다면 실행하는 코드 블록
let fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log("Apple is ready to serve");
    break;
  case 'banana':
    console.log("Banana is ready to serve");
    break;
  case 'cherry':
    console.log("Cherry is ready to serve");
    break;
  default:
    console.log("We have got nothing to serve today.")
}

//^ 날씨 예보 예제 작성하기

const select = document.querySelector('select');
const para = document.querySelector('p');
select.onchange = setWeather;
// function setWeather() {
//   const choice = select.value;
//   if (choice === 'sunny') {
//     para.textContent = "It's a sunny day";
//   } else if (choice === 'rainy') {
//     para.textContent = "It's a rainy day";
//   } else if (choice === 'stormy') {
//     para.textContent = "It's a stormy day";
//   } else if (choice === 'shadowy') {
//     para.textContent = "It's a shadowy day";
//   } else {
//     para.textContent = 'please select weather';
//   }
// }
function setWeather() {
  const choice = select.value;
  switch (choice) {
    case 'sunny':
      para.textContent = "It's a sunny day";
      break;
    case 'rainy':
      para.textContent = "It's a rainy day";
      break;
    case 'stormy':
      para.textContent = "It's a stormy day";
      break;
    case 'shadowy':
      para.textContent = "It's a shadowy day";
    break;
    default:
      para.textContent = 'Please select the weather';
  }
}

      //! 5. 삼항(조건) 연산자
        // 조건에 따라 값을 반환하는 js에서 세 개의 피 연산자를 가지는 유일한 연산자
        //: if-else 문을 더 간결하게 표현
          /* 삼항 연산자의 기본 문법
            조건 ? 표현식 1: 표현식 2
            주어진 조건을 평가한 후 true면 표현식 1 false면 표현식 2 
            = if (조건) {
              표현식1
            } else {
              표현식2
            }
          */
number2 = 5;
let message = number2 > 10 
  ? 'the number is greater than 10' 
  : 'the number is not greater than 10';
console.log(message);

let score = 85;
let result = score >= 50 ? 'Passed' : 'Failed'
console.log(result);

//! 중첩된 if-else 과 삼항 연산자 비교
/* 
? 중첩된 if-else문
if (조건1) {
  조건1 참일 떄 실행
  if (조건2) {
    조건1과 조건2가 모두 참일 때 실행
  }
  else {
    조건1은 참이지만 조건2는 거짓일 떄 실행
  }
} else {
  조건1 거짓일 떄 실행
}
*/

let score2 = '60';
if (score2 >= 50) {
  console.log("Passed the test");
  if (score2 >= 90) {
    console.log("A");
  } if (score2 >= 80) {
    console.log("B");
  } if (score2 >= 70) {
    console.log("C");
  } if (score2 >= 60) {
    console.log("D");
  } 
  else {
    console.log("Failed");
  }
}

// 위 중첩 if문을 삼항 연산자로 변환

score = 1;
let grade = 
  score > 100 || score < 0 ? 'Not existed' :
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'Failed' ;
console.log(grade);

// 출력값 확인
true ? alert('출력A') : alert('출력B'); // A
true ? alert('출력B') : alert('출력A'); // B
true || alert('출력A') // A
true && alert('출력A') // 출력X boolean값 판정이 안 되기 떄문에.

//and 연산자
false && false == false;
false && true == false;
true && false == false;
true && true == true;
  // and 연산자는 조건식이 둘 이상일 경우 하나만 false여도 최종 결괏값이 false >> 첫 번쨰 조건식이 fasle면 이 후 조건식은 확인하지 않고 false.
  // and 연산자 사용 시 false가 될 확률이 높은 조건을 첫 번쨰 조건식으로 사용하는 것을 권장

//or 연산자
false || false == false;
false || true == true;
true || false == true;
true || true == true;
  // or 연산자는 조건식이 둘 이상일 경우 하나만 true여도 최종 결괏값이 true >> 사용 시 true가 될 확률이 높은 조건을 첫 번째 조건식으로 사용할 것을 권장



