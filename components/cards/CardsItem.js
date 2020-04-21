import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ScrollFade } from '../general/ScrollFade';

export const CardsItem = ({ question }) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <ScrollFade position={{ top: 16 }} />
          <ScrollView>
            <Text style={{ fontSize: 24, lineHeight: 32 }}>{question}</Text>
          </ScrollView>
          <ScrollFade top={false} position={{ bottom: 16 }} />
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
  cardContent: {
    flex: 1,
  },
});
