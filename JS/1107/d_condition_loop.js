//! 조건문과 반복문의 best practice

  // 1. 조건문
    //? 비교연산자 사용시 '==' 대신 '===' 권장
    // : JS에서 == 연산자는 두 값을 비교할 때, 타입 변환을 수행하지만 === 연산자는 타입 변환없이 엄격히 비교
    //? 불필요한 조건 사용 X

      // 불필요한 조건
      if (isValid === true) {
        //...
      }
      // 더 나은 방법
      if (isValid) {
        //...
      }

      // 불필요한 조건 2
      if (x === false) {
        //...
      }
      // 더 나은 방법 2 !x(x가 false인 경우) = true
      if (!x) {
        //...
      }

  // 2. 반복문
    //? 배열의 길이를 매 반복마다 계산 x
      // >> 배열의 길이는 루프 바깥에서 한 번만 계산하는 것이 효율적
      
      // 비효율적 방법
      let array = [];
      for (let index= 0; index < array.length; index++) {
        //...
      }
      // 효율적 방법
      let length = array.length;
      for (let index = 0; index < length; index++) {
        //...
      }