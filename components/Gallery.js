import React from 'react';
import {  StyleSheet, Image } from 'react-native';
import { Text, View } from "./Themed";

function Gallery({props}) {

    // console.log('propsGallery', props)
    
    return (
        <>
        {Object.values(props).map((pic, index) => {
            return (
                <>
                    <Image
                    style={styles.image}
                    source={{uri: `${pic.url}`}}
                    key={index}
                    >
                    </Image>
                    {/* <View style={styles.separator} key={pic.url} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
                </>
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
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: "80%",
        },
    });
    
    export default Gallery;