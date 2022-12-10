import PropTypes from 'prop-types';
import { useState } from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(el => {
        return (
          <button
            key={el}
            className="btn"
            type="button"
            onClick={() => onLeaveFeedback(el)}
            name={el}
            value={el}
          >
            {el}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func,
};
