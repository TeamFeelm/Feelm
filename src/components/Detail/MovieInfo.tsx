import styled from "styled-components";

export default function MovieInfo({ movie, info }: props) {
  return (
    <>
      <div>
        <TitleWrap>
          <Title>{movie?.title}</Title>
          <EngTitle>{info?.enTitle}</EngTitle>
        </TitleWrap>
        <Rating>네티즌 평점 : {info?.ntzRating}</Rating>
        <Rating>기자/평론가 평점 : {info?.spcRating}</Rating>
        <Runtime>상영시간 : {info?.runtime}</Runtime>
      </div>
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

const TitleWrap = styled.div`
  margin-bottom: 20px;
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
