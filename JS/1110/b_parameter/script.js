//! 매개변수(parameter)
  //? 1. 가변 매개변수
    //: 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
    //: 함수를 호출할 때 인자의 수가 정해져 있지 않고, 함수 내부에서 유동적으로 처리

  //? 2. 나머지 매개변수(rest parameter)
    //: JS에서는 나머지 매개변수를 사용하여 가변 매개변수를 구현
    //: 매개변수에 ...을 사용하여 정의
    //: 함수에 전달된 여분의 인자들을 배열로 받음.
      //^ 나머지 매개변수의 형태
      //!: 함수 선언시 매개변수 목록의 마지막에 위치
function exampleFunction(...arges) {
  //arges : 배열 array
  console.log(arges); // 빈 배열 출력
}
exampleFunction();

      //^ 나머지 배개변수를 사용한 배열 생성
function creatArray(...elements) {
  return elements; // 배열 반환 후 생성
}
// 매개변수로 전달된 값들이 배열의 형태로 반환
console.log(creatArray(1, 2, 3, 4, 5));

      // Math.min()함수
//: 복수의 인자를 받아 그 중 최솟값을 반환
function findMin(...numbers) {
  // numbers array를 Math.min에 전달하여 최솟값 반환
  return Math.min(...numbers);
}
console.log(findMin(58, 35, 92, 10, 23, 77))

      //^ 나머지 배개변수와 일반 매개변수의 조합
function combinedExample(firstParam, ...restOfParam) {
  //firstParam은 첫 번째 인자를 받고, restOfParam은 나머지 인자들을 배열의 형태롤 받음.

  console.log(`첫 번쨰 매개변수는: ${firstParam}, 타입: ${typeof firstParam}`);
  // 배열의 형태 확인 경우. JS 내장 함수인 Array.isArray() 사용
  //is함수명, is변수명 의문형으로 boolean 확인
  console.log(`나머지 매개변수의 형태는 배열입니까?: ${Array.isArray(restOfParam)}`);
  console.log(restOfParam);
}
combinedExample('hello', 42, true, [1, 2, 3], null, undefined);

  //? 3. 기본 매개변수
    //: 함수에 인자를 전달하지 않았을 떄 사용되는 기본값을 정의
    //: 함수의 매개변수가 undefined인 경우에도 함수가 정상적으로 동작하도록 구현
      //^ 기본 매개변수 사용법
        //: 함수를 정의할 때 매개변수 뒤에 '=' 연산자를 사용하여 기본값을 할당
function defaultParam(param1 = defaultValue1, param2 = defaultValue2) {}

// 윤년 확인 함수
  // 기본 매개변수를 사용하여 인수가 없을 경우 윤년
function isLeapYear(year = new Date().getFullYear()) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear()); //올해가 윤년인지 확인
console.log(isLeapYear(2020)); //2020 윤년인지 확인

// 급여 계산 함수
function calculatePay(rate, hour = 40) {
  return rate * hour;
}
console.log(calculatePay(10000)); //시급 만원에 기본값 사용 
console.log(calculatePay(15000, 50)); //시급 만원에 기본값 사용