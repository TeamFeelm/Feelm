import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Slider from "react-slick";
import { TestResultData } from "..";
import { useNavigate } from "react-router-dom";

export default function Character() {
  const home = useSelector((state: RootState) => state.home);
  const [o, setO] = useState(0);
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(0);
  const [display, setDisplay] = useState("block");

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    adaptiveHeight: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    rows: 2,
    slidesPerRow: 2,
  };

  useEffect(() => {
    if (home.page === 1) {
      setO(1);
      setOpacity(1);
      setTimeout(() => {
        setOpacity(0);
      }, 1500);
      setTimeout(() => {
        setDisplay("none");
      }, 3000);
    }
  }, [home.page]);

  return (
    <CharacterContainer>
      <CharacterOverlay opacity={opacity} display={display}>
        <CharacterOverlayText>당신의 성향에 맞는 캐릭터를 찾아보세요!</CharacterOverlayText>
      </CharacterOverlay>
      <CharacterBox>
        {TestResultData.map((item, i) => (
          <CharacterCard src={item.img} key={i} delay={0.1 * i} opacity={o} onClick={() => navigate(`/test/result/${i}`)} />
        ))}
      </CharacterBox>

      <CharacterSlider {...settings}>
        {TestResultData.map((item, i) => (
          <img src={item.img} key={i} onClick={() => navigate(`/test/result/${i}`)} />
        ))}
      </CharacterSlider>
    </CharacterContainer>
  );
}

interface props {
  delay: number;
  opacity: number;
}

interface overlay {
  opacity: number;
  display: string;
}

const CharacterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
`;

const CharacterOverlay = styled.div<overlay>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${(overlay) => overlay.opacity};
  display: ${(overlay) => overlay.display};
  transition-duration: 1.5s;
`;

const CharacterOverlayText = styled.h1`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: #f5c443;
  @media screen and (max-width: 1200px) {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 50px;
  }
`;

const CharacterBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const CharacterCard = styled.img<props>`
  width: 15%;
  height: 40%;
  background: #050e39;
  margin: 0 10px 0 10px;
  object-fit: cover;
  opacity: ${(props) => props.opacity};
  transition-delay: ${(props) => props.delay}s;
  transition-duration: 1s;
  cursor: pointer;
`;

const CharacterSlider = styled(Slider)`
  width: 100%;
  height: 70%;
  display: inline-block;
  display: none;
  background-color: rgb(8, 14, 47);
  .slick-slide {
    width: 100%;
    height: 800px;
    div {
      width: 600px;
      height: 300px;
      margin: auto;
    }
    div img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 10px;
    }
  }
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
