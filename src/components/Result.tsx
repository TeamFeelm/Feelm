import styled from "styled-components";
import Poster from "./Poster";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Result = () => {
  const movieList = useSelector((state: RootState) => state.movieList);
  return (
    <ResultBox>
      {movieList.result.map((movie) => {
        return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
      })}
    </ResultBox>
  );
};

const ResultBox = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Result;
