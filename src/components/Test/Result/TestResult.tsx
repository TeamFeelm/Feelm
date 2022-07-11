import styled from "styled-components";
import { TestResultData } from "../..";
import { useNavigate, useParams } from "react-router-dom";
import { findMoviesByTag, resetAnsIdx, resetProgress, resetTag } from "../../../store";
import { useDispatch } from "react-redux";

export default function TestResult() {
  const { id } = useParams<{ id: string | undefined }>();
  const data: characterType = TestResultData.find((el) => el.id === id)!;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shareResult = async () => {
    await navigator.clipboard.writeText(window.location.href);
    window.alert("클립보드에 복사 되었습니다!");
  };

  const resetTest = () => {
    dispatch(resetProgress());
    dispatch(resetAnsIdx());
    navigate("/test");
  };

  const recommandMovie = (genre: string) => {
    dispatch(resetTag());
    dispatch(findMoviesByTag(genre));
    navigate("/search");
    window.scroll(0, 0);
  };

  return (
    <>
      <TestResultWrap>
        <CharacterCard>
          <CharacterImg src={data && data.img} />
          <MovieName>영화 : {data && data.movie}</MovieName>
          <ActorName>배우 : {data && data.actor}</ActorName>
        </CharacterCard>
        <TestResultList>
          <Chracter>{data && data.name}</Chracter>
          <Detail>{data && data.detail1},</Detail>
          <Detail>당신의 캐릭터는...</Detail>
          <Detail>
            {data && "<" + data.movie + ">"} 의 {data && data.name}!
          </Detail>
          <br />
          <Detail>어떤 성향이 비슷한가 보자면,</Detail>
          <Detail>
            <Bg>{data && data.detail2}</Bg>
          </Detail>
          <Detail>
            <Bg>{data && data.detail3}</Bg>
          </Detail>
        </TestResultList>
      </TestResultWrap>
      <ButtonBox>
        <Button onClick={shareResult}>공유하기🔗</Button>
        <Button onClick={resetTest}>다시하기💨</Button>
        <Button
          onClick={() => {
            recommandMovie(data.genre[0]);
          }}
        >
          추천영화🎬
        </Button>
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
  detail3: string;
}
interface styleProps {
  color?: string;
  bgcolor?: string;
}

const TestResultWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const TestResultList = styled.div`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 15px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Chracter = styled.div`
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const Detail = styled.div<styleProps>`
  font-size: 20px;
  word-break: keep-all;
  color: ${(p) => p.color};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Bg = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

const Clr = styled.span<styleProps>`
  color: ${(p) => p.color};
`;

const CharacterCard = styled.div`
  width: 500px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  /* perspective: 1500px; */
`;

const CharacterImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const MovieName = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin: 0px 5px 0px 0px;
`;
const ActorName = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin: 0px 5px 0px 0px;
`;

const ButtonBox = styled.div`
  width: fit-content;
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
