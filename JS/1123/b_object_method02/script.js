// JS 내장 객체(built-in object)

//! 3. JSON(JavaScript Object Notation) 객체
//: 자바스크립트 객체 표기법

  //? JSON 구조
  //: JSON 내부에는 JS에서 사용할 수 있는 기본 데이터 타입인 문자열, 숫자, 배열, 불리언, 그 밖의 다른 객체 또한 포함 가능
  //: JS의 배열과 객체를 활용하여 어떠한 자료의 형태를 표현하는 형식

  // 'key-value' 즉, '키-값'를 쌍으로 데이터를 구조화하는데 사용
  //: 형태 자체는 JS의 객체와 유사하지만, json은 순수한 텍스트 형식이기 때문에 키를 항상 따옴표로 묶어야 함.
  //: 값에는 함수 등은 사용 불가
  //: 문자열은 큰따음표 사용 권장

  //? JSON 사용
  //: 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용


// json형태로 여러 자료형을 나타내는 방법
let jsonData = [
  {
    "name": "john johnson",
    "age": 54,
    "job": "developer",
    "hobby": {
      "first": "training",
      "second": "training"
    },
    "lecture": ["평일", "주말", "DMBS"]
  },
  {
    "name": "devi john",
    "age": 30,
    "job": "podoc",
    "hobby": {
      "first": "training",
      "second": "training"
    },
    "lecture": ["평일", "주말", "DMBS"]
  },
  {
    "name": "sam j",
    "age": 15,
    "job": "developer",
    "hobby": {
      "first": "training",
      "second": "training"
    },
    "lecture": ["평일", "주말", "DMBS"]
  },
  {
    "name": "louis c",
    "age": 84,
    "job": "comedian",
    "hobby": {
      "first": "training",
      "second": "training"
    },
    "lecture": ["평일", "club", "DMBS"]
  }
];

let data = [
  {
    name: 'john',
    age: 54,
    job: 'developer',
    hobby: {
      first: 'training',
      second: 'training'
    },
    lecture: ['평일', '주말', 'DMBS']
  },
  {
    name: "louis c",
    age: 84,
    job: "comedian",
    hobby: {
      first: "training",
      second: "training"
    },
    lecture: ["평일", "club", "DMBS"]
  }
];

  //? 1) JSON.stringify()
  //: JS 객체를 JSON 문자열로 변환
  //: 데이터에 바로 적용 X, JSON객체에 사용
console.log(JSON.stringify(jsonData));
// JSON>stringfy()의 2번쨰 매개변수
//: 객체에서 어떤 속성만 선택해서 추출하고 싶을 때 사용, 거의 사용하지 X (일반적으로 null 사용)

// JSON.stringify()의 3번째 매개변수
//: 들여쓰기 n칸 설정
console.log(JSON.stringify(data, null, 3));

  //? 2) JSON.parse()
//: JSON 문자열을 JS 객체로 변환
let jsonData2 = JSON.stringify(data);
console.log(jsonData2);
console.log(JSON.parse(jsonData2));

//! 4. Math 내장 객체
  //: 수학과 관련된 기본적인 연산을 할 때 사용되는 객체
// 대표 속성: pi, e
console.log(Math.PI);
console.log(Math.random()); // 0이상 1미만의 난수 생성
console.log(Math.random() * 11); // 0이상 11미만의 난수 생성
// 제곱근 계산:  sqrt()
console.log(Math.sqrt(16)); //4
// 숫자를 가장 가까운 정수로 내림
console.log(Math.floor(20.834545)); //20
console.log(Math.floor(Math.random() * 11)) // 0이상 10미만의 정수 생성

//! 5. Date 객체
  //: 날짜와 시간을 처리하는 메소드를 제공
let now = new Date();
console.log(now);
console.log(now.getDate()); // 23: 날짜(일) 표기
console.log(now.getDay()); // 4: 목요일 날짜 표기
