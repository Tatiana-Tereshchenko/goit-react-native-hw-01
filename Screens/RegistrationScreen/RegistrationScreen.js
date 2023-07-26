import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState , useEffect} from "react";



const Registration = () => {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (text) => { setLogin(text) };
    const handleMail = (text) => { setMail(text) };
    const handlePassword = (text) => { setPassword(text) };
    const passShow = () => alert(`Your password is: ${password}`);

    const [ setDimensions] = useState(Dimensions.get("window").width - 20 * 2);
        useEffect(() => {

    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
        console.log(width);
        setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
    }, []);
    
    const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    Alert.alert("Sign Up", `${login}, ${email}, ${password}`);
    setLogin('');
    setMail('');
    setPassword('');
    };

    
    return (
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ImageBackground style={styles.imageBg} source={require("../images/photo-BG.jpg")}>
                <View style={styles.container}>  
                    <View  style={styles.box}>
                    <View style={styles.addButton}> 
                            <TouchableOpacity style={styles.addBtn}>
                                <Image style={styles.icon} source={require("../images/add.png")} />
                            </TouchableOpacity>
                    </View>
                        <View style={styles.form}>
                            <Text style={styles.boxTitle}>Реєстрація</Text>
                            <View >
                                <TextInput style={styles.inputForm} placeholder="Логін" inputMode="text" value={login} onChangeText={handleLogin} />
                                <TextInput style={styles.inputForm} placeholder="Адреса електронної пошти" inputMode="email" value={mail} onChangeText={handleMail} />
                                <TextInput style={styles.inputForm} placeholder="Пароль" secureTextEntry={true} value={password} onChangeText={handlePassword} />
                                <TouchableOpacity style={styles.passShow} activeOpacity={0.5} onPress={passShow}>
                                    <Text style={styles.passShowText}>Показати</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.registerButton} activeOpacity={0.5} onPress={handleSubmit}>
                                <Text style={styles.registerButtonText}>Зареєстуватися</Text>
                        </TouchableOpacity>
                        </View>
                            <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
                            </TouchableOpacity>
                        
                    </View>
                </View >
                </ImageBackground>
                
        </KeyboardAvoidingView>
    )
};

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
        addButton: {
    marginTop: -150,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    },
        addBtn: {
    position: 'absolute',
    justifyContent: 'center',
    width: 25,
    height: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#FF6C00',
    right: -12,
    bottom: 22,
    height: 14,
    },
        icon: {
    height: 25,
    width: 25,
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

export default Registration;