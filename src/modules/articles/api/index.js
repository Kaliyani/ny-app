import { callApi } from "../../../@helper";

const getArticlesAPi = () => {
  return callApi({
    method: "GET",
    url: "7.json",
  }).anonymous();
};

export { getArticlesAPi };
