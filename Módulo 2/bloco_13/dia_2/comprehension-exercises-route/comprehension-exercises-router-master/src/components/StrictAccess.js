import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const {username, password} = this.props;
      if(username !== 'joao' && password !== 1234) {
        alert('Access Denied');
        return <Redirect to="/" />
      }
    return (
      <p>Welcome joao!</p>
    )
  }
}

export default StrictAccess;