import React, { Component } from "react";

export default class ForecastWeather extends Component {
  render() {
    return (
      <section className="weather-forecast">
        {/* Just some random fixed data */}
        <table className="weather-today-table">
          <tr>
            <th>&nbsp;</th>
            <th>Thu 21 00:00 am</th>
            <th>Thu 21 03:00 am</th>
            <th>Thu 21 06:00 am</th>
            <th>Thu 21 09:00 am</th>
            <th>Thu 21 12:00 pm</th>
            <th>Thu 21 03:00 pm</th>
            <th>Thu 21 06:00 pm</th>
            <th>Thu 21 09:00 pm</th>
          </tr>
          <tr>
            <td className="header-row">Icon</td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/night/116.png"
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/night/116.png"
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/night/116.png"
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                alt="Partly cloudy"
                title="Partly cloudy"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="Overcast"
                title="Overcast"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="Overcast"
                title="Overcast"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="Overcast"
                title="Overcast"
              />
            </td>
            <td>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="Overcast"
                title="Overcast"
              />
            </td>
          </tr>
          <tr>
            <td className="header-row">Temperature</td>
            <td>12.6°C</td>
            <td>13.4°C</td>
            <td>14.2°C</td>
            <td>16.8°C</td>
            <td>18.3°C</td>
            <td>15.6°C</td>
            <td>13.5°C</td>
            <td>10.7°C</td>
          </tr>
          <tr>
            <td className="header-row">Wind</td>
            <td>9.1 kmph</td>
            <td>10.3 kmph</td>
            <td>11.9 kmph</td>
            <td>12.2 kmph</td>
            <td>15.8 kmph</td>
            <td>17.4 kmph</td>
            <td>14.5 kmph</td>
            <td>12.1 kmph</td>
          </tr>
          <tr>
            <td className="header-row">Precipitation</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
            <td>1.00 mm</td>
            <td>1.00 mm</td>
            <td>0.00 mm</td>
            <td>0.00 mm</td>
          </tr>
          <tr>
            <td className="header-row">Clouds</td>
            <td>20%</td>
            <td>26%</td>
            <td>54%</td>
            <td>76%</td>
            <td>45%</td>
            <td>65%</td>
            <td>63%</td>
            <td>58%</td>
          </tr>
        </table>
      </section>
    );
  }
}
