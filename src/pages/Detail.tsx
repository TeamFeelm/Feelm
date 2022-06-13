import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { TabTitle } from "../components";
import styled from "styled-components";

export default function Detail() {
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
      <Wrap>
        <Poster src={movie.img} width={350} height={500} />
        <TabTitle movie={movie} />
      </Wrap>
    );
  }
  return null;
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

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Poster = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
