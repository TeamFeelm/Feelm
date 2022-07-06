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
      <SlideTitle>추천 영화를 만나보세요!</SlideTitle>
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

const SlideTitle = styled.div`
  text-align: center;
  font-size: 2.3em;
  color: #f5c443;
  width: 100vw;
  height: 15vh;
  line-height: 20vh;
  @media screen and (max-width: 480px) {
    font-size: 1.6em;
  }
`;

const MovieSlider = styled(Slider)`
  width: 100vw;
  height: 85vh;
  display: inline-block;
  .slick-dots {
    position: absolute;
    bottom: 10vh;
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
      padding-top: 7vh;
      padding-bottom: 7vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div img {
      box-shadow: 0px 0px 7vh 10px #565656;
    }
  }

  @media screen and (max-width: 480px) {
    height: 80vh;
  }
`;

export default MovieSlide;
