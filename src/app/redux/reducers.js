import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import ArticlesReducers from "../../modules/articles/redux/reducers";

const initialCommonState = {
  showLoader: false,
};

const CommonReducer = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    showLoader: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export const rootReducer = combineReducers({
  common: CommonReducer.reducer,
  articles: ArticlesReducers,
});

export const { showLoader } = CommonReducer.actions;
