//in reducer we define that how to perform an actions

import changeTheNumber from "./Updown";  //innthis file we define all actions n thr types

import { combineReducers } from "redux" ; //to combine multiple reducers 


const rootReducer = combineReducers({ // in rootReducer we combine all reducer file (hre only1 ispresent)
    changeTheNumber             // here we write names of reducers we want to combine
});

export default rootReducer;  // here we export that all comnbined files together to store.js