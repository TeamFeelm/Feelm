import { useState } from "react";
import styled from "styled-components";

export default function TeamComment() {
  const [member, setMember] = useState([
    { name: "재윤", comment: ["니하오마", "압살라이마이쿰", "싸와디캅"], img: "/src/assets/images/img01.jpg" },
    { name: "준용", comment: [""], img: "" },
    { name: "자경", comment: [""], img: "" },
    { name: "광훈", comment: [""], img: "" },
  ]);
  return (
    <B>
      <Ballon> {member[0].comment[Math.random() * member[0].comment.length]} </Ballon>
      <InnerBox>
        <Left>
          <Member>
            <img src={member[0].img} width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[0].name}</span>
          </Member>
          <Member>
            <img src="/src/assets/images/user.jpg" width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[1].name}</span>
          </Member>
        </Left>
        <Right>
          <Member>
            <img src="/src/assets/images/user.jpg" width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[2].name}</span>
          </Member>
          <Member>
            <img src="/src/assets/images/user.jpg" width={60} height={60} style={{ borderRadius: "9999px" }} />
            <span>{member[3].name}</span>
          </Member>
        </Right>
      </InnerBox>
    </B>
  );
}

const InnerBox = styled.div`
  width: 60vw;
  max-width: 800px;
  background-color: tomato;
  font-size: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Member = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
`;
const Left = styled.div`
  padding-bottom: 10vh;
`;

const Right = styled.div`
  padding-top: 15vh;
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

const Ballon = styled.div`
  position: absolute;
  display: block;
  width: 300px;
  height: 100px;
  margin-bottom: 300px;
  margin-left: 100px;
  background: white;
  border-radius: 15px;
`;
