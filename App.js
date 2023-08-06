import { StyleSheet, View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		RobotoMedium: require("./assets/fonts/robotomedium.ttf"),
		RobotoRegular: require("./assets/fonts/robotoregular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<RegistrationScreen />
		// <LoginScreen />

		// {/* <View style={styles.container}>
		// 	<ImageBackground
		// 		source={require("./assets/images/BG.jpeg")}
		// 		style={styles.image}></ImageBackground>
		// </View> */}
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
});
