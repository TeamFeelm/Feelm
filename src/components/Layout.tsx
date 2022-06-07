import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">
          <Space>Home</Space>
        </Link>
        <Link to="/test">
          <Space>Test</Space>
        </Link>
        <Link to="/detail">
          <Space>Detail</Space>
        </Link>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

const Space = styled.div`
  margin: 0 1em;
  font-size: 1em;
  font-family: "SSD";
`;
