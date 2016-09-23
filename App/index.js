import './bootstrap/css/bootstrap-theme.min.css'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/toastr.min.css'
import './style.css'
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './components/App';
import List from './components/List';

// Rendering main component
render(<Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="blender" handler={List} />
  <Route path="concept" handler={List} />
  <Route path="sculpt" handler={List} />
  <Route path="unity" handler={List} />
</Router>,
  document.getElementById('app')
);
