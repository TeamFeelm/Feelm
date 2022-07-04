import styled from "styled-components";
import { TestResultData } from "../..";
import { useParams } from "react-router-dom";

export default function TestResult() {
  const { id } = useParams<{ id: string | undefined }>();
  const data: characterType | undefined = TestResultData.find((el) => el.id === id);
  const shareResult = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <TestResultWrap>
        <TestResultList>
          <Chracter>{data && data.name}</Chracter>
          <Detail>{data && data.detail1},</Detail>
          <Detail>
            당신의 캐릭터는... {data && data.movie}의 {data && data.name}!
          </Detail>
          {/* <Genre>{data && data.genre} 장르 영화를 선호하시나요 ?</Genre> */}
          <Detail>어떤 성향이 비슷하냐면요</Detail>
          <br />
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
          <Detail>- temp</Detail>
        </TestResultList>
        <CharacterCard>
          <CharacterImg src={`/src/assets/characters/${data && data.img}`} />
          <MovieName>영화 : {data && data.movie}</MovieName>
          <ActorName>배우 : {data && data.actor}</ActorName>
        </CharacterCard>
        <button onClick={shareResult}>공유</button>
      </TestResultWrap>
    </>
  );
}

interface characterType {
  id: string;
  genre: string[];
  name: string;
  movie: string;
  actor: string;
  img: string;
  hashtag: string[];
  detail1: string;
  detail2: string;
}

const TestResultWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
`;

const TestResultList = styled.div`
  height: auto;
  float: left;
`;
const Chracter = styled.div`
  font-size: 4rem;
`;
const Detail = styled.div`
  font-size: 1.5rem;
`;
const Genre = styled.div`
  font-size: 1.5rem;
`;

const CharacterCard = styled.div`
  display: block;
  float: right;

  /* perspective: 1500px; */
`;

const CharacterImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;

  /* transform-style: preserve-3d;
  transition: transform 0.05s linear;
  box-shadow: -20px 40px 80px -50px blue; */
`;

const MovieName = styled.div``;
const ActorName = styled.div``;
