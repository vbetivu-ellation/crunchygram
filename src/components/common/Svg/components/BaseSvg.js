import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styled from "./BaseSvg.module.css";

const BaseSvg = ({ className, viewBox, children }) => (
  <svg
    className={classNames(styled.svg, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    role="img"
  >
    {children}
  </svg>
);

BaseSvg.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BaseSvg;
