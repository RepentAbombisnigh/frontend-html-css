{
//! Union 타입

//! 1. Union 타입이란?
//: TS 고급 타입 중 하나로, 여러 타입 중 하나가 될 수 있는 값을 나타내는 방법
//: 값에 허용된 타입을 두 개 이상으로 지정
//: JS의 OR연산자(||)와 비슷하나 하나의 | 기호를 사용하여 표현

//! 2. Union 타입의 사용
//: 변수, 함수, 매개변수, 반환값 등에서 모두 사용 가능
//: 타입의 유연성을 제공
//: 무분별한 any사용을 방지하고 필요한 타입만 설정 가능

//! 3. union 타입의 예시
//? 기본 사용법
// type UnionType = Type1 | Type2 | Type3 | etc...

type Any = string | number | boolean | string[];
let value: Any = '문자';
value = 123;
value = true;
value =  ['1', '2', '3'];
// value = {}; // 지정하지 않았기에 불가능

type Admin = {
  id: string | number;
  password: number;
}

type User = {
  id: string | number;
  name: string;
}




// 타입 별칭의 Union 타입 경우 중복되지 않은 타입 속성은 옵셔널(?)과 동일함.

type Person = User | Admin;
// type Person = {
//   id: string | number;
//   password: number;
//   name?: string;
// }
let seungAh: Person = {
  id: '123',
  password: 123,
  name: '123'
}

function printId(id: string | number) {
  console.log("ID: ", id);
}

//! 4. Union 타입의 특징
// 공통 필드 접근
//: 유니언 타입의 모든 멤버가 공유하는 속성에만 접근 가능

// 타입 가드 사용
//: 특정 타입에만 존재하는 속성이나 메소드에 접근하기 위해서는 타입 가드를 사용해야만 한다.

// 유연성과 안정성 제공
//: 다양한 타입 사용 가능이라는 유연성을 제공하지만 타입을 정확하게 파악하지 않으면 오류 발생

//! Union 타입 실습
type UnionType = number | string;
function getAge(age: UnionType) {
  // 공통 필드
  // age.toFixed // 모든 멤버가 공유하는 속성에만 접근 가능하기에 number는 tofixed가 되지만, string에는 안 됌.
  // 타입 가드 사용
  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
}
console.log(getAge(12.345));
console.log(getAge('12살'));


}