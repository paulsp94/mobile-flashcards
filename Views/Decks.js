import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { Container } from '../components/general/Container';
import { DecksItem } from '../components/decks/DecksItem';
import { DecksModal } from '../components/decks/DecksModal';

export const Decks = ({ navigation }) => {
  const [newDeckTitle, setNewDeckTitle] = useState('');
  const [editing, setEditing] = useState('');
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  const decks = useSelector((state) =>
    Object.values(state)
      .slice(0, -1)
      .map((deck) => ({ title: deck.title, cards: deck.questions.length }))
  );

  const toDeck = (title, cards) => navigation.navigate('Cards', { deckName: title, cards });
  const showModal = ({ title = '' }) => {
    setNewDeckTitle(title);
    setEditing(title);
    setVisible(true);
  };
  const hideModal = () => {
    setNewDeckTitle('');
    setEditing('');
    setVisible(false);
  };

  return (
    <Container>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DecksItem
            deckName={item.title}
            cards={item.cards}
            navigate={toDeck}
            showModal={showModal}
          />
        )}
        keyExtractor={(item) => item.uuid}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      />
      <Portal>
        <DecksModal
          visible={visible}
          title={newDeckTitle}
          setTitle={setNewDeckTitle}
          editing={editing}
          hideModal={hideModal}
        />
        <FAB style={styles.fab} icon="plus" onPress={showModal} visible={isFocused} />
      </Portal>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,

    color: 'white',
    backgroundColor: 'black',

    elevation: 20,
  },
  list: {
    paddingTop: 8,
    backgroundColor: 'white',
  },
  listContainer: { paddingBottom: 100 },
});
