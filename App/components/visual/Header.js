import React from 'react';

const Header = ({changeFlow, selected}) => {
  return (
    <div id="header">
      <button
        className="blenderButton button"
        onClick={() => changeFlow('Blender')}>Blender</button>
      <button
        className="conceptButton button"
        onClick={() => changeFlow('Concept')}>Concept</button>
      <button
        className="sculptButton button"
        onClick={() => changeFlow('Sculpt')}>Sculpt</button>
      <button
        className="unityButton button"
        onClick={() => changeFlow('Unity')}>Unity</button>
    </div>
  )
}

export default Header;
