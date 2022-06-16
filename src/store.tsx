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
    findMoviesByValue(state, action: PayloadAction<string>) {
      const result = state.movies.filter(
        (item) =>
          item.title.includes(action.payload) ||
          item.genre.some((el) => el.includes(action.payload)) ||
          item.director.includes(action.payload) ||
          item.cast.toString().includes(action.payload),
      );
      state.result = result;
    },
    findMoviesByTag(state, action: PayloadAction<string>) {
      const result = state.movies.filter((item) => item.genre.some((el) => el == action.payload));
      state.result = result;
    },
  },
});
export const { setMovies, findMoviesByValue, findMoviesByTag } = movieList.actions;

// progress
const progressSlice = createSlice({
  name: "progress",
  initialState: { progress: 0, data: [{ id: 0, answer: [""] }], ansIdxArray: [] },
  reducers: {
    incrementProgress(state, action: PayloadAction<number>) {
      state.progress += action.payload;
      console.log("progress is " + state.progress);
    },
    decrementProgress(state, action: PayloadAction<number>) {
      if (state.progress > 0) {
        state.progress -= action.payload;
      } else {
        return;
      }
      console.log("progress is " + state.progress);
    },
    resetProgress(state) {
      state.progress = 0;
      console.log(state.progress);
    },
    saveAnsIdx(state, action: PayloadAction<number>) {
      state.ansIdxArray.push(action.payload);
      console.log(state.ansIdxArray.map((i) => i));
    },
    delLastAnsIdx(state) {
      state.ansIdxArray.splice(-1, 1);
      console.log(state.ansIdxArray.map((i) => i));
    },
  },
});

export const { incrementProgress, decrementProgress, resetProgress, saveAnsIdx, delLastAnsIdx } = progressSlice.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
    progress: progressSlice.reducer,
  },
});
export default store;
