import React, { Component } from 'react';

export default class CurrentAirQuality extends Component {
  render() {
    let flagAQI = this.props.airquality.aqi;
    let flagO3 = this.props.airquality.o3;
    let flagSO2 = this.props.airquality.so2;
    let flagNO2 = this.props.airquality.no2;
    let flagCO = this.props.airquality.co;
    let flagPM = this.props.airquality.pm;

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
            {/* 1st row */}
            <td>
              {0 <= flagAQI && flagAQI <= 50 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Air Quality Index"
                  title="Green Air Quality Index"
                />
              ) : 51 <= flagAQI && flagAQI <= 100 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Air Quality Index"
                  title="Yellow Air Quality Index"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Air Quality Index"
                  title="Red Air Quality Index"
                />
              )}
            </td>
            {/* 2nd row */}
            <td>
              {0 <= flagO3 && flagO3 <= 50 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Ozone"
                  title="Green Ozone"
                />
              ) : 51 <= flagO3 && flagO3 <= 150 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Ozone"
                  title="Yellow Ozone"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Ozone"
                  title="Red Ozone"
                />
              )}
            </td>
            {/* 3rd row */}
            <td>
              {0 <= flagSO2 && flagSO2 <= 0.1 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Sulphur dioxide"
                  title="Green Sulphur dioxide"
                />
              ) : 0.11 <= flagSO2 && flagSO2 <= 0.2 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Sulphur dioxide"
                  title="Yellow Sulphur dioxide"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Sulphur dioxide"
                  title="Red Sulphur dioxide"
                />
              )}
            </td>
            {/* 4rth row */}
            <td>
              {0 <= flagNO2 && flagNO2 <= 40 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Nitrogen dioxide"
                  title="Green Nitrogen dioxide"
                />
              ) : 41 <= flagNO2 && flagNO2 <= 180 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Nitrogen dioxide"
                  title="Yellow Nitrogen dioxide"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Nitrogen dioxide"
                  title="Red Nitrogen dioxide"
                />
              )}
            </td>
            {/* 5th row */}
            <td>
              {0 <= flagCO && flagCO <= 150 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Carbon monoxide"
                  title="Green Carbon monoxide"
                />
              ) : 151 <= flagCO && flagCO <= 400 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Carbon monoxide"
                  title="Yellow Carbon monoxide"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Carbon monoxide"
                  title="Red Carbon monoxide"
                />
              )}
            </td>
            {/* 6th row */}
            <td>
              {0 <= flagPM && flagPM <= 50 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/green-square-emoji.png"
                  alt="Green Particulate matter"
                  title="Green Particulate matter"
                />
              ) : 51 <= flagPM && flagPM <= 100 ? (
                <img
                  src="https://img.icons8.com/emoji/48/000000/yellow-square-emoji.png"
                  alt="Yellow Particulate matter"
                  title="Yellow Particulate matter"
                />
              ) : (
                <img
                  src="https://img.icons8.com/emoji/48/000000/red-square-emoji.png"
                  alt="Red Particulate matter"
                  title="Red Particulate matter"
                />
              )}
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
