import React from 'react';
import { Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const RightContent = () => (
  <IconButton icon="dots-vertical" color="black" onPress={() => console.log('Pressed')} />
);

export const DecksItem = ({ deckName, cards }) => (
  <Card style={styles.card}>
    <Card.Title
      title={deckName}
      subtitle={`${cards} ${cards === 1 ? 'Card' : 'Cards'}`}
      right={RightContent}
      rightStyle={styles.rightStyle}
      style={styles.titleContent}
    />
  </Card>
);

const styles = StyleSheet.create({
  card: {
    height: 96,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,

    elevation: 10,
  },
  titleContent: {
    paddingTop: 16,
    paddingLeft: 24,
  },
  rightStyle: {
    position: 'absolute',
    top: 12,
    right: 8,
  },
});
