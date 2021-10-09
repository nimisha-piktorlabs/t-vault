import safeReducer from "./safe/reducer";
import { createStore } from "redux";

const store = createStore(safeReducer);

export default store;
