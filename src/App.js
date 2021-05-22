import React from "react";
import logo from "./img/logo.png";
import SearchBar from "./components/searchBar/searchBar";
import LocationInfo from "./components/locationInfo/locationInfo";
import CurrentWeather from "./containers/currentWeather";
import ForecastWeather from "./containers/forecastWeather";
import CurrentAstronomic from "./containers/currentAstronomic";

class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <header>
          <img src={logo} alt="WeSky logo" />
          <a href="/">WeSky</a>
        </header>
        <main className="main-grid">
          <SearchBar />
          <LocationInfo />
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
