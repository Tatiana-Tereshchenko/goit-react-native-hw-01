import { Camera } from "expo-camera";
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import * as Location from "expo-location";


const initialState = {
    name: "",
    location: "",
    isPublishActive: false,
};

export default function CreatePostsScreen({ navigation })  {
    const [state, setState] = useState(initialState);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [location, setLocation] = useState(null);


    const takePhoto = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        const photo = await camera.takePictureAsync();
        if (photo.uri) {
            setPhoto(photo.uri);
        }
        console.log(location);
    }

    const keyboardHide = () => {
        console.log(isShowKeyboard);
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
    }; 

    const onFocusName = () => {
        setIsShowKeyboard(true);
    }
    const onFocusLocation = () => {
        setIsShowKeyboard(true);
    };


      const sendPhoto = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        if (photo && location && state) {
            setIsShowKeyboard(false);
            setPhoto(null);
            setLocation(null);
            setState(initialState);
        }
    };
    

    return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.photo} onPress={keyboardHide}>
                    <Camera
                            style={styles.camera}
                            onPress={keyboardHide}
                            ref={setCamera}>
                            {photo && (
                                <View style={styles.boxPhoto}>
                                    <Image source={{ uri: photo }} />
                                </View>
                            )}
                            <TouchableOpacity
                                style={styles.boxIcon}
                                onPress={takePhoto}
                            >
                                <Image
                                    source={require("../../assets/icon/camera.png")}
                                    style={styles.icon}
                                ></Image>
                            </TouchableOpacity>
                        </Camera>
                </View>
                    <TouchableOpacity>
                        <Text style={styles.text}>Загрузити фото</Text>
                    </TouchableOpacity>
                </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.form, marginTop: isShowKeyboard ? -85 : 32, }}>
                        <View>
                <TextInput
                    style={styles.input}
                    placeholder="Назва"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() =>  onFocusName()}
                    value={state.name}
                    onChangeText={(value) => setState((prevState) => ({...prevState, name: value, isPublishActive: value && state.location,}))}
                /> </View>
                        <View style={styles.inputBox}>
                            <Image style={styles.iconMap} source={require("../../assets/icon/map-pin.png")}></Image>
                            <TextInput style={{
                                    ...styles.input,
                                    borderBottomWidth: 0,
                                }}
                                placeholder="Місцевість ..."
                                placeholderTextColor="#BDBDBD"
                                onFocus={() => onFocusLocation()}
                                value={state.location}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        location: value,
                                        isPublishActive: value && state.name,
                                    }))
                                }/>
                        </View>
                <TouchableOpacity   onPress={sendPhoto} disabled={!state.isPublishActive}>
                    <Text style={styles.textBtn}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </View>
    </TouchableWithoutFeedback>
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
        },
        boxPhoto: {
            position: "absolute",
            marginRight: 8,
            width: 340,
            height: 240,
            backgroundColor: "#F6F6F6",
            borderRadius: 8,
            borderColor: "#E8E8E8",
            borderWidth: 1,
        },
        boxIcon: {
            zIndex: 10,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            alignItems: "center",
            justifyContent: "center",
        },
    })