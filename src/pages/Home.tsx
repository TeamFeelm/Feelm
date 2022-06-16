import { MovieSlide } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import _, { debounce } from "lodash";

export default function Home() {
  const DIVIDER = 3;
  const outerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [pageHeight, setPageHeight] = useState(window.innerHeight + DIVIDER);
  const [page, setPage] = useState(0);
  const [y, setY] = useState(0);
  const [o, setO] = useState(0);
  useEffect(() => {
    const wheelHandler = debounce((e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      if (deltaY > 0) {
        setPage((prev) => {
          if (prev < 4) {
            return prev + 1;
          } else {
            return prev;
          }
        });
      } else {
        setPage((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
      }
    }, 75);
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };
    outerRef.current.addEventListener("wheel", preventScroll);
    outerRef.current.addEventListener("wheel", wheelHandler);
    return () => {
      outerRef.current.removeEventListener("wheel", preventScroll);
      outerRef.current.removeEventListener("wheel", wheelHandler);
    };
  }, [outerRef]);

  useEffect(() => {
    const resizePageHeight = debounce(() => {
      setPageHeight(window.innerHeight + DIVIDER);
    }, 200);
    window.addEventListener("resize", resizePageHeight);
    return () => {
      window.removeEventListener("resize", resizePageHeight);
    };
  }, []);

  useEffect(() => {
    if (page < 4) {
      setY(page * pageHeight);
      setO(0);
    } else {
      setO(200);
    }
  }, [page, pageHeight]);

  return (
    <>
      <Outer transY={y} ref={outerRef}>
        <Box color="lightblue">ㅆㅣㅈㅏㅇ</Box>
        <Divider></Divider>
        <Box color="lightgreen">ㅆㅣㅈㅏㅇ</Box>
        <Divider></Divider>
        <MovieSlide></MovieSlide>
        <Divider></Divider>
        <Box color="orange">ㅆㅣㅈㅏㅇ</Box>
      </Outer>
      <Foot opacity={o}>Footer</Foot>
    </>
  );
}

interface color {
  color: string;
}

interface transY {
  transY: number;
}

interface opacity {
  opacity: number;
}

const Outer = styled.div<transY>`
  height: 100vh;
  transition: 0.8s all ease;
  transform: translateY(-${(props) => props.transY}px);
`;
const Divider = styled.div`
  width: 100%;
  height: 3px;
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

const Foot = styled.div<opacity>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.opacity}px;
  background-color: white;
  font-size: 50px;
  text-align: center;
  transition: 0.3s all ease;
`;
