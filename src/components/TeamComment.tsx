import { useState } from "react";
import styled from "styled-components";
import { Box } from "../pages/Home";

export default function TeamComment() {
  const [member, setMember] = useState([
    { name: "재윤", comment: [""] },
    { name: "준용", comment: [""] },
    { name: "자경", comment: [""] },
    { name: "광훈", comment: [""] },
  ]);
  return (
    <B>
      <Left>
        <Member>
          <img src="/src/assets/images/user.jpg" width={60} height={60} style={{ borderRadius: "9999px" }} />
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
    </B>
  );
}

const Member = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
`;
const Left = styled.div`
  transform: translateX(100%);
`;
const Right = styled.div`
  transform: translateX(-100%);
`;

const B = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: tomato;
  font-size: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 400px;
`;
