import React from "react";
import logo from "./img/logo.png";
import SearchBar from "./components/searchBar/searchBar";
import LocationInfo from "./components/locationInfo/locationInfo";
import CurrentWeather from "./containers/currentWeather";
import ForecastWeather from "./containers/forecastWeather";
import CurrentAstronomic from "./containers/currentAstronomic";
import weatherAPI from "./utils/weatherAPI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        name: "",
        country: "",
        localtime: "",
        timezone: "",
        coords: "",
        iconNow: "",
        textNow: "",
        temperatureNow: 0,
      },
      weather: {
        current_00: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_03: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_06: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_09: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_12: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_15: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_18: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
        current_21: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0,
        },
      },
      forecast: {
        forecast_00: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_03: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_06: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_09: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_12: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_15: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_18: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
        forecast_21: {
          icon: "",
          text: "",
          temperature: 0,
          wind: 0,
          precipitation: 0,
          clouds: 0
        },
      },
      astronomy: {
        sunrise: "",
        sunset: "",
        moonrise: "",
        moonset: "",
        moon_phase: "",
        moon_illumination: "",
      },
    };
    this.search = this.search.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log("Latitude is :", lat);
      console.log("Longitude is :", lon);
      this.setState(
        {
          coords: `${lat},${lon}`,
        },
        () => {
          //Update the current display information once the coords have been extracted
          weatherAPI.search(this.state.coords).then((response) => {
            this.setState({
              location: response,
            });
          });
          weatherAPI.currentWeather(this.state.coords).then((response) => {
            this.setState({
              weather: response,
            });
          });
          weatherAPI.forecastWeather(this.state.coords).then((response) => {
            this.setState({
              forecast: response,
            });
          });
          weatherAPI
          .currentAstronomy(this.state.coords, this.state.location.localtime)
          .then((response) => {
            this.setState({
              astronomy: response,
            });
          });
        }
      );
    });
  }

  search(location) {
    //Update the location information
    weatherAPI.search(location).then((response) => {
      this.setState({
        location: response,
      });
    });

    //Update the current weather information
    weatherAPI.currentWeather(location).then((response) => {
      this.setState({
        weather: response,
      });
    });

    weatherAPI.forecastWeather(location).then((response) => {
      this.setState({
        forecast: response,
      });
    });

    //Update the astronomy information
    weatherAPI
      .currentAstronomy(location, this.state.location.localtime)
      .then((response) => {
        this.setState({
          astronomy: response,
        });
      });
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <img src={logo} alt="WeSky logo" />
          <a href="/">WeSky</a>
        </header>
        <main className="main-grid">
          <SearchBar onSearch={this.search} />
          <LocationInfo location={this.state.location} />
          <CurrentWeather weather={this.state.weather} />
          <ForecastWeather forecast={this.state.forecast} />
          <CurrentAstronomic astronomy={this.state.astronomy} />
        </main>
        <footer>Made with 💙</footer>
      </div>
    );
  }
}

export default App;
