import React from 'react';

const ListItem = ({course}) => {
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

export default ListItem;
