import React, { Component } from "react";

export default class CurrentAirQuality extends Component {
  render() {
    return (
      <section className="airquality">
        <table className="airquality-table">
          <tr>
            <th>Air Quality Index (AQI)</th>
            <th>Ozone (O3)</th>
            <th>Sulphur dioxide (SO2)</th>
            <th>Nitrogen dioxide (NO2)</th>
            <th>Carbon monoxide (CO)</th>
            <th>Particulate matter (PM)</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Air Quality Index"
                title="Air Quality Index"
              />
            </td>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Ozone"
                title="Ozone"
              />
            </td>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Sulphur dioxide"
                title="Sulphur dioxide"
              />
            </td>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Nitrogen dioxide"
                title="Nitrogen dioxide"
              />
            </td>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Carbon monoxide"
                title="Carbon monoxide"
              />
            </td>
            <td>
              <img
                src="https://img.icons8.com/color/48/000000/green-flag.png"
                alt="Particulate matter"
                title="Particulate matter"
              />
            </td>
          </tr>
          <tr>
            <td>{this.props.airquality.aqi}</td>
            <td>{this.props.airquality.o3}</td>
            <td>{this.props.airquality.so2}</td>
            <td>{this.props.airquality.no2}</td>
            <td>{this.props.airquality.co}</td>
            <td>{this.props.airquality.pm}</td>
          </tr>
        </table>
      </section>
    );
  }
}
