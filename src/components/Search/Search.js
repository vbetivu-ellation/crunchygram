import propTypes from "prop-types";
import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Search.module.css";
import Searchbutton from "../Searchbutton";
import Input from "../common/Input"



const Search = ({className}) => {
    const [value, setValue] = useState("");
    function handleChange(event){
        setValue(event.target.value)
    };
       

    
    return (
        <div className={classNames(className,styles.divstyle)}>
        <Input className={classNames(styles.inputstyle)} 
        handleChange={handleChange}
        value={value}
       /><Searchbutton/>
        </div>

    );
}

Search.propTypes = {
    className:propTypes.string
}

export default Search;