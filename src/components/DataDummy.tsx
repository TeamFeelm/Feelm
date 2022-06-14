import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, RootState } from "../store";

export default function DataDummy() {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList.movies);

  useEffect(() => {
    (async () => {
      const db = await axios.get("https://raw.githubusercontent.com/10004ok/dummyList/10004ok/movieList.json");
      dispatch(setMovies(db.data.movieList));
      console.log("데이터 로드 성공");
    })();
  }, []);

  return null;
}
