import React from 'react';
import { Card, Title } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export const CardsItem = ({ question }) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{question}</Title>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexGrow: 0.5,
    flexBasis: 0.5,
    flexShrink: 0,
    aspectRatio: 0.8,
  },
  card: {
    flex: 1,
    margin: 8,

    elevation: 10,
  },
});
