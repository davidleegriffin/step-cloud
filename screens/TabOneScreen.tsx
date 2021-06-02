import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Image } from "react-native";
import { useForm } from "react-hook-form";
import { Text, View } from "../components/Themed";
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';


export default function TabOneScreen() {
	const [image, setImage] = useState();

	const { handleSubmit, register, errors } = useForm();
	const onSubmit = values => console.log(values);

	useEffect(() => {
		(async () => {
		  if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
			  alert('Sorry, we need camera roll permissions to make this work!');
			}
		  }
		})();
	  }, []);
	
	  const pickImage = async () => {
		  let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		  });
	
		
		if (!result.cancelled) {
		  console.log('result', result.uri);
		  setImage(result.uri);
		  console.log('local-image', image);
		} 
	  
	  };

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<View style={styles.picker}>
				<Button onPress={pickImage}>Select Image</Button>
				{image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        	</View>
				{image &&
					<form onSubmit={handleSubmit(onSubmit)}>
						<input placeholder="name" {...register("name")} />
						<input placeholder="folder" {...register("folder")} />
						<button type="submit">Submit</button>
					</form>
				}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	picker: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		width: 200,
	  },
});
