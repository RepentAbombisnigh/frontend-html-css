// 자바스크립트 반복문

//! 반복문
  //: 동일한 코드 블록을 여러 번 실행할 수 있도록 해주는 프로그래밍의 기본 구조, 조건이 만족될 떄까지 반복하여 실행할 수 있는 명령의 집합

//! 배열
  //: 여러 개의 변수를 한 번에 선언해서 다룰 수 있는 자료형 
  //: 여러 개의 항목들이 순차적으로 저장된 데이터 구조
  //: js에서 배열은 Array 객체
  //: 숫자형 인덱스를 사용해 각 항목에 접근 가능
    // 요소 : 배열 내부에 있는 값
    // 인덱스 번호 : 0부터 시작 (인덱스 번호의 끝 번호는 배열 길이에서 - 1)
  
    //? 배열 선언
      // '변수' | '상수 키워드' 배열명 = [요소1, 요소2, ...]
let fruits = ['apple', 'banana', 'cherry'];
      //? 배열 요소 접근
        // 배열의 각 요소에 인덱스 번호로 접근
console.log(fruits[0]);
      //? 배열 길이 확인
        //배열명.length 속성 사용
console.log(fruits.length);

//! JS 반복문의 종류
  //? for, while, do-while
  //? (for ... in, for ... while)
  //! 1. for
    //: 코드를 정해진 횟수만큼 반복 실행
    //  for 기본구조
      // for (초기화식; 종료 조건; 증감식) {
      //    실행할 코드 
      // }
        //? 초기화식(initiallization)
          //: 반복문이 시작될 떄 단 한번만 실행
          //: 카운터 변수라고도 불리는 변수를 초기화하는데 사용
          //: 보통 숫자로 설정된 변수
        //? 종료 조건(test | condition)
          //: 반복 사이클의 시작에서 평가되는 표현식
          //: 해당 조건이 true면 코드 블록 실행, false면 반복문 종료
        //? 증감식(increment | decrement)
          //: 각 반복 사이클이 끝날 때 (반복문이 전체 반복을 거쳤을 때) 마다 실행
          //: 일반적으로 카운터 변수를 증감하는데 사용

// 0부터 4까지의 숫자(정수)를 콘솔창에 출력
console.log("--for 반복문--");
for (let index = 0; index < 5; index++) {
  console.log(index);
} 
  //! 2. while
    //: 주어진 조건이 참인 동안(boolean) 코드 블록을 계속 실행
    // while 기본 구조
      // while (조건) {
      //   실행할 코드
      // }
    // 조건이 참인 경우: 무한루프
console.log("--while 반복문--");
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

  //! 3. do-while
    //: while 반복문과 유사하지만 조건을 확인하기 전에 먼저 코드 블록을 실행
    //: 코드 블록이 최소한 한 번 실행 보장

    // do-while 기본 구조
      //do {
        // 실행할 코드
      //} while (조건);

//0부터 4까지 출력
console.log("--do while 반복문--");
index = 7;
do {
  console.log(index);
  index++;
} while (index < 5);

// 1에서 20까지의 숫자 중에서 3의 배수만 출력하는 코드
console.log("--예시--");
for (let index = 1; index <= 20; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
};