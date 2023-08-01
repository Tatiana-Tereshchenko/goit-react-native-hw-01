import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation(); 
    return (
        <ImageBackground style={styles.imageBg} source={require("../images/photo-BG.jpg")}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.photoBox}>
                        <Image source={require("../../assets/icon/User3.png")}></Image>
                    </View>
                    <View style={styles.iconBox}>
                        <Image source={require("../images/add.png")}></Image>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Image  style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                alignContent: "flex-end",
                            }} source={require("../../assets/icon/log-out.png")}></Image>
                    </TouchableOpacity>

                </View>
                <Text style={styles.text}>Natali Romanova</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
        flex: 0.85,
        bottom: 0,
        margin: 0,
    },
    imageBg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: "flex-end",
    },
    box: {
        marginBottom: 32,
        display: "flex",
        alignItems: "flex-end",
    },
    photoBox: {
        position: "absolute",
        left: 128,
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    iconBox: {
        color: "#FF6C00",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 15,
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: -20,
        left: -120,
    },
    text: {
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
    },
})



export default ProfileScreen;