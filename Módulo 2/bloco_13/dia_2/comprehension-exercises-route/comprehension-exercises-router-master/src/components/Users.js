import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> My awesome Users component </p>
        <p>{ `${greetingsMessage }, My awesome ${id ? id : 'fulano'} component` }</p>
        <Link exact to="/" > Voltar para home </Link>
      </div>
    );
  }
};

export default Users;
