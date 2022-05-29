/*-------------------------------------------
    기본 import
-------------------------------------------*/
import { useEffect, useState } from "react";
/*-------------------------------------------
    라이브러리 import
-------------------------------------------*/
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

/*-------------------------------------------
    컴퍼넌트 import
-------------------------------------------*/
import { Detail } from "./pages";
import Test from "./pages/Test";
/*-------------------------------------------
    App 화면 구성
-------------------------------------------*/
export default function App(): JSX.Element {
  return (
    <>
      <Detail></Detail>
      <Test></Test>

      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}
