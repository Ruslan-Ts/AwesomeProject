import { StatusBar } from "expo-status-bar";
import {
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	StyleSheet,
	Text,
	View,
	Button,
} from "react-native";

export default function App() {
	const signIn = () => {
		console.debug("Welcome!");
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.welcomeTitle}>Welcome to Olx Clone</Text>
				</View>
				<View style={styles.formContainer}>
					<Text style={styles.formTitle}>Sign In</Text>
					<View>
						<Text>Email</Text>
						<TextInput
							style={styles.input}
							placeholder="Input your email"
							autoComplete="email"
						/>
					</View>
					<View>
						<Text>Password</Text>
						<TextInput
							style={styles.input}
							placeholder="Input your password"
							autoComplete="password"
						/>
					</View>
					<TouchableOpacity style={styles.button} onPress={signIn}>
						<Button style={styles.buttonTitle} title="Sign in" />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
// 	return (
// 		<View style={styles.container}>
// 			<Text style={{ fontSize: 20, margin: 40 }}>Hello to everyone</Text>
// 			<Button title="click" style={{}} />
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
