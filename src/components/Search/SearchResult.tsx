import styled from "styled-components";
import Poster from "../Poster";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Result = () => {
  const movieList = useSelector((state: RootState) => state.movieList);
  return (
    <ResultBox>
      {movieList.result.length > 0 ? (
        movieList.result.map((movie) => {
          return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
        })
      ) : (
        <NoResult>아무 것도 없다</NoResult>
      )}
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

const NoResult = styled.div`
  width: 100%;
  height: 600px;
  font-size: 50px;
  text-align: center;
  padding-top: 100px;
`;

export default Result;
