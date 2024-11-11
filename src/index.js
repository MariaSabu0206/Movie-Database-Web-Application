import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import SinglePageHeader from './SinglePageHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SinglePageHeader/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
