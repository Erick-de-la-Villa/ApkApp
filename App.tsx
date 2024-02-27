import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Presiona el boton para mostrar una alerta</Text>
      <Text>{"\n"}</Text>
      <Button title="Press me" onPress={() => alert('Hello World!')} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
