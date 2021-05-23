import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };
    this.search = this.search.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.location);
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <div className="searchbar">
        <form role="search">
          <label for="search">Search a location</label>
          <input
            id="search"
            type="search"
            placeholder="Search a location..."
            onChange={this.handleLocationChange}
            autofocus
            required
          />
          <button type="submit"  className="searchButton" onClick={this.search}>Go</button>
        </form>
      </div>
    );
  }
}
