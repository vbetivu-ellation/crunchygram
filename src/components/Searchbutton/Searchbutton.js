import propTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import styles from "./Searchbutton.module.css";
import SearchSVG from "../common/SVG/Components/SearchSVG.js"

const Searchbutton = ({className}) => (
        <button className={classNames(className,styles.Iconstyle)}> 

        <SearchSVG/>
        </button>
)
Searchbutton.propTypes = {
    className: propTypes.string,

}


export default Searchbutton;
