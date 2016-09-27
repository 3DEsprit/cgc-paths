import React, { PropTypes } from 'react';
import LinkWrap from './LinkWrap';

const PathItem = ({Item}) => {
  return (
    <div className="wrapper">
      <div className="courseWell">
        Dot
      </div>
      <LinkWrap to={'/courses/' + Item.id}>
      <li className="pathItem">
        <div className="courseItem">
          <p className="pathName">{Item.name}</p>
          <p className="pathFlow">{Item.flow}</p>
          <p className="pathFocus">{Item.focus}</p>
        </div>
      </li>
      </LinkWrap>
    </div>
  )
}

PathItem.propTypes = {
  Item: PropTypes.object.isRequired
}

export default PathItem;
