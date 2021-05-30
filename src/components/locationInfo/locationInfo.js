import React, { Component } from "react";

export default class LocationInfo extends Component {
  render() {
    return (
      <section className="locationInfo">
        <div className="name">{this.props.location.name}</div>
        <div className="country">{this.props.location.country}</div>
        <div className="datetime">{this.props.location.dateTime}</div>
      </section>
    );
  }
}
