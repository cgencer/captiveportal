import React, { Component } from 'react';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
    };
  }

  render() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>I'm sorry, the page you were looking for cannot be found!</p>
      </div>
    );
  }
}

export default NotFoundPage;
