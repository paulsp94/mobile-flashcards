export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
export const ADD_QUESTION = 'ADD_QUESTION';

export const getDecks = () => ({
  type: GET_DECKS,
});

export const getDeck = (title) => ({
  type: GET_DECK,
  title,
});

export const addDeckTitle = (title) => ({
  type: ADD_DECK_TITLE,
  title,
});

export const addQuestion = (deckName, question) => ({
  type: ADD_QUESTION,
  deckName,
  question,
});
