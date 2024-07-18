import { ajax } from "rxjs/ajax";

const defaultHeader = {
  "Content-Type": "application/json",
};

const apiURL = process.env.REACT_APP_API_URL;
const APP_TOKEN = process.env.REACT_APP_TOKEN;

const callAjax = (options) => ajax(options);

const callApi = ({ url, method, headers, body, ...others }) => {
  const apiOptions = {
    url: `${apiURL}/${url}?api-key=${APP_TOKEN}`,
    method,
    headers: headers || defaultHeader,
    body,
    ...others,
  };

  return {
    anonymous: () => callAjax(apiOptions),
    withAuth: () => {
      apiOptions.headers = {
        ...apiOptions.headers,
      };
      return callAjax(apiOptions);
    },
  };
};

export { callApi };
