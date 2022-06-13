import Slider from "react-slick";
import styled from "styled-components";
import { Poster } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const MovieSlide = () => {
  const movieList = useSelector((state: RootState) => state.movieList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <MovieBox>
      <MovieSlider {...settings}>
        {movieList.movies.map((movie) => {
          return <Poster src={movie.img} id={movie.id} key={movie.id}></Poster>;
        })}
      </MovieSlider>
    </MovieBox>
  );
};

const MovieBox = styled.div`
  width: 100vw;
  height: 700px;
  background-color: white;
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
    background-color: red;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    background-color: white;
  }

  .slick-slide div {
    margin: 0;
  }
`;

export default MovieSlide;
