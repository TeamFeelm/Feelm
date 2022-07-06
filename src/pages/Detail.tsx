import { useEffect, useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { Loading } from "../components";
import styled from "styled-components";
import { parse } from "parse5";

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
      /*axios
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
        });*/
      // 태그네임으로 찾기(탐색노드, 탐색태그, 몇번째)-n은 부모노드에서만 사용할 것
      const getNodeByTag = (node: any, tag: string, n: number = 1): any => {
        let count = 0;
        if (node.childNodes) {
          for (let i = 0; i < node.childNodes.length; i++) {
            if (node.tagName === tag) {
              return node;
            }
            const result: any = getNodeByTag(node.childNodes[i], tag);
            if (result) {
              count++;
              if (count === n) {
                return result;
              }
            }
          }
        }

        return null;
      };
      // 클래스네임으로 찾기(탐색노드, 클래스네임)-첫번째 대상을 반환함
      const getNodeByClass = (node: any, className: string) => {
        if (node.childNodes) {
          for (let i = 0; i < node.childNodes.length; i++) {
            if (node.attrs) {
              for (let attr of node.attrs) {
                if (attr.value === className) {
                  return node;
                }
              }
            }
            const result: any = getNodeByClass(node.childNodes[i], className);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };
      // 텍스트노드만 찾아서 String으로 반환
      const Text = (node: any) => {
        if (node) {
          let result = "";
          for (let child of node.childNodes) {
            if (child.value) {
              result += child.value;
            }
          }
          return result;
        }
        return null;
      };
      fetch(`https://cors-iwytbbtss.herokuapp.com/https://movie.naver.com/movie/bi/mi/basic.naver?code=${movie?.id}`)
        .then((res) => res.text())
        .then((text) => {
          const head =
            parse(text).childNodes[1].childNodes![2].childNodes[1].childNodes[27].childNodes[17].childNodes[1].childNodes[9]
              .childNodes[1];
          const info =
            parse(text).childNodes[1].childNodes![2].childNodes[1].childNodes[27].childNodes[17].childNodes[1].childNodes[19];
          const enTitle = Text(getNodeByClass(head, "h_movie2"));
          const ntzrating = Text(getNodeByTag(getNodeByClass(getNodeByClass(info, "netizen_score"), "star_score"), "em"));
          const spcrating = Text(getNodeByTag(getNodeByClass(getNodeByClass(info, "special_score"), "star_score"), "em"));
          const synTitle = Text(getNodeByClass(getNodeByClass(info, "story_area"), "h_tx_story"));
          const synops = Text(getNodeByClass(getNodeByClass(info, "story_area"), "con_tx"));
          const runtime = Text(
            getNodeByTag(getNodeByTag(getNodeByTag(getNodeByClass(head, "info_spec"), "dd", 1), "p"), "span", 3),
          );
          const grade = Text(getNodeByTag(getNodeByTag(getNodeByTag(getNodeByClass(head, "info_spec"), "dd", 4), "p"), "a", 1));
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
