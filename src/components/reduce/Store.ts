import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


export type RootReducerType=ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    counter:counterReducer

})




export const Store=createStore(rootReducer)