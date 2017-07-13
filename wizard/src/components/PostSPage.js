import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

import '../styles/wizard.css';

// Since this component is simple and static, there's no parent container for it.
const WizardPage = () => {
  return (

    <div className="card mx-auto rounded loginCard">
      <div className="container-fluid row">

        <div className="logoMobile">
          <img className="card-img-top-mobile" src="../img/turkcell-logo.png" alt="Operator logo" />
        </div>

        <div className="col-sm-5 roundedCorners-leftSide" id="left-part">
          lefts
        </div>

        <div className="col-sm-7 roundedCorners-rightSide" id="right-part">

          <div className="row">
            <div className="col-11 offset-1">
              <div className="logoDesktop">

                <img className="" src="../img/turkcell-logo.png" alt="Operator logo" />
              </div>
            </div>
          <div id="content"></div>

          <div className="col-11 offset-1">&nbsp;</div>
          <div className="col-11 offset-1 card-footer text-center">
            <small className="text-muted">Powered by Turkcell</small>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WizardPage;
