import { createStore } from "redux";
import AllReducers from "./reducers";

//The created store
const store = createStore(AllReducers);

export default store;
