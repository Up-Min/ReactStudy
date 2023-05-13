import logo from "./logo.svg";
// 가져올 css
import "./App.css";
// 자동완성됨.
import { useState } from "react";

function App() {
  // post는 서버에서 가져온 데이터라고 가정.
  let post = "역삼 우동 맛집";
  {
    /* state란?
                자료 잠깐 저장할 때는 변수 (let, const, var)
                react에서는 state라고 써도 된다.
            */
  }

  /* state 사용 방법
    *   1. useState import (변수선언하면 자동 불러와진다.)
        2. useState ('보관할 자료 입력')
        3. let[a,b] << 이 형식으로 사용
            a : {a} 이렇게 쓰면 변수를 바로 사용
            b : state바로 변경해서 사용
            >> 참고로 이 문법은 Destructuring 문법인데
            array [1, 2] 가 있는데, 1,2가 너무 유용해서 얘만 따로 쓰고 싶어!
            let num = [1,2]
            let a = num[0]
            let b = num[1] << 이렇게도 쓸 수 있지만
            let [a, b] = [1, 2] << 이렇게도 사용할 수 있다.
            Array안에 있는 변수를 각각 뺴준다.
      */
  let [a, b] = useState(["useState 1", "useState 2", "useState 3"]);

  /* 언제 쓸 수 있을까? 왜 굳이 state를 써야할까?
    * 일반변수는 변수 내용이 변경되면 바로 반영이 되지가 않는다
        state를 쓰는 html전체가 자동으로 재렌더링이 되어서 바로 적용이 된다
        ? 근데 그냥 저장버튼 누르면 되는거 아닌가?
        
        * 변동시 자동으로 반영되게 하고 싶으면 state로 합시다
        빡대가리를 위한 정리
        : 자주 변경될거 같은 html 부분은 state로 만들어두면 코드 잘 짠거임!
    */

  return (
    // return 안에는 하나의 div로 묶어서 진행해야 한다!
    <div className="App">
      {/* jsx이기 때문에 js에서 html을 만들 수 있다. 
        1. jsx에서는 class대신 className을 사용하게 된다*/}
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {/* 2. let post를 html에 넣어주기(데이터 바인딩) (중괄호 문법)*/}
      <h4> 블로그 글 제목 </h4>
      {/* <h4> {post} </h4> */}
      <h4 id={post}></h4>

      {/* 3. style 속성 집어f넣기 (스타일 변수는 '-'를 붙이지 않는다!) */}
      {/* <h4 style={{ color: "red", fontSize: "20px" }}> 스타일 먹여주기 </h4> */}

      <div className="list">
        <h4>글 제목 {a[0]}</h4>
        <p> 오늘은 5월 14일 </p>
      </div>
      <div className="list">
        <h4>글 제목 {a[1]}</h4>
        <p> 오늘은 5월 14일 </p>
      </div>
      <div className="list">
        <h4>글 제목 {a[2]}</h4>
        <p> 오늘은 5월 14일 </p>
      </div>
    </div>
  );
}

export default App;
