import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Portal, FAB } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { clearLocalNotification, setLocalNotification } from '../utils/notifications';
import { Container } from '../components/general/Container';
import { CardsItem } from '../components/cards/CardsItem';
import { CardsModal } from '../components/cards/CardsModal';
import { ResultsModal } from '../components/cards/ResultsModal';

export const Cards = ({ navigation, route }) => {
  const [fabOpen, setFABOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  const { deckName, maxQuestions, correct, quizFinished } = route.params;
  const questions = useSelector((state) => state.decks[deckName].questions);
  if (quizFinished) {
    clearLocalNotification().then(setLocalNotification);
  }

  const onStateChange = ({ open }) => setFABOpen(open);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const startQuiz = () => navigation.navigate('Quiz', { deckName });
  const quitResults = () =>
    navigation.navigate('Cards', { deckName, cards: questions.length, quizFinished: false });

  const actions = [
    ...(questions.length < 1
      ? []
      : [
          {
            icon: 'brain',
            label: 'Start Quiz',
            onPress: startQuiz,
          },
        ]),
    {
      icon: 'plus',
      label: 'Add Card',
      onPress: showModal,
    },
  ];

  return (
    <Container>
      <Portal>
        <ResultsModal
          visible={isFocused && quizFinished}
          deckName={deckName}
          maxQuestions={maxQuestions}
          correct={correct}
          restart={startQuiz}
          quitResults={quitResults}
        />
      </Portal>
      <FlatList
        data={questions}
        renderItem={({ item }) => <CardsItem question={item.question} />}
        keyExtractor={(item) => item.uuid}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        numColumns={2}
      />
      <Portal>
        <CardsModal visible={visible} hideModal={hideModal} deck={deckName} />
        <FAB.Group
          open={fabOpen}
          icon={fabOpen ? 'close' : 'cards-outline'}
          visible={isFocused && !quizFinished}
          style={styles.fabGroup}
          fabStyle={styles.fab}
          actions={actions}
          onStateChange={onStateChange}
        />
      </Portal>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
  },
  listContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 100,
  },
  fabGroup: {
    position: 'absolute',
    padding: 8,
    right: 0,
    bottom: 0,
  },
  fab: {
    marginTop: 8,

    color: 'white',
    backgroundColor: 'black',

    elevation: 20,
  },
});
