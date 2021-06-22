import React from 'react';

// const props = { name: "Samuel", lastName: "Silva" };

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}!</h1>;
  }
}

export default Greeting;