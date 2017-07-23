import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';
import Counter from '../Counter';

class PostSubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
    };
  }

  render() {

    const ref = this.state.jsonData;
    let headerCSS = {color: ref.colors.text.header};
    let subCSS = {color: ref.colors.text.sub};
    let inputCSS = {color: ref.colors.text.input};

    return (
      <Card 
        logo={ref.images.logo} 
        logoStyle={{backgroundColor: ref.colors.back.logo}}
        leftStyle={{backgroundColor: ref.colors.back.left}} 
        rightStyle={{backgroundColor: ref.colors.back.rite}} 
        sub={subCSS}
        leftContent={
      // left
      <div className="vcenter">
        <h5>{ref.texts.left.header}</h5>
        <p className="card-text">{ref.texts.left.content}</p>
      </div>
    } riteContent={
      // right
            <div className="row">
              <div className="col-12">&nbsp;</div>
              <div className="col-12">
                <h4 className="card-title-grey">{ref.texts.postSubmit.header}</h4>
                <div className="fullsize hr-mins">
                  <Counter secs={ref.timers.total} zapTo="login-page" withHours="true" sub={subCSS} />
                  <h5 className="card-title-grey hrs">{ref.texts.postSubmit.subHr}</h5>
                  <h5 className="card-title-grey mins">{ref.texts.postSubmit.subMin}</h5>
                </div>
              </div>

              <div className="col-12">&nbsp;</div>
              <div className="col-10 offset-1 real-buttons fullsize">
                <button className="btn btn-success centering">{ref.texts.postSubmit.button1}</button>
              </div>
  
            </div>
      } footerContent={ref.texts.footer} />
    );
  }
}

export default PostSubmitPage;
