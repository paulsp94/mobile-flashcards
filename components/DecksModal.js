import React from 'react';
import { Modal, Card, TextInput, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addDeckTitle, editDeckTitle } from '../actions';

const CustomButton = ({ children, onPress, mode }) => (
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
          <CustomButton onPress={hideModal} mode="text">
            Cancel
          </CustomButton>
          <CustomButton onPress={handleCreate} mode="contained">
            Create
          </CustomButton>
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
