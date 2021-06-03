import React, { Component } from "react";

export default class CurrentAstronomic extends Component {
  render() {
    return (
      <section className="astronomic">
        <table className="astronomic-table">
          <tr>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Moonrise</th>
            <th>Moonset</th>
            <th>Moon phase</th>
            <th>Moon illumination</th>
          </tr>
          <tr>
            <td>
              <img
                className="sun"
                src="https://img.icons8.com/carbon-copy/100/000000/sunrise.png"
                alt="Sunrise"
                title="Sunrise"
              />
            </td>
            <td>
              <img
                className="sun"
                src="https://img.icons8.com/carbon-copy/100/000000/sunset--v1.png"
                alt="Sunset"
                title="Sunset"
              />
            </td>
            <td>
              <img
                className="moon"
                src="https://img.icons8.com/dotty/80/000000/moonrise.png"
                alt="Moonrise"
                title="Moonrise"
              />
            </td>
            <td>
              <img
                className="moon"
                src="https://img.icons8.com/dotty/80/000000/moonset.png"
                alt="Moonset"
                title="Moonset"
              />
            </td>
            <td>
              <img
                className="moon type2"
                src="https://img.icons8.com/dotty/80/000000/waxing-gibbous.png"
                alt="Moon phase"
                title="Moon phase"
              />
            </td>
            <td>
              <img
                className="moon type2"
                src="https://img.icons8.com/dotty/80/000000/moon.png"
                alt="Moon illumination"
                title="Moon illumination"
              />
            </td>
          </tr>
          <tr>
            <td>{this.props.astronomy.sunrise}</td>
            <td>{this.props.astronomy.sunset}</td>
            <td>{this.props.astronomy.moonrise}</td>
            <td>{this.props.astronomy.moonset}</td>
            <td>{this.props.astronomy.moon_phase}</td>
            <td>{this.props.astronomy.moon_illumination}{this.props.astronomy.moon_illumination && '%'}</td>
          </tr>
        </table>
      </section>
    );
  }
}
