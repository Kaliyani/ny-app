import { executeEpic } from "../../../@helper";
import { getArticlesAPi } from "../api";
import { showLoader } from "../../../app/redux/reducers";
import { articles } from "./reducers";
import { getArticlesAction } from "./actoins";

const getUserDetailsEpic = (action$) =>
  executeEpic(
    getArticlesAction,
    getArticlesAPi,
    (responseData) => [articles(responseData.response)],
    () => [showLoader(false)]
  )(action$);

export default [getUserDetailsEpic];
