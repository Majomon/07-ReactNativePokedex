import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {capitalize} from '../helpers/capitalize';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
        marginBottom: 15,
      }}>
      {/* Types */}
      <View style={{...styles.container, marginTop: 410}}>
        {/* Tipos de cada pokemon*/}
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.typesPokemon, marginRight: 10}}>
              {capitalize(type.name)}
            </Text>
          ))}
        </View>

        {/* Peso */}
        <Text style={styles.title}>Peso</Text>
        <Text style={{...styles.typesPokemon, marginRight: 10}}>
          {pokemon.weight} Kg
        </Text>
      </View>

      {/* Sprites */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      {/* Puedo usar scrollview o flatlist */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.typesPokemon, marginRight: 10}}>
              {capitalize(ability.name)}
            </Text>
          ))}
        </View>
      </View>

      {/* Movimientos */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.typesPokemon, marginRight: 10}}>
              {capitalize(move.name)}
            </Text>
          ))}
        </View>
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
    marginTop: 15,
  },
  typesPokemon: {
    color: 'black',
    fontSize: 17,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
