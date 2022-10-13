import React from 'react'
import './Statistics.css'
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className="Container__St">
      <li className="Item">
        <span className="Head">Good:</span>
        <span className="Value">{good}</span>
      </li>
      <li className="Item">
        <span className="Head">Neutral:</span>
        <span className="Value">{neutral}</span>
      </li>
      <li className="Item">
        <span className="Head">Bad:</span>
        <span className="Value">{bad}</span>
      </li>
      <li className="Item">
        <span className="Head">Total:</span>
        <span className="Value">{total}</span>
      </li>
      <li className="Item">
        <span className="Head">Positive feedback:</span>
        <span className="Value">{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
