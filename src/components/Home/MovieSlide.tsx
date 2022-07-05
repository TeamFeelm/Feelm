import Slider from "react-slick";
import styled from "styled-components";
import { Poster } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";

const MovieSlide = ({ slide }: props) => {
  const movieList = useSelector((state: RootState) => state.movieList);
  const [slice, setSlice] = useState<movieType[]>([]);
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    adaptiveHeight: false,
    infinite: true,
    speed: 600,
    slidesToShow: slide,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    setSlice(movieList.movies.slice(-7));
  }, [movieList]);

  return (
    <>
      <MovieSlider {...settings}>
        {slice.map((movie: movieType) => {
          return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
        })}
      </MovieSlider>
    </>
  );
};

interface props {
  slide: number;
}
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
  .slick-dots {
    position: absolute;
    top: 10vh;
    height: 30px;
    z-index: 1000;

    .slick-active {
      button::before {
        color: #f5c443;
        font-size: 21px;
        opacity: 1;
      }
    }

    button::before {
      color: #f5c443;
      font-size: 21px;
      opacity: 0.5;
    }
  }

  .slick-slide {
    background-color: rgb(8, 14, 46);
    height: auto;
    div {
      width: 100%;
      padding-top: 20vh;
      padding-bottom: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div img {
      box-shadow: 0px 0px 80px 10px #565656;
    }
  }
`;

export default MovieSlide;
