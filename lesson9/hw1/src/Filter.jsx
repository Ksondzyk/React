import React, { Component } from "react";
import ReactDOM from "react-dom";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
    console.log(this.props);
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      inputText: inputValue,
    });
    this.props.onChange(this.state.inputText);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
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
