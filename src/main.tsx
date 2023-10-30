import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {SearchData} from "./utils/SearchData"

const searchData = new SearchData();

searchData.getAllItems().then(res => console.log(res.results))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
