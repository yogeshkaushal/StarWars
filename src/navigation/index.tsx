import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthParamList, BottomTabParamsList } from '../models/navigation-params';
import {
  EpisodesTab,
  MovieDetailScreen
} from '../components/screens';
import { View, Text } from 'react-native';
import CharacterScreen from '../components/screens/CharacterScreen';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { useEffect, useState } from 'react';
import AppLoading from '../components/screens/AppLoading';

const Stack = createStackNavigator<AuthParamList>();
const Tab = createBottomTabNavigator<BottomTabParamsList>();

const cache = new InMemoryCache()
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.org/swapi-graphql' }),
  cache,
})

const LikedCharacters = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EpisodesTab" component={EpisodesTab} />
      <Tab.Screen name="LikedCharacters" component={LikedCharacters} />
    </Tab.Navigator>
  );
};

const App = () => {

  const [loadingCache, setLoadingCache] = useState(true)

  useEffect(() => {
    setLoadingCache(false)
  })

  if (loadingCache) {
    return <AppLoading />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabScreens" component={TabScreens} />
          <Stack.Screen
            options={{ headerShown: true }}
            name="MovieDetailScreen"
            component={MovieDetailScreen} />
          <Stack.Screen
            options={{ headerShown: true }}
            name="CharacterScreen"
            component={CharacterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
