//! 조건문 실습

//? 1. 입력값 검증
  // age 변수 prompt 창에서 'Please enter your age' 에서 받아오기
  //해당 age 변수 값이 0미만 이거나 200초과일 경우 콘솔창에 invalid age를 출력
let age = prompt('Please enter your age.');
if (age < 0 || age > 200 || isNaN(age)) {
  console.log('Invalid age');
} else {
  console.log(`Your age is ${age}`);
}

//? 2. 점수에 따른 등급 부여 (else if)
  // score 변수에 prompt (Please tneter your socre) 받아와
  // 0점 미만 100 초과의경우 콘솔창에 invalid socre.
  // 90 이상 a
  // ...60이상 d
  // 그 밖의 점수 f
  // 모두 콘솔창 출력
let score = prompt('Please enter your score.');
if (score < 0 || score > 100 || isNaN(score)) {
  console.log('Invalid score');
} else if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}

//? 3. 요일에 따른 활동 추천(switch)
  //Date() 함수의 getDay() method 사용
  // 0:일요일 ~ 6:토요일
    ///getDay(): 주어진 날짜의 현지 시간을 기준으로 요일을 반환
let day = new Date().getDay();
console.log(day); // 목요일이기에 4 출력
switch (day) {
  case 0 :
    console.log("It's a Sunday. Take a rest.");
    break;
  case 6 :
    console.log("It's Saturday. Enjoy your weekend!");
    break;
  case 1 :
  case 2 :
  case 3 :
  case 4 : 
  case 5 : 
    console.log("It's a weekday. Let's work hard!");
    break;
  default :
    console.log("Invalid day.");
  }

//? 4. 삼항연산자 예제
  //select-option에 따라 배경과 h1 바꾸기
  // 배경 흰색 -> 글자색 검은색
  // 배경 검은색 -> 글자색 흰색

const html = document.querySelector('html');
const select = document.querySelector('select');
const div = document.querySelector('div');

document.body.style.padding = '10px';
div.style.marginTop = '100px';

function update (bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
select.onchange = function () {
  select.value === 'black'
    ? update('black', 'white')
    : update('white', 'black');
};
