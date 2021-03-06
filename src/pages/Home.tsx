import { MovieSlide, TeamComment, Canvas, Character, Footer } from "../components";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setInnerHeight, pageDown, pageUp, setTransY } from "../store";

export default function Home() {
  const DIVIDER = 3;
  const dispatch = useDispatch();
  const outerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const home = useSelector((state: RootState) => state.home);
  const [slide, setSlide] = useState(3);
  useEffect(() => {
    const wheelHandler = debounce((e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      if (home.firstpage) {
        if (deltaY > 0) {
          dispatch(pageDown());
        } else {
          dispatch(pageUp());
        }
      }
    }, 75);
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };
    outerRef.current.addEventListener("wheel", preventScroll);
    outerRef.current.addEventListener("wheel", wheelHandler);
  }, [outerRef, home.firstpage]);

  useEffect(() => {
    dispatch(setInnerHeight(window.innerHeight + DIVIDER));
    setSlide(Math.floor(window.innerWidth / 768 + 1));
    const resizePageHeight = debounce(() => {
      dispatch(setInnerHeight(window.innerHeight + DIVIDER));
      setSlide(Math.floor(window.innerWidth / 768 + 1));
    }, 100);
    window.addEventListener("resize", resizePageHeight);
    return () => {
      window.removeEventListener("resize", resizePageHeight);
    };
  }, []);

  useEffect(() => {
    dispatch(setTransY());
  }, [home.page, home.innerHeight, home.footer]);

  return (
    <>
      <Outer transY={home.transY} ref={outerRef}>
        <Canvas></Canvas>
        <Divider></Divider>
        <Character slide={slide} />
        <Divider></Divider>
        <MovieSlide slide={slide}></MovieSlide>
        <Divider></Divider>
        <TeamComment />
        <Footer></Footer>
      </Outer>
    </>
  );
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
  background-color: rgb(8, 14, 47);
`;
