import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const STORAGE_KEY = 'feedback';

  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
      return savedData;
    }
    return INITIAL_STATE;
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercent = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(INITIAL_STATE);
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  return (
    <div className="feedback">
      <Description />
      <Options onFeedbackGiven={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback ? (
        <Feedback
          feedbackStats={feedback}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
