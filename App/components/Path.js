import React, { Component } from 'react';
import PathItem from './visual/PathItem';

export default class Path extends Component {
  constructor(props, state) {
    super(props, state);
  }

  render() {
    return (
      <div>
        <ul>
          <div className="listContainer">
            {this.props.pathList.map((path) => {
              if (path.flow == this.props.flow) {
                return (
                  <PathItem
                    Item={path}
                    key={path.id}
                    courseView={this.props.courseView}
                  />
                )
              }
            })}
          </div>
        </ul>
      </div>
    )
  }
}
