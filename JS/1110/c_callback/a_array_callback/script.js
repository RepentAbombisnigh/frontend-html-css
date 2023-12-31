console.log('---forEach()---');
//! 콜백함수를 사용하는 함수: forEach()
  // forEach() method
    //: 순회 메소드 = 배열의 각 요소에 대해서 제공된 callback 함수를 오름차순 인덱스 순서로 한 번씩 호출
    //: 배열이 가지고 있는 함수(method)로써 단순하게 배열 내부의 요소를 사용해서 콜백함수 호출
      // 배열이 가지고 있는 메소드 중에서 콜백 함수를 활용하는 메소드의 형태: function (value, index, array) {}
      //: 3가지 매개변수를 반드시 모두 작성할 필요는 없으나, 순서는 맞춰야함.
const members = [273, 52, 103, 32, 57];
members.forEach(function (value, index, array) {
  console.log(`${index}번 째 요소: ${value}`);
});

console.log('---map()---');
//! 콜백함수를 활용하는 함수: map()
  //: 콜백함수에서 리턴한 값들을 기반으로 '새로운 배열'을 만드는 함수
  //: 예를 들어 10개의 공지사항 중 3번째만 "수정"하고 다시 3번쨰로 지정할 때 map함수 사용

  //배열 선언
let numbers = [273, 52, 103, 32, 57];
  // 배열의 모든 값을 제곱하여 새로운 배열을 생성
numbers = numbers.map(function (value, index, array) {
  return value * value;
});

//매개변수로 clg 메소드 자체를 전달
numbers.forEach(console.log);

console.log('---filter()---');
//! 콜백함수를 활용하는 함수: filter()
  //: 콜백함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
  //: 예를 들어 공지사항을 "삭제"에 사용
const filter = [0, 1, 2, 3, 4, 5];
const evenNumbers = filter.filter(function (value) {
  return value % 2 === 0;
});
console.log(`원래 배열: ${filter}`);
console.log(`짝수만 추출한 배열: ${evenNumbers}`);
