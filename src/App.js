import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import Timer from './Timer';
import Whitegrass from './Whitegrass';
import SkiingWebcams from './skiingWebcams';
import Weather from './weather';
import { Heading, Image, Grid, View, Flex, Text, Divider, useTheme, AmplifyProvider, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App({ isPassedToWithAuthenticator, signOut, user }) {
  return (
    <Grid
      templateColumns="10% 1fr"
      templateRows="5% 90% 5%"
      columnGap="0.5rem"
      rowGap="0.5rem"
    >
      <View
        columnSpan={2}
        backgroundColor="var(--amplify-colors-blue-20)"
        boxShadow="8px 6px 6px 0 #ccc"
      >
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          src="https://www.morgantownpartnership.com/wp-content/uploads/Area-Pano-scaled.jpeg"
          alt="Home"
        />
      </View>
      <View
        rowSpan={2}
        backgroundColor="var(--amplify-colors-yellow-20)"
      ></View>
      <View columnStart={2} columnEnd={-1} >
        <SkiingWebcams />
      </View>
      <View backgroundColor="var(--amplify-colors-orange-10)">
        <AmplifyProvider>
          <>
            <Heading level={5} color="green" fontWeight="bold">Hello {user.username}</Heading>
            <div className="App">
              <button onClick={signOut}>Sign out</button>
            </div>
          </>
        </AmplifyProvider>
      </View>
    </Grid>
  );
}

const MyComponent = ({ children }) => {
  const { tokens } = useTheme();
  return <Text color={tokens.colors.font.tertiary}>{children}</Text>;
};

export default withAuthenticator(App);
