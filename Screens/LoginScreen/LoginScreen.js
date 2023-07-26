import { useState } from "react";
import {
    StyleSheet,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Dimensions,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import React, {  useEffect} from "react";

const initialState = {
    email: "",
    password: "",
};

const LoginScreen = ({ navigation }) => {
    useEffect(() => {

    const onChange = () => {
        const width = Dimensions.get('window').width - 20 * 2;
        console.log(width);
        setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);
    
    const [state, setState] = useState(initialState);
    
    const passShow = () => alert(`Your password is: ${password}`);

    const submitForm = () => {
        console.log(state);
        setState(initialState);
    }

    return (
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ImageBackground style={styles.imageBg} source={require("../images/photo-BG.jpg")}>
                <View style={styles.container}>  
                    <View style={styles.box}>
                        
                        <View style={styles.form}>
                            <Text style={styles.boxTitle}>Увійти</Text>
                            <View >
                                
                                <TextInput style={styles.inputForm}
                                    placeholder="Адреса електронної пошти"
                                    inputMode="email" value={state.email}
                                    onChange={(value) => setState((prevState) => ({ ...prevState, email: value }))} />
                                
                                <TextInput style={styles.inputForm}
                                    placeholder="Пароль"
                                    secureTextEntry={true}
                                    value={state.password}
                                    onChange={(value) => setState((prevState) => ({ ...prevState, password: value }))} />
                                
                                <TouchableOpacity style={styles.passShow} activeOpacity={0.5} onPress={passShow}>
                                    <Text style={styles.passShowText}>Показати</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.registerButton} activeOpacity={0.5} onPress={submitForm}>
                                <Text style={styles.registerButtonText}>Увійти</Text>
                        </TouchableOpacity>
                        </View>

                            <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => navigation.navigate("Registration")}>
                                <Text style={styles.loginLinkText}>Немає акаунту? Зареєструватися</Text>
                            </TouchableOpacity>
                        
                    </View>
                </View >
                </ImageBackground>
                
        </KeyboardAvoidingView>
    )
    
}
const styles = StyleSheet.create({
        container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    },
        box: {
    marginTop: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 35,
    paddingTop:92,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
        imageBg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
        keyboard: {
    justifyContent: 'flex-end'
    },
        form: {
    width: "100%",
    },
        boxTitle: {
    textAlign: "center",
    color: "#212121",
    marginTop: 14,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    },
    inputForm: {
        marginVertical: 10,
        borderRadius: 8,
        color: "#212121",
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
        padding: 16,
        borderColor: "#E8E8E8",
    },
    passShow: {
        position: "absolute",
        right: 16,
        bottom: 30,
    },
    passShowText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },
    registerButton: {
        marginTop: 43,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 19,
        padding: 16,
        color: '#FFFFFF',
    },
    loginLink: {
        alignItems: "center",
        marginVertical: 16,
    },
    loginLinkText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },
})

export default LoginScreen;