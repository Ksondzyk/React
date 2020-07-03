import React from "react";
import PropTypes from "prop-types";

const Expand = ({ children, title, dialog, visible }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={dialog}>
          {visible ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </button>
      </div>
      <div className="expand__content">{visible ? children : ""}</div>
    </div>
  );
};
export default Expand;
