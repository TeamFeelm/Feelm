import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Loading() {
  return (
    <>
      <LogoBox />
      <TextBox>Loading ...</TextBox>
    </>
  );
}

const LogoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #f5c443;
  user-select: none;
  animation: Bounce 0.5s ease infinite alternate;
  @keyframes Bounce {
    0% {
      top: 50%;
      height: 30px;
      width: 100px;
      border-radius: 60px 60px 20px 20px;
    }

    35% {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }

    100% {
      top: 30%;
    }
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 48%;
  left: 60%;
  transform: translate(-50%, -50%);
  height: auto;
  width: auto;
  letter-spacing: 30px;
  color: #f5c443;
  font-size: 30px;
  font-weight: bolder;
`;

// const Loader = styled.div`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   z-index: 1;
//   margin: -75px 0 0 -75px;
//   border: 16px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 16px solid #3498db;
//   width: 120px;
//   height: 120px;
//   -webkit-animation: spin 1s linear infinite;
//   animation: spin 1s linear infinite;
//   @-webkit-keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;
