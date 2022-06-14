import { MovieSlide } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

export default function Home() {
  const outerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [translate, setTranslate] = useState<React.CSSProperties>();
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const viewport = pageHeight + 5;
      console.log(viewport);
      if (deltaY > 0) {
        if (outerRef.current.style.cssText === "") {
          setTranslate({ transform: `translateY(-${viewport}px)` });
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport}px);`) {
          setTranslate({ transform: `translateY(-${viewport * 2}px)` });
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport * 2}px);`) {
          setTranslate({ transform: `translateY(-${viewport * 3}px)` });
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport * 3}px);`) {
          setTranslate({ transform: `translateY(-${viewport * 4}px)` });
        }
      } else {
        if (outerRef.current.style.cssText === `transform: translateY(-${viewport}px);`) {
          setTranslate({});
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport * 2}px);`) {
          setTranslate({ transform: `translateY(-${viewport}px)` });
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport * 3}px);`) {
          setTranslate({ transform: `translateY(-${viewport * 2}px)` });
        } else if (outerRef.current.style.cssText === `transform: translateY(-${viewport * 4}px);`) {
          setTranslate({ transform: `translateY(-${viewport * 3}px)` });
        }
      }
    };
    outerRef.current.addEventListener("wheel", throttle(wheelHandler, 1000));
  }, [outerRef]);

  return (
    <Outer style={translate} ref={outerRef}>
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
