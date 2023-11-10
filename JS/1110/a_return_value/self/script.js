//! 함수의 조건문 사용
  // 윤년(leap year) 확인 함수
  // 4년에 한 번씩 2월이 29까지 있는 해

  // 4로 나누어 떨어지는 해는 윤년
  // 그 중에서 100으로 나누어 떨어지는 해는 윤년 X
  // 400으로 나누어 떨어지는 해는 윤년

function isLeapYear(year) {
  // 4로 나누어 떨어지면 윤년
  if (year % 4 === 0) {
    // 100으로 나누어 떨어지지만 400으로도 나누어떨어지면 윤년
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    // 100으로 나누어 떨어지면 윤년 X
    } else if (year % 100 === 0) {
      return false;
    }
    return true;
  } else {
    // 윤년 x
    return false;
  }
}

//함수 사용
console.log(isLeapYear(2020)); //true
console.log(isLeapYear(2023)); //false


//! 함수와 반복문 사용
  // A부터 B까지 더하는 함수

  // 시작 값(A)부터 끝 값(B)까지 반복문을 사용하여 계산

  // A부터 B까지 더하는 함수
  function sumFromAtoB(a, b) {
    // 합을 저장할 변수를 초기화
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i; // a부터 b까지의 각 수를 sum 저장
    }
    return sum;
  }

  // 함수 사용
  console.log(sumFromAtoB(1, 10)); // 55

//! 최솟값을 구하는 함수
  // 여러 숫자 중에서 가장 작은 값을 찾는 방법
function findMinValue(array) {
  // 첫 번째 원소를 최솟값으로 가정
  let MinValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < MinValue) {
      // 현재 원소가 가장 작은 값보다 작으면, 최솟값을 갱신
      MinValue = array[i];
    }
  }
  return MinValue;
}
// 함수 사용
console.log(findMinValue([5, 156, 9, 7, 45]));