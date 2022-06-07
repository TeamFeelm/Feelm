import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Home() {
  const movieList = useSelector((state: RootState) => state.movieList);

  return (
    <>
      {movieList.map((a, i) => {
        return (
          <div key={a.id}>
            {/* <img src={a.img} alt="왓더" /> */}
            <h4>{a.title}</h4>
          </div>
        );
      })}
    </>
  );
}
