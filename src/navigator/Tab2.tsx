import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './Tab1';
import {SearchScreen} from '../screens/SearchScreen';
import {PokemonScreen} from '../screens/PokemonScreen';

const TabSearch = createStackNavigator<RootStackParams>();

export const Tab2 = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        //Quitar el header
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
};
