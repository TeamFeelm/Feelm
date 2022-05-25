/*-------------------------------------------
    기본 import
-------------------------------------------*/
import { useEffect, useState } from "react";
import "./App.css";
/*-------------------------------------------
    라이브러리 import
-------------------------------------------*/
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
/*-------------------------------------------
    컴퍼넌트 import
-------------------------------------------*/

/*-------------------------------------------
    App 화면 구성
-------------------------------------------*/
export default function App(): JSX.Element {
  return (
    <>
      <h1>ㅎㅇㅎㅇ왜안돼?</h1>

      {/* <Routes>
        <Route path="/" element={
          <>
            <Login />
            <Mine />
            <Others />
            <Profile />
          </>
        } />
        <Route path="*" element={<Error />} />
      </Routes> */}
    </>
  );
}
