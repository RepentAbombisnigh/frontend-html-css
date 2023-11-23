//! 자바스크립트의 이벤트

//! 1. 이벤트 정의
//: 웹 페이지에서 발생하는 대부분의 일/사건 의미
//: ex. 버튼 클릭, 웹 페이지 로드, input field에 입력 등

//! 2. 이벤트 핸들링
//: 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
//: 이벤트 핸들러(=리스너)는 특정 이벤트가 발생했을 때 호출되는 함수

//! 3. 이벤트 핸들러 '등록' 방법
//? 1. HTML 이벤트 핸들러 속성(=property) 사용
//: HTML 요소에 직접 onclick, onload, onchange 등의 이벤트 핸들러 속성 설정
// btn 상수에 버튼 태그에 대한 참조를 저장
// querySelector로 첫 번쨰 버튼 할당 의미
// querySelectorAll로 모든 버튼 할당
const btn = document.querySelector('button');
// random 함수를 정의
// 임의로 정수를 생성하는 함수
function random(number) {
  // Math.floor(): 괄호 안의 숫자를 내림하여 가장 가까운 정수로 생성
  // Math.random(): 0이상 1미만의 부동 소수점 난수를 반환
  // Math.random() * (number + 1): 0이상 number+1 미만의 범위의 난수가 반환
  return Math.floor(Math.random() * (number
    + 1));
}

// onclick property는 이벤트 핸들러 속성
btn.onmouseout = function () {
  // randomColor 상수는 'rgb(x, y, z)'
  const randomColor =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor =
    randomColor;
}

//on 키워드를 사용: 속성에 함수를 할당해서 이벤트를 연결
// - onclick: 참조된 HTML에 클릭 이벤트가 발생할 경우 실행
// - ondblclick: 더블클릭 되었을 때만 실행
// - onfocus: 포커스되었을 때 실행
//tab 후 포커싱되었을 때 실행
// - onblur: 포커스가 해제되었을 때 실행
//tab 포커싱 이후 tab 한 번 더 눌렀을 때 실행
// - onmouseover, onmouseout: 각각 마우스 포인터가 버튼 위에 올라가 있을 때, 포인터가 버튼에서 벗어났을 때 실행
//? 키보드 이벤트 핸드러의 경우 전체 브라우저를 나타내는 window에 등록해야함.
// - window.onkeydown: 키보드에서 키가 눌렸을 때 실행
// - window.onkeyup: 키보드에서 키가 떼어졌을 때 실행

// 대부분의 이벤트 핸들러는 모든 요소에서 사용가능 하지만, 몇몇의 경우에는 특수한 상황에서만 사용 가능
// ex. onplay: 재생을 하는 이벤트 핸들러
// >> 위의 이벤트 핸들러는 video와 같은 특정한 요소에서만 사용 가능

//? 2. 인라인 이벤트 핸들러
//: HTML 내부에서 작성되는 이벤트 핸들러
//: 사용하지 않는 것을 권장
function bgChange() {
  function random(number) {
    return Math.floor(Math.random() * (number
      + 1));
  }
  const rndColor =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

  document.body.style.backgroundColor = rndColor;
}

function alt() {
  alert("Hello");
}

// 여러 개의 버튼의 참조를 모두 가져와 한 번에 이벤트 핸들러를 추가
// const buttons = document.querySelectorAll('button');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = bgChange;
// }

buttons.forEach(function (button) {
  button.onclick = bgChange;
})

//? 3. addEventListener
//: 표준 이벤트 모델
//: HTML 요소의 addEventListener 메서드를 사용하여 이벤트 핸들러를 등록하는 방법
//: 한 요소에 여러 개의 이벤트 핸들러 등록 가능

// function random(number) {
//   return Math.floor(Math.random() * (number
//     + 1));
// }
btn.addEventListener('click', () => {
  const rndColor =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndColor;
})

//addEventListener method는 요소에 이벤트 리스너를 추가

//addEventListener() 함수의 두 가지 매개변수
// 첫 번째 매개변수: 이벤트 유형(등록하고자 하는 이벤트의 이름 / 예 - click, load, input 등)
// 두 번째 매개변수: 이벤트 핸들러 함수

//? 4. removeEventListener
//: 이벤트 핸들러를 제거
btn.removeEventListener('click', bgChange);