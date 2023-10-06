import { Section } from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import React, { Component } from 'react';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HandlerPress = btn => {
    this.setState(prevState => {
      return {
        [btn]: prevState[btn] + 1,
      };
    });
  };

  HandlerClickGood = () => {
    this.HandlerPress('good');
  };
  HandlerClickNeut = () => {
    this.HandlerPress('neutral');
  };
  HandlerClickBad = () => {
    this.HandlerPress('bad');
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const Percent = (this.state.good / this.countTotalFeedback()) * 100;
    return isNaN(Percent) ? 0 : Math.round(Percent);
  };
  render() {
    const {
      HandlerClickGood,
      HandlerClickNeut,
      HandlerClickBad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            { onClickFunction: HandlerClickGood, nameFunc: 'Good' },
            { conClickFunction: HandlerClickNeut, nameFunc: 'Neutral' },
            { conClickFunction: HandlerClickBad, nameFunc: 'Bad' },
          ]}
          onLeaveFeedback={0}
        />

        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    );
  }
}
