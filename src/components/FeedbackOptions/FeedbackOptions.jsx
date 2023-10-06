import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, ind) => {
          return (
            <button
              key={ind}
              type="button"
              className={css.statBtn}
              onClick={option.onClickFunction}
            >
              {option.nameFunc}
            </button>
          );
        })}
      </>
    );
  }
}

export default FeedbackOptions;
