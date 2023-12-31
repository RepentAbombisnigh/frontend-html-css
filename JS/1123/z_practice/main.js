//? 아이템들을 저장할 배열(items)
let List = [];

//? 새 아이템을 생성하는 함수(createItem)
function createItem() {
  let ul = document.getElementById('itemList');
  let li = document.createElement('li')
  //: 입력 필드의 DOM 요소를 읽어오기
  let item = document.getElementById('inputField');
  // 조건문을 사용해 새 아이템이 비어있지 않은 경우 기존 아이템 배열에 새 아이템을 추가 ()
  if (item.value == null || item.value == "") {
    return false;
  } else {
    //: 입력 필드의 값을 공백을 제거하고 가져오기(trim())
    li.appendChild(document.createTextNode(item.value.trim()));
    ul.appendChild(li);
    // 입력 필드 초기화
    item.value = '';
    li.onclick = removeItem;
  }
}



//? 아이템을 삭제하는 함수(deleteItem)
// 특정 인덱스의 아이템을 제외한 새로운 배열을 생성(filter())
//: 선택된 요소의 인덱스 번호를 매개변수로 전달받음
// 아이템 목록을 다시 렌더링(renderItems)
function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

//? 아이템 목록을 렌더링하는 함수(renderItems)
// 아이템 목록을 담은 DOM 요소를 읽어오기
// 목록 초기화(innerHTML를 빈 문자열로 할당)

// 아이템 배열을 순회하며 목록 생성(forEach)
//: item과 index 번호를 매개변수로 전달
// 각 아이템을 위한 li요소 생성
// const li - document.createElement('li');
// li 요소에 아이템 텍스트 추가
// li.textContent = item;
// li 요소 클릭 시 해당 아이템 삭제 함수 호출
// (호출 시 index 번호를 인수로 전달)
// 생성한 li 요소를 목록에 추가
// itemList.AppenChild(li);

// 문서가 로드 되었을 때 아이템 목록을 처음으로 렌더링
document.addEventListener('DOMContentLoaded', renderItems);