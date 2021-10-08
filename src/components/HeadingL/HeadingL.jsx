import React from 'react' 
import styles from './HeadingL.module.css' 
import PropTypes from 'prop-types'




export function HeadingL(props) {
     
    return (
        <div className={styles.container} style={{background: props.bgColor}}>
            <h3 className={styles.headerText}>{props.title}</h3>

            <p>{props.content}</p>

            <hr style={{borderColor: props.lineColor}} />      
        </div>
    );

}



HeadingL.propTypes={
    title: PropTypes.string, 
    content: PropTypes.string, 
    lineColor: PropTypes.string,
    bgColor: PropTypes.string
}