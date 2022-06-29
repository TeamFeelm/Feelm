import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <a href="https://github.com/TeamFeelm/Feelm" target="_blank">
        <img src="/src/assets/images/feelm.png" alt="feelm" width={100} height={50} style={{ objectFit: "cover" }} />
      </a>
      <p>Copyright 2022. Feelm Co. all rights reserved.</p>
    </Foot>
  );
}

const Foot = styled.div`
  height: 105px;
  background-color: rgba(1, 5, 27, 1);
  color: white;
  font-size: 15px;
  text-align: center;
  transition: 0.3s all ease;
  font-family: "";
`;
