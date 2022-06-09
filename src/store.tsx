import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
export type RootState = ReturnType<typeof store.getState>;

const movieList = createSlice({
  name: "movieList",
  initialState: {
    movies: [
      {
        id: "",
        title: "",
        genre: [""],
        synop: "",
        director: "",
        cast: [""],
        rating: "",
        runTime: 0,
        year: 0,
        img: "",
      },
    ],
    result: [
      {
        id: "",
        title: "",
        genre: [""],
        synop: "",
        director: "",
        cast: [""],
        rating: "",
        runTime: 0,
        year: 0,
        img: "",
      },
    ],
  },
  reducers: {
    setMovies(state, action: PayloadAction<[]>) {
      state.movies = action.payload;
      state.result = action.payload;
      console.log(state.movies);
    },
    findMovies(state, action: PayloadAction<string>) {
      const result = state.movies.filter(
        (item) =>
          item.title.includes(action.payload) ||
          item.genre.includes(action.payload) ||
          item.director.includes(action.payload) ||
          item.cast.toString().includes(action.payload),
      );
      state.result = result;
    },
  },
});
export const { setMovies, findMovies } = movieList.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
  },
});
export default store;
