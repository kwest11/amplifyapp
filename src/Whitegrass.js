import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { View, Image, Divider } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

class Whitegrass extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      img_src: 'https://whitegrass.com/video.jpg?t=0',
      img1_src: 'https://whitegrass.com/video1.jpg?t=0'
    };
  }

  tick() {
    // this.setState(state => ({
    //   img_src: 'https://whitegrass.com/video.jpg?t=' + new Date().getTime(),
    //   img1_src: 'https://whitegrass.com/video1.jpg?t=' + new Date().getTime(),
    // }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <>
        <View width={this.props.width} height={this.props.height} boxShadow="8px 6px 6px 0 #ccc">
          <Image
            width="105%"
            height="105%"
            objectFit="cover"
            src={this.state.img_src}
            alt="whitegrass 1"
          />
        </View>
        <Divider orientation="vertical" />
        <View width={this.props.width} height={this.props.height} boxShadow="8px 6px 6px 0 #ccc">
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            src={this.state.img1_src}
            alt="whitegrass 1"
          />
        </View>
        {/*<SimpleImageSlider
      	width={896}
      	height={504}
      	images={images}
      	showBullets={true}
      	showNavs={true}
    	  />*/}
      </>
    );
  }
}

export default Whitegrass;