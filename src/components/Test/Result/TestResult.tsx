import styled from "styled-components";
import { TestResultData } from "../..";
import { useNavigate, useParams } from "react-router-dom";
import { resetAnsIdx, resetProgress } from "../../../store";
import { useDispatch } from "react-redux";

export default function TestResult() {
  const { id } = useParams<{ id: string | undefined }>();
  const data: characterType | undefined = TestResultData.find((el) => el.id === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shareResult = async () => {
    await navigator.clipboard.writeText(window.location.href);
    window.alert("클립보드에 복사 되었습니다!");
  };

  const redirectTest = () => {
    dispatch(resetProgress());
    dispatch(resetAnsIdx());
    navigate("/test");
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
          <CharacterImg src={data && data.img} />
          <MovieName>영화 : {data && data.movie}</MovieName>
          <ActorName>배우 : {data && data.actor}</ActorName>
        </CharacterCard>
      </TestResultWrap>
      <ButtonBox>
        <Button onClick={shareResult}>공유하기🔗</Button>
        <Button onClick={redirectTest}>다시하기💨</Button>
      </ButtonBox>
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
  display: flex;
  justify-content: space-between;
`;

const TestResultList = styled.div`
  width: 400px;
`;
const Chracter = styled.div`
  font-size: 4rem;
`;
const Detail = styled.div`
  font-size: 1.5rem;
`;

const CharacterCard = styled.div`
  width: 500px;

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

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  margin: auto;
`;

const Button = styled.div`
  width: 250px;
  height: 70px;
  margin: 20px;
  text-align: center;
  line-height: 70px;
  font-size: 1.5em;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  &:hover {
    background-color: white;
    color: rgba(1, 5, 27, 1);
  }
`;
