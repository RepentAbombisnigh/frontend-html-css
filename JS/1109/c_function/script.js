// JS 함수

//! 1. 함수의 정의
  //: 특정 동작을 수행하는 코드의 묶음(집합)
  //: a-> b-> c 동작을 함수 abc로 구현시, 다른 위치(코드)에서 해당 절차(abc)를 다시 사용 가능
  //: 코드의 재사용성과 가독성 향상 그리고 디버깅 용이

//! 2. 함수의 사용 용도와 예제
  //? 1. 코드 재사용
    //: 같은 코드를 여러 번 작성하는 대신 함수를 정의하고 필요할 때마다 호출하여 사용
// 곱하기 계산식 구현
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(224, 397)); // 88928

  //? 2. 모듈화 및 추상화(수학적)
    //: 복잡한 작업을 수행하는 코드를 함수로 분리
    //: 각 함수가 수행하는 작업에 집중
// 좌표 상 두 점의 거리를 계산하는 JS 함수 구현
function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  // 피타고라스 정의 계산식
  return Math.sqrt(dx * dx + dy * dy);
}

  //? 3. 이벤트 처리
    //: 웹 페이지에서 발생하는 다양한 이벤트(button click, form submit 등을 처리하는데 사용)
//문서를 로드 후 버튼 선택하고 클릭 이벤트 리스너 추가
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('Button was clicked');
});

//! 3. 함수 정의 방법(함수 생성)
  //? 1. 함수 선언식 (function delclaration)
    //: 가장 기본적 함수 정의 방법
    //: function 키워드로 시작, 함수의 이름이 필수적으로 명시
    //: hoisting 가능(함수가 정의되기 전에 호출 가능)
sayHello(); // 호이스팅 가능
// function 함수명() {}
function sayHello() {
  console.log('함수 선언식');
}
sayHello();

  //? 2. 함수 표현식(function expression)
    //: 함수를 변수에 할당하는 방식
    //: 함수의 이름이 필수적이지 않다
    //: 호이스팅 불가능 (정의된 후에만 가능)
    //: 정의된 함수는 변수의 스코프 내에서만 사용 가능
// greet(); // 호이스팅 x 
let greet = function() {
  console.log('함수 표현식');
}
greet();

  //? 3. 화살표 함수(arrow function)
    //: ES6에서 도입된 함수 정의 방식
    //: 기존의 function 키워드를 화살표로 대체하여 간결한 함수 작성 가능
    //: 항상 익명함수로 사용
    //: 'this'가 일반 함수와 다르게 바인딩 됨
const greeting = (arrow) => {
  console.log(`Hello, ${arrow} function`);
}
greeting('Arrow');

//사칙 연산 더하기로 간략한 화살표 함수 사용 
const add = (a, b) => a + b;
console.log(add(1,2));

//! 4. JS 함수 호출
  //: 함수를 정의한 후 함수명과 괄호를 사용하여 함수 호출 가능= 함수명();

//! 5. 함수의 매개변수(parameter)
  //: 함수를 정의하고 호출하는 과정에서 함수에 데이터 전달 방식
  //: 함수 호출 시 괄호 안에 인수(arguments)를 넣어 전달, 해당 인수는 함수 내부로 전달되어 매개변수라는 이름으로 사용
    //? 인수(arguments)
      //: 함수를 호출할 때 전달하는 실제 값 의미
      //: 함수 호출 시 괄호 안에 넣어 함수에 전달
    //? 매개변수(parameter)
      //: 함수의 입력으로 사용되는 변수 의미
      //: 함수를 정의할 때 괄호 안에 선언
    //? 인수 vs 매개변수
      // 함수 정의
      function sum(a, b) { // 소괄호 안의 a, b는 파라미터
        return a + b;
      }
      // 함수 호출
      sum(3, 5); // 3, 5는 인수

      // 함수 선언(정의)
      function hello(name) { // name= 파라미터
        console.log(`Hello, ${name} !`)
      }
      // 함수 호출
      hello('john johnson'); // 'john johnson'은 인수

//! 6. JS 파라미터와 인수 사용
  //: 함수 호출 시 전달되는 인수의 수와 함수 정의 시 선언된 파라미터의 수가 일치하지 않아도 가능
function log(a) { // 한 개의 파라미터
  console.log(a);
}

log(); //인수 안 남김: 출력: undefined
log(1); //인수를 하나 넘김: 출력: 1
log(1, 2); //인수를 두 개 이상 넘기면 출력: 1 (지정된 수의 파라미터 이상 이상의 인수를 읽히지 x) 

//! 7. JS 반환값
  //: 함수 내에서 return 키워드 사용 시 함수의 실행을 즉시 중단하고 return 뒤에 오른 값을 반환
function substract(a, b) {
  return a - b;
}
// substract 함수의 반환값이 result2 변수에 저장
let result2 = substract(3, 5);
console.log(result2);

  //? return 키워가 없는 함수는 undefined 반환
function noReturnValue() {
  console.log('This function does not return anything.');
}
console.log(noReturnValue());
  //? 반환 값은 함수의 작업 결과를 함수 외부로 전달하는 방법
    //: 함수의 반환 값을 이용하여 함수의 결과를 다른 변수에 저장 || 다른 함수의 입력으로 사용 || 조건문 또는 반복문에서 사용 가능

//! 8. JS 반환값 사용
  // 반환 값이 있는 함수
function square(x) {
  return x * x; //파라미터의 제곱 반환
}
console.log(square(5));

//! 함수 사용 시 지역변수와 전역변수 사용
let sa = 'sa'; // 전역 변수
function SA() {
  let job = 'Developer'; // 지역 변수
  console.log(job); //중괄호 안에서 정의되어 있기에 출력 O
  return sa + job;
}
console.log(SA());
// console.log(job()); // job이 전역에 정의되어 있지 않기에 error