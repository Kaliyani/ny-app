import ArticlePage from "./views/ArticlesPage";
import DetailsPage from "./views/DetailsPage";
import ErrorPage from "../../common/views/ErrorPage";

export const ArticleRouterConfig = [
  {
    path: "/",
    element: <ArticlePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
    errorElement: <ErrorPage />,
  },
];
