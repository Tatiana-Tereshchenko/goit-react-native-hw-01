
import {
    StyleSheet,
    Image,
    Text,
    View,
} from "react-native";


const PostsScreen = () =>  {

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.boxPhoto}>
                    <Image source={require("../../assets/icon/User2.png")}></Image>
                </View>
                <View>
                    <Text style={styles.textName}>Natali Romanova</Text>
                    <Text style={styles.textEmail}>email@example.com</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },
    headerBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 32,
},
    boxPhoto: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 8,
        backgroundColor:  "#F6F6F6",
    },
    textName: {
        fontFamily: "Roboto-Bold",
        fontWeight: "bold",
        fontSize: 14,
        color: "#212121",
        lineHeight: 15,
        textAlign: "center",
    },
    textEmail: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 12,
        textAlign: "center",
        color: "rgba(33, 33, 33, 0.8)",
    }
})







export default PostsScreen;