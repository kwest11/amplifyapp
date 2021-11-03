import React from 'react';
import ClapprPlayer from './clappr-player.jsx';

class CanaanWebcams extends React.Component {
  render() {
    return <div>
      <h1>Canaan Webcams</h1>
      <ClapprPlayer source="https://55507e0501d25.streamlock.net/live/canaanresortbase.stream/playlist.m3u8" />
    </div>;
  }
}

export default CanaanWebcams;