import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
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
    </View>
  );
};
