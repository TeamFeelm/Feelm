import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { findMoviesByTag } from "../../store";

const Tags = () => {
  const dispatch = useDispatch();
  const [hashTags, setHashTags] = useState([
    "전체",
    "액션",
    "스릴러",
    "호러",
    "SF",
    "로맨스",
    "판타지",
    "애니메이션",
    "성인",
    "코미디",
    "다큐멘터리",
    "모험",
    "드라마",
    "전쟁",
    "음악",
    "고어",
    "추리",
    "스포츠",
    "범죄",
    "미스테리",
  ]);
  const SelectTag = (hashTag: string) => (event: React.MouseEvent) => dispatch(findMoviesByTag(hashTag));
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
  background-color: white;
  color: rgba(1, 5, 27, 1);
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
`;

const Box = styled.div`
  width: 80%;
  height: fit-content;
  margin: auto;
  margin-top: 30px;
`;
export default Tags;
