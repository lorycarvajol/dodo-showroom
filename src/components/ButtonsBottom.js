import React from "react";
import { NavLink } from "react-router-dom";
import ArrowsR from "../pages/images/flêche.png"
import ArrowsL from "../pages/images/flêcheG.png"

const ButtonsBottom = (props) => {
  return (
    <div className="scroll-bottom">
      <div className="sb-main">
        {props.left && (
          <NavLink to={props.left} className="left hover">
            <span>
            <img src={ArrowsL} alt="arrow"              
              style={{
                width: "60px",             
                bottom: "0px",
                objectFit: "cover"
             }}/>
            </span>
          </NavLink>
        )}
        <p className="center">scroll</p>
        {props.right && (
          <NavLink to={props.right} className="right hover">
            <span>
              <img src={ArrowsR} alt="arrow"               
              style={{               
                width: "60px",             
                bottom: "0px",
                objectFit: "cover"
             }}/></span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ButtonsBottom;