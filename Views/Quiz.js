import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Card, Caption, Headline } from 'react-native-paper';

import { Container } from '../components/general/Container';
import { QuizButton } from '../components/quiz/QuizButton';

export const Quiz = ({ navigation, route }) => {
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const { deckName } = route.params;
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

  return (
    <Container>
      <View style={styles.buttonWrapper}>
        <QuizButton mode="text" icon="door-open" onPress={() => navigation.goBack()}>
          Quit Quiz
        </QuizButton>
        <QuizButton mode="text" icon="sync" onPress={() => console.log('pressed')}>
          View Answer
        </QuizButton>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.captionWrapper}>
            <Caption>Question —</Caption>
            <Caption>{`${currentQuestion}/${maxQuestions}`}</Caption>
          </View>
          {!done && <Headline>{questions[currentQuestion].question}</Headline>}
        </Card.Content>
      </Card>
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
  card: {
    flex: 1,
    marginHorizontal: 16,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});
