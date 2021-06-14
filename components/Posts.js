import React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useQuery } from "@apollo/client";
import {GET_IMAGE} from "../queries/content.queries.js";

function Posts({props}) {

    const {
        data, 
        loading, 
        error
      } = useQuery(GET_IMAGE, {variables: {publicId: `${encodeURIComponent(props.title)}`}});

      if (loading) return <Text>Almost there...</Text>
      if (error) return <Text>{error?.message}</Text>

    let pic = "";
    if(data?.cloudinaryImage) {
        pic = data?.cloudinaryImage.url; 
    } else {
        pic="https://picsum.photos/200/300"
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>{props.title}</Text>
                <Image 
                    style={styles.image}
                    source={{uri: `${pic}`}}
                    >
                </Image>
            </View>
            <WebView 
                style={styles.content}
                originWhitelist={['*']}
                source={{html: `<h1 style="font-size:65px">${props.content}</h1>`}} 
            />
        </>
    )
}

const styles = StyleSheet.create({ 
    container: {
		flex: 1,
		alignItems: "center",
        justifyContent: 'center', 
	},
    header: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: 42,

    },
    image: {
        flex: 1,
        width: 300,
        height: 300,
        margin: 20,
    },
    content: {
        flex: 1,
        width: 350,
        height: 350,
        margin: 20,
    },
});


export default Posts;