import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, ScrollView, ImageBackground, Image } from 'react-native';
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES } from "../queries/content.queries.js";
import { Text, View } from '../components/Themed';
import Gallery from '../components/Gallery';

export default function TabTwoScreen() {

  const [image, setImage] = useState();

  const {
    data,
    loading,
    error
  } = useQuery(GET_IMAGES);
  
  // console.log(data);
  const pics = data?.cloudinaryImages;
  // console.log('pics', pics);

  if (loading) return <Text>Almost there...</Text>
  if (error) return <Text>{error.message}</Text>

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Gallery props={pics} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});