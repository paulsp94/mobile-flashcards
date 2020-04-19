import React, { useState } from 'react';
import { Modal, Card, TextInput, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { addQuestion } from '../actions';

const ActionButton = ({ children, onPress, mode }) => (
  <Button
    mode={mode}
    contentStyle={styles.buttonContent}
    labelStyle={styles.buttonLabel}
    style={styles.button}
    uppercase={false}
    onPress={onPress}>
    {children}
  </Button>
);

const ModalInput = ({ value, setValue, label }) => (
  <TextInput
    value={value}
    onChangeText={setValue}
    style={styles.input}
    mode="outlined"
    label={label}
    theme={{
      colors: {
        primary: '#000',
      },
    }}
  />
);

export const CardsModal = ({ visible, hideModal, deck }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (question !== '' && answer !== '') {
      dispatch(addQuestion(deck, { question, answer }));
      hideModal();
      setQuestion('');
      setAnswer('');
    } else {
      // TODO: snackbar don't repeat title
    }
  };

  return (
    <Modal visible={visible} onDismiss={hideModal}>
      <Card style={styles.card}>
        <Card.Title title="Create New Deck" />
        <Card.Content>
          <ModalInput value={question} setValue={setQuestion} label="Question" />
          <ModalInput value={answer} setValue={setAnswer} label="Answer" />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <ActionButton onPress={hideModal} mode="text">
            Cancel
          </ActionButton>
          <ActionButton onPress={handleCreate} mode="contained">
            Create
          </ActionButton>
        </Card.Actions>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,

    elevation: 10,
  },
  button: { marginLeft: 4 },
  buttonLabel: { letterSpacing: 0 },
  buttonContent: { paddingHorizontal: 16, height: 36 },
  cardActions: { justifyContent: 'flex-end', padding: 16 },
});
