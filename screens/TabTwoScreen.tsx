import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useQuery } from "@apollo/client";
import {GET_IMAGES} from "../queries/content.queries.js";
import {Text} from '../components/Themed';
import Gallery from '../components/Gallery';

export default function TabTwoScreen() {

  const [image, setImage] = useState();

  const {
    data,
    loading,
    error
  } = useQuery(GET_IMAGES);
 
  const pics = data?.cloudinaryImages;
 
  const files = {pics};

  if (loading) return <Text>Almost there...</Text>
  if (error) return <Text>{error?.message}</Text>

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Gallery</Text>
      <Gallery props={files} />
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
    fontSize: 50,
    fontWeight: 'bold',
  },
});
