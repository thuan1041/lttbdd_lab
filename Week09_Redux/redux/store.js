import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
var store = createStore(reducer);
export default store;
