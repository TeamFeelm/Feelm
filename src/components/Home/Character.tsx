import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Slider from "react-slick";

export default function Character() {
  const home = useSelector((state: RootState) => state.home);

  const [o, setO] = useState(0);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    adaptiveHeight: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    rows: 2,
    slidesPerRow: 2,
  };

  const imageArray = [
    "김태리.jpg",
    "납득이.png",
    "네드.jpg",
    "메리.jpg",
    "미아.jpg",
    "셜록.jpg",
    "애나벨.jpg",
    "오타쿠.jpg",
    "존윅.jpeg",
    "캡틴아메리카.jpg",
    "해리포터.jpeg",
    "형욱.jpg",
  ];

  useEffect(() => {
    if (home.page === 1) {
      setO(1);
    }
  }, [home.page]);

  return (
    <CharacterContainer>
      <CharacterBox>
        {imageArray.map((item, i) => (
          <CharacterCard src={`/src/assets/characters/${item}`} key={i} delay={0.1 * i} opacity={o} />
        ))}
      </CharacterBox>

      <CharacterSlider {...settings}>
        {imageArray.map((item, i) => (
          <img src={`/src/assets/characters/${item}`} key={i} />
        ))}
      </CharacterSlider>
    </CharacterContainer>
  );
}

interface props {
  delay: number;
  opacity: number;
}

const CharacterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
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
  background: black;
  margin: 0 10px 0 10px;
  object-fit: cover;
  opacity: ${(props) => props.opacity};
  transition-delay: ${(props) => props.delay}s;
  transition-duration: 1s;
`;

const CharacterSlider = styled(Slider)`
  width: 100%;
  height: 70%;
  display: inline-block;
  display: none;
  background-color: rgba(1, 5, 27, 1);
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
