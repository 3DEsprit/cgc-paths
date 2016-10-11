import React, { PropTypes } from 'react';

const ListItem = ({course}) => {
  return (
    <div className="wrapper">
      <div className="coursewell">
        Dot
      </div>
      <a href={course.url} target={course.name}>
        <li className="listitem">
          <div className="courseitem">
            <p className="coursename">{course.name}</p>
            <p className="coursedesc">Description: {course.desc}</p>
          </div>
        </li>
      </a>
    </div>
  )
}

ListItem.propTypes = {
  course: PropTypes.object.isRequired
}

export default ListItem;
