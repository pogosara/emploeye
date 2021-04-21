
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducerWorker} from "./reducerWorker";
import {reducerPagination} from "./reducerPagination";
import {reducerAUTH} from "./reducerAUTH";


const reducers = combineReducers({
    workers: reducerWorker,
    pagination: reducerPagination,
    auth: reducerAUTH
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

