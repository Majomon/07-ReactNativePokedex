import React from 'react';
import {FlatList, Image, Text, View, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {stylesGlobal} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/FadeInImage';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemon} = usePokemonPaginated();
  //console.log(simplePokemonList);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={stylesGlobal.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        //Quitando barra vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
        )}
        //Scroll infinito, cuando este llegando al final del scroll llamo a la función loadPokemon
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}
        //Activity indicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={30} color={'grey'} />
        }
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
