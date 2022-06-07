import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, RootState } from "../store";

export default function DataDummy() {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList);

  useEffect(() => {
    const getData = async () => {
      const db = await axios.get(
        "https://raw.githubusercontent.com/10004ok/dummyList/10004ok/movieList.json",
      );
      //.get("/api/movieList")
      dispatch(setMovies(db.data.movieList));
      console.log("데이터 로드 완료");
    };
    getData();
  }, []);

  return null;
}
