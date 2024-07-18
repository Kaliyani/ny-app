import { createSelector } from "@reduxjs/toolkit";

const articlesState = (state) => state?.articles;

const getArticles = createSelector(
  articlesState,
  (articlesState) => articlesState?.articlesData
);

const getError = createSelector(
  articlesState,
  (articlesState) => articlesState?.error
);

export { getArticles, getError };
