import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";

export const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/images/BG.jpeg")}
				style={styles.image}></ImageBackground>

			<View style={styles.formBox}>
				<Text style={styles.title}>Увійти</Text>
				<View style={styles.regForm}>
					<TextInput
						style={styles.input}
						placeholder="Адреса електронної пошти"
					/>
					<View style={styles.passBox}>
						<TextInput style={styles.input} placeholder="Пароль" />
						<TouchableOpacity style={styles.showPassBtn}>
							<Text style={styles.showPassBtnText}>
								{true ? "Показати" : "Не показувати"}
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.regBtn}>
						<Text style={styles.regBtnText}>Увійти</Text>
					</TouchableOpacity>
					<View>
						<TouchableOpacity style={styles.signInBtn}>
							<Text style={styles.signInBtnText}>
								Немає акаунту? Зареєструватися
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
	},
	formBox: {
		justifyContent: "center",
		alignItems: "center",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		position: "absolute",
		width: "100%",
		height: "100%",
		top: "30%",
		backgroundColor: "#fff",
	},
	image: {
		flex: 1,
	},
	title: {
		fontFamily: "RobotoMedium",
		marginTop: 92,
		fontSize: 30,
		fontWeight: 500,
		lineHeight: 35,
		letterSpacing: 0.3,
		textAlign: "center",
	},
	regForm: {
		flex: 1,
		marginTop: 33,
		gap: 16,
	},
	input: {
		fontFamily: "RobotoMedium",
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 19,
		height: 50,
		width: 343,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		backgroundColor: "#F6F6F6",
		borderRadius: 5,
		padding: 16,
	},
	passBox: {
		position: "relative",
		textAlign: "center",
		justifyContent: "center",
	},
	showPassBtn: {
		position: "absolute",
		textAlign: "center",
		right: 16,
	},
	showPassBtnText: {
		fontFamily: "RobotoMedium",
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 19,
		color: "#1B4371",
	},
	regBtn: {
		marginTop: 43,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		backgroundColor: "#ff6c00",
		height: 50,
		width: 343,
		borderRadius: 100,
	},
	regBtnText: {
		fontFamily: "RobotoMedium",
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 19,
		color: "#fff",
	},
	signInBtn: {
		marginTop: 16,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	signInBtnText: {
		fontFamily: "RobotoMedium",
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 19,
		color: "#1B4371",
	},
});
