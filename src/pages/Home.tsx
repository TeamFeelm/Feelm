import { MovieSlide } from "../components";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { walkUpBindingElementsAndPatterns } from "typescript";

export default function Home() {
  const movieRef = useRef<any>();
  const [scr, setScr] = useState<React.CSSProperties>();

  const scrollEvent = () => {
    const windowScroll = window.pageYOffset;
    const { current } = movieRef;
    if (windowScroll > current.offsetTop) {
      setScr({ display: "none" });
    } else if (windowScroll < current.offsetTop) {
      setScr({ display: "flex" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, [movieRef]);

  return (
    <>
      <Box color="lightblue">ㅆㅣㅈㅏㅇ</Box>
      <Box color="lightgreen">ㅆㅣㅈㅏㅇ</Box>
      <MovieSlide aref={movieRef} now={scr}></MovieSlide>
      <Box color="orange">ㅆㅣㅈㅏㅇ</Box>
      <Box color="lightyellow">ㅆㅣㅈㅏㅇ</Box>
    </>
  );
}
interface color {
  color: string;
}

const Box = styled.div<color>`
  width: 100vw;
  height: 800px;
  background-color: ${(props) => props.color};
  font-size: 50px;
  text-align: center;
`;
