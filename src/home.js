import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import ReactHlsPlayer from 'react-hls-player';
import Timer from './Timer';
import { Expander, ExpanderItem, Heading, Image, Grid, View, Flex, Text, Divider, Button, useTheme, AmplifyProvider, withAuthenticator, Menu, MenuItem, Tabs, TabItem } from '@aws-amplify/ui-react';

class Home extends React.Component {
  render() {
    return <>
      <View>
      <Heading level={3} color="green" fontWeight="bold">Local Traffic Cams</Heading>
      <Expander type="multiple">
        <ExpanderItem title="Westover Bridge" value="item-1">
          <ReactHlsPlayer
            src="http://162.210.14.137:1935/rtplive/CAM066/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </ExpanderItem>
        <ExpanderItem title="Top of the Hill" value="item-2">
          <ReactHlsPlayer
            src="http://162.210.14.137:1935/rtplive/CAM065/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </ExpanderItem>
        <ExpanderItem title="Interchange" value="item-3">
          <ReactHlsPlayer
            src="http://162.210.14.137:1935/rtplive/CAM093/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </ExpanderItem>
      </Expander>
      </View>
    </>;
  }
}

export default Home;