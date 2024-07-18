import { createSlice } from "@reduxjs/toolkit";

const initialArticleState = {
  articlesData: [],
  error: false,
};

const ArticlesReducer = createSlice({
  name: "articles",
  initialState: initialArticleState,
  reducers: {
    articles: (state, action) => {
      state.articlesData = action.payload;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { articles, error } = ArticlesReducer.actions;
export default ArticlesReducer.reducer;
