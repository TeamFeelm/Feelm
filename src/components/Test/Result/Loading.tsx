import styled from "styled-components";

export default function Loading() {
  return (
    <>
      <Loader></Loader>
    </>
  );
}

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
