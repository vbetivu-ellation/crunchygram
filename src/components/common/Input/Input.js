import propTypes from "prop-types";
import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
class Input extends React.Component {
    
  
  render() {
    const {value, placeholder, isDisabled, handleChange, className} = this.props;


  
    return (
      <div>
        <form>
          <label>
            <input
              className={classNames(styles.Inputstyle,className)}
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              isDisabled={isDisabled}
            />
          </label>
        </form>
      </div>
    );
  }
}
Input.propTypes = {
    value: propTypes.string,
    placeholder: propTypes.string,
    isDisabled: propTypes.bool,
    handleChange: propTypes.func,
    className:propTypes.string

}
export default Input;
