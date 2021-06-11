import React from "react";
import { StyleSheet, ScrollView,  Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/content.queries.js";
import Posts from '../components/Posts';

export default function TabOneScreen() {

	const {
		data, 
    	loading, 
    	error
	} = useQuery(GET_POSTS);

	const blogPosts = data?.wordpressPosts;
	// console.log('tab1 posts', blogPosts);

	if (loading) return <Text>Almost there...</Text>
	if (error) return <Text>{error?.message}</Text>

	return (
		<>
			<ScrollView contentContainerStyle={styles.contentContainer}>
			<Text style={styles.title}>Home</Text>
			{Object.values(blogPosts).map((post, idx) => {
				return (
						<Posts 
						props={post} 
						key={idx}
						/>
						
				)}
				)}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		
	},
	contentContainer: {
		flexGrow: 1,
		alignItems: 'center',
		paddingVertical: 20,
	},
	title: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		fontSize: 50,
		fontWeight: "bold",
	},
});
