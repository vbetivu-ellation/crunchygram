import React from 'react';
import PropTypes from "prop-types";

import BaseSvg from "./BaseSvg";

const SearchSvg = ({className}) => (
    <BaseSvg className={className} viewBox="0 0 24 24">
        <path
            fill="#a0a0a0"
            d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        />
    </BaseSvg>
);

SearchSvg.propTypes = {
    className: PropTypes.string,
};

export default SearchSvg;
