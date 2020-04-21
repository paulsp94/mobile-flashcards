import { QUIZ_FINISHED } from '../actions';

export const quiz = (state = null, { type, timestamp }) => {
  switch (type) {
    case QUIZ_FINISHED:
      return { timestamp };
    default:
      return state;
  }
};
