import s from './Feedback.module.css';

const Feedback = ({ feedbackStats, totalFeedback, positivePercent }) => {
  const { good, neutral, bad } = feedbackStats;
  return (
    <div className={s.feedback}>
      <p>
        <span className={s.bold}>Good:</span> {good}
      </p>
      <p>
        <span className={s.bold}>Neutral:</span> {neutral}
      </p>
      <p>
        <span className={s.bold}>Bad:</span> {bad}
      </p>
      <p>
        <span className={s.bold}>Total:</span> {totalFeedback}
      </p>
      <p>
        <span className={s.bold}>Posititive:</span> {[positivePercent + '%']}
      </p>
    </div>
  );
};

export default Feedback;
