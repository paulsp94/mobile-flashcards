import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Container } from '../components/Container';
import { DecksItem } from '../components/DecksItem';

export const Decks = ({ navigation }) => {
  const decks = useSelector((state) =>
    Object.values(state).map((deck) => ({ title: deck.title, cards: deck.questions.length }))
  );

  const toDeck = (title) => navigation.navigate('Cards', { deckName: title });

  return (
    <Container>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DecksItem deckName={item.title} cards={item.cards} navigate={toDeck} />
        )}
        keyExtractor={(item) => item.title}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => console.log('Pressed')} />
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,

    elevation: 20,
  },
  list: {
    paddingTop: 8,
    backgroundColor: 'white',
  },
  listContainer: { paddingBottom: 100 },
});
