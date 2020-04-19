import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export const CustomAppbar = ({ title }) => {
  const _goBack = () => console.log('Went back');

  return (
    <View style={styles.container}>
      {title && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title={title || 'Decks'} />
      </Appbar.Header>
      <LinearGradient
        style={{
          height: 16,
          width: '100%',
        }}
        colors={['#FFF', 'transparent']}
        start={[0.0, 0.0]}
        end={[0.0, 1.0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 50,
  },
  appbar: {
    elevation: 0,
  },
});
