import styled from "styled-components";

export default function TeamComment() {
  const member = [
    { name: "재윤", comment: ["니하오마", "압살라이마이쿰", "싸와디캅"], img: "/src/assets/images/재윤.png" },
    { name: "준용", comment: [""], img: "/src/assets/images/준용.jpg" },
    { name: "자경", comment: [""], img: "/src/assets/images/자경.jpg" },
    { name: "광훈", comment: [""], img: "/src/assets/images/광훈.jpg" },
  ];
  return (
    <B>
      <InnerBox>
        <Left>
          <Member>
            <img src={member[0].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[0].name}</span>
            <CommentL></CommentL>
          </Member>
          <Member>
            <img src={member[1].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[1].name}</span>
            <CommentL></CommentL>
          </Member>
        </Left>
        <Right>
          <Member>
            <img src={member[2].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[2].name}</span>
            <CommentR></CommentR>
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
  background-color: tomato;
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
  background-color: tomato;
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
  border-radius: 15px;
  &:after {
    content: "";
    border-style: solid;
    border-width: 1.5px 38px 18px 0;
    border-color: transparent white;
    position: absolute;
    display: block;
    width: 0;
    top: 0;
    left: -20px;
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
  border-radius: 15px;
  &:after {
    content: "";
    border-style: solid;
    border-width: 1.5px 0px 18px 38px;
    border-color: transparent white;
    position: absolute;
    display: block;
    width: 0;
    top: 0;
    right: -20px;
  }
  @media screen and (max-width: 1200px) {
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;
