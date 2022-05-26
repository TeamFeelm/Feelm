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
import Detail from './pages/Detail'
import Test from './pages/Test';
/*-------------------------------------------
    App 화면 구성
-------------------------------------------*/
export default function App(): JSX.Element {
  return (
    <>
      {<Detail></Detail>}
      <Test></Test>

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
