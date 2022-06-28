import styled from "styled-components";
import TestResultData from "../components/Test/Result/TestResultData.json";
import { useParams } from "react-router-dom";

export default function TestResult() {
  const { id } = useParams<{ id: string | undefined }>();
  const data: characterType | undefined = TestResultData.find((el) => el.id === id);

  return (
    <>
      <TestResultWrap>
        <TestResultList>
          <tr>
            <Chracter>{data && data.name}</Chracter>
          </tr>
          <tr>
            <Detail>{data && data.title1},</Detail>
          </tr>
          <tr>
            <Detail>{data && data.title2}!</Detail>
          </tr>
          <tr>
            <Genre>{data && data.genre}</Genre>
          </tr>
        </TestResultList>
        <CharacterCard>
          <CharacterImg src={`/src/assets/characters/${data && data.img}`} />
        </CharacterCard>
      </TestResultWrap>
    </>
  );
}

interface characterType {
  id: string;
  genre: string[];
  name: string;
  img: string;
  title1: string;
  title2: string;
  hashtag: string[];
  detail1: string;
}

const TestResultWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
`;

const TestResultList = styled.table`
  height: auto;
  float: left;
`;
const Chracter = styled.th`
  font-size: 2rem;
`;
const Detail = styled.td`
  font-size: 1rem;
`;
const Genre = styled.td`
  font-size: 1rem;
`;

const CharacterCard = styled.div`
  perspective: 1500px;
`;

const CharacterImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  float: right;
  transform-style: preserve-3d;
  transition: transform 0.05s linear;
  box-shadow: -20px 40px 80px -50px blue;
`;
