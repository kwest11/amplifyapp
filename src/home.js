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
      return <MyMap />;
  }
};


// Google Map
function MyMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const containerStyle = {
    width: props.width,
    height: props.height
  };

  const [map, setMap] = useState(null)

  const center = { lat: props.lat, lng: props.lng };
  const zoom = props.zoom;

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  const onLoad = trafficLayer => {
    console.log('center.lat: ' + center.lat + ' center.lng: ' + center.lng)
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

  return (
    <>
      <View>
        <Grid
          templateColumns="50% 50%"
          templateRows="1fr"
          gap="var(--amplify-space-small)"
        >
          <View as="section" columnSpan={2}>
            <Heading columnspan={2} style={{'text-align': 'center'}} level={3} color="green" fontWeight="bold">Weather</Heading>

            <Flex justifyContent="left" alignItems="center">
              <Weather zip='26508' />
              {/*<WeatherMap lat={props.lat} lon={props.lon} zoom='10' width="250px" height="200px" />  */}

            </Flex>
          </View>
          <View as="section" columnSpan={2}>
            <Grid
              templateColumns="50% 50%"
              templateRows="50px 1fr"
              gap="var(--amplify-space-small)"
            >
              <View columnSpan={2} style={{'text-align': 'center'}}>
                <Heading columnSpan={2} level={3} color="green" fontWeight="bold">Morgantown Traffic</Heading>
              </View>
              <View>
                <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
                  <MyMap lat={39.583} lng={-79.984} zoom={12} width='100%' height='300px'>
                  </MyMap>
                </Wrapper>
              </View>
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
            </Grid>
          </View>
        </Grid>
      </View>
    </>
  );

};

export default Home;