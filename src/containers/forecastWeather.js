import React, { Component } from "react";

export default class ForecastWeather extends Component {
  render() {
    const dateObj = new Date();
    const tomorrowObj = new Date();
    tomorrowObj.setDate(dateObj.getDate() + 1);
    let tomorrow = tomorrowObj.toLocaleString("default", { weekday: "long" });
    tomorrow = tomorrow.charAt(0).toUpperCase() + tomorrow.slice(1);
    return (
      <section className="weather-forecast">
        {/* Just some random fixed data */}
        <table className="weather-today-table">
          <tr>
            <th>&nbsp;</th>
            <th>{tomorrow} 00 am</th>
            <th>{tomorrow} 03 am</th>
            <th>{tomorrow} 06 am</th>
            <th>{tomorrow} 09 am</th>
            <th>{tomorrow} 12 pm</th>
            <th>{tomorrow} 03 pm</th>
            <th>{tomorrow} 06 pm</th>
            <th>{tomorrow} 09 pm</th>
          </tr>
          <tr>
            <td className="header-row">Icon</td>
            <td>
              <img
                src={this.props.forecast.forecast_00.icon}
                alt={this.props.forecast.forecast_00.text}
                title={this.props.forecast.forecast_00.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_03.icon}
                alt={this.props.forecast.forecast_03.text}
                title={this.props.forecast.forecast_03.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_06.icon}
                alt={this.props.forecast.forecast_06.text}
                title={this.props.forecast.forecast_06.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_09.icon}
                alt={this.props.forecast.forecast_09.text}
                title={this.props.forecast.forecast_09.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_12.icon}
                alt={this.props.forecast.forecast_12.text}
                title={this.props.forecast.forecast_12.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_15.icon}
                alt={this.props.forecast.forecast_15.text}
                title={this.props.forecast.forecast_15.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_18.icon}
                alt={this.props.forecast.forecast_18.text}
                title={this.props.forecast.forecast_18.text}
              />
            </td>
            <td>
              <img
                src={this.props.forecast.forecast_21.icon}
                alt={this.props.forecast.forecast_21.text}
                title={this.props.forecast.forecast_21.text}
              />
            </td>
          </tr>
          <tr>
            <td className="header-row">Temperature</td>
            <td>{this.props.forecast.forecast_00.temperature}° C</td>
            <td>{this.props.forecast.forecast_03.temperature}° C</td>
            <td>{this.props.forecast.forecast_06.temperature}° C</td>
            <td>{this.props.forecast.forecast_09.temperature}° C</td>
            <td>{this.props.forecast.forecast_12.temperature}° C</td>
            <td>{this.props.forecast.forecast_15.temperature}° C</td>
            <td>{this.props.forecast.forecast_18.temperature}° C</td>
            <td>{this.props.forecast.forecast_21.temperature}° C</td>
          </tr>
          <tr>
            <td className="header-row">Wind</td>
            <td>{this.props.forecast.forecast_00.wind} kmph</td>
            <td>{this.props.forecast.forecast_03.wind} kmph</td>
            <td>{this.props.forecast.forecast_06.wind} kmph</td>
            <td>{this.props.forecast.forecast_09.wind} kmph</td>
            <td>{this.props.forecast.forecast_12.wind} kmph</td>
            <td>{this.props.forecast.forecast_15.wind} kmph</td>
            <td>{this.props.forecast.forecast_18.wind} kmph</td>
            <td>{this.props.forecast.forecast_21.wind} kmph</td>
          </tr>
          <tr>
            <td className="header-row">Precipitation</td>
            <td>{this.props.forecast.forecast_00.precipitation} mm</td>
            <td>{this.props.forecast.forecast_03.precipitation} mm</td>
            <td>{this.props.forecast.forecast_06.precipitation} mm</td>
            <td>{this.props.forecast.forecast_09.precipitation} mm</td>
            <td>{this.props.forecast.forecast_12.precipitation} mm</td>
            <td>{this.props.forecast.forecast_15.precipitation} mm</td>
            <td>{this.props.forecast.forecast_18.precipitation} mm</td>
            <td>{this.props.forecast.forecast_21.precipitation} mm</td>
          </tr>
          <tr>
            <td className="header-row">Clouds</td>
            <td>{this.props.forecast.forecast_00.clouds} %</td>
            <td>{this.props.forecast.forecast_03.clouds} %</td>
            <td>{this.props.forecast.forecast_06.clouds} %</td>
            <td>{this.props.forecast.forecast_09.clouds} %</td>
            <td>{this.props.forecast.forecast_12.clouds} %</td>
            <td>{this.props.forecast.forecast_15.clouds} %</td>
            <td>{this.props.forecast.forecast_18.clouds} %</td>
            <td>{this.props.forecast.forecast_21.clouds} %</td>
          </tr>
        </table>
      </section>
    );
  }
}
