import React from 'react'
import mobile from "./mobile.svg";
import tablet from './tablet.svg';
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <div style={{
         background: "white",
         borderBottom: "1px solid #808080",
         height: "60px",
         width: "100%",
         display: 'flex',
         
      }} >
        <img className='large' src={tablet} alt="tablet"/>
        <img className="small" src={mobile} alt="mobile"/>
      </div>
    </div>
  )
}

export default Logo;