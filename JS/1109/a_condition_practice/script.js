//! 조건문을 사용하는 프로그래밍 로직

  //? 1. 사용자 입력값 거사
    // 사용자로부터 입력받은 값이 유효한지 검사하기 위해 조건문 사용
let userInput = prompt('Please enter a number');
// isNaN() 함수: 어떤 값이 NaN인지 판별
if (isNaN(userInput)) {
  console.log('This is a valid number.');
} else {
  console.log('You entered ' + userInput);
  console.log(userInput);
}
  //? 2. 접근 제어
    // 로그인 상태나 사용자 권한에 따라 다른 페이지를 보여줄 때 조건문 사용
let isloggedIn = false; // 사용자의 로그인 확인 상태 
let isAdmin = false; // 관리자 여주 확인 상태
if (isloggedIn) {
  if (isAdmin) {
    console.log('Welcome, Admin!');
  } else {
    console.log('Welcome, User!');
  }
} else {
  console.log('Please login.');
}

  //? 3. 코드 실행 흐름 제어
    // 조건에 따라 특정 코드를 실행할지에 대한 여부를 제어 가능
      // confirm() 함수: 프로그램을 계속 진행할 지의 여부를 판단 메세지 창 출력
let shouldExecute = confirm('Do you want to execute this code?');
if (shouldExecute) {
  console.log('This cold is running.');
  
} else {
  console.log('The code is not running.');
}