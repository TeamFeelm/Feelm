import { useEffect, useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { Loading } from "../components";
import styled from "styled-components";
import axios from "axios";
import cheerio from "cheerio";

export default function Detail() {
  const [movie, setMovie] = useState<movieType>();
  const movieList = useSelector((state: RootState) => state.movieList.movies);
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<infoType | undefined>();
  const [delayTime, setDelayTime] = useState(1500);

  useEffect(() => {
    const loadMovie: movieType | undefined = movieList.find((item) => {
      return item.id == id;
    });
    setMovie(loadMovie);
  }, []);

  const MovieInfo = lazy(() => {
    const comp = import("../components/Detail/MovieInfo");
    const delay = new Promise((resolve) => setTimeout(resolve, delayTime));

    return Promise.all([comp, delay]).then(([moduleExports]) => moduleExports);
  });

  const TabContent = lazy(() => {
    const comp = import("../components/Detail/TabContent");
    const delay = new Promise((resolve) => setTimeout(resolve, delayTime));

    return Promise.all([comp, delay]).then(([moduleExports]) => moduleExports);
  });
  // lazy 컴포넌트를 2개 만들어서 로딩이 2회 걸림, 수정필요

  useEffect(() => {
    if (movie) {
      axios
        .get(`https://cors-iwytbbtss.herokuapp.com/https://movie.naver.com/movie/bi/mi/basic.naver?code=${movie?.id}`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          const enTitle = $(".mv_info > .h_movie2");
          const story = $(".story_area");
          const lines = $(".lines").find("li:first-child strong");
          const outline = $(".step1 + dd");
          const grade = $(".step4 + dd");
          const peopleImg: string[] = [];
          const ntzRating = $(".netizen_score").find(".star_score > em");
          const spcRating = $(".special_score").find(".star_score > em");
          const genre = $(".step1 + dd").find("p > span:first-child");
          const cast = $(".step3 + dd").find("p");
          $(".people > ul > li").each((idx, el) => {
            peopleImg[idx] = $(el).find("img").attr("src")!;
          });

          setInfo({
            enTitle: enTitle.text(),
            title: story.find(".h_tx_story").text(),
            synops: story.find(".con_tx").text(),
            lines: lines.text(),
            runtime: outline.find("span:nth-of-type(3)").text(),
            grade: grade.find("a:nth-of-type(1)").text(),
            peopleImg: peopleImg,
            ntzRating: ntzRating.text(),
            spcRating: spcRating.text(),
            genre: genre.text(),
            cast: cast.text(),
          });
        });
    }
  }, [movie]);

  if (movie) {
    return (
      <Wrap>
        <Suspense fallback={<Loading />}>
          <MovieInfoWrap>
            <Poster src={movie.img} />
            <MovieInfo movie={movie} info={info} />
          </MovieInfoWrap>
          <TabContent movie={movie} info={info} />
        </Suspense>
      </Wrap>
    );
  }
  return null;
}

interface movieType {
  id: string;
  title: string;
  genre: string[];
  synop: string;
  director: string;
  cast: string[];
  runTime: number;
  year: number;
  img: string;
}

interface infoType {
  enTitle: string;
  title: string;
  synops: string;
  lines: string;
  runtime: string;
  grade: string;
  peopleImg: string[];
  ntzRating: string;
  spcRating: string;
  genre: string;
  cast: string;
}

export const Wrap = styled.div`
  width: 100vw;
`;

export const MovieInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const MovieInfo = styled.div`
  width: 22.5%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Poster = styled.img`
  src: ${(props) => props.src};
  width: 350px;
  height: 500px;
`;
