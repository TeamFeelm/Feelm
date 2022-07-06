import styled from "styled-components";

export default function TeamComment() {
  const member = [
    {
      name: "재윤",
      title: "<겟아웃>",
      comment: ["보는 내내 긴장감을 놓을 수 없는 공포 영화, 스토리의 몰입감을 중요시 한다면 추천!"],
      img: "https://user-images.githubusercontent.com/104556563/177113682-444fcbf5-3fb2-4f23-bfe2-683d0d141bf1.png",
    },
    {
      name: "준용",
      title: "<반딧불이의숲으로>",
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
      name: "병도",
      title: "<세상에서가장아름다운이별>",
      comment: ['울고 싶을 때 보는 영화, 대사가 사람의 마음을 울릴 수 있다는 것을 알게 해준 명작 "엄마, 사랑해"'],
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
              <CommentTitleL>{member[0].title}</CommentTitleL>
              {member[0].comment[0]}
            </CommentL>
          </Member>

          <Member>
            <img src={member[1].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[1].name}</span>
            <CommentL>
              <CommentTitleL>{member[1].title}</CommentTitleL>
              {member[1].comment[0]}
            </CommentL>
          </Member>
        </Left>

        <Right>
          <Member>
            <img src={member[2].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[2].name}</span>
            <CommentR>
              <CommentTitleR>{member[2].title}</CommentTitleR>
              {member[2].comment[0]}
            </CommentR>
          </Member>

          <Member>
            <img src={member[3].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[3].name}</span>
            <CommentR>
              <CommentTitleR>{member[3].title}</CommentTitleR>
              {member[3].comment[0]}
            </CommentR>
          </Member>
        </Right>
      </InnerBox>
    </B>
  );
}

const InnerBox = styled.div`
  width: 48vw;
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
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
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
  font-size: 40px;
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
  height: fit-content;
  text-align: left;
  padding: 5px 5px 5px 13px;
  font-size: 14px;
  line-height: 130%;
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
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const CommentR = styled.div`
  position: absolute;
  right: 93px;
  top: 28px;
  width: 25vw;
  height: fit-content;
  text-align: left;
  padding: 5px 5px 5px 13px;
  font-size: 14px;
  line-height: 130%;
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
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const CommentTitleL = styled.span`
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 17px;
  @media screen and (max-width: 480px) {
    top: -20px;
    font-size: 14px;
  }
`;

const CommentTitleR = styled.span`
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 17px;
  @media screen and (max-width: 480px) {
    top: -20px;
    font-size: 14px;
  }
`;
