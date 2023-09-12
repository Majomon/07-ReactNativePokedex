import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/Navigator';
import {capitalize} from '../helpers/capitalize';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {color, simplePokemon} = route.params;

  return (
    <View>
      <Text style={{color: 'black'}}>
        {capitalize(simplePokemon.name)} - {color}
      </Text>
    </View>
  );
};
