import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {stylesGlobal} from '../theme/appTheme';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }
    setPokemonFiltered(
      simplePokemonList.filter(poke =>
        poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      ),
    );
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        //marginTop: top + 10,
        marginHorizontal: 20,
        //backgroundColor: 'red',
      }}>
      {/* Buscador */}
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: top + 30,
        }}
      />

      <FlatList
        data={pokemonFiltered}
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
              marginTop: top + 80,
              paddingBottom: 10,
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};
