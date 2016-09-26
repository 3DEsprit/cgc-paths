import React, { Component } from 'react';
import ListItem from './visual/ListItem';

export default class List extends Component {
  constructor(props, state) {
    super(props, state);
    console.log('List: ', this.props);
  }

  render() {
    return (
      <div>
        <ListItem />
      </div>
    )
  }
}
