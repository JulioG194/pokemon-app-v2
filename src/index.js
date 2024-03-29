import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import Search from './components/Search';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card  from './components/Card';

ReactDOM.render(
  <React.StrictMode>
      <Search />
      <Grid />
      <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
