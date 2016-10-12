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
            {course.isWorkshop ? <p className="listshop">Pro Workshop</p> :
              course.isFlow ? <p className="listflow">Learning Flow</p>
              : <p className="listcourse">Course</p>}
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
