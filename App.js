import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import { Decks } from './Views/Decks';
import { Cards } from './Views/Cards';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '100',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFF',
    accent: '#000',
  },
  fonts: configureFonts(fontConfig),
};

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={createStore(reducer)}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Decks" component={Decks} />
              <Stack.Screen name="Cards" component={Cards} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    );
  }
}
