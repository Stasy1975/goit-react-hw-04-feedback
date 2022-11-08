import React, { useState } from 'react'
import Section from '../components/Section';
import FeedbackOptions from '../components/FeedbackOptions';
import Notification from '../components/Notification';
import Statistics from '../components/Statistics';



const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () =>{
      return good + neutral + bad;
}

  const countPositiveFeedbackPercentage=() =>{
   return Math.round(good /countTotalFeedback() * 100);
  }
  const onLeaveFeedback = (type) => {
    // const { type } = feedback;
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Некорректна оцінка');
   }
  };


  const types = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();




    return (
      <div >
         <Section title='Please leave feedback'>
          <FeedbackOptions
            types={types}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {!total
            ? <Notification message='There is no feedback'/>
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />}
        </Section>
      </div>
    );
  }


export default App;
