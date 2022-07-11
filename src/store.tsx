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
    },
    decrementProgress(state, action: PayloadAction<number>) {
      if (state.progress > 0) {
        state.progress -= action.payload;
      }
    },
    resetProgress(state) {
      state.progress = 0;
    },
    onChangeAnsIdx(state, action: PayloadAction<number>) {
      state.ansIdxArray = state.ansIdxArray.concat(action.payload);
    },
    delLastAnsIdx(state) {
      state.ansIdxArray = state.ansIdxArray.slice(0, state.ansIdxArray.length - 1);
    },
    resetAnsIdx(state) {
      state.ansIdxArray = [0];
    },
    // test-result calculate part
    testResultCalc(state) {
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

      const verygood = 1.52;
      const good = 1.12;
      const soso = 0.55;
      const notbad = 0.25;
      const bad = -0.3;
      const verybad = -0.85;

      // 질문 1번
      if (state.ansIdxArray[1] === 0) {
        noir += verygood;
        war += soso;
        action += notbad;
        romance += bad;
      } else if (state.ansIdxArray[1] === 1) {
        comedy += verygood;
        sports += good;
        war += soso;
        anime += notbad;
        fantasy += notbad;
        noir += bad;
      } else if (state.ansIdxArray[1] === 2) {
        romance += verygood;
        drama += verygood;
        musical += notbad;
        thriller += verybad;
        action += verybad;
      }
      // 질문 2번
      if (state.ansIdxArray[2] === 0) {
        fantasy += good;
        comedy += good;
        action += soso;
        romance += soso;
        sf += soso;
      } else if (state.ansIdxArray[2] === 1) {
        drama += good;
        romance += soso;
        musical += soso;
      } else if (state.ansIdxArray[2] === 2) {
        action += good;
        thriller += soso;
        noir += good;
        anime += soso;
      } else if (state.ansIdxArray[2] === 3) {
        sports += good;
        musical += soso;
        sf += soso;
      }

      // 질문 3번
      if (state.ansIdxArray[3] === 0) {
        sports += soso;
        musical += soso;
      } else if (state.ansIdxArray[3] === 1) {
        fantasy += verygood;
        sf += good;
        anime += good;
        action += notbad;
        thriller += notbad;
      } else if (state.ansIdxArray[3] === 2) {
        drama += soso;
        romance += soso;
        comedy += notbad;
      }

      // 질문 4번
      if (state.ansIdxArray[4] === 0) {
        thriller += good;
        noir += good;
        sf += soso;
        sports += soso;
      } else if (state.ansIdxArray[4] === 1) {
        comedy += good;
        anime += good;
        musical += soso;
        romance += soso;
      } else if (state.ansIdxArray[4] === 2) {
        action += good;
        war += good;
        fantasy += good;
        drama += soso;
        comedy += bad;
      }

      // 질문 5번
      if (state.ansIdxArray[5] === 0) {
        noir += bad;
        thriller += bad;
        sf += bad;
        sports += bad;
        action += bad;
      } else if (state.ansIdxArray[5] === 1) {
        drama += bad;
        romance += bad;
        fantasy += bad;
        anime += bad;
      }

      // 질문 6번
      if (state.ansIdxArray[6] === 0) {
        anime += good;
        musical += soso;
        fantasy += soso;
        romance += notbad;
        comedy += notbad;
      } else if (state.ansIdxArray[6] === 1) {
        drama += good;
        action += soso;
        romance += soso;
        sf += notbad;
        musical += notbad;
      }

      // 질문 7번
      if (state.ansIdxArray[7] === 0) {
        comedy += verygood;
        action += good;
        musical += soso;
      } else if (state.ansIdxArray[7] === 1) {
        noir += good;
        thriller += good;
        action += notbad;
      } else if (state.ansIdxArray[7] === 2) {
        fantasy += verygood;
        sf += good;
        war += good;
        sports += soso;
      }

      // 질문 8번
      if (state.ansIdxArray[8] === 0) {
        noir += good;
        anime += good;
        thriller += soso;
        war += soso;
        sf += soso;
      } else if (state.ansIdxArray[8] === 1) {
        fantasy += good;
        war += soso;
        musical += soso;
        romance += notbad;
      } else if (state.ansIdxArray[8] === 2) {
        drama += good;
        sports += good;
        comedy += soso;
      } else if (state.ansIdxArray[8] === 3) {
        comedy += verygood;
        noir += notbad;
      }

      // 질문 9번
      if (state.ansIdxArray[9] === 0) {
        noir += soso;
        thriller += soso;
        action += soso;
      } else if (state.ansIdxArray[9] === 1) {
        romance += soso;
        drama += soso;
        fantasy += soso;
      } else if (state.ansIdxArray[9] === 2) {
        comedy += soso;
        musical += soso;
        sf += soso;
      } else if (state.ansIdxArray[9] === 3) {
        anime += soso;
        sports += soso;
        war += soso;
      }

      // 질문 10번
      if (state.ansIdxArray[10] === 0) {
      } else if (state.ansIdxArray[10] === 1) {
      }

      const resultArr = [action, thriller, noir, drama, romance, sf, fantasy, comedy, war, anime, musical, sports];

      state.testResultIdx = resultArr.findIndex((el) => el >= Math.max.apply(null, resultArr));
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
  devTools: false,
});
export default store;
