import React from 'react';
import { Modal, Card, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addDeckTitle, editDeckTitle } from '../../actions';
import { ModalButton } from '../general/ModalButton';

export const DecksModal = ({ visible, hideModal, title, setTitle, editing }) => {
  const deckNames = useSelector((state) =>
    Object.values(state)
      .slice(0, -1)
      .map((deck) => deck.title)
  );
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!deckNames.includes(title) && title !== '') {
      if (editing !== '') {
        console.log(editing);
        dispatch(editDeckTitle(editing, title));
      } else {
        console.log('creating');
        dispatch(addDeckTitle(title));
      }
      hideModal();
      setTitle('');
    } else {
      // TODO: snackbar don't repeat title
    }
  };

  return (
    <Modal visible={visible} onDismiss={hideModal}>
      <Card style={styles.card}>
        <Card.Title title="Create New Deck" />
        <Card.Content>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            mode="outlined"
            label="Deck Name"
            theme={{
              colors: {
                primary: '#000',
              },
            }}
          />
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
