import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Portal, FAB } from 'react-native-paper';

import { Container } from '../components/Container';
import { CardsItem } from '../components/CardsItem';

export const Cards = ({ navigation, route }) => {
  const [fabOpen, setFABOpen] = useState(false);
  const { deckName } = route.params;
  const questions = useSelector((state) => state[deckName].questions);

  const onStateChange = ({ open }) => setFABOpen(open);

  return (
    <Container>
      <FlatList
        data={questions}
        renderItem={({ item }) => <CardsItem question={item.question} />}
        keyExtractor={(item) => item.question}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        numColumns={2}
      />
      <Portal>
        <FAB.Group
          open={fabOpen}
          icon={fabOpen ? 'close' : 'cards-outline'}
          style={styles.fabGroup}
          fabStyle={styles.fab}
          actions={[
            {
              icon: 'brain',
              label: 'Start Quiz',
              onPress: () => console.log('Pressed brain'),
            },
            {
              icon: 'plus',
              label: 'Add Card',
              onPress: () => console.log('Pressed add'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (fabOpen) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
  },
  listContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 100,
  },
  fabGroup: {
    position: 'absolute',
    padding: 8,
    right: 0,
    bottom: 0,
  },
  fab: {
    marginTop: 8,

    elevation: 20,
  },
});
