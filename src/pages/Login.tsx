/*-------------------------------------------
  라이브러리 import
-------------------------------------------*/
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, setUser, setMyPost } from "../store";
/*-------------------------------------------
  컴퍼넌트 import
-------------------------------------------*/

/*-------------------------------------------
  컴퍼넌트
-------------------------------------------*/
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  // # 로그인 하면 그 정보 스테이트로 받아갈게요~
  useEffect(() => {
    axios
      .get("/api/login")
      .then((res) => dispatch(setUser(res.data)))
      .catch(() => navigate("/error"));
  }, []);

  if (user.id === "") {
    return (
      <>
        <Outer>
          <Inner>
            <h1>{user.id}</h1>
            <form action="/" method="POST" autoComplete="off">
              <div>
                {" "}
                <input type="text" name="id" className="input-id" />{" "}
              </div>
              <div>
                {" "}
                <input type="password" name="pw" id="input-pw" />{" "}
              </div>
              <input type="submit" value="로그인" className="btn" />
              <button
                className="btn"
                onClick={() => {
                  navigate("/resister");
                }}>
                회원가입
              </button>
            </form>
          </Inner>
        </Outer>
      </>
    );
  }
  return <></>;
};

/*-------------------------------------------
    스타일드 컴퍼넌트- 프롭스 타입
-------------------------------------------*/
interface props {
  bg?: string;
  color?: string;
}

/*-------------------------------------------
    CSS
-------------------------------------------*/
const Outer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  opacity: 1;
  transition: all 0.3s;
`;
const Inner = styled.div`
  width: 80%;
  height: 90%;
  max-width: 50%;
  max-height: 50%;
  background: white;
  border-radius: 10px;
  margin: 300px auto;
  padding: 20px;
  font-size: 30px;
`;
const Box = styled.div<props>`
  padding: 20px;
  margin: 100px;
  width: 60%;
  height: 600px;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "yellow" ? "black" : "white")};
  overflow-y: hidden;
  border-radius: 10px;
  border: none;
`;

export default Login;
