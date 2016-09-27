import React, { PropTypes } from 'react';
import LinkWrap from './LinkWrap';

const ListItem = ({course}) => {
  return (
    <div className="wrapper">
      <div className="courseWell">
        Dot
      </div>
      <a href={course.url} target={course.name}>
        <li className="listItem">
          <div className="courseItem">
            <p className="courseName">{course.name}</p>
            <p className="courseDesc">Description: {course.desc}</p>
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
