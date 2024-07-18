import { createSelector } from "@reduxjs/toolkit";

const commonData = (state) => state.common;

const getShowLoader = createSelector(
  commonData,
  (commonData) => commonData.showLoader
);

export { getShowLoader };
