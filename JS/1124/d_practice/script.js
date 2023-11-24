// 웹 문서에 이벤트 리스너 추가
//전체 웹 문서가 로드된 이후에 실행할 기능을 작성
document.addEventListener('DOMContentLoaded', () => {
  // 현재값(input필드에 입력되는 값)
  let currentValue;
  // 변환 상수 기본 값 10
  let conversion = 10;

  // DOM요소 가져오기
  // select
  const select = document.querySelector('select');
  // input
  const input = document.querySelector('input');
  // span
  const span = document.querySelector('span');

  // 계산 함수 구형(calculate)
  // span요소에 텍스트 추가로 현재 값과 변환 상수를 곱하여 첨부
  // 숫자를 문자열로 변환
  //: 소숫점 2번째 자리까지만 출력
  const calculate = () => {
    span.textContent = (currentValue * conversion).toFixed(2);
  }
  // input에 이벤트 리스너 추가
  // 키보드 이벤트 추가(keyup)
  // 현재값 = Number();
  // calculate();
  input.addEventListener('keyup', (event) => {
    // event.currentTarget
    //: 현재 이벤트가 일어나고 있는 DOM 요소를 불러옴
    currentValue = Number(event.currentTarget.value);
    calculate();
  })

  // select에 이벤트 리스너 추가
  // select가 변경될 경우, 해당 이벤트를 매개변수로 전달하여
  // const options = event.currentTarget.options;
  // const index = event.currentTarget.option.selectdIndex;
  // 변환상수 Number(options[index].value);
  // calculate();
  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options;
    const index = event.currentTarget.options.selectedIndex;
    conversion = Number(options[index].value);
    calculate();
  })
})



// document.addEventListener('DOMContentLoaded', () => {
//   const inputField = document.querySelector('input');
//   const span = document.querySelector('span');
//   const select = document.querySelector('select');
//   if (inputField.value) {
//     span.textContent = `입력한 값은 ${inputField.value}이며 변환된 값은 ${calculate()} 입니다.`
//   }
// })


// inputField.addEventListener('keyup', () => {

// } )

// select.addEventListener('onchange', event => {
//   const index = event.currentTarget.option.selectdIndex;
//   const options = event.currentTarget.options;
//   calculate() = inputField.value * Number(options[index].value);
// });



