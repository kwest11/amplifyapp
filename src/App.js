import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Heading, Text, useTheme, AmplifyProvider, withAuthenticator } from '@aws-amplify/ui-react';

function App({ isPassedToWithAuthenticator, signOut, user }) {
  return (
	<AmplifyProvider>
	<>
	<Heading level={2} color="green" fontWeight="bold">Hello {user.username}</Heading>  
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
