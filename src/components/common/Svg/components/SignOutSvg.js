import React from "react";
import PropTypes from "prop-types";

import BaseSvg from "./BaseSvg";

const SignOutSvg = ({ className }) => (
  <BaseSvg className={className} viewBox="0 0 24 24">
    <path d="M15 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4H6v16h8v-4a1 1 0 0 1 1-1zm8.923-2.618a1 1 0 0 1-.217.326l-4 3.999A.993.993 0 0 1 19 17a.999.999 0 0 1-.707-1.707L20.586 13H15a1 1 0 0 1 0-2h5.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l3.999 4a.992.992 0 0 1 .217 1.089z" />
  </BaseSvg>
);

SignOutSvg.propTypes = {
  className: PropTypes.string,
};

export default SignOutSvg;
