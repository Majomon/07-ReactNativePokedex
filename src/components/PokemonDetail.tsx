import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {capitalize} from '../helpers/capitalize';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* Types */}
      <View style={{...styles.container, marginTop: 410}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {/* Tipos de cada pokemon */}
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.typesPokemon, marginRight: 10}}>
              {capitalize(type.name)}
            </Text>
          ))}
        </View>
      </View>
      {/* Sprites */}
      <View style={{...styles.container, marginTop:20}}>
        <Text style={styles.title}>Sprites</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  typesPokemon: {
    color: 'black',
    fontSize: 17,
  },
});
