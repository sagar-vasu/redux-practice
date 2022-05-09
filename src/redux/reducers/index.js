import {combineReducers} from "redux"

import AuthReducer from "./authReducer";

const allReducers = combineReducers({
    AuthReducer,
});

export default allReducers