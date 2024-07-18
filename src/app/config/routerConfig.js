import { createBrowserRouter } from "react-router-dom";
import { ArticleRouterConfig } from "../../modules/articles/articleRouter";

const router = createBrowserRouter([...ArticleRouterConfig]);

export { router };
