import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "normalize.css"
import {BrowserRouter} from 'react-router-dom'
// const searchData = new SearchData();

// searchData.getAllItems().then(res => console.log(res.count))
// searchData.getItemById('pikachu').then(res => console.log(res.sprites.front_default))
// searchData.getAllItems().then(res => console.log(res.results.map((el) => el.name)))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <App />
    </BrowserRouter>
 
);
