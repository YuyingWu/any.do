import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// reducers
import list from "../reducers/listReducer";
import item from "../reducers/itemReducer";

export default createStore(
    combineReducers({
        list,
        item
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);
