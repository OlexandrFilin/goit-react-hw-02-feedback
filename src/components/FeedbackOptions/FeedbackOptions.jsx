import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.modules.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className={css.statBtn}
          onClick={this.props.options[0]}
        >
          Good{' '}
        </button>
        <button
          type="button"
          className={css.statBtn}
          onClick={this.props.options[1]}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.statBtn}
          onClick={this.props.options[2]}
        >
          Bad{' '}
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
