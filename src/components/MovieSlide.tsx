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
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const moveEvent = (e: React.MouseEvent) => {
    let x = -(window.innerWidth / 2 - e.pageX) / 10;
    let y = (window.innerWidth / 2 - e.pageY) / 30;
    (e.target as HTMLInputElement).setAttribute("style", "transform: rotateY(" + x + "deg) rotateX(" + y + "deg);");
  };

  return (
    <MovieBox>
      <MovieSlider {...settings}>
        {movieList.movies.map((movie) => {
          return (
            <div onMouseMove={moveEvent} key={movie.id}>
              <Poster src={movie.img} id={movie.id}></Poster>
            </div>
          );
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
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

export default MovieSlide;
