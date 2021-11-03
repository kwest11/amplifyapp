import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

class CanaanWebcams extends React.Component {
  render() {
    return <div>
      <h1>Canaan Webcams</h1>
  <ReactHlsPlayer
      src="https://55507e0501d25.streamlock.net/live/canaanresortbase.stream/playlist.m3u8"
      autoPlay={true}
      controls={false}
      width="100%"
      height="auto"
    />
    </div>;
  }
}

export default CanaanWebcams;