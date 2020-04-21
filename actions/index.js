export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
export const EDIT_DECK_TITLE = 'EDIT_DECK_TITLE';
export const REMOVE_DECK_TITLE = 'REMOVE_DECK_TITLE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

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

export const editDeckTitle = (oldTitle, newTitle) => ({
  type: EDIT_DECK_TITLE,
  oldTitle,
  newTitle,
});

export const removeDeckTitle = (title) => ({
  type: REMOVE_DECK_TITLE,
  title,
});

export const addQuestion = (deck, question) => ({
  type: ADD_QUESTION,
  deck,
  question,
});

export const removeQuestion = (deckName, question) => ({
  type: REMOVE_QUESTION,
  deckName,
  question,
});
