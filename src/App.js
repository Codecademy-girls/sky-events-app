// import React from 'React';
import logo from './img/logo.png'

function App() {
  return (
    <div className="grid-container">
      <header>
        <img src={logo} alt="WeSky logo"/>
        <a href="/">WeSky</a>
      </header>
      <main className="main-grid">
        <div className="searchbar">
        <form onsubmit="event.preventDefault();" role="search">
          <label for="search">Search a location</label>
          <input id="search" type="search" placeholder="Search..." autofocus required />
          <button type="submit">Go</button>    
        </form>
        </div>
        <section className="locationInfo">
          Paris
          France
          2021-05-20 19:06
        </section>
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
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
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
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy" title="Partly cloudy"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
              <td><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast"/></td>
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
        <section  className="astronomic">
          Astronomic data
        </section>
      </main>
      <footer>
        Made with 💙
      </footer>
    </div>
  );
}

export default App;
