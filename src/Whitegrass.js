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
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
	
    render() {
      return (
        <div>
		  Date: {this.state.date}
		  https://whitegrass.com/video1.jpg?t=
        </div>
      );
    }
}

export default Whitegrass;