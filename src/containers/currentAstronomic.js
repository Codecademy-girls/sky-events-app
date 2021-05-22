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
          </tr>
          <tr>
            <td>06:43 AM</td>
            <td>09:10 PM</td>
            <td>02:12 PM</td>
            <td>03:24 AM</td>
          </tr>
        </table>
      </section>
    );
  }
}
