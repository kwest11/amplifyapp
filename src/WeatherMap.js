import React from 'react';
import { View, Image } from '@aws-amplify/ui-react';


class WeatherMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapUrl: `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=precipitation&lat=${this.props.lat}&lon=${this.props.lon}&zoom=${this.props.zoom}&appid=${process.env.OPEN_WEATHER_APP_API_KEY}`,
      map: []
    };
  }

  componentDidMount() {
    this.fetchWeatherMap(this.state.mapUrl);
    this.interval = setInterval(() => this.fetchApi(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchWeatherMap(mapUrl) {
    console.log('Fetching weather: ' + mapUrl);
    this.fetchApi(mapUrl);
  }

  fetchApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ map: data })
      })
      .catch(err => console.error(err))
  }

  render() {
    return <>
    <View width={this.props.width} height={this.props.height} boxShadow="8px 6px 6px 0 #ccc">
      <Image
        width="100%"
        height="100%"
        objectFit="cover"
        src={this.state.map}
        alt="local weather map"
      />
    </View>
    </>;
  }
}
export default WeatherMap;