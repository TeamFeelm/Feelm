import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { findMovies } from "../store";

const Tags = () => {
  const dispatch = useDispatch();
  const [hashTags, setHashTags] = useState([
    "액션",
    "스릴러/호러",
    "SF",
    "로맨스",
    "판타지",
    "애니메이션",
    "성인",
    "코미디",
    "다큐멘터리",
    "드라마",
    "전쟁",
    "음악",
    "고어",
    "추리",
    "스포츠",
    "범죄",
  ]);
  const SelectTag = (hashTag: string) => (event: React.MouseEvent) =>
    dispatch(findMovies(hashTag));
  return (
    <Box>
      {hashTags.map((hashTag, i) => (
        <Tag key={i} onClick={SelectTag(hashTag)}>
          #{hashTag}
        </Tag>
      ))}
    </Box>
  );
};

const Tag = styled.span`
  width: auto;
  height: auto;
  background-color: black;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
  height: 200px;
  margin: 30px;
`;
export default Tags;
