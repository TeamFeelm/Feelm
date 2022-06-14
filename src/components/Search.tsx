import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findMoviesByValue } from "../store";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const ChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const SearchData = (e: React.FormEvent) => {
    // Result의 datas 변경
    e.preventDefault();
    dispatch(findMoviesByValue(inputValue));
    setInputValue("");
  };
  return (
    <SearchForm onSubmit={SearchData}>
      <SearchValue type="text" onChange={ChangeValue} placeholder="검색어를 입력해주세요" value={inputValue}></SearchValue>
      <SearchSubmit type="submit" value="검색">
        <BsSearch size={"1.5em"} color={"#21d62a"} />
      </SearchSubmit>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchValue = styled.input`
  width: 22%;
  border-bottom: 1px solid black;
  background-color: white;
  font-family: "SSD";
  font-size: 18px;
  /* text-indent: 15px; */
  text-align: center;
  transition: width 0.3s;
  :focus {
    width: 32%;
  }
`;

const SearchSubmit = styled.button`
  width: 40px;
  background-color: transparent;
`;

export default Search;
