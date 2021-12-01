import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

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
	  this.props = { img2_src: 'https://whitegrass.com/video1.jpg?t='+this.state.date , img1_src : 'https://whitegrass.com/video.jpg?t='+this.state.date}
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
        <div>
		  Date: {this.state.date}
        </div>
		  <h1> Whats it like at Whitegrass? </h1>
	<SimpleImageSlider
      	width={896}
      	height={504}
      	images={images}
      	showBullets={true}
      	showNavs={true}
    	  />
		</>
      );
    }
}

export default Whitegrass;