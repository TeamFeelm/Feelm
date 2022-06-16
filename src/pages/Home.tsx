import { MovieSlide, TeamComment } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import _, { debounce } from "lodash";

export default function Home() {
  const DIVIDER = 3;
  const outerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [pageHeight, setPageHeight] = useState(window.innerHeight + DIVIDER);
  const [page, setPage] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
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
    };
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };
    outerRef.current.addEventListener("wheel", preventScroll);
    outerRef.current.addEventListener("wheel", debounce(wheelHandler, 75));
  }, [outerRef]);

  useEffect(() => {
    const resizePageHeight = () => {
      setPageHeight(window.innerHeight + DIVIDER);
    };
    window.addEventListener("resize", debounce(resizePageHeight, 100));
    return () => {
      window.removeEventListener("resize", debounce(resizePageHeight, 100));
    };
  }, []);

  useEffect(() => {
    setY(page * pageHeight);
  }, [page, pageHeight]);

  return (
    <Outer transY={y} ref={outerRef}>
      <Box color="lightblue">ㅆㅣㅈㅏㅇ</Box>
      <Divider></Divider>
      <Box color="lightgreen">ㅆㅣㅈㅏㅇ</Box>
      <Divider></Divider>
      <MovieSlide></MovieSlide>
      <Divider></Divider>
      <TeamComment />
      <Divider></Divider>
      <Box color="lightyellow">ㅆㅣㅈㅏㅇ</Box>
    </Outer>
  );
}

interface color {
  color: string;
}

interface transY {
  transY: number;
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

export const Box = styled.div<color>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
