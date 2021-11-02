import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer';
import Whitegrass from './Whitegrass';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
	<>
	  	<h3>Kodys Test</h3>
		<App />
		<Whitegrass />
	</>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
