import { MovieSlide } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const outerRef = useRef<any>();
  const [sty, setSty] = useState<React.CSSProperties>();
  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (outerRef.current.style.cssText === "") {
          setSty({ transform: "translateY(-942px)" });
        } else if (outerRef.current.style.cssText === "transform: translateY(-942px);") {
          setSty({ transform: "translateY(-1884px)" });
        } else if (outerRef.current.style.cssText === "transform: translateY(-1884px);") {
          setSty({ transform: "translateY(-2826px)" });
        } else if (outerRef.current.style.cssText === "transform: translateY(-2826px);") {
          setSty({ transform: "translateY(-3768px)" });
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop > pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    outerRef.current.addEventListener("wheel", wheelHandler);
  }, [outerRef]);

  return (
    <Outer style={sty} ref={outerRef}>
      <Box color="lightblue">ㅆㅣㅈㅏㅇ</Box>
      <Divider></Divider>
      <Box color="lightgreen">ㅆㅣㅈㅏㅇ</Box>
      <Divider></Divider>
      <MovieSlide></MovieSlide>
      <Divider></Divider>
      <Box color="orange">ㅆㅣㅈㅏㅇ</Box>
      <Divider></Divider>
      <Box color="lightyellow">ㅆㅣㅈㅏㅇ</Box>
    </Outer>
  );
}
interface color {
  color: string;
}

const Outer = styled.div`
  height: 100vh;
  transition: 0.6s all ease;
`;
const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;

const Box = styled.div<color>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
