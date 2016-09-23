import './bootstrap/css/bootstrap-theme.min.css'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/toastr.min.css'
import './style.css'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Rendering main component
render(<App />,
  document.getElementById('app')
);
