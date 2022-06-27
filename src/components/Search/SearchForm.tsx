import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findMoviesByValue } from "../../store";
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
        <BsSearch size={"1.5em"} color={"tomato"} />
      </SearchSubmit>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 280px;
  margin: 75px auto 35px;
`;

const SearchValue = styled.input`
  width: 200px;
  margin-left: 35px;
  padding-bottom: 4px;
  border-bottom: 1px solid tomato;
  border-radius: 3px;
  background-color: #484d64;
  font-family: "SSD";
  font-size: 18px;
  text-align: center;
  transition: width 0.3s;
  color: white;
  ::placeholder {
    color: lightgray;
    font-size: 14px;
  }
  :focus {
    width: 400px;
  }
`;

const SearchSubmit = styled.button`
  margin-left: 10px;
  background-color: transparent;
`;

export default Search;
