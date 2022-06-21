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
  initialState: { progress: 0, data: [{ id: 0, answer: [""] }], ansIdxArray: [0] },
  reducers: {
    incrementProgress(state, action: PayloadAction<number>) {
      state.progress += action.payload;
      console.log("progress is " + state.progress);
    },
    decrementProgress(state, action: PayloadAction<number>) {
      if (state.progress > 0) {
        state.progress -= action.payload;
      }
      console.log("progress is " + state.progress);
    },
    resetProgress(state) {
      state.progress = 0;
      console.log(state.progress);
    },
    saveAnsIdx(state, action: PayloadAction<number>) {
      state.ansIdxArray = state.ansIdxArray.concat(action.payload);
      console.log(state.ansIdxArray);
    },
    delLastAnsIdx(state) {
      state.ansIdxArray = state.ansIdxArray.slice(0, state.ansIdxArray.length - 1);
      console.log(state.ansIdxArray);
    },
    resetAnsIdx(state) {
      state.ansIdxArray = [0];
    },
  },
});

export const { incrementProgress, decrementProgress, resetProgress, saveAnsIdx, delLastAnsIdx, resetAnsIdx } =
  progressSlice.actions;

// Home page
const homeSlice = createSlice({
  name: "home",
  initialState: { page: 0, transY: 0, innerHeight: 0, footer: 0 },
  reducers: {
    setInnerHeight(state, action: PayloadAction<number>) {
      state.innerHeight = action.payload;
    },
    pageDown(state) {
      if (state.page < 3) {
        state.page += 1;
      } else {
        state.footer = 200;
      }
    },
    pageUp(state) {
      if (state.page === 3 && state.footer > 0) {
        state.footer = 0;
      } else if (state.page > 0) {
        state.page -= 1;
      }
    },
    setTransY(state) {
      state.transY = state.page * state.innerHeight;
    },
  },
});
export const { setInnerHeight, pageDown, pageUp, setTransY } = homeSlice.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
    progress: progressSlice.reducer,
    home: homeSlice.reducer,
  },
});
export default store;
