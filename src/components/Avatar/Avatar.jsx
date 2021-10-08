import React from "react"; 
import PropTypes from "prop-types";

export function Avatar(props) {
  return (
    <div style={{}}>

      <div style={{ display: 'flex' }}>
        <img src={props.avatar} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
        <h6 style={{ textAlign: 'center' }}> {props.fullname} </h6> 
      </div>



    </div>
  );
}

Avatar.propTypes={fullname: PropTypes.string, avatar: PropTypes.any} 
