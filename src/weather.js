import React from 'react';


class Weather extends React.Component {

  constructor(props) {
    super(props);
    // State
    this.state = {
      apiData: [],
      apiUrl: `https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip},US&appid=${process.env.REACT_APP_API_KEY}&units=imperial`,
      weatherIcon: []
    };
    this.fetchApi = this.fetchApi.bind(this);

  }

  kelvinToFarenheit = (k) => {
    return ((k - 273.15) * (9 / 5) + 32).toFixed(0);
  };

  fetchWeather(apiUrl) {
    console.log('Fetching weather' + apiUrl);
    this.fetchApi(apiUrl);

    if (this.state.weatherIcon && this.state.apiData.weatherIcon > 0) {
      this.setState( {weatherIcon: `https://openweathermap.org/img/w/13d.png` })
    } 
  }

  fetchApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ apiData: data, 
        weatherIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png` })
      })
      .catch(err => console.error(err))
  }

  // Side effect;  May need to change "apiUrl" at end.  this causes it to only change when apiUrl changes.  lets look at using Timer
  componentDidMount() {
    this.fetchWeather(this.state.apiUrl);
    this.interval = setInterval(() => this.fetchApi(), 500000);
  }

   componentWillUnmount() {
      clearInterval(this.interval);
    }

  render() {
    return <div className="App">
      <div className="container">

        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
          {this.state.apiData.main ? (
            <div className="card-body text-center">
              <img
                src={this.state.weatherIcon}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h2">
                Current Temp: {this.state.apiData.main.temp.toFixed(0)}&deg; C
	              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{this.state.apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low "></i>{' '}
                    <strong>
                      Min Temp: {this.state.apiData.main.temp_min.toFixed(0)}&deg; C
	                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      High Temp: {this.state.apiData.main.temp_max.toFixed(0)}&deg; C
	                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{this.state.apiData.weather[0].main}</strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
              <h1>Loading</h1>
            )}
        </div>
      </div>
    </div>
  }
}

export default Weather;