import styled from "styled-components";

export default function MovieInfo({ movie, info }: props) {
  return (
    <>
      <MovieInfoWrap>
        <Wrap>
          <Title>{movie?.title}</Title>
          <EngTitle>{info?.enTitle}</EngTitle>
        </Wrap>
        <Wrap>
          <Rating>네티즌 평점 : {info?.ntzRating}</Rating>
          <Rating>기자/평론가 평점 : {info?.spcRating}</Rating>
        </Wrap>
        <Wrap>
          <Runtime>상영시간 : {info?.runtime}</Runtime>
        </Wrap>
      </MovieInfoWrap>
    </>
  );
}

interface props {
  movie: {
    id: string;
    title: string;
    genre: string[];
    synop: string;
    director: string;
    cast: string[];
    runTime: number;
    year: number;
    img: string;
  };
  info?: {
    enTitle: string;
    synTitle: string;
    synops: string;
    runtime: string;
    grade: string;
    ntzRating: string;
    spcRating: string;
    peopleImgs: string[];
  };
}

const MovieInfoWrap = styled.div`
  width: 350px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 90%;
  }
`;
const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin: 0px 0px 20px 20px;
`;
const Title = styled.div`
  font-size: 40px;
`;
const EngTitle = styled.div`
  font-size: 20px;
  color: darkgray;
`;
const Rating = styled.div`
  font-size: 20px;
`;
const Runtime = styled.div`
  font-size: 20px;
`;
