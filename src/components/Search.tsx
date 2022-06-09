import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findMovies } from "../store";
import styled from "styled-components";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const ChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const SearchData = (e: React.FormEvent) => {
    // Result의 datas 변경
    e.preventDefault();
    dispatch(findMovies(inputValue));
  };
  return (
    <SearchForm onSubmit={SearchData}>
      <SearchValue
        type="text"
        onChange={ChangeValue}
        placeholder="검색어를 입력해주세요"></SearchValue>
      <SearchSubmit type="submit" value="검색" />
    </SearchForm>
  );
};

const SearchForm = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const SearchValue = styled.input`
  width: 30%;
  background-color: orange;
  font-size: 18px;
`;

const SearchSubmit = styled.input`
  width: 100px;
  background-color: aqua;
`;

export default Search;
