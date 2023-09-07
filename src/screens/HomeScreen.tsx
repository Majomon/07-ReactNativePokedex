import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {stylesGlobal} from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  usePokemonPaginated()
  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={stylesGlobal.pokebolaBG}
      />
      <Text
        style={{
          ...stylesGlobal.title,
          ...stylesGlobal.globalMargin,
          top: top + 20,
        }}>
        Pokedex
      </Text>
    </View>
  );
};
