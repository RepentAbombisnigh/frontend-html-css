/* 
  ! 자료형(Data Type)
    : 기본 자료형(string, number, boolean, null, undefined)
    : 자료형 검사
    : 자료형 변환
*/
  //! 기본 자료형
    //: 컴퓨터가 처리할 수 있는 자료의 형태

    //typeof 변수명: 자료형을 알 수 있는 함수

    //? 1. 숫자형 number (js에는 정수interger 실수float 등 구분 x)
let num = 10;
let float = 10.5;
typeof number;
console.log(typeof num);
console.log(typeof float);

    //? 2. 문자열 string
      //: 텍스트 데이터를 나타내는 타입
      //: '' | "" | ``으로 둘러싸서 표현
let str1 = 'hello';
let str2 = "world";
let str3 = `hello world`;
console.log(str1);
console.log(str2);
console.log(str3);

      //! 탬플릿 문자열
      // ``을 사용해 정의, 문자열 내에 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열
      // +의 과도한 사용 줄여줌
//변수 삽입 가능
let name = 'John Johnson';
let greeting = `Hellow ${name}`;
console.log(greeting);
// 표현식 삽입 가능
let num1 = 10;
let num2 = 20;
console.log(`num1 + num2 = ${num1 + num2}`);
// 여러 줄 문자열 삽입 가능
  //: 탬플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine =  `이것은 여러 줄 문자열 입니다.
두 번쨰 줄입니다
세 번쨰 줄입니다`;
console.log(multiLine);

    //? 3. 논리형 boolean
      //: true | false 값만을 가지는 자료형
let bool = 100 < 10; //자료형 boolean으로 표현
console.log(typeof bool);
console.log(bool) //boolean 값이 false이기에 false로 표현

bool = true;
console.log(bool);

    //? 4. null & undefined 자료형
      // null: 값이 없음을 명시, (변수에 할당된) 데이터의 값이 유효하지 않은 상태
console.log(null);

      // undefined: 값이 할당되지 않은 변수의 기본값
          //: 값이 아예 입력조차 되지 않은 상태
let hello;
console.log(hello); //undefined

  //! 자료형 변환

    //? 문자열로 변환
      // String()함수 | toString()메소드 사용
let numberToString = 123;
console.log(typeof numberToString); //number
let numberToString2 = String(123);
console.log(typeof numberToString2); //string

    //? 숫자형으로 변환
      // Number()함수 사용
      // 문자열이 숫자로 변환할 수 없는 경우 > NaN 값으로 도출
        //NaN의 특징
        //: 어떤 값과도 동등 X
          //ex. NaN === NaN (X)
        //: 연산에서 전파: 어떤 수학의 연산도 NaN과 만나면 결괏값이 NaN이 됌

let stringToNumber = '123';
console.log(typeof stringToNumber); //string
let stringToNumber2 = Number('123');
console.log(typeof stringToNumber2); //number
let notANumber = Number('This is not a number');
console.log(notANumber); //NaN
let nanValue = NaN;
console.log(nanValue); //NaN

    //? Boolean으로 변환
      //Boolean() 함수 사용
      //JS의 불리언 변환에서
      //: false, 0, '', null, undefined, NaN을 제외한 값은 모두 true로 간주 = 무언가 있다면 true
let stringToBoolean = Boolean('hello');
console.log(stringToBoolean); //true
let stringToBoolean2 = Boolean(0);
console.log(stringToBoolean2); //false
