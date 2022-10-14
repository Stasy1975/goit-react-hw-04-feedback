import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css'
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const onClickBtn = (type) => () => {
    confetti({
      particleCount: 100,
      spread: 150
    });
    onLeaveFeedback(type);
  };

  return (
    <ul className="List">
          {Object.keys(options).map(type => {
          console.log(type)
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
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;