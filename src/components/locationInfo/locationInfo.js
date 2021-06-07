import React, { Component } from "react";
import Clock from 'react-live-clock';

export default class LocationInfo extends Component {
  render() {
    return (
      <div className="location-now">
        <section className="location-now-info">
          <div className="location-now-name">{this.props.location.name}</div>
          <div className="location-now-country">
            {this.props.location.country}
          </div>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={this.props.location.timezone} />
          {/* <div className="location-now-datetime">
            {this.props.location.dateTime}
          </div> */}
        </section>
        <section className="location-now-weather">
          <div className="location-now-weather-icon">
            <img
              src={this.props.location.iconNow}
              alt={this.props.location.textNow}
              title={this.props.location.textNow}
            />
          </div>
          <div className="location-now-weather-text">
            {this.props.location.textNow}
          </div>
          <div className="location-now-weather-temperature">
            {this.props.location.temperatureNow}º C
          </div>
        </section>
      </div>
    );
  }
}
