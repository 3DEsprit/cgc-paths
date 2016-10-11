import React, { Component } from 'react';
import PathItem from './visual/PathItem';

export default class Path extends Component {
  constructor(props, state) {
    super(props, state);

  }

  componentDidMount() {
    document.title = 'CGCookie Learning Path List';
  }

  render() {
    const pathList = this.props.route.pathList;
    let flow = this.props.params.flow;

    return (
      <div>
        <ul>
          <div className="listcontainer">
            {pathList.map((path) => {
              if (path.flow == flow) {
                return (
                  <PathItem
                    Item={path}
                    key={path.id}
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
