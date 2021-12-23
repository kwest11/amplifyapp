import React from 'react';
import PropTypes from 'prop-types';
// import logo from './icon.png';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {Auth, Amplify} from 'aws-amplify';
import config from './aws-exports';
import SkiingWebcams from './skiingWebcams';
import Home from './Home';
import { Heading, Image, Grid, View, Flex, Button, AmplifyProvider, withAuthenticator, Tabs, TabItem } from '@aws-amplify/ui-react';

Amplify.configure(config);


export function GetCurrentUser() {
  console.log("inside getCurrentUser try");
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      return user;
    });
}

export function SecureButton() {
  console.log("inside secureButton");
  console.log("user info: " + GetCurrentUser());
  return (
  <Button isFullWidth={true} variation="menu" size="small" onClick={() => GetCurrentUser()}>Secure</Button>
  );
}

function App({ signOut, user }) {
  const [index, setIndex] = React.useState(0);
  return (
    <Grid
      templateColumns="10% 1fr"
      templateRows="15% 90% 10}%"
      columnGap="0.5rem"
      rowGap="0.5rem"
    >
      {/* Header */}
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
      {/* Menu */}
      <View
        rowSpan={2}
        backgroundColor="var(--amplify-colors-yellow-20)"
      >
        <Button isFullWidth={true} minWidth="100px" variation="menu" size="small" onClick={() => setIndex(0)}>Home</Button>
        <Button  isFullWidth={true} minWidth="100px" variation="menu" size="small" onClick={() => setIndex(1)}>Skiing</Button>
        <Button isFullWidth={true} minWidth="100px" variation="menu" size="small" onClick={() => setIndex(2)}>Running</Button>
        <SecureButton />
      </View>
      <View columnStart={2} columnEnd={-1} >
        <Tabs spacing="relative" currentIndex={index} onChange={(i) => setIndex(i)}>
          <TabItem title="Home"><Home lat="39.6" lon="-80" center="" /></TabItem>
          <TabItem title="Skiing"><SkiingWebcams /></TabItem>
          <TabItem title="Running">I run</TabItem>
        </Tabs>
      </View>
      <View columnStart={2} columnEnd={-1} backgroundColor="var(--amplify-colors-orange-10)">
      <div>
        
        <AmplifyProvider>
          <Flex justifyContent="center" alignItems="center">
          <Heading level={5} color="green" fontWeight="bold" >Hello {user.username == 'kwest' ? 'Kody!' : user.username}</Heading>
            <Button variation="link" size="small" onClick={signOut}>Sign out</Button>
          </Flex>

        </AmplifyProvider>
        </div>
      </View>
    </Grid>
  );
}

App.propTypes = {
  signOut: PropTypes.any,
  user: PropTypes.any
}

export default withAuthenticator(App);
