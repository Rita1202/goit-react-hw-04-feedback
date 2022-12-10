import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          Good: <span className={css.number}>{good}</span>
        </li>
        <li>
          Neutral: <span className={css.number}>{neutral}</span>
        </li>
        <li>
          Bad: <span className={css.number}>{bad}</span>
        </li>
        <li>
          Total: <span className={css.number}>{total}</span>
        </li>
        <li>
          Positive feedback:
          <span className={css.number}> {positivePercentage}</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
