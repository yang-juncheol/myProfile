import { useState } from "react";
import MyProfile from "./MyProfile";
import Navbar from "./Navbar";

import style from "./myComponent.module.css";

function MyComponent() {
  var [value, setValue] = useState("");
  return (
    <div className={style.myComponent}>
      <header className={style.myComponentHeader}>
        <Navbar onChange={(value) => setValue(value)} />
      </header>
      <div className={style.myComponentBody}>
        <h1>내 프로필을 검색해보자!</h1>
        {value === "양준철" ? (
          <MyProfile />
        ) : value === "" ? (
          <p>상단 검색바에서 자신의 이름을 검색해 보세요</p>
        ) : (
          <p>찾을 수 없습니다</p>
        )}
      </div>
    </div>
  );
}

export default MyComponent;
