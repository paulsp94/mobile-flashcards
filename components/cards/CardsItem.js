import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const CardsItem = ({ question }) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <LinearGradient
            colors={['white', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 16,
              height: 16,
              zIndex: 10,
            }}
          />
          <ScrollView>
            <Text style={{ fontSize: 24, lineHeight: 32 }}>{question}</Text>
          </ScrollView>
          <LinearGradient
            colors={['transparent', 'white']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 16,
              height: 16,
              zIndex: 10,
            }}
          />
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
