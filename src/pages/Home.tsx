import { useSelector } from "react-redux";
import { RootState } from "../store";
import SearchPage from "./SearchPage";

export default function Home() {
  // const movieList = useSelector((state: RootState) => state.movieList);

  return (
    <>
      <SearchPage></SearchPage>
    </>
  );
}
