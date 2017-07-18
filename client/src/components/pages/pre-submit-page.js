import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actions from '../../actions/auth';
import Card from './Card';
import Counter from '../Counter';

class PreSubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
    };
  }

  render() {

    const ref = this.state.jsonData;

    return (
    <Card leftContent={
      // left
      <div className="vcenter">
        <h5>{ref.texts.left.header}</h5>
        <p className="card-text">{ref.texts.left.content}</p>
      </div>
    } riteContent={
      // right
      <div>
        <div className="col-12">&nbsp;</div>
        <div className="col-12">
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerTime}</h4>
          <div className="fullsize">
            <Counter secs="15" zapTo="login-page" />
          </div>
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerCode}</h4>
          <div className="fullsize">
            <input type="text" className="centering" name="" />
          </div>
        </div>

        <div className="col-12">&nbsp;</div>
        <div className="col-10 offset-1 real-buttons fullsize">
          <a href="#" className="btn btn-success centering">{ref.texts.preSubmit.button1}</a>
          <a href="#" className="btn btn-danger btn-ghosted centering">{ref.texts.preSubmit.button2}</a>  
        </div>
      </div>
      } footerContent={ref.texts.footer} />
    );
  }
}
PreSubmitPage.defaultProps = {
  displayName: 'PreSubmit Page'
}
export default PreSubmitPage;
