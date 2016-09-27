import React from 'react';
import LinkWrap from './LinkWrap';

const Header = (props) => {
  return (
    <div id="header">
      <LinkWrap to="/paths/Blender"><button
        className="blenderButton button"
        >Blender</button></LinkWrap>
      <LinkWrap to="/paths/Concept"><button
        className="conceptButton button"
        >Concept</button></LinkWrap>
      <LinkWrap to="/paths/Sculpt"><button
        className="sculptButton button"
        >Sculpt</button></LinkWrap>
      <LinkWrap to="/paths/Unity"><button
        className="unityButton button"
        >Unity</button></LinkWrap>
    </div>
  )
}

export default Header;
