import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import reducer from './reducers';
import { DeckList } from './components/DeckList';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <DeckList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
