import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Home() {
  const movieList = useSelector((state: RootState) => state.movieList);

  return (
    <>
      <img
        src="https://movie.naver.com/movie/bi/mi/photoViewPopup.naver?movieCode=29268"
        alt=""
      />
      {movieList.map((a, i) => {
        return (
          <div key={a.id}>
            <img src={a.img} alt="" />
            <h4>{a.title}</h4>
          </div>
        );
      })}
    </>
  );
}
