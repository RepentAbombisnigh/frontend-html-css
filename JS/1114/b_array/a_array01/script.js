//! 배열

//! 배열의 정의
//: 여러 데이터 요소를 순서대로 저장하는 자료 구조
//: 같은 타입이 아닌 여러 값들(여러 개의 변수)을 담을 수 있는 리스트 형태의 객체

//! 배열의 특징
//: '순서'가 있는 데이터의 목록
//: >> 각 데이터의 위치를 인덱스로 결정


//! 배열의 사용 목적
//: ex. 사용자 목록 관리, 데이터 일괄 처리 등
//: 데이터의 집합을 효율적으로 관리
//: 코드의 재사용 및 유지 보수 용이

//! 배열의 생성 및 초기화
  //? 1. 배열 리터럴 형식
  //: 대괄호[]를 사용하여 생성, 내부의 값을 쉼표로 구분
  //: 쉼표를 통해 구분되는 각각의 데이터는 요소로 정의
    //: 요소 - 배열 내부에 들어있는 값
let emptyArray = []; // 빈 배열 생성
let numebrs = [1, 2, 3, 4, 5]; //같은 데이터 타입
let mixedTypes = [1, 'two', false, [5, 6]]; // 다양한 데이터 타입
console.log(mixedTypes);

  //? 2. Array 생성자 형식
  // new Array() 구문을 사용하여 배열을 생성
let arrayWithNew = new Array('apple', 'banana', 'orange');
console.log(arrayWithNew);

  // Array 생성자의 특징
  //: 한 개의 숫자 인자를 가지는 경우 해당 숫자만큼의 길이를 가진 빈 배열을 생성
let arrayLengthTwo = new Array(2);
let arrayWithTwo = new Array('2');
console.log(arrayLengthTwo); // 길이가 2인 빈 배열
console.log(arrayWithTwo); //'2' 하나의 요소를 포함한 배열

//! 배열 조작 및 접근
let fruits = ['apple', 'orange', 'banana'];

  //? 1. 배열 요소에 접근(indexing)
  //: 배열의 각 요소는 숫자 인덱스를 통해 접근 가능
  // ex. 배열명[인덱스번호]
console.log(fruits[1]);

  // 배열의 요소 수정(인덱싱)
  // orange 대신 mango로 수정
fruits[1] = 'mango'
console.log(fruits[1]);

  //? 2. 배열의 길이
  //: 배열에 들어있는 요소의 수를 반환
  //: length 속성 사용
  // ex. 배열명.length
console.log(fruits.length);

  //? 3. 다차원 배열의 요소 접근
    // 다차원 배열: 배열 내에 다른 배열을 포함하는 구조, 데이터를 행렬 또는 그리드 형태로 표현할 때 사용
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[0][1]); //0번쨰 요소의 2번째 요소 선택 = 2
console.log(matrix[2][2]); // =9

//! 배열의 method
  //? 1. push(), pop() method
    //: 배열의 끝에 요소를 추가, 제거

//^ 요소 추가
let cars = ['Audi', 'Bmw', 'Benz'];
cars.push('Hyundai');
console.log(cars);
//^ 요소 제거
  //: pop() method의 경우 마지막 요소를 제거하고 그 값을 반환
cars.pop();
console.log(cars);

  // 인덱스를 사용하여 배열 뒷부분읱 특정 위치에 요소 추가
cars[7] = 'Kia';
console.log(cars);
  // length 속성을 사용하여 배열의 마지막 위치에 요소 추가
cars[cars.length] = 'Toyota';
console.log(cars);

  //? 2. shift() & unshift() method
    // shift()
    //: 배열의 첫 번쨰 요소를 제거하고 그 요소를 반환
let carsShift = cars.shift(); // 첫 번째 요소 제거
console.log(carsShift);
console.log(cars);

    // unshift()
    //: 배열의 시작에 새로운 요소를 추가
cars.unshift('newBmw'); /// 시작에 추가
console.log(cars);

  //? 3. slice(), splice() method
    // slice(): 배열의 특정 부분을 새 배열로 반환
    //: 배열의 특정 부분을 추출하여 새 배열로 반환
    //: 원본 배열은 변경X
    // ex. 배열명.slice(start, end);
      // start(필수): 해당 번호를 시작으로 포함하여 추출됨. = 지정된 숫자 '이상'
      // end(선택): 생략시 배열의 끝까지 추출, end 번호 바로 앞의 인덱스까지만 수행 = 지정된 숫자 '미만'
let slicedCars = cars.slice(1, 4); // 인덱스 1,2,3 추출
console.log(slicedCars);
console.log(cars); // 기존 요소 배열 변경 X

    // splice(): 배열의 기존 요소를 삭제 또는 교체 | 새 요소를 추가하여 배열의 내용을 변경
    // ex. 배열.splice(start, deleteCount, item1, item2, ...);
      // start(필수): 변경을 시작할 인덱스 번호, 해당 시작 인덱스부터 요소가 제거되거나 새로운 요소 삽입
      // deleteCount(선택 사항): 제거할 요소의 갯수, 생략시 start 인덱스부터 배열의 끝까지 모든 요소 제거
      // item1, item2, ...(선택 사항): 배열에 삽입될 요소, start 인덱스 이후부터 삽입. 생략시에는 삽입 X
console.log(cars);
// ['newBmw', 'Bmw', 'Benz', empty × 4, 'Kia', 'Toyota'] 
// 인덱스 3번부터 4개의 빈 요소 제거하고, 'jeep', 'volvo' 삽입
let removedElements = cars.splice(3, 4, 'Jeep', 'Volvo');
console.log(removedElements);
console.log(cars);

  //? 4. concat() & join() & split() 
  // concat(): 배열을 결합
moreCars = ['Tayo', 'Tomas'];
let combinedCars = cars.concat(moreCars);
console.log(combinedCars);
  // join(): 문자열로 변환
  //: 문자열 값을 기준으로 배열의 요소들이 문자열로 반환
let carString = combinedCars.join(' ');
console.log(carString);
  // split(): 문자열로 이루어진 데이터를 정제하여, 배열의 형태로 나타낼 때 사용
let myData = 'Seoul, Busan, Daejeon'
let myArray = myData.split(', ');
console.log(myArray)