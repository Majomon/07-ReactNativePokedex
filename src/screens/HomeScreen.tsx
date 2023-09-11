import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {stylesGlobal} from '../theme/appTheme';

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
        //Número de columnas de como se va a mostrar
        numColumns={2}
        //Header
        ListHeaderComponent={
          <Text
            style={{
              ...stylesGlobal.title,
              ...stylesGlobal.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        //Scroll infinito, cuando este llegando al final del scroll llamo a la función loadPokemon
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}
        //Activity indicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={30} color={'grey'} />
        }
      />
    </View>
  );
};
