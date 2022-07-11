import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { Loading, MovieInfo, TabContent } from "../components";
import styled from "styled-components";
import { parse } from "parse5";

export default function Detail() {
  const [movie, setMovie] = useState<movieType>();
  const movieList = useSelector((state: RootState) => state.movieList.movies);
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<infoType>();
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [peopleImgs, setPeopleImgs] = useState<string[]>([]);

  useEffect(() => {
    const loadMovie: movieType | undefined = movieList.find((item) => {
      return item.id == id;
    });
    setMovie(loadMovie);
  }, []);

  useEffect(() => {
    if (movie) {
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
      const getPeopleImgs = (node: any) => {
        if (node.childNodes) {
          for (let i = 0; i < node.childNodes.length; i++) {
            if (node.attrs) {
              for (let attr of node.attrs) {
                if (attr.value === "thumb_people") {
                  return node;
                }
              }
            }
            const result: any = getPeopleImgs(node.childNodes[i]);
            if (result) {
              setPeopleImgs((peopleImgs) => peopleImgs.concat(result.childNodes[1].attrs[0].value));
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
          console.log(parse(text).childNodes[1]);
          const html = parse(text).childNodes[1];
          // const head =
          //   parse(text).childNodes[1].childNodes![2].childNodes[1].childNodes[27].childNodes[17].childNodes[1].childNodes[9]
          //     .childNodes[1];
          // const info =
          //   parse(text).childNodes[1].childNodes![2].childNodes[1].childNodes[27].childNodes[17].childNodes[1].childNodes[19];
          const enTitle = Text(getNodeByClass(html, "h_movie2"));
          const ntzrating = Text(getNodeByTag(getNodeByClass(getNodeByClass(html, "netizen_score"), "star_score"), "em"));
          const spcrating = Text(getNodeByTag(getNodeByClass(getNodeByClass(html, "special_score"), "star_score"), "em"));
          const synTitle = Text(getNodeByClass(getNodeByClass(html, "story_area"), "h_tx_story"));
          const synops = Text(getNodeByClass(getNodeByClass(html, "story_area"), "con_tx"));
          console.log(synops);
          const runtime = Text(getNodeByTag(getNodeByClass(html, "info_spec"), "span", 3));
          console.log(runtime);
          getPeopleImgs(html);

          setInfo({
            enTitle: enTitle!,
            ntzRating: ntzrating!,
            spcRating: spcrating!,
            synTitle: synTitle!,
            synops: synops!,
            runtime: runtime!,
            peopleImgs: peopleImgs,
          });
        })
        .then(() => {
          setIsLoad(true);
        })
        .catch((err) => {
          console.error(err);
          setIsLoad(true);
        });
    }
  }, [movie]);

  if (movie) {
    return (
      <>
        {isLoad ? (
          <Wrap>
            <MovieInfoWrap>
              <Poster src={movie.img} />
              <MovieInfo movie={movie} info={info} />
            </MovieInfoWrap>
            <TabContent movie={movie} info={info} />
          </Wrap>
        ) : (
          <Loading>영화 정보를 불러오는 중...</Loading>
        )}
      </>
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
  synTitle: string;
  synops: string;
  runtime: string;
  ntzRating: string;
  spcRating: string;
  peopleImgs: string[];
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

export const Poster = styled.img`
  src: ${(props) => props.src};
  width: 350px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.1);
`;
