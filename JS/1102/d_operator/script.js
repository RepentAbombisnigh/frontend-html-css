// 연산자 operator
//= 산술 / 할당 / 비교 / 논리 연산자

  //! 산술 연산자
    //: 수학적 계산을 수행하는데 사용
    //? +, -, *, /(나눗셈 몫), %(나눗셈 나머지), ++(증가), --(감소), ^ etc
let x = 10;
let y = 3;
// console.log(); //clg로 사용가능
console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x / y); //3.333333333
console.log(x % y); //1

  // 증감 연산자
  //: 숫자에 직접 작용 X
console.log(3 - 1);
// console.log(3++); -- SyntaxError
    // 후위 연산자
      //: x++(변수 뒤에 연산자를 사용)
        //: 해당 브라우저 싟에서 바로 값을 변화 x, 그 다음 해당 변수를 불렀을 때 값을 계산
console.log(x++); //10
console.log(x); //11
    // 전위 연산자
      //: ++x(변수 앞에 연산자를 사용)
        //: 브라우저가 변수를 먼저 증가/감소 시키고 값을 계산
console.log(--x); //10
  
  //! 할당(대입) 연산자
    //: 변수에 값을 할당하는데 사용
    //? =(할당), +=(더하기 후 할당), -=, *=, /=, %= etc 
let a = 10; //10을 a에 할당
a += 5; //a = a + 5;
console.log(a); //15 >> 10 + 5;

a -= 2; //a = a -2;
console.log(a); //13 >> 15 - 2;
a *= 2; //a = a * 2;
console.log(a); //26 >> 13 * 2;

a /= 2;
console.log(a); //13

  //! 비교 연산자
    //: 두 값을 비교하고, 그 결과를 boolean의 값으로 반환
    //? ==(동등), !=(부등)
      //: 값의 동일 테스트(데이터 유형 고려X)
    //? ===(일치), !==(불일치)
      //: 엄격한 값과 값의 데이터 유형의 완전한 동일성을 모두 테스트
    //? >, <, >=, <=, =>, =< etc
let num1 = 10; //number type
let num2 = '10'; //string type
console.log(num1 == num2); //true (type comparison X)
console.log(num1 === num2); //false (type comparison O)

console.log(num1 != num2); //false (type comparison X)
console.log(num1 !== num2); //true (type comparison O)

console.log(num1 > num2); //false, 같은 값이기에
console.log(num1 < num2); //false, 같은 값이기에
console.log(num1 >= num2); //true, 같은 값이기에
console.log(num1 <= num2); //true, 같은 값이기에

  //! 논리 연산자
    //: boolean 값을 연산하는데 사용
    //? and(논리곱): &&
    //? or(논리합): ||
    //? not(부정논리): !
let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); //false (+ * -)로 이해
console.log(bool1 || bool2); //true 
console.log(!bool1); //false
console.log(!bool2); //true