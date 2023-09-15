import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="grey" />
      <Text style={styles.textLoading}>Cargando...</Text>
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
