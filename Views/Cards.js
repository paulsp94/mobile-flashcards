import React, { useState } from 'react';
import { Portal, FAB } from 'react-native-paper';

import { Container } from '../components/Container';
import { CustomAppbar } from '../components/CustomAppbar';
import { CardsItem } from '../components/CardsItem';
import { FlatList, StyleSheet } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    question: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    question: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    question: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    question: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    question: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    question: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    question: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    question: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    question: 'Third Item',
  },
];

export const Cards = ({ deckName }) => {
  const [fabOpen, setFABOpen] = useState(false);

  const onStateChange = ({ open }) => setFABOpen(open);

  return (
    <Container>
      <CustomAppbar title={deckName} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <CardsItem question={item.question} />}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        numColumns={2}
      />
      <Portal>
        <FAB.Group
          open={fabOpen}
          icon={fabOpen ? 'close' : 'cards'}
          actions={[
            { icon: 'brain', label: 'Start Quiz', onPress: () => console.log('Pressed brain') },
            { icon: 'plus', label: 'Add Card', onPress: () => console.log('Pressed add') },
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
    marginTop: -16,
    paddingTop: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  listContainer: {
    paddingBottom: 100,
  },
});
