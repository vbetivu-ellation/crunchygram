import React from "react"; 
import PropTypes from "prop-types";
 


export function ImageComponent(props) {
    return (<div>
        <div style={{ width: props.width, height: props.height, backgroundColor: 'red', border: '1px solid black' }}>
            <img src={props.img} style={{ width: '100%', height: '100%' }} />

        </div>
    </div>)


}


ImageComponent.propTypes={width:PropTypes.string,height:PropTypes.string, img: PropTypes.any}