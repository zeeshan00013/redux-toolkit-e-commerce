import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "learning redux toolkit",
    content: "redux toolkit is a good state manage library...",
  },
  {
    id: "2",
    title: "learning redux",
    content: "redux is an old manage library.....",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
