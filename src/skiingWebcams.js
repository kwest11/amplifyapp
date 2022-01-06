import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import '@aws-amplify/ui-react/styles.css';
import { Heading, View, Flex, Divider, Link } from '@aws-amplify/ui-react';
import Weather from './weather';
import Whitegrass from './Whitegrass';

class SkiingWebcams extends React.Component {
  render() {
    return <div>
      <Flex direction="column">
        {/* Whitegrass */}
        <Flex direction="row">
          <View minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-10)">
            <Heading level={3}>Whitegrass</Heading>
            <Link href="https://whitegrass.com/daily-report/" isExternal={true}>
              Trail Report
			</Link>
            <Weather zip='26260' />
          </View>
          <Whitegrass width="250px" height="200px"/>
        </Flex>
        <Divider orientation="horizontal" />
        {/* Canaan */}
        <Flex direction="row">
          <View minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-20)">
            <Heading level={3}>Canaan</Heading>
            <Link href="https://www.canaanresort.com/trail-report/" isExternal={true}>
              Trail Report
			</Link>
            <Weather zip='26260' />
          </View>
          <ReactHlsPlayer
            src="https://55507e0501d25.streamlock.net/live/canaanresortbase.stream/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="30%"
            height="30%"
          />
          <Divider orientation="vertical" />
          <ReactHlsPlayer
            src="https://55507e0501d25.streamlock.net/live/canaanresortmidstation.stream/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="30%"
            height="30%"
          />
        </Flex>
        <Divider orientation="horizontal" />
        {/* Timberline */}
        <Flex direction="row">
          <View minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-40)">
            <Heading level={3}>Timberline</Heading>
            <Link href="https://timberlinemountain.com/snow-report" isExternal={true}>
              Trail Report
		</Link>
    <Weather zip='26260' />
          </View>
          <ReactHlsPlayer
            src="https://b9.hdrelay.com/camera/e366f142-ef01-4c7d-a4f4-4875433d0e02/relay/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
          <ReactHlsPlayer
            src="https://b7.hdrelay.com/camera/618972315233cdcad76d7dae/relay/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </Flex>
        <Divider orientation="horizontal" />
        {/* Wisp */}
        <Flex direction="row">
          <View minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-60)">
            <Heading level={3}>Wisp</Heading>
            <Link color="#000000" href="https://www.wispresort.com/Mountain-Report/" isExternal={true}>
              Trail Report
		</Link>
    <Weather zip='21541' />
          </View>
          <ReactHlsPlayer
            src="https://55507e0501d25.streamlock.net/live/railey2.stream/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </Flex>

        <Divider orientation="horizontal" />
        {/* SnowShoe */}
        <Flex direction="row">
          <View minWidth="200px" maxWidth="200px" backgroundColor="var(--amplify-colors-blue-80)">
            <Heading level={3}>Snowshoe</Heading>
            <Link href="https://www.snowshoemtn.com/mountain-info/mountain-report#/" isExternal={true}>
              Trail Report
			</Link>
      <Weather zip='24934' />
          </View>
          <ReactHlsPlayer
            src="https://stream.citynet.net:443/Snowshoe/smil:shaverscenter.smil/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="30%"
            height="30%"
          />
          <Divider orientation="vertical" />
          <ReactHlsPlayer
            src="https://stream.citynet.net:443/Snowshoe/smil:village.smil/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="30%"
            height="30%"
          />
        </Flex>
      </Flex>
    </div>;
  }
}

export default SkiingWebcams;