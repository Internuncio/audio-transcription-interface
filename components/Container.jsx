import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
