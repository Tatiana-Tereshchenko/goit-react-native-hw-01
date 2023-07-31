import { useState } from "react";
import {
    StyleSheet,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
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
    const [state, setState] = useState(initialState);
    const [hidePassword, setHidePassword] = useState(true);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const toggleHidePassword = () => setHidePassword(!hidePassword);

    const handleEmailChange = (value) =>
        setState((prevState) => ({ ...prevState, email: value }));
    const handlePasswordChange = (value) =>
        setState((prevState) => ({ ...prevState, password: value }));




    useEffect(() => {

    const onChange = () => {
        const width = Dimensions.get('window').width - 20 * 2;
        console.log(width);
        setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);
    
    
    
    

    const submitForm = () => {
        console.log(state);
        setState(initialState);
        navigation.navigate("Home");
    }


    const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
    };
    
    return (
        <TouchableWithoutFeedback onPress={keyBoardHide}>
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ImageBackground style={styles.imageBg} source={require("../images/photo-BG.jpg")}>
                <View style={styles.container}>  
                    <View style={{ ...styles.box, paddingTop: isShowKeyboard ? 55:92, paddingBottom: isShowKeyboard ? 50:35}}>
                        
                        <View style={styles.form}>
                            <Text style={styles.boxTitle}>Увійти</Text>
                            <View >
                                
                                <TextInput style={styles.inputForm}
                                    placeholder="Адреса електронної пошти"
                                    inputMode="email" value={state.email}
                                    onChangeText={handleEmailChange}
                                    onFocus={() => setIsShowKeyboard(true)}/>
                                
                                <TextInput style={styles.inputForm}
                                    placeholder="Пароль"
                                    secureTextEntry={hidePassword}
                                    value={state.password}
                                    onChangeText={handlePasswordChange}
                                    onFocus={() => setIsShowKeyboard(true)}/>
                                
                                <TouchableOpacity style={styles.passShow} activeOpacity={0.5} onPress={toggleHidePassword}>
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
            </TouchableWithoutFeedback>
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