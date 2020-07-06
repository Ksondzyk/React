import React, { Component } from "react";
import PropTypes from "prop-types";

class Expand extends Component {
  state = {
    widthContent: false,
  };

  showDialog = () => {
    const bool = !!this.state.widthContent;
    this.setState({
      widthContent: !bool,
    });
  };

  render() {
    const { widthContent } = this.state;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.showDialog}>
            {widthContent ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
          {widthContent ? (
            <div className="expand__content">{this.props.children}</div>
          ) : null}
        </div>
        {/* <div className="expand__content">{visible ? children : ""}</div> */}
      </div>
    );
  }
}
Expand.propTypes = {
  title: PropTypes.string,
};
Expand.defaultProps = {
  title: "Pleace click btn ",
};

export default Expand;
