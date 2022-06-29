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
        <BsSearch size={"1.5em"} className="search_btn" />
      </SearchSubmit>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 75px auto 35px;
`;

const SearchValue = styled.input`
  width: 200px;
  height: 40px;
  margin-left: 35px;
  border-bottom: 1.5px solid #f5c443;
  font-family: "yg-jalnan";
  font-size: 18px;
  text-align: center;
  color: white;
  transition: all 0.3s;
  ::placeholder {
    color: lightgray;
    font-size: 14px;
    opacity: 1;
  }
  &:focus {
    width: 280px;
  }
`;

const SearchSubmit = styled.button`
  width: 40px;
  height: 40px;
  border-bottom: 1.5px solid #f5c443;
  .search_btn {
    color: #f5c443;
    opacity: 1;
  }
`;

export default Search;
