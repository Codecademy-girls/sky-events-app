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
        name: '',
        country: ''
      },
      datetime: '',
      currentMoonrise: '',
      currentMoonset: '',
      currentSunrise:'',
      currentSuntset:'',
    };
    this.search = this.search.bind(this);
  }

  search(location) {
    weatherAPI.search(location).then(response => {
      this.setState({ 
        location: response 
      })
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
          <CurrentWeather />
          <ForecastWeather />
          <CurrentAstronomic />
        </main>
        <footer>Made with 💙</footer>
      </div>
    );
  }
}

export default App;
