import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form onsubmit="event.preventDefault();" role="search">
          <label for="search">Search a location</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}
