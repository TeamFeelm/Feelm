import { MovieSlide } from "../components";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Box color="lightblue">ㅆㅣㅈㅏㅇ</Box>
      <Box color="lightgreen">ㅆㅣㅈㅏㅇ</Box>
      <MovieSlide className="show" isEvent={true}></MovieSlide>
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
