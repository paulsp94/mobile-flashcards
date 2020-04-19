import React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export const CardsItem = ({ question }) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>{question}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexGrow: 0.5,
    flexBasis: 0.5,
  },
  card: {
    height: 200,
    margin: 8,

    elevation: 10,
  },
});
