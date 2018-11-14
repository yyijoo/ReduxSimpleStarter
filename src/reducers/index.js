import { combineReducers } from "redux";
import Articles from "./reducer_articles";

const rootReducer = combineReducers({
  articles: Articles
});

export default rootReducer;

// state = {
//   articles: [
//     {
//       writer: "jooyeon",
//       title: "hi",
//       content: "my name is jooyeon"
//     },
//     {
//       writer: "meonyong",
//       title: "bye",
//       content: "your name is jooyeon"
//     }

// }
