import React, { PropTypes } from 'react';
import LinkWrap from './LinkWrap';

const PathItem = ({Item}) => {
  return (
    <div className="wrapper">
      <div className="coursewell">
        &nbsp;
      </div>
      <LinkWrap to={'/courses/' + Item.id}>
      <li className="pathitem">
        <div className="courseitem">
          <p className="listname">{Item.name}</p>
          <p className="listtype">{Item.flow}</p>
          <p className="listdesc">{Item.focus}</p>
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
