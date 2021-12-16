import { React, useRef, useEffect, useState, useCallback } from 'react';
// import logo from './logo.svg';
// import '@aws-amplify/ui-react/styles.css';
// import Amplify from 'aws-amplify';
import ReactHlsPlayer from 'react-hls-player';
import Timer from './Timer';
import { Expander, ExpanderItem, Heading, Image, Grid, View, Flex, Text, Divider, Button, useTheme, AmplifyProvider, withAuthenticator, Menu, MenuItem, Tabs, TabItem } from '@aws-amplify/ui-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Weather from './weather';
import { GoogleMap, useJsApiLoader, TrafficLayer } from '@react-google-maps/api';

const render = (status: Status): ReactElement => {
  switch (status) {
    case Status.LOADING:
      return <h3>{status} ..</h3>;
    case Status.FAILURE:
      return <h3>{status} ..</h3>;
    case Status.SUCCESS:
    default:
      return <MyComponent />;
  }
};


// Google Map
const containerStyle = {
  width: '300px',
  height: '300px'
};

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState(null)

  const center = { lat: 39.583, lng: -79.984 };
  const zoom = 14;

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  const onLoad = trafficLayer => {
    console.log('trafficLayer: ', trafficLayer)
  }

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <TrafficLayer
        onLoad={onLoad}
      />
    </GoogleMap>
  ) : <></>
}

function Home(props) {
  const center = { lat: 39.6, lng: -80 };
  const zoom = 9;

  return (
    <>
      <View>
        <Grid
          templateColumns="2fr 1fr"
          templateRows="1fr 1fr 1fr"
          gap="var(--amplify-space-small)"
        >
          <View>
            <Heading level={3} color="green" fontWeight="bold">Traffic</Heading>
            <div style={{ height: '45vh', width: '100%' }}>
              <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
                <MyComponent lat={39.6} zoom={zoom}>
                </MyComponent>
              </Wrapper>
            </div>
          </View>
          <View>
            <Heading level={3} color="green" fontWeight="bold">Weather</Heading>

            <Flex justifyContent="left" alignItems="center">
              <Weather zip='26508' />
              {/*<WeatherMap lat={props.lat} lon={props.lon} zoom='10' width="250px" height="200px" />  */}

            </Flex>
          </View>
       <View columnSpan={2}>
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
         </Grid>
      </View>
    </>
  );

};

export default Home;