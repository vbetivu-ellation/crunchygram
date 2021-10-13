import propTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import styles from "./Search.module.css";
import Searchbutton from "../Searchbutton";
import Input from "../common/Input"


const Search = ({className}) => {
    return (
        <div className={classNames(className,styles.divstyle)}>
        <Input/><Searchbutton/>
        </div>

    );
}

Search.propTypes = {
    className : propTypes.string,
}

export default Search;