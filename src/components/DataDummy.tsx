import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../store";

export default function DataDummy() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const db = await axios.get("https://raw.githubusercontent.com/TeamFeelm/MovieList/master/movieList.json");
      dispatch(setMovies(db.data.movieList));
      console.log("데이터 로드 성공");
    })();
  }, []);

  return null;
}
