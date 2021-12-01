import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { Text, useTheme } from '@aws-amplify/ui-react';

function App({ isPassedToWithAuthenticator, signOut, user }) {
  return (
	<AmplifyProvider>
	<>
	<h1>Hello {user.username}</h1>  
	<div className="App">
	  <button onClick={signOut}>Sign out</button>
    </div>
	</>
	</AmplifyProvider>
  );
}

const MyComponent = ({ children }) => {
  const { tokens } = useTheme();
  return <Text color={tokens.colors.font.tertiary}>{children}</Text>;
};

export default withAuthenticator(App);
