import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { Container } from '../components/Container';
import { DecksItem } from '../components/DecksItem';
import { CustomAppbar } from '../components/CustomAppbar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    cards: 24,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    cards: 48,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    cards: 36,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    title: 'First Item',
    cards: 24,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
    cards: 48,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Third Item',
    cards: 36,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    title: 'First Item',
    cards: 24,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    title: 'Second Item',
    cards: 48,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
    cards: 36,
  },
];

export const Decks = () => {
  return (
    <Container>
      <CustomAppbar />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <DecksItem deckName={item.title} cards={item.cards} />}
        keyExtractor={(item) => item.id}
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
