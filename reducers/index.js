import uuid from 'react-native-uuid';

import { ADD_DECK_TITLE, ADD_QUESTION, REMOVE_DECK_TITLE, EDIT_DECK_TITLE } from '../actions';

Object.removeTitle = (obj, title) =>
  Object.keys(obj)
    .filter((key) => key !== title)
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

const initialState = {
  React: {
    title: 'React',
    uuid: 'test1',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        uuid: 'test11',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        uuid: 'test12',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    uuid: 'test2',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
        uuid: 'test21',
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK_TITLE:
      return {
        ...state,
        [action.title]: { title: action.title, uuid: uuid.v4(), questions: [] },
      };
    case EDIT_DECK_TITLE: {
      const newDeck = state;
      newDeck[action.newTitle] = newDeck[action.oldTitle];
      return Object.removeTitle(newDeck, action.title);
    }
    case REMOVE_DECK_TITLE:
      return Object.removeTitle(state, action.title);
    case ADD_QUESTION:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, { ...action.question, uuid: uuid.v4() }],
        },
      };
    default:
      return state;
  }
};
