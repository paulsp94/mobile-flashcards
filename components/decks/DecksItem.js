import React, { useState } from 'react';
import { Card, IconButton, Menu } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeDeckTitle } from '../../actions';

export const DecksItem = ({ deckName, cards, navigate, showModal }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const toggleDelete = () => dispatch(removeDeckTitle(deckName));
  // const toggleEdit = () => showModal({ title: deckName });

  return (
    <Card style={styles.card} onPress={() => navigate(deckName, cards)}>
      <Card.Title
        title={deckName}
        subtitle={`${cards} ${cards === 1 ? 'Card' : 'Cards'}`}
        right={() => (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<IconButton icon="dots-vertical" color="black" onPress={openMenu} />}>
            {/* <Menu.Item onPress={toggleEdit} title="Edit" /> */}
            <Menu.Item onPress={toggleDelete} title="Delete" />
          </Menu>
        )}
        rightStyle={styles.rightStyle}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 96,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,

    elevation: 10,
  },
  rightStyle: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});
