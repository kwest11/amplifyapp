import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { MainHome, GetCurrentUser} from './MainHome';
import Login from './Login';
import PrivacyPolicy from "./PrivacyPolicy";

import {
     BrowserRouter,
     Route,
     Routes
} from "react-router-dom";
import { Button, Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);


export function SecureButton() {
  console.log("inside secureButton");
  
  return (
    <Button isFullWidth={true} variation="menu" size="small" onClick={() => GetCurrentUser()}>Secure</Button>
  );
}

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<MainHome />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

App.propTypes = {
  signOut: PropTypes.any,
  user: PropTypes.any
}

export default withAuthenticator(App);
