import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.props.onChange(inputValue);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.props.filterText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
