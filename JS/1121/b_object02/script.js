// 자바 스크립트의 객체 프로토타입

//! 프로토 타입 기반 언어
//: 객체를 원형(prototype)으로 하는 복제 과정을 통해 객체의 동작 방식을 재사용 할 수 있게 하는 방법
//: 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체를 가짐.

//? 프로토 타입 체인
//: 프로토타입은 해당 객체의 상위 객체로부터 메소드와 속성을 상속받을 수 있음
//: 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용 가능

//! 생성자 함수를 사용한 객체 생성
//: 생성자 함수를 사용할 경우 코드를 재사용하여 같은 구조의 객체를 여러 개 생성 가능
//: new 키워드를 사용하여 새 객체를 생성
//: 관례적으로 함수명의 첫 글자는 대문자로 시작
function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last': last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    let string = this.name.first + this.name.last;
    console.log(string);
  };
  this.greeting = function () {
    console.log('Hi' + this.name.first);
  }
}
// 생성자 함수를 사용한 객체 생성
let person1 = new Person('ahja', 'lee', 30, 'female', 'music');

console.log(typeof (person1));

//! Object.create()를 사용한 객체 생성 방법
//: create() method는 프로토타입을 설정할 수 있는 새로운 객체 생성 방법
//: 지정된 프로토타입 객체 및 속성을 갖는 새로운 객체를 생성
let personProto = {
  greet: function () {
    console.log('Hello, my name is ' + this.name);
  }
}

let personA = Object.create(personProto);
// 객체의 속성 생성
personA.name = 'John Johnson';
personA.age = 29;
personA.job = 'student';

personA.greet();

// 생성자 함수를 통하면 틀을 만들어서 대입하는 데이터이기에 구현된 틀에서 벗어나지 않지만, Object.create()의 경우 아주 기본적인 틀만 있고 자유롭게 제어가능

//! 클래스를 사용한 객체 생성 방법
// 클래스는 객체 지향 언어에서 볼 수 있는 다양한 특징들을 자바스크립트에 추가한 것
// 기존의 프로토타입 기반 상속보다 더 직관적인 방식으로 객체를 생성하고 상속 가능

// class 키워드로 객체 정의
// 클래스 명은 대문자로 시작
class Person2 {
  // 생성자
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}

let personB = new Person2('John Sina', 45, 'Wrestler');
personB.greet();