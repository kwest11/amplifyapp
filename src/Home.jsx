import { React } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { Expander, ExpanderItem, Heading, Image,
  //  Grid, 
   View, Flex } from '@aws-amplify/ui-react';
import { Wrapper } from "@googlemaps/react-wrapper";
import Weather from './weather';
import MyGoogleMap from './MyGoogleMap';
import { Timeline } from 'react-twitter-widgets';
import PropTypes from 'prop-types';

const ProfileTheme = (props) => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: props.screenName }}
    options={{ chrome: "noheader, nofooter", width: props.width, height: props.height }}
  />
);

ProfileTheme.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

function Home() {

  return (
    <>
      {/* <View minHeight="500px" width="100%"> */}
        {/* <View> */}
        {/* <Grid
          templateColumns="50% 50%"
          templateRows="1fr"
          gap="var(--amplify-space-small)"
        > */}
          <Flex direction="column">
          <View as="section">
            <Heading columnspan={2} style={{ 'text-align': 'center' }} level={3} color="green" fontWeight="bold">Weather in Ashton</Heading>

            <Flex >
              { /* Current Weather */}
              <Weather zip='26508' />
              { /* Current Radar */}
              <View boxShadow="8px 6px 6px 0 #ccc">
                <Image
                  width="100%"
                  height="100%"
                  objectFit="fill"
                  src="https://radar.weather.gov/ridge/standard/KPBZ_loop.gif"
                  alt="Morgantown Radar"
                />
              </View>
              { /* WBOY Weather Twitter feed */}
              <ProfileTheme screenName="stormtracker12" width="400" height="600" />

            </Flex>
          </View>
          <View as="section">
            <Heading columnspan={2} style={{ 'text-align': 'center' }} level={3} color="green" fontWeight="bold">What we doin this week?</Heading>
            <Flex >
              { /* Current Calendar */}
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=a3dlc3QxMUBnbWFpbC5jb20&src=cTJnOXBwYXJ1NzhiZGwxYzE4OG1rMmd2bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBqZzdlNGt1Y2UwazIwbDVsMG5zYW92bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ajJqNGlldjNpaTJmdmo3c2xzNzFtaTAycWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OWJjZDYyOWQ3ZDBkMGY1N2M2NWRjZWE3ODQwYzZlZGNiZjExNDdiZjVjM2ZjN2IyNDBiNzI0YTY5YTljYTFjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NHZmc2loOWFwbjlrbGluajJma2xrMm80cmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2hyaXN0aWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MDQxNDEwNDY5MDY3NDcwNjQ5NDNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dm1yb3BtZmZqaTNiM25vMmExbWswZmlpZHBlZGdrcnNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=aGt2bWt2anRjbHRsMmQ5NmVvZmpib2oyZWlrbmQ2N2JAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmlmYSU3ZV93Y3VwXzc1ODVfJTU1bml0ZWQrJTUzdGF0ZXMjc3BvcnRzQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bmNhYWZfMTdfJTU3ZXN0KyU1NmlyZ2luaWErJTRkb3VudGFpbmVlcnMjc3BvcnRzQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bmNhYWJfNjM2XyU1N2VzdCslNTZpcmdpbmlhKyU0ZG91bnRhaW5lZXJzI3Nwb3J0c0Bncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23E4C441&color=%239E69AF&color=%23AD1457&color=%23009688&color=%23AD1457&color=%239E69AF&color=%23D50000&color=%23D50000&color=%239E69AF&color=%23D50000&color=%23AD1457&color=%23009688&color=%233F51B5&color=%23B39DDB&color=%23B39DDB" width="100%" height="600" scrolling="no" frameBorder="0"></iframe>
              </Flex>
          </View>
          <View as="section" >
            {/* <Grid
              templateColumns="50% 50%"
              // templateRows="50px 1fr"
              gap="var(--amplify-space-small)"
            > */}
            <Flex direction="column">
              <View columnSpan={2} style={{ 'text-align': 'center' }}>
                <Heading columnSpan={2} level={3} color="green" fontWeight="bold">Morgantown Traffic</Heading>
              </View>
              <View>
                <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                  <MyGoogleMap lat={39.583} lng={-79.984} zoom={12} width='100%' height='300px' />
                </Wrapper>
              </View>
              <Expander maxHeight="100px" type="multiple">
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
                <ExpanderItem title="79x68 Interchange" value="item-3">
                  <ReactHlsPlayer
                    src="http://162.210.14.137:1935/rtplive/CAM093/playlist.m3u8"
                    autoPlay={true}
                    controls={false}
                    width="50%"
                    height="50%"
                  />
                </ExpanderItem>
                <ExpanderItem title="Coliseum" value="item-4">
                  <ReactHlsPlayer
                    src="http://162.210.14.137:1935/rtplive/CAM007/playlist.m3u8"
                    autoPlay={true}
                    controls={false}
                    width="50%"
                    height="50%"
                  />
                </ExpanderItem>
              </Expander>
            {/* </Grid> */}
            </Flex>
          </View>

        </Flex>
      {/* </View> */}
    </>
  );

}

ProfileTheme.propTypes = {
  screenName: PropTypes.string
}

export default Home;