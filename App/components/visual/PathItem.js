import React, { PropTypes } from 'react';

const PathItem = ({Item, courseView}) => {
  return (
    <div className="wrapper">
      <div className="courseWell">
      Dot
      </div>
      <li className="listItem" onClick={() => {courseView(Item.id)}}>
        <div className="courseItem">
          <p className="pathFocus">Focus: {Item.focus}</p>
          <p className="pathFlow">Flow: {Item.flow}</p>
          <p className="pathCourses">Courses: {Item.path}</p>
        </div>
      </li>
    </div>
  )
}

PathItem.propTypes = {
  courseView: PropTypes.func.isRequired
}

export default PathItem;
