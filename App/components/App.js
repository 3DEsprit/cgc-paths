import React, { Component, PropTypes } from 'react';
import Header from './visual/Header';
import List from './List';
import Path from './Path';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      flow: 'Blender',
      selected: 'Blender',
      view: '',
      coursePath: 0
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
        {this.viewChange()}
      </div>
    )
  }

  changeFlow = (flow) => {
    this.setState({
      flow: flow,
      view: 'Path'
    });
  }

  viewPathList = (currentPath) => {
    this.setState({
      view: 'Course',
      coursePath: currentPath
    });
  }

  viewChange = () => {
    switch (this.state.view) {
      case 'Path':
        return (
          <Path
            pathList={this.props.pathList}
            flow={this.state.flow}
            courseView={this.viewPathList}
          />
        )
      case 'Course':
        console.log('Course View: ', this.props);
        return (
          <List
            courseList={this.props.courseList}
            currentPath={this.state.currentPath}
          />
        )
      default:
        return (
          <h1 className="start">Choose a Topic Above</h1>
        )
    }
  }
}

App.propTypes = {
  currentPathList: PropTypes.number
}
