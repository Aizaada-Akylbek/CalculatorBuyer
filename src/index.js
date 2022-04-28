import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Ice from "./components/ice";





ReactDOM.render(
  <div style={{width:410,
  margin:'0 auto'}}>

      <BrowserRouter>
          <Routes>
              <Route path="/ice" element={<Ice   />} />
              <Route path="/" element={<App value='ice'/>} />
          </Routes>
      </BrowserRouter>

  </div>,
  document.getElementById('root')
);

