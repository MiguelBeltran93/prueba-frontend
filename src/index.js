import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {Provider} from "react-redux";
import tasksReducer, {initialState} from "./reducer"
import TaskCreator from "./TaskCreator";
import {createStore} from "redux";
import TasksList from "./TasksList";
import { configureStore } from './store/store';

const store = configureStore();

//const store = createStore(tasksReducer, initialState)
ReactDOM.render(
  <Provider store={store}>
    <TaskCreator/>
    <TasksList/>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
