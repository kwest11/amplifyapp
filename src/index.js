import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@aws-amplify/ui-react/styles.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import Whitegrass from './Whitegrass';
import SkiingWebcams from './skiingWebcams';
import { Heading, Flex, Text, Divider } from '@aws-amplify/ui-react';

Amplify.configure(config);


ReactDOM.render(
  <React.StrictMode>
	<>
	  <Flex direction="column">
		<App />
		<Divider />
		<SkiingWebcams />
	  </Flex>
	</>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
