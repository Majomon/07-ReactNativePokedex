import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {stylesGlobal} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList} = usePokemonPaginated();
  console.log(simplePokemonList);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={stylesGlobal.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => (
          <Text style={{color: 'black'}}>{item.name}</Text>
        )}
        //Scroll infinito
        onEndReached={}
      />
      {/*       <Text
        style={{
          ...stylesGlobal.title,
          ...stylesGlobal.globalMargin,
          top: top + 20,
        }}>
        Pokedex
      </Text> */}
    </View>
  );
};
