import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../store";

interface props {
  bg?: string;
  color?: string;
  w?: string;
}

interface movieType {
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
}

export default function TabContent() {
  const [tab, setTab] = useState(0);
  const [movie, setMovie] = useState<movieType>();
  const movieList = useSelector((state: RootState) => state.movieList.movies);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadMovie: movieType | undefined = movieList.find((item) => {
      return item.id == id;
    });
    setMovie(loadMovie);
  }, []);

  if (movie) {
    return (
      <>
        <Poster src={movie?.img} />
        <TabBox bg="white">
          <Tab onClick={() => setTab(0)}>기본</Tab>
          <Tab onClick={() => setTab(1)}>출연</Tab>
          <Tab onClick={() => setTab(2)}>줄거리</Tab>
        </TabBox>
        <ContentBox>
          {(tab === 0 && <Span>{movie?.genre}</Span>) ||
            (tab === 1 && <Span>{movie?.cast}</Span>) ||
            (tab === 2 && <Span>{movie?.synop}</Span>)}
        </ContentBox>
      </>
    );
  }
  return null;
}

export const Span = styled.span`
  line-height: 1.7;
`;

export const TabBox = styled.div<props>`
  padding-top: 50px;
  padding-bottom: 10px;
  width: 60%;
  margin: auto;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "white" ? "black" : "white")};
  border-bottom: 1px solid black;
`;
export const ContentBox = styled.div`
  width: 60%;
  padding: 20px;
  margin: auto;
`;
export const Tab = styled.span`
  padding: 20px;
  margin-right: 30px;
`;
export const Poster = styled.img<props>`
  src: ${(props) => props.src};
  width: 350px;
  height: 500px;
  /* object-fit: contain; */
`;
