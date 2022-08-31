import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import scoreReducer  from "./score"
import colorReducer from "./color"

const store = configureStore({
  reducer: {
    score: scoreReducer,
    color: colorReducer
  } 
})
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
