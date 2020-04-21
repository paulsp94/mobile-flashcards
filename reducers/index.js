import { combineReducers } from 'redux';
import { decks } from './decks';
import { quiz } from './quiz';

export { decks, quiz };
export default combineReducers({ decks, quiz });
