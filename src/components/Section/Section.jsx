import React from 'react';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import css from 'components/Section/Section.modules.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.statTitle}>{title}</h2>
      {children}
    </>
  );
};

export { Section };
