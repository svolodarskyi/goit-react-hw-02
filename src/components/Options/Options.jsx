import s from './Options.module.css';

const Options = ({ onFeedbackGiven }) => {
  return (
    <div className={s.options}>
      <button onClick={() => onFeedbackGiven('good')}>Good</button>
      <button onClick={() => onFeedbackGiven('neutral')}>Neutral</button>
      <button onClick={() => onFeedbackGiven('bad')}>Bad</button>
      <button onClick={() => onFeedbackGiven('reset')}>Reset</button>
    </div>
  );
};

export default Options;
