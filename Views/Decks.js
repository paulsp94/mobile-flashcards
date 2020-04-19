import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { Container } from '../components/Container';
import { DecksItem } from '../components/DecksItem';
import { CustomAppbar } from '../components/CustomAppbar';

export const Decks = ({ navigation }) => {
  const decks = useSelector((state) =>
    Object.values(state).map((deck) => ({ title: deck.title, cards: deck.questions.length }))
  );

  return (
    <Container>
      <CustomAppbar />
      <FlatList
        data={decks}
        renderItem={({ item }) => <DecksItem deckName={item.title} cards={item.cards} />}
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
    marginTop: -16,
    paddingTop: 16,
  },
  listContainer: { paddingBottom: 100 },
});
