import styled from "styled-components";
import Poster from "../Poster";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
  width: 1140px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 1462px) {
    width: 760px;
  }
  @media screen and (max-width: 1200px) {
    width: 870px;
  }
  @media screen and (max-width: 967px) {
    width: 580px;
  }
  @media screen and (max-width: 768px) {
    width: 600px;
  }
  @media screen and (max-width: 625px) {
    width: 400px;
  }
`;

export default Result;