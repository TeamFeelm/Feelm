import styled from "styled-components";

export default function TeamComment() {
  const member = [
    {
      name: "재윤",
      title: "",
      comment: ["니하오마", "압살라이마이쿰", "싸와디캅"],
      img: "https://user-images.githubusercontent.com/104556563/177113682-444fcbf5-3fb2-4f23-bfe2-683d0d141bf1.png",
    },
    {
      name: "준용",
      title: "<반딧불이의 숲으로>",
      comment: [" 보고있으면 마음이 평온해지고 힐링되는 영화, 짧은 러닝타임 또한 장점!"],
      img: "https://user-images.githubusercontent.com/104556563/177113699-7feafbc1-e239-4f57-94e1-520c1a8bc4c2.jpg",
    },
    {
      name: "자경",
      title: "<기생충>",
      comment: [
        "여러 영화 장르의 분위기를 한 영화에 집약한 느낌을 받을 수 있다, 후반부로 갈수록 긴장감이 짙어져 러닝타임 내내 지루하지 않았음",
      ],
      img: "https://user-images.githubusercontent.com/104556563/177113722-9c950ac4-9289-492b-8885-2385d882c035.jpg",
    },
    {
      name: "광훈",
      title: "",
      comment: [""],
      img: "https://user-images.githubusercontent.com/104556563/177113751-67d7a638-b1c1-470e-9e83-22517de0f902.jpg",
    },
  ];
  return (
    <B>
      <InnerBox>
        <Left>
          <Member>
            <img src={member[0].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[0].name}</span>
            <CommentL>
              <span>{member[0].title}</span>
              <CommentText>{member[0].comment[0]}</CommentText>
            </CommentL>
          </Member>

          <Member>
            <img src={member[1].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[1].name}</span>
            <CommentL>
              <CommentTitleL>{member[1].title}</CommentTitleL>
              <CommentText>{member[1].comment[0]}</CommentText>
            </CommentL>
          </Member>
        </Left>

        <Right>
          <Member>
            <img src={member[2].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[2].name}</span>
            <CommentR>
              <CommentTitleR>{member[2].title}</CommentTitleR>
              <CommentText>{member[2].comment[0]}</CommentText>
            </CommentR>
          </Member>

          <Member>
            <img src={member[3].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[3].name}</span>
            <CommentR></CommentR>
          </Member>
        </Right>
      </InnerBox>
    </B>
  );
}

const InnerBox = styled.div`
  width: 48vw;
  font-size: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1200px) {
    width: 65vw;
  }
  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`;

const Member = styled.div`
  margin: auto;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
  position: relative;
  color: black;
`;
const Left = styled.div`
  padding-bottom: 10vh;
`;

const Right = styled.div`
  padding-top: 14vh;
`;

const B = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5c443;
  font-size: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 35vh;
`;

const CommentL = styled.div`
  position: absolute;
  left: 93px;
  top: 28px;
  width: 25vw;
  height: 75px;
  background-color: white;
  border-radius: 12px;
  &:after {
    content: "";
    border-style: solid;
    border-width: 0 16px 9px 0;
    border-color: transparent white;
    position: absolute;
    display: block;
    width: 0;
    top: 9px;
    left: -16px;
  }
  @media screen and (max-width: 1200px) {
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;

const CommentR = styled.div`
  position: absolute;
  right: 93px;
  top: 28px;
  width: 25vw;
  height: 75px;
  background-color: white;
  border-radius: 12px;
  &:after {
    content: "";
    border-style: solid;
    border-width: 0 0px 9px 16px;
    border-color: transparent white;
    position: absolute;
    display: block;
    width: 0;
    top: 9px;
    right: -16px;
  }
  @media screen and (max-width: 1200px) {
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;

const CommentText = styled.p`
  margin: 10px;
  line-height: 120%;
  font-size: 15px;
  font-weight: lighter;
  text-align: left;
`;

const CommentTitleL = styled.span`
  position: absolute;
  top: -25px;
  left: 0;
`;

const CommentTitleR = styled.span`
  position: absolute;
  top: -25px;
  right: 0;
`;
