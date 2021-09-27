import React from "react";
import PropTypes from "prop-types";

import BaseSvg from "./BaseSvg";

const LikeFilledSvg = ({ className }) => (
  <BaseSvg className={className} viewBox="0 0 24 24">
    <path d="M12.078 5.446C10.801 3.816 9.156 3 7.144 3 3.818 3 1.426 6.285 2.26 9.924c.785 3.422 4.058 7.114 9.818 11.076 5.608-3.613 8.845-7.305 9.711-11.076C22.706 5.935 20.244 3 16.965 3c-1.927 0-3.556.815-4.887 2.446z" />
  </BaseSvg>
);

LikeFilledSvg.propTypes = {
  className: PropTypes.string,
};

export default LikeFilledSvg;
