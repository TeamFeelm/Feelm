import Slider from "react-slick";
import styled from "styled-components";
import { Poster } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import React, { useEffect, useState } from "react";

const MovieSlide = () => {
  const movieList = useSelector((state: RootState) => state.movieList);
  const [shuffle, setShuffle] = useState<movieType[]>([]);
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [sty, setSty] = useState<React.CSSProperties>();
  const moveEvent = (e: React.MouseEvent) => {
    setX(-(window.innerWidth / 2 - e.pageX) / 40);
    setY((window.innerHeight / 2 - e.pageY) / 20);
    //document.querySelector('.poster').setAttribute("style", "transform: rotateY(" + x + "deg) rotateX(" + y + "deg);");
    setSty({ transform: "rotateY(" + x + "deg) rotateX(" + y + "deg)" });
  };

  useEffect(() => {
    const copyList = [...movieList.movies];
    const shuffleAndCut = copyList.sort((el) => Math.random() - Math.random()).slice(-6);
    setShuffle(shuffleAndCut);
  }, [movieList]);

  return (
    <>
      <MovieBox onMouseMove={moveEvent}>
        <MovieSlider {...settings}>
          {shuffle.map((movie: movieType) => {
            return <Poster rotate={sty} src={movie.img} id={movie.id} key={movie.id}></Poster>;
          })}
        </MovieSlider>
      </MovieBox>
    </>
  );
};

interface movieType {
  id: string;
  title: string;
  genre: string[];
  synop: string;
  director: string;
  cast: string[];
  rating: string;
  runTime: number;
  year: number;
  img: string;
}

const MovieBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #be8b8b;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MovieSlider = styled(Slider)`
  width: 100%;
  display: inline-block;
  margin: 0;
  margin-top: 100px;
  z-index: 1000;
  .slick-dots {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .slick-dots li button:before {
    font-size: 18px;
    color: #0505be;
  }

  .slick-slide {
    background-color: black;
  }

  .slick-slide div {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .slick-slide div img {
    box-shadow: 0px 20px 80px 20px yellow;
    transition: transform 0.1s linear;
    border-radius: 20px;
    border: 1px solid black;
  }
`;

export default MovieSlide;
