{
// TS 객체 타입

//! 1. 객체 타입 지정
//: 객체 타입 정의시 {}(중괄호)를 사용하여 표현
//: 객체 타입의 경우 타입끼리의 구분을 세미콜론(;) 사용 권장

// 객체 타입 정의와 객체의 차이점
//: 콜론의 우변에는 값 대신 해당 속성의 타입을 지정
//: 구분자로 콤마(,)뿐만 아니라 세미콜론(;)도 사용

const user: { 
  name: string; 
  height: number; 
} = {
  name: '이승아',
  height: 168
} 

//! 2. 객체의 선택 속성(선택적 프로퍼티)
//: 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현
//: 객체 타입에 지정된 형식 그대로를 객체로 작성해야 함.
//: 그러나 선택적으로 값을 생략하고 싶은 경우 선택적 프로퍼티를 사용


const userNameAndUnknownHeight: {
  name: string;
  height?: number; //height 뒤에 ? 없으면 height 값이 명시되지 않아서 오류가 뜸.
} = {
  name: '이도경',
  height: 157 // 선택적 프로퍼티 선언 이후에는 지정이 되든 안 되든 오류는 뜨지 않는다.
}

//! 3. 읽기 전용 속성
// : 속성명 앞에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
// : 해당 키워드가 붙은 속성은 const 키워드를 이용한 변수 정의와 유사

const readonlyName: {
  readonly name: string;
  age: number;
} = {
  name: '이준국',
  age: 29
}
// readonlyName.name = 'Lee Jun Gook'; 
// 영문으로 재할당 시도 시, 읽기 전용 속성이므로 'name'에 할당할 수 없습니다 error


}