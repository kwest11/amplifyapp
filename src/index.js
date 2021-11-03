import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import Whitegrass from './Whitegrass';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://whitegrass.com/video.jpg?t=0" },
  { url: "https://whitegrass.com/video1.jpg?t=" }
];

ReactDOM.render(
  <React.StrictMode>
	<>
	  	<h3>Kodys Test</h3>
		<App />
		<SimpleImageSlider
        	width={896}
        	height={504}
        	images={images}
        	showBullets={true}
        	showNavs={true}
      	  />
		<Whitegrass />
	</>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
