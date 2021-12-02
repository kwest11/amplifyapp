import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import '@aws-amplify/ui-react/styles.css';
import { Heading, View, Image, Flex, Text, Divider, Link } from '@aws-amplify/ui-react';

const images = [
  { url: "https://whitegrass.com/video.jpg?t=0" },
  { url: "https://whitegrass.com/video1.jpg?t=" }
];

class Whitegrass extends React.Component {
	
	static images = [
	  { url: "https://whitegrass.com/video.jpg?t=" },
	  { url: "https://whitegrass.com/video1.jpg?t=" }
	];
	
    constructor(props) {
      super(props);
      this.state = { date: 0 };
	  this.props = { img2_src: 'https://whitegrass.com/video1.jpg?t=0' , img1_src : 'https://whitegrass.com/video.jpg?t='+this.state.date}
    }
	
    tick() {
      this.setState(state => ({
		  date: new Date().getTime()
      }));
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
		  <h1>Whitegrass</h1>
<View width="800px" height="400px" boxShadow="8px 6px 6px 0 #ccc">
  <Image
    width="100%"
    height="100%"
    objectFit="cover"
		  src="https://whitegrass.com/video1.jpg?t=0"
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