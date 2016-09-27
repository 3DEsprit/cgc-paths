import React from 'react';
import { Link } from 'react-router';

const LinkWrap = (props) => {
  return (
    <Link {...props} activeClassName="active" />
  )
}

export default LinkWrap;
