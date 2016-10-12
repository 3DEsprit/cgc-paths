import React, { Component, PropTypes } from 'react';
import ListItem from './visual/ListItem';

export default class List extends Component {
  

  componentDidMount() {
    document.title = this.props.route.pathList[this.props.params.path_id].name;
  }

  render() {
    let pathList = this.props.route.pathList;
    let courseList = this.props.route.courseList;
    let pathId = this.props.params.path_id;
    let current = pathList[pathId].list;
    return (
      <div className="listcontainer">
        <ul>
          {current.map((course) => {
            return (
            <ListItem course={courseList[course]}
              key={courseList[course].id} />
            )
          })}
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  params: {
    path_id: PropTypes.number
  }
}
