// JS에서 함수는 자료형이기 떄문에 변수 할당 가능 && 함수를 함수의 매개변수로 전달 가능

//! 콜백함수
  //: 매개변수로 전달하는 함수를 콜백 함수
  //: 다른 함수의 인자로 전달
  //: 특정 작업이 완료된 후에 실행되어야 하는 코드를 포함

  //? 콜백함수의 사용 목적
    // 1. 비동기 처리
      //: 특정 로직의 실행이 끝날 때까지 기다리지 않고 나머지 코드를 먼저 실행하는 것 (특정 아이템이 위에 있으며 탑다운 방식임에도 뒤늦게 처리 되는 것)
      //: I/O (입출력 장치), 네트워크 요청, 타이머 등에 사용
    // 2. 이벤트 핸들링
      //: 사용자 이벤트(클릭, 키보드 입력 등)가 발생했을 때 실행할 함수를 지정
    // 3. 고차 함수
      //: 함수를 인자로 받거나 결과로 반환하는 함수에서 활용

  //? 콜백함수의 예시
    // setTimeout()
    // addEventListener()
    // Array.prototype.map()
    // Array.prototppe.forEach()
  
  //? 콜백함수의 형태 
    // 익명함수, 화살표 함수등을 사용
  
  //? 콜백함수 사용하기
    //^ 선언적 함수
    // callTHreeTimes 함수의 callback 매개변수에 print() 함수를 전달
function callThreeTimes(callback) { //callback 매개변수
  for(let i = 0; i < 3; i++) {
    // callThreeTimes() 함수 내부에서는 callback(i)의 형태로 함수를 호출
    callback(i);
  }
}
function print(i) { //print 인수
  console.log(`${i}번 째 함수 호출`);
}
// 함수 호출
callThreeTimes(print);

  //^ 익명함수
// function callThreeTimes(callback) { //callback 매개변수
//   for(let i = 0; i < 3; i++) {
//     // callThreeTimes() 함수 내부에서는 callback(i)의 형태로 함수를 호출
//     callback(i);
//   }
// }

// 함수호출
callThreeTimes(function (i) { //익명 함수 사용
  console.log(`${i}번 째 함수 호출`);
});