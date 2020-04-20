import React from 'react';
import { View } from 'react-native';
import { Title, Caption } from 'react-native-paper';

export const CardsTitle = ({ route }) => (
  <View>
    <Title style={{ marginBottom: -8 }}>{route.params.deckName}</Title>
    <Caption>{`${route.params.cards} ${route.params.cards === 1 ? 'Card' : 'Cards'}`}</Caption>
  </View>
);
