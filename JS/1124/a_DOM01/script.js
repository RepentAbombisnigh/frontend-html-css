//! 문서 객체 가져오기
//? head, body, title요소
//: docuement.head
//: docuement.body
//: docuement.title

//? body요소 내부에서 만든 다른 요소들
//: querySelect(선택자)
//: querySelectAll(선택자)

//! 글자 조작하기
//? 문서객체.textContent
  //: 입력된 문자열을 그대로 적용
//? 문서객체.innerHTML
  //: 입력된 문자열을 HTML 형식으로 적용
document.addEventListener('DOMContentLoaded', () => {
  const a = document.querySelector('#textContent');
  const b = document.querySelector('#innerHTML');

  a.textContent = '<h2>textContent 속성</h2>';
  b.innerHTML = '<h2>innerHTML 속성</h2>';
});

//! 속성 조작하기
//: 문서 객체의 속성을 조작
//? 문서객체.setAttribute(속성이름, 값)
  //: 특정 속성의 값을 지정
//? 문서객체.getAttribute(속성이름)
  //: 특정 속성을 추출
document.addEventListener('DOMContentLoaded', () => {
  const rects = document.querySelectorAll('.rect');
  rects.forEach((rect, index) => {
    const width = (index + 1) * 50;
    // 이미지 너비와 높이 직접 설정
    rect.style.width = width + 'px';
    rect.style.height = '250px'
    const src = './640.png';
    rect.setAttribute('src', src);
    // set과 getAttribute() 사용하지 않고도 해당 요소에 .속성으로 바로 읽기가 가능
    // rect.src = src;
  });
});

//! 스타일 조작하기
//: 문서 객체의 스타일을 조작 시에는 style속성을 사용

//? 스타일 속성을 지정 시 주의점
// style 속성은 객체
//: 해당 객체 내부에 CSS를 사용하여 스타일 속성을 지정
//: 속성값은 CSS에서 사용하는 값과 동일
//: 속성명의 경우 CSS에서는 단어 사이를 -으로 구분하지만 JS에서는 lowerCamelCase로 구분
  //ex. text-align, font-size => textAlign, fontSize

//? 스타일 객체 사용법
//: 주로 점표기법을 사용
// h1.style.backgroundColor: 점표기법
// h1.style['backgroundColor']: 대괄호 표기법
// h1.style['background-color']: 대괄호 표기법

// div 25개의 스타일을 조작하여 검은색에서 흰색으로 그라데이션 효과를 보이도록 지정
document.addEventListener('DOMContentLoaded', () => {
  // container 아이디 내부의 div만을 선택
  const divs = document.querySelector('#container > div');
  // div 갯수만큼 반복하여 출력
  divs.forEach((div, index) => {
    const gradation = index * 10; // 0 ~ 240
    // 크기 지정 시 단위를 반드시 같이 작성
    div.style.height = '10px';
    div.style.backgroundColor = `rgba(${gradation}, ${gradation}, ${gradation})`;
  })
})