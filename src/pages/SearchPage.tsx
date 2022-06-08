import styled from "styled-components";
import Result from "../components/Result";
import Tags from "../components/Tags";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

const SearchPage = () => {
  const movieList = useSelector((state: RootState) => state.movieList);
  let data = movieList;
  const [inputValue, setInputValue] = useState("");
  const ChangeValue = (e: any) => {
    setInputValue(e.target.value);
  };
  const SearchData = (e: any) => {
    e.preventDefault();
    const result = data.filter(
      (item) =>
        item.title.includes(inputValue) ||
        item.genre.includes(inputValue) ||
        item.director.includes(inputValue),
    );
    console.log(result);
  };
  return (
    <Box>
      <form onSubmit={SearchData}>
        <input type="text" onChange={ChangeValue}></input>
        <input type="submit" value="검색" />
      </form>
      <Tags></Tags>
      <Result data={data}></Result>
    </Box>
  );
};

const Box = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
`;

export default SearchPage;
