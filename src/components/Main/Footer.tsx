import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <a href="https://github.com/TeamFeelm/Feelm" target="_blank">
        <img
          src="https://user-images.githubusercontent.com/104556563/177113230-afb5f872-2161-4edd-9290-999840abc0b0.png"
          alt="feelm"
          width={100}
          height={50}
          style={{ objectFit: "cover" }}
        />
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
