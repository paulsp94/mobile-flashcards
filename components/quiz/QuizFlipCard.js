import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Card, Caption } from 'react-native-paper';

export const QuizFlipCard = ({ flipCard, currentQuestion, maxQuestions, questions }) => {
  return (
    <CardFlip style={styles.cardContainer} ref={flipCard} perspective={1500} flipZoom={-0.1}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.captionWrapper}>
            <Caption>Question —</Caption>
            <Caption>{`${currentQuestion}/${maxQuestions}`}</Caption>
          </View>
          {currentQuestion < maxQuestions && (
            <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          )}
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.captionWrapper}>
            <Caption>{`${currentQuestion}/${maxQuestions}`}</Caption>
            <Caption>— Answer</Caption>
          </View>
          {currentQuestion < maxQuestions && (
            <Text style={styles.answerText}>{questions[currentQuestion].answer}</Text>
          )}
        </Card.Content>
      </Card>
    </CardFlip>
  );
};

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
    alignSelf: 'flex-end',
    fontSize: 48,
  },
  questionText: {
    fontSize: 48,
  },
});
