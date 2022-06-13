import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Detail() {
  return (
    <>
      <Outlet />
    </>
  );
}

const 제목 = styled.h3`
  ${(props) => props.theme.fonts.h3}
  color: ${(props) => props.theme.colors.orange300}
`;
