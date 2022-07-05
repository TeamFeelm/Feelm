import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { TabContent } from "../components";
import styled from "styled-components";
import axios from "axios";
import cheerio from "cheerio";

export default function Detail() {
  const [movie, setMovie] = useState<movieType>();
  const movieList = useSelector((state: RootState) => state.movieList.movies);
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<infoType | undefined>();

  useEffect(() => {
    const loadMovie: movieType | undefined = movieList.find((item) => {
      return item.id == id;
    });
    setMovie(loadMovie);
  }, []);

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
        <MovieInfoWrap>
          <Poster src={movie.img} width={350} height={500} />
          <MovieInfo>
            <p>enTitle : {info?.enTitle}</p>
            <p>ntzRating : {info?.ntzRating}</p>
            <p>spcRating : {info?.spcRating}</p>
            <p>genre : {info?.genre}</p>
            <p>runtime : {info?.runtime}</p>
            <p>cast : {info?.cast}</p>
          </MovieInfo>
        </MovieInfoWrap>

        <TabContent movie={movie} info={info} />
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieInfo = styled.div``;

export const Poster = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
