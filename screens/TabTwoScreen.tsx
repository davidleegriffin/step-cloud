import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, ScrollView, ImageBackground, Image } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    margin: 20,
    width: 300,
    height: 300,
  },
  picker: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});
