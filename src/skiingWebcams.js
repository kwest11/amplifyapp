import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import '@aws-amplify/ui-react/styles.css';
import { Card, Heading, Flex, Link } from '@aws-amplify/ui-react';
import Weather from './weather';
import Whitegrass from './Whitegrass';

class SkiingWebcams extends React.Component {
  render() {
    return <div>
      <Flex direction="column">
        {/* Whitegrass */}
        <Card variation="elevated">
          <Flex direction="row" alignItems="flex-start" >
            <Card variation="outlined" minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-10)">
              <Heading level={3}>Whitegrass</Heading>
              <Link href="https://whitegrass.com/daily-report/" isExternal={true}>
                Trail Report
              </Link>
              <Weather zip='26260' />
            </Card>
            <Whitegrass width="100%" height="100%" />
          </Flex>
        </Card>
        {/* <Divider orientation="horizontal" /> */}
        {/* Canaan */}
        <Card variation="elevated">
          <Flex direction="row" alignItems="flex-start" >
            <Card variation="outlined" minWidth="200px" maxWidth="200px" height="100%" backgroundColor="var(--amplify-colors-blue-20)">
              <Heading level={3}>Canaan</Heading>
              <Link href="https://www.canaanresort.com/trail-report/" isExternal={true}>
                Trail Report
              </Link>
              <Weather zip='26260' />
            </Card>
            <Flex direction="column" alignItems="flex-start">
              <ReactHlsPlayer
                src="https://stream.resortcams.com/live/canaanresortmidstation.stream/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
              {/* <Divider orientation="vertical" /> */}
              <ReactHlsPlayer
                src="https://stream.resortcams.com/live/canaanresortbase.stream/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
            </Flex>
          </Flex>
        </Card>
        {/* <Divider orientation="horizontal" /> */}
        {/* Timberline */}
        <Card variation="elevated">
          <Flex direction="row" alignItems="flex-start">
            <Card variation="outlined" minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-40)">
              <Heading level={3}>Timberline</Heading>
              <Link href="https://timberlinemountain.com/snow-report" isExternal={true}>
                Trail Report
              </Link>
              <Weather zip='26260' />
            </Card>
            <Flex direction="column" alignItems="flex-start">
              <ReactHlsPlayer
                src="https://b9.hdrelay.com/camera/e366f142-ef01-4c7d-a4f4-4875433d0e02/relay/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
              <ReactHlsPlayer
                src="https://b7.hdrelay.com/camera/618972315233cdcad76d7dae/relay/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
            </Flex>
          </Flex>
        </Card>
        {/* <Divider orientation="horizontal" /> */}
        {/* Wisp */}
        <Card variation="elevated">
          <Flex direction="row" alignItems="flex-start">
            <Card variation="outlined" minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-60)">
              <Heading level={3}>Wisp</Heading>
              <Link color="#000000" href="https://www.wispresort.com/Mountain-Report/" isExternal={true}>
                Trail Report
              </Link>
              <Weather zip='21541' />
            </Card>
            <Flex direction="column" alignItems="flex-start">
              <ReactHlsPlayer
                src="https://stream.resortcams.com/live/railey2.stream/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
            </Flex>
          </Flex>
        </Card>

        {/* <Divider orientation="horizontal" /> */}
        {/* SnowShoe */}
        <Card variation="elevated">
          <Flex direction="row" alignItems="flex-start">
            <Card variation="outlined" minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-80)">
              <Heading level={3}>Snowshoe</Heading>
              <Link href="https://www.snowshoemtn.com/mountain-info/mountain-report#/" isExternal={true}>
                Trail Report
              </Link>
              <Weather zip='24934' />
            </Card>
            <Flex direction="column" alignItems="flex-start">
              <ReactHlsPlayer
                src="https://stream.citynet.net:443/Snowshoe/smil:boathouse.smil/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
              {/* <Divider orientation="vertical" /> */}
              <ReactHlsPlayer
                src="https://stream.citynet.net:443/Snowshoe/smil:village.smil/playlist.m3u8"
                autoPlay={true}
                controls={false}
                width="100%"
                height="50%"
              />
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </div >;
  }
}

export default SkiingWebcams;