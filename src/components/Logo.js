import React from 'react';
import Logododo from '../pages/images/logo.png';

const Logo = () => {
   return (
      <span className="logo">
         <img src={Logododo} alt="logo" 
         
         style={{
            
            width: "60px",             
            bottom: "0px",
            objectFit: "cover"
         }}/>
      </span>
   );
};

export default Logo;