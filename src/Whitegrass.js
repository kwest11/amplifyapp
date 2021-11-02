import React from 'react';

class Whitegrass extends React.Component {
	
    constructor(props) {
      super(props);
      this.state = { date: 0 };
	  this.props = { img1_src: 'https://whitegrass.com/video.jpg?t=', img2_src: 'https://whitegrass.com/video1.jpg?t=' }
    }
	
    tick() {
      this.setState(state => ({
		  date: new Date().getTime()
      }));
	  this.props.img2_src = "https://whitegrass.com/video.jpg?t="+this.state.date;
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 20000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
	
    render() {
      return (
        <div>
		  Date: {this.state.date}
		  <h3>Gandalfs Webcam</h3>
		  <h3>{this.img1_src}+{this.state.date}</h3>
		  <p>
		  	<img src="{this.img1_src}+{this.state.date}" id="img1" />
		  </p>
		  <h3> Weiss Knob Slope Webcam </h3>
		  <h3>{this.img2_src}</h3>
		  <p>
			<img src="{this.img2_src}" width="1280" height="720" id="img2" />
		  </p>
        </div>
      );
    }
}

export default Whitegrass;