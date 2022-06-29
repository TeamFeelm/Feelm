import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { findMoviesByTag, RootState, resetTag } from "../../store";

const Tags = () => {
  const selectedTags = useSelector((state: RootState) => state.movieList.selectedTags);
  const dispatch = useDispatch();
  const hashTags = [
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
  ];
  const SelectTag = (hashTag: string) => (event: React.MouseEvent) => dispatch(findMoviesByTag(hashTag));
  return (
    <Box>
      {selectedTags.length > 1 ? (
        <Tag
          onClick={() => {
            dispatch(resetTag());
          }}
        >
          #전체
        </Tag>
      ) : (
        <Selected>#전체</Selected>
      )}
      {hashTags.map((hashTag, i) =>
        selectedTags.includes(hashTag) ? (
          <Selected key={i} onClick={SelectTag(hashTag)}>
            #{hashTag}
          </Selected>
        ) : (
          <Tag key={i} onClick={SelectTag(hashTag)}>
            #{hashTag}
          </Tag>
        ),
      )}
    </Box>
  );
};

const Tag = styled.span`
  width: auto;
  height: auto;
  color: #f5c443;
  background-color: rgb(1, 5, 27);
  box-shadow: #f5c443 0px 0px 2px 0;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
`;

const Selected = styled.span`
  width: auto;
  height: auto;
  background-color: #f5c443;
  box-shadow: #f5c443 0px 0px 2px 0;
  color: rgb(1, 5, 27);
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
