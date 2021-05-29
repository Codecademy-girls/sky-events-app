import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event) {
    this.props.onSearch(this.state.onSearch);
    event.preventDefault();
  }

  handleLocationChange(event) {
    this.setState({ onSearch: event.target.value });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
        this.props.onSearch(this.state.onSearch);
        event.preventDefault();
    }
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
            onKeyDown={this.handleKeyDown}
            autofocus
            required
          />
          <button type="submit"  className="searchButton" onClick={this.handleClick}>Go</button>
        </form>
      </div>
    );
  }
}
