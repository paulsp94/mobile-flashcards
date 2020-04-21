import React, { useState } from 'react';
import { Card, IconButton, Menu, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeDeckTitle } from '../../actions';

export const DecksItem = ({ deckName, cards, navigate }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const toggleDelete = () => dispatch(removeDeckTitle(deckName));

  return (
    <Card style={styles.card} onPress={() => navigate(deckName, cards)}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {deckName}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {`${cards} ${cards === 1 ? 'Card' : 'Cards'}`}
          </Text>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton icon="dots-vertical" color="black" onPress={openMenu} style={styles.menu} />
          }>
          <Menu.Item onPress={toggleDelete} title="Delete" />
        </Menu>
      </Card.Content>
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
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textWrapper: {
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    paddingRight: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#BDBDBD',
    lineHeight: 24,
  },
  menu: {
    marginTop: -2,
    flexShrink: 0,
  },
});
