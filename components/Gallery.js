import React from 'react';
import {  StyleSheet, Image } from 'react-native';

function Gallery({props}) {

    // console.log('propsGallery', props)
    
    return (
        <>
        {Object.values(props).map((pic, index) => {
            return (
                <Image
                style={styles.image}
                source={{uri: `${pic.url}`}}
                key={pic.assetId}
                >
                </Image>
                
            
            )}
            )}
        </>
    )}
    
    const styles = StyleSheet.create ({
        image: {
            flex: 1,
            width: 300,
            height: 300,
            margin: 20,
        }
    });
    
    export default Gallery;