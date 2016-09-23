import React from 'react';

const Course = ({id, flow, name}) => {
  return (
    <div>
      <p>Course: {name} : {id}</p>
      <p>Flow: {flow}</p>
    </div>
  )
}

export default Course;
