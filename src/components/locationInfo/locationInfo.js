import React, { Component } from "react";

export default class LocationInfo extends Component {
  render() {
    return (
      <div className="location-now">
        <section className="location-now-info">
          <div className="location-now-name">{this.props.location.name}</div>
          <div className="location-now-country">{this.props.location.country}</div>
          <div className="location-now-datetime">{this.props.location.dateTime}</div>
        </section>
        <section className="location-now-weather">
          <div className="location-now-weather-icon">{this.props.location.iconNow}</div>
          <div className="location-now-weather-text">{this.props.location.textNow}</div>
          <div className="location-now-weather-temperature">{this.props.location.temperatureNow}</div>
        </section>
      </div>
    );
  }
}
