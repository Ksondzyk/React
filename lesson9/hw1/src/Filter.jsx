import React, { Component } from "react";
import ReactDOM from "react-dom";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    console.log(this.props);
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      filterText: inputValue,
    });
    this.props.onChange(this.state.filterText);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">5</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.filterText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
