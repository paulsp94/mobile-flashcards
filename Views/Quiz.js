import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Caption, Headline } from 'react-native-paper';

import { Container } from '../components/Container';

const CustomButton = ({ children, onPress, icon, mode }) => (
  <Button
    mode={mode}
    icon={icon}
    uppercase={false}
    onPress={onPress}
    contentStyle={styles.buttonContent}
    labelStyle={styles.buttonLabel}
    style={styles.button}>
    {children}
  </Button>
);

export const Quiz = ({ navigation, route }) => {
  const [correct, setCorrect] = useState(0);
  const { deckName } = route.params;
  const questions = useSelector((state) => state[deckName].questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const maxQuestions = questions.length;

  const incrementCorrect = () => setCorrect((oldCorrect) => oldCorrect + 1);
  const incrementCurrent = () => setCurrentQuestion((oldCurrent) => oldCurrent + 1);
  const handleCorrect = () => {
    incrementCorrect();
    incrementCurrent();
  };
  const handleIncorrect = () => {
    incrementCurrent();
  };

  return (
    <Container>
      <View style={styles.buttonWrapper}>
        <CustomButton mode="text" icon="door-open" onPress={() => navigation.goBack()}>
          Quit Quiz
        </CustomButton>
        <CustomButton mode="text" icon="sync" onPress={() => console.log('pressed')}>
          View Answer
        </CustomButton>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.captionWrapper}>
            <Caption>Question —</Caption>
            <Caption>{`${currentQuestion}/${maxQuestions}`}</Caption>
          </View>
          <Headline>{questions[currentQuestion].question}</Headline>
        </Card.Content>
      </Card>
      <View style={styles.buttonWrapper}>
        <CustomButton mode="contained" icon="close" onPress={handleIncorrect}>
          Incorrect
        </CustomButton>
        <CustomButton mode="contained" icon="check" onPress={handleCorrect}>
          Correct
        </CustomButton>
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
  buttonWrapper: {
    flexDirection: 'row',
    margin: 8,
    flexShrink: 0,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: { letterSpacing: 0 },
  button: {
    flex: 1,
    margin: 8,
  },
});
