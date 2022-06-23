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
  width: 150px;
  margin-left: 35px;
  padding-bottom: 4px;
  border-bottom: 1px solid tomato;
  background-color: white;
  font-family: "SSD";
  font-size: 18px;
  text-align: center;
  transition: width 0.3s;
  ::placeholder {
    color: rgba(34, 37, 54, 0.479);
    font-size: 14px;
  }
  :focus {
    width: 100%;
  }
`;

const SearchSubmit = styled.button`
  margin-left: 10px;
  background-color: transparent;
`;

export default Search;
