import React, { useState } from 'react';
import { Modal, Card, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { addQuestion } from '../../actions';
import { ModalButton } from '../general/ModalButton';

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
          <ModalButton onPress={hideModal} mode="text">
            Cancel
          </ModalButton>
          <ModalButton onPress={handleCreate} mode="contained">
            Create
          </ModalButton>
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
  cardActions: { justifyContent: 'flex-end', padding: 16 },
});
