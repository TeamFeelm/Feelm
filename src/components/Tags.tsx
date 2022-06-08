import { useState } from "react";
import styled from "styled-components";

const Tags = () => {
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
  const SelectTag = () => {
    // 현재데이터 변경
  };
  return (
    <Box>
      {hashTags.map((hashTag, i) => (
        <Tag key={i}>#{hashTag}</Tag>
      ))}
    </Box>
  );
};

const Tag = styled.span`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  margin-left: 10px;
  padding: 5px 10px;
`;

const Box = styled.div`
  width: 80vw;
  height: 200px;
  margin: auto;
`;
export default Tags;
