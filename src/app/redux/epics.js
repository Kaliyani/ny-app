import { combineEpics } from "redux-observable";
import ArticlesEpic from "../../modules/articles/redux/epics";

export const rootEpic = combineEpics(...ArticlesEpic);
