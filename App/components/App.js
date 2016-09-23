import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      flow: ''
    }
  }

  render() {
    return (
      <div>
        <p>Choose Flow</p>
        <button onClick="">Blender</button>
        <button onClick="">Concept</button>
        <button onClick="">Sculpt</button>
        <button onClick="">Unity</button>
      </div>
    )
  }
}
