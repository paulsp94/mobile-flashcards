import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Card, Caption } from 'react-native-paper';
import { ScrollFade } from '../general/ScrollFade';

export const QuizFlipCard = ({ flipCard, currentQuestion, maxQuestions, questions }) => (
  <CardFlip style={styles.cardContainer} ref={flipCard} perspective={1500} flipZoom={-0.1}>
    <Card style={styles.card}>
      <Card.Content style={{ flex: 1 }}>
        <View style={styles.captionWrapper}>
          <Caption>Question —</Caption>
          <Caption>{`${currentQuestion + 1}/${maxQuestions}`}</Caption>
        </View>
        {currentQuestion < maxQuestions && (
          <View style={{ flex: 1 }}>
            <ScrollFade height={24} />
            <ScrollView>
              <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
            </ScrollView>
            <ScrollFade top={false} position={{ bottom: 0 }} height={24} />
          </View>
        )}
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content style={{ flex: 1 }}>
        <View style={styles.captionWrapper}>
          <Caption>{`${currentQuestion + 1}/${maxQuestions}`}</Caption>
          <Caption>— Answer</Caption>
        </View>
        {currentQuestion < maxQuestions && (
          <View style={{ flex: 1 }}>
            <ScrollFade height={24} />
            <ScrollView>
              <Text style={styles.answerText}>{questions[currentQuestion].answer}</Text>
            </ScrollView>
            <ScrollFade top={false} position={{ bottom: 0 }} height={24} />
          </View>
        )}
      </Card.Content>
    </Card>
  </CardFlip>
);

const styles = StyleSheet.create({
  card: { flex: 1 },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    flexShrink: 0,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 16,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  answerText: {
    textAlign: 'right',
    fontSize: 48,
  },
  questionText: {
    fontSize: 48,
  },
});
