import React, { Component } from 'react';

export default class List extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ul>
          <div className="listContainer">
            {this.props.courseList.map((course) => {
              if(course.flow == this.props.flow) {
                return (
                  <div className="wrapper">
                    <div className="courseWell">
                      Dot
                    </div>
                    <li className="listItem" key={course.id}>
                      <div className="courseItem">
                        Name: {course.name} Flow: {course.flow}
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
