import { combineReducers } from "redux";
import isLoading from "./Loading";
import genre from "./Genre";
import sort from "./SortMovie";
import myMovie from "./MyMovie";

export default combineReducers({
  isLoading,
  genre,
  sort,
  myMovie
});
