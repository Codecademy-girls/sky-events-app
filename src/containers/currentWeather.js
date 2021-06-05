import React, { Component } from "react";

export default class CurrentWeather extends Component {
  render() {
    const dateObj = new Date();
    let weekday = dateObj.toLocaleString("default", { weekday: "long" });
    weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)
    return (
      <section className="weather-current">
        <table className="weather-today-table">
          <tr>
            <th>&nbsp;</th>
            <th>{weekday} 00am</th>
            <th>{weekday} 03am</th>
            <th>{weekday} 06am</th>
            <th>{weekday} 09am</th>
            <th>{weekday} 12pm</th>
            <th>{weekday} 03pm</th>
            <th>{weekday} 06pm</th>
            <th>{weekday} 09pm</th>
          </tr>
          <tr>
            <td className="header-row">Icon</td>
            <td>
              <img
                src={this.props.forecast.current_00.icon}
                alt={this.props.forecast.current_00.text}
                title={this.props.forecast.current_00.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_03.icon}
                alt={this.props.forecast.current_03.text}
                title={this.props.forecast.current_03.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_06.icon}
                alt={this.props.forecast.current_06.text}
                title={this.props.forecast.current_06.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_09.icon}
                alt={this.props.forecast.current_09.text}
                title={this.props.forecast.current_09.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_12.icon}
                alt={this.props.forecast.current_12.text}
                title={this.props.forecast.current_12.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_15.icon}
                alt={this.props.forecast.current_15.text}
                title={this.props.forecast.current_15.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_18.icon}
                alt={this.props.forecast.current_18.text}
                title={this.props.forecast.current_18.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_21.icon}
                alt={this.props.forecast.current_21.text}
                title={this.props.forecast.current_21.text}
              />
            </td>
          </tr>
          <tr>
            <td className="header-row">Temperature</td>
            <td>{this.props.forecast.current_00.temperature}° C</td>
            <td>{this.props.forecast.current_03.temperature}° C</td>
            <td>{this.props.forecast.current_06.temperature}° C</td>
            <td>{this.props.forecast.current_09.temperature}° C</td>
            <td>{this.props.forecast.current_12.temperature}° C</td>
            <td>{this.props.forecast.current_15.temperature}° C</td>
            <td>{this.props.forecast.current_18.temperature}° C</td>
            <td>{this.props.forecast.current_21.temperature}° C</td>
          </tr>
          <tr>
            <td className="header-row">Wind</td>
            <td>{this.props.forecast.current_00.wind} kmph</td>
            <td>{this.props.forecast.current_03.wind} kmph</td>
            <td>{this.props.forecast.current_06.wind} kmph</td>
            <td>{this.props.forecast.current_09.wind} kmph</td>
            <td>{this.props.forecast.current_12.wind} kmph</td>
            <td>{this.props.forecast.current_15.wind} kmph</td>
            <td>{this.props.forecast.current_18.wind} kmph</td>
            <td>{this.props.forecast.current_21.wind} kmph</td>
          </tr>
          <tr>
            <td className="header-row">Precipitation</td>
            <td>{this.props.forecast.current_00.precipitation} mm</td>
            <td>{this.props.forecast.current_03.precipitation} mm</td>
            <td>{this.props.forecast.current_06.precipitation} mm</td>
            <td>{this.props.forecast.current_09.precipitation} mm</td>
            <td>{this.props.forecast.current_12.precipitation} mm</td>
            <td>{this.props.forecast.current_15.precipitation} mm</td>
            <td>{this.props.forecast.current_18.precipitation} mm</td>
            <td>{this.props.forecast.current_21.precipitation} mm</td>
          </tr>
          <tr>
            <td className="header-row">Clouds</td>
            <td>{this.props.forecast.current_00.clouds}%</td>
            <td>{this.props.forecast.current_03.clouds}%</td>
            <td>{this.props.forecast.current_06.clouds}%</td>
            <td>{this.props.forecast.current_09.clouds}%</td>
            <td>{this.props.forecast.current_12.clouds}%</td>
            <td>{this.props.forecast.current_15.clouds}%</td>
            <td>{this.props.forecast.current_18.clouds}%</td>
            <td>{this.props.forecast.current_21.clouds}%</td>
          </tr>
        </table>
      </section>
    );
  }
}
