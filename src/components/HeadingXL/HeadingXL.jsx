import React from 'react'
import styles from './HeadingXL.module.css'
import PropTypes from 'prop-types'

export  function HeadingXL(props) {
    return (
        <div className={styles.container} style={{background: props.bgColor}}>
            <h3 className={styles.headerText}>{props.title}</h3>

            <p>{props.content}</p>

            <hr style={{borderColor: props.lineColor}} />      

        </div>
    )
}



HeadingXL.propTypes={
    title: PropTypes.string, 
    content: PropTypes.string, 
    lineColor: PropTypes.string,
    bgColor: PropTypes.string
}
