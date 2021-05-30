import React, { Component } from "react";

export default class CurrentWeather extends Component {
  render() {
    return (
      <section className="weather-current">
        {/* Just some random fixed data */}
        <table className="weather-today-table">
          <tr>
            <th>&nbsp;</th>
            <th>Thu 20 00:00 am</th>
            <th>Thu 20 03:00 am</th>
            <th>Thu 20 06:00 am</th>
            <th>Thu 20 09:00 am</th>
            <th>Thu 20 12:00 pm</th>
            <th>Thu 20 03:00 pm</th>
            <th>Thu 20 06:00 pm</th>
            <th>Thu 20 09:00 pm</th>
          </tr>
          <tr>
            <td className="header-row">Icon</td>
            <td>
              <img
                src={this.props.forecast.current_00.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_03.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_06.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_09.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_12.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_15.icon}
                alt="Overcast"
                title="Overcast"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_18.icon}
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src={this.props.forecast.current_21.icon}
                alt="Overcast"
                title="Overcast"
              />
            </td>
          </tr>
          <tr>
            <td className="header-row">Temperature</td>
            <td>15.6°C</td>
            <td>16.4°C</td>
            <td>17.2°C</td>
            <td>18.8°C</td>
            <td>19.3°C</td>
            <td>20.6°C</td>
            <td>17.5°C</td>
            <td>16.7°C</td>
          </tr>
          <tr>
            <td className="header-row">Wind</td>
            <td>6.1 kmph</td>
            <td>6.3 kmph</td>
            <td>6.9 kmph</td>
            <td>7.2 kmph</td>
            <td>7.8 kmph</td>
            <td>8.4 kmph</td>
            <td>9.5 kmph</td>
            <td>8.1 kmph</td>
          </tr>
          <tr>
            <td className="header-row">Precipitation</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
          </tr>
          <tr>
            <td className="header-row">Clouds</td>
            <td>19%</td>
            <td>22%</td>
            <td>21%</td>
            <td>18%</td>
            <td>19%</td>
            <td>25%</td>
            <td>24%</td>
            <td>26%</td>
          </tr>
        </table>
      </section>
    );
  }
}
