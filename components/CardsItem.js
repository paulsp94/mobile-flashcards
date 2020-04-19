import React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const CardsItem = ({ question }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Paragraph>{question}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 0.5,
    flexBasis: 0.5,
    flexShrink: 0,

    height: 200,
    margin: 8,

    elevation: 10,
  },
});
