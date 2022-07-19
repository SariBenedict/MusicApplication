import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, legacy_createStore ,compose, applyMiddleware} from 'redux';
import { reducer } from './redux/reducer';
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type RootState = ReturnType<typeof store.getState>

const store = createStore(
  
  combineReducers({sng: reducer }) ,
  applyMiddleware(thunk),
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>
     
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// function composeEnhancers() {
//   throw new Error('Function not implemented.');
// }

