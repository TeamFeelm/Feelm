import { Outlet, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <TopNav style={{ display: "flex" }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? { borderBottom: "2px solid white" } : {})}>
          <Space>Home</Space>
        </NavLink>
        <NavLink to="/test" style={({ isActive }) => (isActive ? { borderBottom: "2px solid white" } : {})}>
          <Space>Test</Space>
        </NavLink>
        <NavLink to="/search" style={({ isActive }) => (isActive ? { borderBottom: "2px solid white" } : {})}>
          <Space>Search</Space>
        </NavLink>
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

  background-color: #030a2e;
  color: white;
  box-shadow: white 0px -25px 50px;
`;

const Space = styled.div`
  display: flex;
  flex-basis: 33.33%;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 46px;
  margin: 0 10px;
  font-size: 1em;
  font-family: "SSD";
  border-radius: 30px;
  :hover {
    opacity: 0.7;
  }
`;
