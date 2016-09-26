import React, { Component } from 'react';

export default class Path extends Component {
  constructor(props, state) {
    super(props, state);

    console.log('Path Props: ', this.props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ul>
          <div className="listContainer">
            {this.props.pathList.map((path) => {
              if(path.flow == this.props.flow) {
                return (
                  <div className="wrapper" key={path.id}>
                    <div className="courseWell">
                    Dot
                    </div>
                    <li className="listItem"
                      key={path.id}
                      onclick={

                      }
                    >
                      <div className="courseItem">
                        <p className="pathFocus">Focus: {path.focus}</p>
                        <p className="pathFlow">Flow: {path.flow}</p>
                        <p className="pathCourses">Courses: {path.path}</p>
                      </div>
                    </li>
                  </div>
                )
              }
            })}
          </div>
        </ul>
      </div>
    )
  }
}
