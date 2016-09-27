import React, { PropTypes } from 'react';
import LinkWrap from './LinkWrap';

const ListItem = ({course}) => {
  return (
    <div className="wrapper">
      <div className="courseWell">
        Dot
      </div>
      <li className="listItem">
        <div className="courseItem">
          <p className="courseName">Name: {course.name}</p>
          <p className="courseDesc">Description: {course.desc}</p>
        </div>
      </li>
    </div>
  )
}

ListItem.propTypes = {
  course: PropTypes.object.isRequired
}

export default ListItem;
