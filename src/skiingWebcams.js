import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import '@aws-amplify/ui-react/styles.css';
import { Heading, View, Image, Flex, Divider, Link } from '@aws-amplify/ui-react';
import Weather from './weather';

class SkiingWebcams extends React.Component {
  render() {
    return <div>
      <Flex direction="column">
        {/* Whitegrass */}
        <Flex direction="row">
          <View minWidth="300px" maxWidth="300px" backgroundColor="var(--amplify-colors-blue-10)">
            <Heading level={2}>Whitegrass</Heading>
            <Link href="https://whitegrass.com/daily-report/" isExternal={true}>
              Trail Report
			</Link>
            <Weather zip='26260' />
          </View>
          <View minWidth="800px" minHeight="400px" boxShadow="8px 6px 6px 0 #ccc">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src="https://whitegrass.com/video1.jpg?t=0"
              alt="whitegrass 1"
            />
          </View>
          <Divider orientation="vertical" />
          <View minWidth="800px" minHeight="400px" boxShadow="8px 6px 6px 0 #ccc">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src="https://whitegrass.com/video.jpg?t=0"
              alt="whitegrass 1"
            />
          </View>
        </Flex>
        <Divider orientation="horizontal" />
        {/* Canaan */}
        <Flex direction="row">
          <View minWidth="300px" maxWidth="300px" backgroundColor="var(--amplify-colors-blue-20)">
            <Heading level={2}>Canaan</Heading>
            <Link href="https://www.canaanresort.com/trail-report/" isExternal={true}>
              Trail Report
			</Link>
            <Weather zip='26260' />
          </View>
          <ReactHlsPlayer
            src="https://55507e0501d25.streamlock.net/live/canaanresortbase.stream/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
          <Divider orientation="vertical" />
          <ReactHlsPlayer
            src="https://55507e0501d25.streamlock.net/live/canaanresortmidstation.stream/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="50%"
            height="50%"
          />
        </Flex>
        <Divider orientation="horizontal" />
        {/* Timberline */}
        <Flex direction="row">
          <View minWidth="300px" maxWidth="300px" backgroundColor="var(--amplify-colors-blue-40)">
            <Heading level={2}>Timberline</Heading>
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
        </Flex>
        <Divider orientation="horizontal" />
        {/* Wisp */}
        <Flex direction="row">
          <View minWidth="300px" maxWidth="300px" backgroundColor="var(--amplify-colors-blue-60)">
            <Heading level={2}>Wisp</Heading>
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
          <View minWidth="300px" maxWidth="300px" backgroundColor="var(--amplify-colors-blue-80)">
            <Heading level={2}>Snowshoe</Heading>
            <Link href="https://www.snowshoemtn.com/mountain-info/mountain-report#/" isExternal={true}>
              Trail Report
			</Link>
      <Weather zip='24934' />
          </View>
          {/*
  <ReactHlsPlayer
      src="https://stream.citynet.net:443/Snowshoe/smil:basin.smil/playlist.m3u8"
      autoPlay={true}
      controls={false}
      width="25%"
	  height="25%"
    />*/}
          <ReactHlsPlayer
            src="https://stream.citynet.net:443/Snowshoe/smil:shaverscenter.smil/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="25%"
            height="25%"
          />
          <Divider orientation="vertical" />
          <ReactHlsPlayer
            src="https://stream.citynet.net:443/Snowshoe/smil:village.smil/playlist.m3u8"
            autoPlay={true}
            controls={false}
            width="25%"
            height="25%"
          />
        </Flex>
      </Flex>
    </div>;
  }
}

export default SkiingWebcams;