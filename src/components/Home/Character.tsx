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

  useEffect(() => {
    if (home.page === 1) {
      setO(1);
    }
  }, [home.page]);

  return (
    <CharacterContainer>
      <CharacterBox>
        {TestResultData.map((item, i) => (
          <CharacterCard
            src={`/src/assets/characters/${item.img}`}
            key={i}
            delay={0.1 * i}
            opacity={o}
            onClick={() => navigate(`/test/result/${i}`)}
          />
        ))}
      </CharacterBox>

      <CharacterSlider {...settings}>
        {TestResultData.map((item, i) => (
          <img src={`/src/assets/characters/${item.img}`} key={i} onClick={() => navigate(`/test/result/${i}`)} />
        ))}
      </CharacterSlider>
    </CharacterContainer>
  );
}

interface props {
  delay: number;
  opacity: number;
}
interface temp {
  item: {
    id: number;
    genre: string[];
    name: string;
    img: string;
    title1: string;
    title2: string;
    hashtag: string[];
    detail1: string;
  };
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
