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
      },
      forecast: {
        current_00: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_03: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_06: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_09: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_12: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_15: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_18: {
          icon: "",
          text: "",
          temperature: 0
        },
        current_21: {
          icon: "",
          text: "",
          temperature: 0
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
          <CurrentWeather forecast={this.state.forecast} />
          <ForecastWeather />
          <CurrentAstronomic astronomy={this.state.astronomy} />
        </main>
        <footer>Made with 💙</footer>
      </div>
    );
  }
}

export default App;
