import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import { decks } from '../reducers';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['decks'],
};

const decksPersistConfig = {
  key: 'decks',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  decks: persistReducer(decksPersistConfig, decks),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
