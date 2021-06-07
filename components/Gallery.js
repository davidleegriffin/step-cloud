import React from 'react';
import {  StyleSheet, Image } from 'react-native';
import { Text, View } from "./Themed";
import { WebView } from 'react-native-webview';

function Gallery({props}) {

    console.log('propsGallery', props)
    const {pages, pics} = props;
    
    return (
        <>
        {Object.values(pages).map((page, idx) => {
            return (
                <>
                    <Text style={styles.title} key={idx}>{page.title}</Text>
                    <WebView 
                        style={styles.content}
                        originWhitelist={['*']}
                        source={{html: `<h1 style="font-size:65px">${page.content}</h1>`}} 
                    />
                    {/* <Text>{page.content}</Text> */}
                </>
            )}
            )}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {Object.values(pics).map((pic, index) => {
            return (
                <>
                    <Image
                    style={styles.image}
                    source={{uri: `${pic.url}`}}
                    key={index}
                    >
                    </Image>
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
        title : {
            fontSize: 35,
        },
        content: {
            flex: 1,
            width: 350,
            height: 750,
            margin: 20,
        },
    });
    
    export default Gallery;