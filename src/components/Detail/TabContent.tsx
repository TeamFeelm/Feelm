import styled from "styled-components";

export default function TabContent({ tab, movie, info }: propsType) {
  return (
    <ContentBox>
      {(tab === 0 && (
        <>
          <P>default</P>
        </>
      )) ||
        (tab === 1 && <P>{movie.cast} </P>) ||
        (tab === 2 && (
          <P>
            {info?.title}
            {info?.synops}
          </P>
        ))}
    </ContentBox>
  );
}
interface propsType {
  tab: number;
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
    title: string;
    synops: string;
    lines: string;
    runtime: string;
    grade: string;
    peopleImg: string[];
    ntzRating: string;
    spcRating: string;
    genre: string;
    cast: string;
  };
}

export const ContentBox = styled.div`
  width: 50vw;
  padding: 20px;
  margin: auto;
  font-family: "SSD";
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const P = styled.p`
  line-height: 1.7em;
`;
