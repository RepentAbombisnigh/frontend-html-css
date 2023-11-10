// 사용자 정보가 담긴 배열에서 특정 조건에 만족하는 사용자들의 이름을 지연된 시간 후에 콘솔에 출력

// users 배열은 4개의 객체를 요소로 하는 배열
// 객체: {중괄호}로 이루어지고, 객체 내부의 값에 접근하고 싶은 경우 users.name 같이 마침표를 사용하여 접근
  //ex. users.age, users.isActive
const users = [
  { name: 'A', age: 25, isActive: true },
  { name: 'B', age: 26, isActive: false },
  { name: 'C', age: 37, isActive: true },
  { name: 'D', age: 48, isActive: false },
  { name: 'E', age: 21, isActive: true },
];

// 비즈니스 로직
  // 1. isActive가 true인 사용자들만 필터링 (filter)
  // 2. 필터링 된 사용자들의 name을 추출 (map)
  // 3. 타이머 함수를 사용하여 콘솔에 name을 2초 후 출력(forEach, setTimeout)

// 매개변수가 하나만 필요하기에 소괄호 사용하지 않아도 O, 또 boolean 타입의 true를 요구하기에 중괄호 없어도 완성됌.
// users 배열의 각 요소를 user라는 이름으로 filter >> user객체의 isActive값이 true인 요소만 새로운 배열로 생성
users
  .filter(user => user.isActive)
  .map(user => user.name)
  .forEach(name => {
    setTimeout(() => {
      console.log(name);
    }, 2000);
  })

