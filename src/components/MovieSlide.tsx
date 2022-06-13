import Slider from "react-slick";
import styled from "styled-components";
import { Poster } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";

const MovieSlide = ({ className, isEvent }: propsType) => {
  const movieList = useSelector((state: RootState) => state.movieList);
  const copyList = movieList.movies.slice();
  const shuffleList = copyList.sort((el) => Math.random() - Math.random()).slice(-6);
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  const moveEvent = (e: React.MouseEvent) => {
    if (isEvent) {
      let x = -(window.innerWidth / 2 - e.pageX) / 15;
      let y = (window.innerHeight / 2 - e.pageY) / 5;
      (e.target as HTMLInputElement).setAttribute("style", "transform: rotateY(" + x + "deg) rotateX(" + y + "deg);");
    }
  };

  return (
    <MovieBox className={className}>
      <MovieSlider {...settings}>
        {shuffleList.map((movie) => {
          return (
            <div onMouseMove={moveEvent}>
              <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>
            </div>
          );
        })}
      </MovieSlider>
    </MovieBox>
  );
};

interface propsType {
  className: string;
  isEvent: boolean;
}

const MovieBox = styled.div`
  width: 100vw;
  height: 700px;
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
  .slick-dots {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .slick-dots li button:before {
    font-size: 18px;
    color: #0505be;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    background-color: black;
  }

  .slick-slide div {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

export default MovieSlide;
