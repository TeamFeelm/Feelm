import styled from "styled-components";

export default function Footer({ height }: props) {
  return (
    <Foot height={height}>
      <a href="https://github.com/TeamFeelm/Feelm">
        <img src="/src/assets/images/feelm.png" alt="feelm" width={100} height={50} style={{ objectFit: "cover" }} />
      </a>
      <p>Copyright 2022. Feelm Co. all rights reserved.</p>
    </Foot>
  );
}

interface props {
  height: number;
}

interface footer {
  height: number;
}

const Foot = styled.div<footer>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: rgba(1, 5, 27, 1);
  color: white;
  font-size: 15px;
  text-align: center;
  transition: 0.3s all ease;
`;
