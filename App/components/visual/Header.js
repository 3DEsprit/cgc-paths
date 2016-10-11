import React from 'react';
import LinkWrap from './LinkWrap';

const Header = (props) => {
  return (
    <div className="header">
      <LinkWrap to="/paths/Blender"><button
        className="blender-button button"
        >Blender</button></LinkWrap>
      <LinkWrap to="/paths/Concept"><button
        className="concept-button button"
        >Concept</button></LinkWrap>
      <LinkWrap to="/paths/Sculpt"><button
        className="sculpt-button button"
        >Sculpt</button></LinkWrap>
      <LinkWrap to="/paths/Unity"><button
        className="unity-button button"
        >Unity</button></LinkWrap>
    </div>
  )
}

export default Header;
