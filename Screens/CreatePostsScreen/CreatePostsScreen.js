import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";


const CreatePostsScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.photo}>
                    <View style={styles.iconWrap}>
                        <Image source={require("../../assets/icon/camera.png")} style={styles.icon}></Image>
                    </View>
                </View>
                <Text style={styles.text}>Завантажити фото</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Назва" /> 
                <View style={styles.inputBox}>
                    <Image style={styles.iconMap} source={require("../../assets/icon/map-pin.png")}></Image>
                    <TextInput style={{...styles.input, borderBottomWidth:0,}} placeholder="Місцевість ..."/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textBtn}>Опублікувати</Text>
                </TouchableOpacity>
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
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 32,
    },
    photo: {
        height: 240,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderColor: "#E8E8E8",
        marginRight: 8,
        width: 343,
        alignItems: "center",
        justifyContent: "center",
    },
    iconWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
    },
    text: {
        marginTop: 8,
        fontFamily: "Roboto-Regular",
        fontWeight: "regular",
        fontSize: 16,
        lineHeight: 15,
        textAlign: "left",
        color: "#BDBDBD",
    },
    form: {
        marginTop: 32,
    },
    input: {
        textAlign: "left",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        color: "#212121",
        borderColor: "#E8E8E8",
        height: 50,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        paddingTop: 16,

    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },
    button: {
        height: 50,
        borderRadius: 100,
        marginTop: 40,
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        alignItems: "center",
    },
    iconMap: {
        padding: 13,
    }
})



export default CreatePostsScreen;