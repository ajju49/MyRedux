import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Store"
import {Provider} from "react-redux"

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(  //here we provided data of store to App component via Provider funtion , so data will be accessible to all nodes
  <React.StrictMode>
    <Provider store={store} >  
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


