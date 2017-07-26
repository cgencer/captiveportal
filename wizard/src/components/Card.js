import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

import '../styles/wizard.css';

// Since this component is simple and static, there's no parent container for it.
const Card = (props) => {
  return (
    <div>
    <div className="card mx-auto rounded loginCard">
      <div className="container-fluid row">

        <div className="col-sm-5 roundedCorners-leftSide" id="left-part">
          {props.leftContent}
        </div>

        <div className="col-sm-7 roundedCorners-rightSide" id="right-part">

          <div id="content">
          {props.riteContent}
          </div>

          <div className="col-11 offset-1">&nbsp;</div>
          <div className="col-11 offset-1 card-footer text-center">
            <small className="text-muted editables">{props.footerContent}</small>
          </div>
        </div>
      </div>
    </div>


    <br /><br /><br />
    <button className="btn btn-success" onClick={this.props.saver()}>Değişiklikleri Kaydet</button><br />
    </div>
  );
};

export default Card;
