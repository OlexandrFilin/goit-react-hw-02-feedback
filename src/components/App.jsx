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
    const Percent =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    return isNaN(Percent) ? 0 : Math.round(Percent);
  };
  render() {
    return (
      // <div
      // // style={{
      // //   paddingLeft: '20px',
      // // }}
      // >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            this.HandlerClickGood,
            this.HandlerClickNeut,
            this.HandlerClickBad,
          ]}
          onLeaveFeedback={0}
        />

        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>

      // </div>
    );
  }
}
