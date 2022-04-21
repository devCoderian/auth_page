import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//리덕스 마들웨어 관련 모듈 임포트
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer, {rootSaga} from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';


//리덕스 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

//스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

//리덕스 사가 미들웨어 실행
sagaMiddleware.run(rootSaga);


//리덕스 적용
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
