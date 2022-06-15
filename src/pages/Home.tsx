import { MovieSlide } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { getEventListeners } from "events";

export default function Home() {
  const DIVIDER = 5;
  const outerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [pageHeight, setPageHeight] = useState(window.innerHeight + DIVIDER);
  const [viewport, setViewport] = useState(942);
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      console.log(viewport);
      if (deltaY > 0) {
        if (viewport === 0) {
          setViewport(pageHeight);
        } else if (viewport === pageHeight) {
          setViewport(pageHeight * 2);
        } else if (viewport === pageHeight * 2) {
          setViewport(pageHeight * 3);
        } else if (viewport === pageHeight * 3) {
          setViewport(pageHeight * 4);
        } else {
          return;
        }
      } else {
        if (viewport === pageHeight) {
          setViewport(0);
        } else if (viewport === pageHeight * 2) {
          setViewport(pageHeight);
        } else if (viewport === pageHeight * 3) {
          setViewport(pageHeight * 2);
        } else if (viewport === pageHeight * 4) {
          setViewport(pageHeight * 3);
        } else {
          return;
        }
      }
    };
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };
    outerRef.current.addEventListener("wheel", preventScroll);
    outerRef.current.addEventListener("wheel", debounce(wheelHandler, 75));
  }, [outerRef, pageHeight]);

  useEffect(() => {
    const resizePageHeight = () => {
      setPageHeight(window.innerHeight + DIVIDER);
      console.log(pageHeight);
    };
    window.addEventListener("resize", debounce(resizePageHeight, 500));
    return window.removeEventListener("resize", debounce(resizePageHeight, 500));
  }, [pageHeight]);
  return (
    <Outer viewport={viewport} ref={outerRef}>
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

interface viewport {
  viewport: number;
}

const Outer = styled.div<viewport>`
  height: 100vh;
  transition: 0.8s all ease;
  transform: translateY(-${(props) => props.viewport}px);
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
