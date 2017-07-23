import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const Card = (props) => {
  return (

    <div className="card mx-auto rounded loginCard">
      <div className="container-fluid row">

        <div className="logoMobile">
          <img src={props.logo} alt="Operator logo" />
        </div>

        <div className="col-sm-5 roundedCorners-leftSide" id="left-part" style={props.leftStyle}>
          {props.leftContent}
        </div>

        <div className="col-sm-7 roundedCorners-rightSide" id="right-part" style={props.rightStyle}>

          <div className="logoDesktop">
            <img src={props.logo} alt="Operator logo" />
          </div>

          <div id="content">
          {props.riteContent}
          </div>

          <div className="col-11 offset-1">&nbsp;</div>
          <div className="col-11 offset-1 card-footer text-center">
            <small className="text-muted editables" style={props.sub}>{props.footerContent}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
