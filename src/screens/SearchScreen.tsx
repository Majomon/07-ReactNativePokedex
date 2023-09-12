import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import {stylesGlobal} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color="grey" />
        <Text style={styles.textLoading}>Cargando...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: top + 10,
        marginHorizontal: 20,
        //backgroundColor: 'red',
      }}>
      {/* Buscador */}
      <SearchInput />

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

              paddingBottom: 10,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    color: 'black',
    fontSize: 15,
  },
});
