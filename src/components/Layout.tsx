import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <TopNav style={{ display: "flex" }}>
        <Link to="/">
          <Space>Home</Space>
        </Link>
        <Link to="/test">
          <Space>Test</Space>
        </Link>
        <Link to="/search">
          <Space>Search</Space>
        </Link>
      </TopNav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

const TopNav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  height: 50px;

  background-color: rgba(1, 5, 27, 1);
  color: white;
  box-shadow: black 0px 0px 5px;
`;

const Space = styled.div`
  display: flex;
  flex-basis: 33.33%;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  margin: 0 10px;
  font-size: 1em;
  font-family: "SSD";
  transition: box-shadow 0.3s;
  border-radius: 30px;
  :hover {
    box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5);
  }
`;
