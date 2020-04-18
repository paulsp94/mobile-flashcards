import { ADD_DECK_TITLE, ADD_QUESTION } from '../actions';

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK_TITLE:
      return { ...state, [action.title]: { title: action.title, questions: [] } };
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckName]: { questions: [...state[action.deckName].questions, action.question] },
      };
    default:
      return state;
  }
};
