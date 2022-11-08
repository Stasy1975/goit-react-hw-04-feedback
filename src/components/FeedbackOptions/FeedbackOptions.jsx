import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css'
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const FeedbackOptions = ({ types, onLeaveFeedback }) => {

  const onClickBtn = (type) => () => {
     confetti({
      particleCount: 100,
       spread: 150
         });
    onLeaveFeedback(type);
  };

  return (
    <ul className="List">
      {types.map( (type ) => {
        
        return (
          <li className='Item'
            key={type}
                   >
            <button className="Btn"
              onClick={onClickBtn(type)}
            >
              {type}
            </button>
          </li>
        )
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  types: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;