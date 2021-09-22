import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { productSelectdReducer } from "./productReducer";

const reducers = combineReducers ({
    allProducts: productReducer,
    product: productSelectdReducer
});

export default reducers;