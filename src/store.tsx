/*-------------------------------------------
    라이브러리 Import
-------------------------------------------*/
import { configureStore, createSlice } from "@reduxjs/toolkit";
/*-------------------------------------------
    스테이트 정의
-------------------------------------------*/
/* 예시 */
const user = createSlice({
  name: "user",
  initialState: { id: "", img: "" },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      if (action.payload.img) {
        state.img = action.payload.img;
      } else {
        state.img = "default.jpg";
      }
    },
  },
});
export const { setUser } = user.actions;

/* 예시 */
const myPost = createSlice({
  name: "myPost",
  initialState: [
    {
      number: 0,
      id: "",
      title: "",
      content: "",
      date: "",
      like: 3,
      reply: false,
    },
    {
      number: 0,
      id: "",
      title: "",
      content: "",
      date: "",
      like: 3,
      reply: false,
    },
  ],
  reducers: {
    setMyPost(state, action) {
      return (state = action.payload);
    },
    setMyLike(state, action) {
      state[action.payload].like++;
    },
    setMySwitch(state, action) {
      state[action.payload].reply = !state[action.payload].reply;
    },
  },
});
export const { setMyPost, setMyLike, setMySwitch } = myPost.actions;

/*-------------------------------------------
    스테이드 등록 및 내보내기
-------------------------------------------*/
const store = configureStore({
  reducer: {
    user: user.reducer,
    myPost: myPost.reducer,
  },
});
export default store;

/* useSelector => State 타입스크립트 */
export type RootState = ReturnType<typeof store.getState>;
