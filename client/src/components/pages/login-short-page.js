import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';

class LoginShortPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
    };
  }

  render() {

    const ref = this.state.jsonData;

    return (
      <Card 
        logo={ref.images.logo} 
        logoStyle={{backgroundColor: ref.colors.back.logo}}
        leftStyle={{backgroundColor: ref.colors.back.left}} 
        rightStyle={{backgroundColor: ref.colors.back.rite}} 
        leftContent={
      // left
      <div className="vcenter">
        <h5>{ref.texts.left.header}</h5>
        <p className="card-text">{ref.texts.left.content}</p>
      </div>
    } riteContent={
      // right
      <div>
      LOGIN SHORT Page
      </div>
      } footerContent={ref.texts.footer} />
    );
  }
}

export default LoginShortPage;
