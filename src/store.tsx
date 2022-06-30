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
    selectedTags: [""],
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
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter((item) => item != action.payload);
      } else {
        state.selectedTags = state.selectedTags.concat(action.payload);
      }
      if (state.selectedTags.length === 1) {
        state.result = state.movies;
      } else {
        state.result = state.movies.filter((item) => item.genre.some((el) => state.selectedTags.includes(el)));
      }
    },
    resetTag(state) {
      state.selectedTags = [""];
      state.result = state.movies;
    },
  },
});
export const { setMovies, findMoviesByValue, findMoviesByTag, resetTag } = movieList.actions;

// test-progress
const progressSlice = createSlice({
  name: "progress",
  initialState: { progress: 0, data: [{ id: 0, answer: [""] }], ansIdxArray: [0], testResultIdx: 0 },
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
      console.log("reset progress " + state.progress);
    },
    onChangeAnsIdx(state, action: PayloadAction<number>) {
      state.ansIdxArray = state.ansIdxArray.concat(action.payload);
      console.log("onChange ansIdxArray " + state.ansIdxArray);
    },
    delLastAnsIdx(state) {
      state.ansIdxArray = state.ansIdxArray.slice(0, state.ansIdxArray.length - 1);
      console.log("del last idx " + state.ansIdxArray);
    },
    resetAnsIdx(state) {
      state.ansIdxArray = [0];
      console.log("reset ansIdxArray " + state.ansIdxArray);
    },
    // test-result calculate part
    testResultCalc(state: any): any {
      let action = 0;
      let thriller = 0;
      let noir = 0;
      let drama = 0;
      let romance = 0;
      let sf = 0;
      let fantasy = 0;
      let comedy = 0;
      let war = 0;
      let anime = 0;
      let musical = 0;
      let sports = 0;

      const verygood = 2;
      const good = 1.12;
      const soso = 0.55;
      const bad = 0.25;
      const verybad = -0.85;

      // 질문 1번
      if (state.ansIdxArray[1] === 0) {
        noir += verygood;
        war += good;
        action += soso;
        sports += bad;
        romance += verybad;
        drama += verybad;
      } else if (state.ansIdxArray[1] === 1) {
        comedy += verygood;
        drama += soso;
        war += soso;
        musical += verybad;
      } else if (state.ansIdxArray[1] === 2) {
        romance += verygood;
        drama += verygood;
        thriller += good;
        action += verybad;
        noir += verybad;
        sports += verybad;
      }

      // 질문 2번
      if (state.ansIdxArray[2] === 0) {
        fantasy += verygood;
        anime += soso;
        sf += verybad;
      } else if (state.ansIdxArray[2] === 1) {
        sf += verygood;
        romance += soso;
      } else if (state.ansIdxArray[2] === 2) {
        action += verygood;
        thriller += soso;
      } else if (state.ansIdxArray[2] === 3) {
        anime += verygood;
        fantasy += soso;
      }

      // 질문 3번
      if (state.ansIdxArray[3] === 0) {
        drama += verygood;
        sports += soso;
        sf += verybad;
      } else if (state.ansIdxArray[3] === 1) {
        musical += verygood;
        war += soso;
      }

      // 질문 4번
      if (state.ansIdxArray[4] === 0) {
        comedy += verygood;
        musical += soso;
        sports += verybad;
      } else if (state.ansIdxArray[4] === 1) {
        fantasy += verygood;
        drama += soso;
      }

      // 질문 5번
      if (state.ansIdxArray[5] === 0) {
        noir += verygood;
        war += soso;
        anime += verybad;
      } else if (state.ansIdxArray[5] === 1) {
        thriller += verygood;
        noir += soso;
      }

      // 질문 6번
      if (state.ansIdxArray[6] === 0) {
        sf += verygood;
        drama += soso;
        thriller += verybad;
      } else if (state.ansIdxArray[6] === 1) {
        war += verygood;
        comedy += soso;
      }

      // 질문 7번
      if (state.ansIdxArray[7] === 0) {
        comedy += verygood;
        romance += soso;
        sports += verybad;
      } else if (state.ansIdxArray[7] === 1) {
        action += verygood;
        fantasy += soso;
      }

      // 질문 8번
      if (state.ansIdxArray[8] === 0) {
        drama += verygood;
        action += soso;
        anime += verybad;
      } else if (state.ansIdxArray[8] === 1) {
        musical += verygood;
        sf += soso;
      }
      const resultArr = [action, thriller, noir, drama, romance, sf, fantasy, comedy, war, anime, musical, sports];
      console.log(resultArr);

      state.testResultIdx = resultArr.findIndex((el) => el >= Math.max.apply(null, resultArr));
      console.log(state.testResultIdx);
    },
  },
});

export const { incrementProgress, decrementProgress, resetProgress, onChangeAnsIdx, delLastAnsIdx, resetAnsIdx, testResultCalc } =
  progressSlice.actions;

// Home page
const homeSlice = createSlice({
  name: "home",
  initialState: { page: 0, transY: 0, innerHeight: 0, footer: false, firstpage: false },
  reducers: {
    setInnerHeight(state, action: PayloadAction<number>) {
      state.innerHeight = action.payload;
    },
    pageDown(state) {
      if (state.page < 3) {
        state.page += 1;
      } else if (state.page === 3) {
        state.footer = true;
      }
    },
    pageUp(state) {
      if (state.page === 3 && state.footer === true) {
        state.footer = false;
      } else if (state.page > 0) {
        state.page -= 1;
      }
    },
    setTransY(state) {
      if (state.footer) {
        state.transY = state.page * state.innerHeight + 155;
      } else {
        state.transY = state.page * state.innerHeight;
      }
    },
    firstPage(state) {
      state.firstpage = true;
    },
  },
});
export const { setInnerHeight, pageDown, pageUp, setTransY, firstPage } = homeSlice.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
    progress: progressSlice.reducer,
    home: homeSlice.reducer,
  },
});
export default store;
