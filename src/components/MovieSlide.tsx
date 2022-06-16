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
    dotsClass: "slick-dots",
    adaptiveHeight: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };
  /*const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [sty, setSty] = useState<React.CSSProperties>();
  const moveEvent = (e: React.MouseEvent) => {
    setX(-(window.innerWidth / 2 - e.pageX) / 40);
    setY((window.innerHeight / 2 - e.pageY) / 20);
    setSty({ transform: "rotateY(" + x + "deg) rotateX(" + y + "deg)" });
  };*/

  useEffect(() => {
    const copyList = [...movieList.movies];
    const shuffleAndCut = copyList.sort((el) => Math.random() - Math.random()).slice(-7);
    setShuffle(shuffleAndCut);
  }, [movieList]);

  return (
    <>
      <MovieSlider {...settings}>
        {shuffle.map((movie: movieType) => {
          return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
        })}
      </MovieSlider>
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

const MovieSlider = styled(Slider)`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  background-color: black;
  .slick-dots {
    position: absolute;
    top: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;

    .slick-active {
      button::before {
        color: #0505be;
        font-size: 21px;
      }
    }

    button::before {
      color: #8080d8;
      font-size: 21px;
      opacity: 0.7;
    }
  }

  .slick-slide {
    background-color: black;
    height: auto;
    div {
      width: 100%;
      height: 80vh;
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div img {
      box-shadow: 0px 10px 80px 10px #565656;
    }
  }
`;

export default MovieSlide;
