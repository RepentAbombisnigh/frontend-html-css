{

//! Intersection type

//! 1. Intersection type이란?
//: 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 단일 타입을 생성하는 방법
// >> 여러 타입을 모두 만족하는 하나의 타입
//: JS의 AND연산자(&&)와 유사
//: & 기호를 사용하여 구현

//! 2. Intersection 타입 사용
//? 기본 사용법
// type IntersectionType = Type1 & Type2 & Type3... ;

//! 3. Intersection 타입 예시
type Employee = {
  name: string;
  startDate: Date;
}
type Manager = Employee & { group: string };
// 위의 경우 name, startDate, group 요소가 모두 있어야 오류 발생X
let managerA: Manager = {
  name: '이준국',
  startDate: new Date(),
  group: 'Developer'
}

//! 4. 인터섹션 타입의 특징
// 타입 결합
//: 모든 타입의 속성을 결합하여 새로운 타입을 생성
// 유연성과 정확성을 가짐.

//! 5. Intersection 타입 사용 예제
type 관리자 = {
  isAdmin: boolean;
}
type 사용자 = {
  name: string;
  email: string;
}
type 관리사용자 = 관리자 & 사용자;
function createAdminUser(user: 사용자): 관리사용자 {
  return { ...user, isAdmin: true };
}
const newUser: 사용자 = {
  name: '이도경',
  email: 'dokyung'
}
console.log(createAdminUser(newUser));

}