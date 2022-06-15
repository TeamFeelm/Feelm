import styled from "styled-components";

export default function TabContent({ tab, movie }: propsType) {
  return (
    <ContentBox>
      {(tab === 0 && <Span>{movie.genre}</Span>) ||
        (tab === 1 && <Span>{movie.cast}</Span>) ||
        (tab === 2 && <Span>{movie.synop}</Span>)}
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
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Span = styled.span`
  line-height: 1.7em;
`;
