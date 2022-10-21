import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import posts from "./modules/posts";

const rootReducer = combineReducers({
    posts
});

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof rootReducer>;
export default store;