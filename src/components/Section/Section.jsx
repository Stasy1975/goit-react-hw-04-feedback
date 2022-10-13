import React from 'react';
// import PropTypes from 'prop-types';
import './Section.css'


const Section = ({children, title}) => {
  return (
    <div className="Container">
        <h3>{title}</h3>
        {children}
      </div>
  );
};



export default Section;