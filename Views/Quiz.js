import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Caption } from 'react-native-paper';
import CardFlip from 'react-native-card-flip';
import Constants from 'expo-constants';

import { Container } from '../components/general/Container';
import { QuizButton } from '../components/quiz/QuizButton';

export const Quiz = ({ navigation, route }) => {
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const { deckName } = route.params;
  const flipCard = useRef(null);
  const questions = useSelector((state) => state[deckName].questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const maxQuestions = questions.length;

  const incrementCorrect = () => setCorrect((oldCorrect) => oldCorrect + 1);
  const incrementCurrent = () => setCurrentQuestion((oldCurrent) => oldCurrent + 1);
  const checkDone = () => setDone(currentQuestion + 1 === maxQuestions);
  const handleCorrect = () => {
    incrementCorrect();
    incrementCurrent();
    checkDone();
  };
  const handleIncorrect = () => {
    incrementCurrent();
    checkDone();
  };
  const handleFlip = () => {
    flipCard.current.flip();
    setIsFlipped((oldFlipped) => !oldFlipped);
  };

  return (
    <Container>
      <View style={styles.statusBar} />
      {done &&
        navigation.navigate('Cards', { deckName, maxQuestions, correct, quizFinished: true })}
      <View style={styles.buttonWrapper}>
        <QuizButton mode="text" icon="door-open" onPress={() => navigation.goBack()}>
          Quit Quiz
        </QuizButton>
        <QuizButton mode="text" icon="sync" onPress={handleFlip}>
          {isFlipped ? 'View Question' : 'View Answer'}
        </QuizButton>
      </View>
      <CardFlip style={styles.cardContainer} ref={flipCard} perspective={1500} flipZoom={-0.1}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.captionWrapper}>
              <Caption>Question —</Caption>
              <Caption>{`${currentQuestion}/${maxQuestions}`}</Caption>
            </View>
            {!done && (
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
            {!done && <Text style={styles.answerText}>{questions[currentQuestion].answer}</Text>}
          </Card.Content>
        </Card>
      </CardFlip>
      <View style={styles.buttonWrapper}>
        <QuizButton mode="contained" icon="close" onPress={handleIncorrect}>
          Incorrect
        </QuizButton>
        <QuizButton mode="contained" icon="check" onPress={handleCorrect}>
          Correct
        </QuizButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  statusBar: { height: Constants.statusBarHeight },
  card: { flex: 1 },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    flexShrink: 0,
  },
  buttonWrapper: {
    flexDirection: 'row',
    margin: 8,
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
