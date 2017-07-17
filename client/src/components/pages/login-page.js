import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.jsonData);
    this.state = {
      jsonData: props.jsonData,
    };
  }

  aFlag(countryCode) {
    const flagStyle= 'flag flag-' + countryCode;
    return (
      <a className="dropdown-item col-4" href="#"><div className={flagStyle} alt={countryCode}></div></a>
    );
  }

  allFlags() {
    return (
      <div>
        <div className="row">      
        {this.state.jsonData.flags.map(function(daflag, index) {
          const flagStyle= 'flag flag-' + daflag;
          const rows = ((index % 3 === 0) && (index !== 0)) ? '</div><div className="row">' : '';
          return <a className="dropdown-item col-4" href="#"><div className={flagStyle} alt={daflag}></div></a>
        })}
        </div>
      </div>
    );
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
        <form>
            <div className="col-11 offset-1 row">&nbsp;</div>
            <div className="col-11 offset-1 row name">
              <h4 className="card-title-grey">{ref.texts.login.headerName}</h4>
              <div className="col-12">
                <input type="text" className="centering" name="" /> 
              </div>      
            </div>

            <div className="col-12 row">&nbsp;</div>
            <div className="col-9 offset-2">

              <div className="container-fluid row">

                <div className="col-12 colPhone">

                  <h4 className="card-title-grey">{ref.texts.login.headerPhone}</h4>
                  <div className="row">
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">country</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {this.allFlags()}
                    </div>
                  </div>
                    <div className="col-3"><input type="text" className="centering phone-prefix" name="" value="(+90)" disabled="disabled" /></div>
                    <div className="col-8"><input type="text" className="centering phone-number" name="" value="" /></div>

                  </div>

                </div>
              </div>

            </div>
            <div className="col-11 offset-1 row">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" />
                </span>
                <span className="agreement">{ref.texts.login.agree}</span>
              </div>
            </div>
            <div className="col-11 offset-1 row text-center real-buttons">
              <button type="submit" className="btn btn-success centering">{ref.texts.login.button1}</button>
            </div>

        </form>
        </div>      
      } footerContent={ref.texts.footer} />
    );
  }
};

export default LoginPage;
