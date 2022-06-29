import styled from "styled-components";
const basic = ({ tab, movie }: propsType) => {
  return <></>;
};

export default function TabContent({ tab, movie }: propsType) {
  console.log(movie);
  return (
    <ContentBox>
      {(tab === 0 && (
        <>
          <P>장르: {movie.genre}</P>
          <P>감독: {movie.director}</P>
        </>
      )) ||
        (tab === 1 && <P>{movie.cast}</P>) ||
        (tab === 2 && <P>{movie.synop}</P>)}
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
    rating: string;
    runTime: number;
    year: number;
    img: string;
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
