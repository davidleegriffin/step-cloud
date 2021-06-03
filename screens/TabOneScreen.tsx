import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Image, Button, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Text, View } from "../components/Themed";
import * as ImagePicker from 'expo-image-picker';
import { t } from 'react-native-tailwindcss';

import SelectImage from '../components/SelectImage';
import Input from '../components/Input';

import { gql, useMutation } from "@apollo/client";

const CREATE_IMAGE = gql`
mutation createImage($folder: String!, $imageOne: String!, $publicId: String!) {
	createImage(
    folder: $folder
    image: $imageOne
    publicId: $publicId
  ) {
    publicId
    url
    format
    assetId
    bytes
  }
}
`;

export default function TabOneScreen() {
    const [createImage, { data }] = useMutation(CREATE_IMAGE);

	const [image, setImage] = useState("");

	const { control, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data: any, e: any) => {
		console.log('data', data)
		console.log('image in here', image)
		e.preventDefault();
		createImage({
			variables: {
				publicId: data.publicId,
				folder: data.folder,
				imageOne: image,
			},
		});
	  };

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
			base64: true,
			aspect: [4, 3],
			quality: 1,
		  });
	
		
		if (!result.cancelled) {
		//   console.log('result', result);
		  let newimage = encodeURIComponent(result.base64 ? result.base64 : result.uri)
		  let data_type = result.uri.split('.').pop();
		  data_type = encodeURIComponent(data_type ? data_type : "jpg")
		  newimage = `data%3Aimage%2F${data_type}%3Bbase64%2C${newimage}`
		  setImage(newimage);
		  console.log('local-image', image);
		}

	  };

	  if(image) {
		  console.log('local-image', image);
	  }
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
				<Input name="publicId" label="PublicId" control={control} />
				<Input name="folder" label="Folder" control={control} />
				<SelectImage onPress={pickImage} backgroundColor="blue">
					<Text style={styles.title}>Select Image</Text>
				</SelectImage>
				{/* {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />} */}
				<Button title="submit" onPress={handleSubmit(onSubmit)} />
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

const inputstyles = {
	wrapper: [t.selfStretch, t.mB5],
	input: [
	  t.h11,
	  t.border,
	  t.selfStretch,
	  t.p2,
	  t.borderGray500,
	  t.rounded,
	  t.textBase,
	  t.textGray700
	],
	errorText: [t.mT1, t.textRed500]
  };