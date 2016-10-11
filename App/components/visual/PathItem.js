import React, { PropTypes } from 'react';
import LinkWrap from './LinkWrap';

const PathItem = ({Item}) => {
  return (
    <div className="wrapper">
      <div className="coursewell">
        Dot
      </div>
      <LinkWrap to={'/courses/' + Item.id}>
      <li className="pathitem">
        <div className="courseitem">
          <p className="pathname">{Item.name}</p>
          <p className="pathflow">{Item.flow}</p>
          <p className="pathfocus">{Item.focus}</p>
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
