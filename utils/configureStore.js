import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import { decks, quiz } from '../reducers';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['decks', 'quiz'],
};

const decksPersistConfig = {
  key: 'decks',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const quizPersistConfig = {
  key: 'quiz',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  decks: persistReducer(decksPersistConfig, decks),
  quiz: persistReducer(quizPersistConfig, quiz),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
