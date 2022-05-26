/*-------------------------------------------
  라이브러리 import
-------------------------------------------*/
import { useState } from "react";
import styled from "styled-components";
/*-------------------------------------------
  컴퍼넌트 import
-------------------------------------------*/
import TabContent from "../components/tabContent";
/*-------------------------------------------
  컴퍼넌트
-------------------------------------------*/
const Detail = () => {
  const [tab, setTab] = useState(0)

    return (
        <>
          <ImgBox bg="blue">S P S P</ImgBox>
          <TabBox bg="white">
            <Tab onClick={ () => setTab(0)}>기본</Tab>
            <Tab onClick={ () => setTab(1)}>출연</Tab>
            <Tab onClick={ () => setTab(2)}>줄거리</Tab>
          </TabBox>
          <ContentBox>
            <TabContent tab={tab}    />
          </ContentBox>
        </>
    );
};

/*-------------------------------------------
    스타일드 컴퍼넌트- 프롭스 타입
-------------------------------------------*/
interface props {
  bg?: string;
  color?: string;
}
/*-------------------------------------------
    CSS
-------------------------------------------*/
const ImgBox = styled.div<props>`
  width: 40%;
  height: 500px;
  margin: auto;
  margin-top: 50px;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  font-size: 100px;
`
const TabBox = styled.div<props>`
  padding-top: 50px;
  margin: auto;
  width: 60%;
  height: 30px;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "white" ? "black" : "white")};
  border-bottom: 1px solid black;
`
const ContentBox = styled.div`
  padding: 20px;
  margin: auto;
  width: 60%;
`
const Tab = styled.span`
  padding: 20px;
  margin-right: 30px;
`

export default Detail;
