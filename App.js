import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from './utils/theme';
import { store, persistor } from './utils/configureStore';

import { Decks } from './Views/Decks';
import { Cards } from './Views/Cards';
import { Quiz } from './Views/Quiz';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Decks" component={Decks} />
                <Stack.Screen
                  name="Cards"
                  component={Cards}
                  options={({ route }) => ({
                    title: `${route.params.deckName} (${route.params.cards})`,
                  })}
                />
                <Stack.Screen
                  name="Quiz"
                  component={Quiz}
                  options={({ route }) => ({
                    title: `${route.params.deckName} (${route.params.cards})`,
                  })}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}
