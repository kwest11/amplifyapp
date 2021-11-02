import React from 'react';

class Whitegrass extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: 0 };
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
        <div>
		  Date: {this.state.date}
		  https://whitegrass.com/video1.jpg?t={this.state.date}
		  <p>
		  	<img src="https://whitegrass.com/video.jpg?t={this.state.date}" id="img1" />
		  </p>
		  <p>
			<img src="https://whitegrass.com/video1.jpg?t={this.state.date}" width="1280" height="720" id="img2" />
		  </p>
        </div>
      );
    }
}

export default Whitegrass;