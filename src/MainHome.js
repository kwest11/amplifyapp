import React from 'react';
import SkiingWebcams from './skiingWebcams';
import Running from './Running';
import Home from './Home';
// import PurpleFiddleEvents from './FacebookComponents';
// import NytNewsTicker from './NytNewsTicker';
//import '@aws-amplify/ui-react/styles.css';
// import logo from './icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import {Heading, Authenticator, Image, Grid, View, Flex,
    AmplifyProvider, Tabs, TabItem, Menu, MenuItem, Divider, useAuthenticator} from '@aws-amplify/ui-react';

export function GetCurrentUser() {
    console.log("inside getCurrentUser try");
    Auth.currentAuthenticatedUser()
        .then(user => {
            console.log(user);
            return user;
        });
}

export function MainHome() {
    const [index, setIndex] = React.useState(0);
    const {  signOut } = useAuthenticator((context) => [
         context.signOut,
     ]);
    const navigate = useNavigate();
    function logOut() {
        console.log("Logging out of " + GetCurrentUser());
        signOut();
        navigate('/login');
    }

    const { route } = useAuthenticator((context) => [context.route]);

    return (
        <Authenticator>
      {({ user }) => (
        <Grid
            templateColumns="1fr 3fr 1fr"
            templateRows="1fr 3fr 1fr"
            columnGap="0.5rem"
            rowGap="0.5rem"
        >

            {/* Header */}
            <View
                columnStart="1"
                columnEnd="-1"
                rowStart="1"
                rowEnd="1"
                backgroundColor="var(--amplify-colors-blue-20)"
                boxShadow="8px 6px 6px 0 #ccc"
            >
                <Image
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    src="https://www.morgantownpartnership.com/wp-content/uploads/Area-Pano-scaled.jpeg"
                    alt="Home" />
            </View>
            {/* Main */}
            <View columnStart="1"
                columnEnd="-1"
                rowStart="2"
                rowEnd="4">
                <Menu
                    menuAlign="start"
                    size="large"
                >
                    <MenuItem onClick={() => setIndex(0)}>
                        Home
                    </MenuItem>
                    <MenuItem onClick={() => setIndex(1)}>
                        Skiing
                    </MenuItem>
                    <MenuItem onClick={() => setIndex(2)}>
                        Running
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/privacy-policy')}>
                        Privacy Policy
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/about')}>
                        About
                    </MenuItem>
                    <Divider />
                    {route !== 'authenticated' ? (
                        <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
                    ) : (
                        <MenuItem onClick={() => logOut()}>Logout</MenuItem>
                    )}
                </Menu>
                <Tabs spacing="relative" currentIndex={index} onChange={(i) => setIndex(i)}>
                    <TabItem title="Home"><Home lat="39.6" lon="-80" center="" /></TabItem>
                    <TabItem title="Skiing"><SkiingWebcams /></TabItem>
                    <TabItem title="Running"><Running /></TabItem>
                </Tabs>
            </View>
            {/* Footer */}
            <View columnStart="1"
                columnEnd="-1"
                rowStart="4"
                rowEnd="-1" backgroundColor="var(--amplify-colors-orange-10)">
                    {/* <NytNewsTicker /> */}
                    {/* <PurpleFiddleEvents /> */}
                <div>

                    <AmplifyProvider>
                        <Flex justifyContent="center" alignItems="center">
                            <Heading level={5} color="green" fontWeight="bold">Hello {user.username == 'kody' ? 'Kody!' : user.username}</Heading>
                            {/* <Button variation="link" size="small" onClick={logOut}>Sign out</Button> */}
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/about">About</Link>
                        </Flex>

                    </AmplifyProvider>
                </div>
            </View>
        </Grid>
        )}
        </Authenticator>
    );
}

export default MainHome;