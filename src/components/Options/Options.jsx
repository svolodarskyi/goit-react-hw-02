import s from './Options.module.css';

const Options = ({ onFeedbackGiven, totalFeedback }) => {
  return (
    <div className={s.options}>
      <button onClick={() => onFeedbackGiven('good')}>Good</button>
      <button onClick={() => onFeedbackGiven('neutral')}>Neutral</button>
      <button onClick={() => onFeedbackGiven('bad')}>Bad</button>
      {totalFeedback ? (
        <button onClick={() => onFeedbackGiven('reset')}>Reset</button>
      ) : (
        false
      )}
    </div>
  );
};

export default Options;
