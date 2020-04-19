import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';

import { theme } from './utils/theme';
import reducer from './reducers';
import { Decks } from './Views/Decks';
import { Cards } from './Views/Cards';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={createStore(reducer)}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Decks" component={Decks} />
              <Stack.Screen
                name="Cards"
                component={Cards}
                options={({ route }) => ({
                  title: route.params.deckName,
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    );
  }
}
