import './bootstrap/css/bootstrap-theme.min.css'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/toastr.min.css'
import './styles.css'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
const courses = require('json!./mock/courses.json');
const paths = require('json!./mock/paths.json');

// const courseList = courses[0];
// const pathList = paths[0];
console.log(paths);
// Rendering main component
render(<App courseList={courses} pathList={paths} />,
  document.getElementById('app')
);
