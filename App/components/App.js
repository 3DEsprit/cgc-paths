import React, { Component } from 'react';
import Header from './visual/Header';
import List from './List';
import Path from './Path';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      flow: 'Blender',
      selected: 'Blender'
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header
          changeFlow={this.changeFlow}
          selected={this.state.selected}
        />
        <Path
          pathList={this.props.pathList}
          flow={this.state.flow}
        />
      </div>
    )
  }

  changeFlow = (flow) => {
    this.setState({flow: flow});
  }
}
