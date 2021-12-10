import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import Timer from './Timer';
import SkiingWebcams from './skiingWebcams';
import Weather from './weather';
import Home from './home';
import { Heading, Image, Grid, View, Flex, Text, Divider, Button, useTheme, AmplifyProvider, withAuthenticator, Menu, MenuItem, Tabs, TabItem } from '@aws-amplify/ui-react';

Amplify.configure(config);



function App({ isPassedToWithAuthenticator, signOut, user }) {
  const [index, setIndex] = React.useState(0);
  return (
    <Grid
      templateColumns="10% 1fr"
      templateRows="15% 90% 10%"
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
        <Button isFullWidth={true} variation="menu" size="small" onClick={() => setIndex(0)}>Home</Button>
        <Button isFullWidth={true} variation="menu" size="small" onClick={() => setIndex(1)}>Skiing</Button>
        <Button isFullWidth={true} variation="menu" size="small" onClick={() => setIndex(2)}>Running</Button>
      </View>
      <View columnStart={2} columnEnd={-1} >
        <Tabs spacing="relative" currentIndex={index} onChange={(i) => setIndex(i)}>
          <TabItem title="Home"><Home /></TabItem>
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

const MyComponent = ({ children }) => {
  const { tokens } = useTheme();
  return <Text color={tokens.colors.font.tertiary}>{children}</Text>;
};

export default withAuthenticator(App);
