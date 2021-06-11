import React from 'react';
import {  StyleSheet, Image, ScrollView } from 'react-native';

function Gallery({props}) {

    const {pics} = props;
    
    return (
        <>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {Object.values(pics).map((pic, index) => {
                    return (
                        <Image
                        style={styles.image}
                        source={{uri: `${pic.url}`}}
                        key={index}
                        >
                        </Image>
                    )}
                    )}
            </ScrollView>
        </>
    )}
    
    const styles = StyleSheet.create ({
        contentContainer: {
            flexGrow: 1,
            alignItems: 'center',
            paddingVertical: 20,
          },
        image: {
            flex: 1,
            width: 300,
            height: 300,
            margin: 20,
        },
    });
    
    export default Gallery;