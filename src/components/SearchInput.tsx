import React from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokémon"
          placeholderTextColor="black"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    top: 5,
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textInput: {
    color: 'black',
    flex: 1,
    fontSize: 15,
  },
});
