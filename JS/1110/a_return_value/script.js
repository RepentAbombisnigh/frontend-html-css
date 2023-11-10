// input textfield와 단락을 포함하고 있는 html 두 요소에 대한 참조를 두 변수에 저장
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

// parameter 제곱
function squared(num) {
  return num * num;
}

// parameter 세제곱
function cubed(num) {
  return num * num * num;
}


// parameter factorial
// 5!(factorial) = 5 * 4 * 3 * 2 * 1
// 양수 값이 parameter, 0이나 음수가 들어올 경우 계산 x
// 반복된 결괏값에 다시 할당 곱셈
function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x; // num = num * (num - 1)
    x--; // num = num * (num - 1) * (num - 2)
  }
  return num;
}

// textfield 에 입력된 숫자를 출력하는 방법
// 이벤트 핸들러 작성
// input.onchange = function () {}
input.addEventListener('change', () => {
  // float= 문자열로 입력된 값을 부동 소숫점 숫자로 변환
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    // num is NaN일 경우
    // textContent 속성: 텍스트만 추가 가능(html 태그를 문자열로 취급)
    para.textContent = 'You need to enter a number.';
  } else { 
    // html 태그를 실제 태그로 출력하고 하는 경우 innerHTML 사용
    para.innerHTML = `${num} squared is ${squared(num)}.`;
    para.innerHTML = `${num} cubed is ${cubed(num)}.`;
    para.innerHTML = `${num} factorial is ${factorial(num)}.`;

  }
});