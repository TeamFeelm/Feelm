import { useState } from "react";
import { useDispatch } from "react-redux";
import { findMovies } from "../store";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const ChangeValue = (e: any) => {
    setInputValue(e.target.value);
  };
  const SearchData = (e: any) => {
    // Result의 datas 변경
    e.preventDefault();
    dispatch(findMovies(inputValue));
  };
  return (
    <>
      <form onSubmit={SearchData}>
        <input type="text" onChange={ChangeValue}></input>
        <input type="submit" value="검색" />
      </form>
    </>
  );
};

export default Search;
