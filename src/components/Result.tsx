import styled from "styled-components";
import Poster from "./Poster";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Result = ({ data }: any) => {
  // const movieList = useSelector((state: RootState) => state.movieList);
  return (
    <Box>
      {data.map((movie: any) => {
        return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
      })}
    </Box>
  );
};

const Box = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
`;

export default Result;
