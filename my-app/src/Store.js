import { createStore } from "redux";  // here we creted a store with d help of createStore
import rootReducer from "./Reducers/Index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // rootReducer is const whuich we created in reducer file
//whr we stored our all reducers
// windows....  (ths link is to see all node creation process in redux devtools)
export default store;


// [  we have take that link from https://github.com/zalmoxisus/redux-devtools-extension#installation  ]