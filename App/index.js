import './styles.css'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Start from './components/Start';
import Path from './components/Path';
import List from './components/List';
import ForOhFour from './components/ForOhFour';
const courses = require('json!./mock/courses.json');
const paths = require('json!./mock/paths.json');

// Rendering main components
render(
<Router history={browserHistory} courseList={courses} pathList={paths}>
  <Route component={App} title="CGCookie Path Browser">
    <IndexRoute component={Start} />
    <Route path="/" component={Start} />
    <Route path="paths/:flow" component={Path} pathList={paths} />
    <Route path="courses/:path_id" component={List} pathList={paths} courseList={courses} />
    <Route path="*" component={ForOhFour} />
  </Route>
</Router>,
  document.getElementById('app')
);
