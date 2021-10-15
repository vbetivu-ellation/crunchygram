import React from "react";
import PropTypes from "prop-types";

const CommentSvg = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    role="img"
  >
    <path d="M21 3a1 1 0 0 1 .993.883L22 4v15a1 1 0 0 1-.883.993L21 20h-6l-2.293 2.293a.997.997 0 0 1-1.312.09l-.102-.09L9 20H3a1 1 0 0 1-.993-.883L2 19V4a1 1 0 0 1 .883-.993L3 3h18zm-1 2H4v13h5.829l.585.586L12 20.172l1.586-1.586.586-.586H20V5zm-4 8a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM8 8h8a1 1 0 0 1 .117 1.993L16 10H8a1 1 0 0 1-.117-1.993L8 8h8z" />
  </svg>
);

CommentSvg.propTypes = { className: PropTypes.string };

export default CommentSvg;
