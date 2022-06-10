import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Detail() {
  return (
    <>
      <제목>디테일 인덱스 페이지</제목>
      <Outlet />
    </>
  );
}

const 제목 = styled.h3`
  ${(props) => props.theme.fonts.h3}
  color: ${(props) => props.theme.colors.orange300}
`;
