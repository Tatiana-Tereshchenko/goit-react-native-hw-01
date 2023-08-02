import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
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
  Platform,
} from "react-native";
import * as Location from "expo-location";

const initialState = {
  name: "",
  location: "",
  isPublishActive: false,
};

export default function CreatePostsScreen({ navigation }) {
    const [name, setName] = useState("");
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [location, setLocation] = useState(null);
    const [isCameraRunning, setIsCameraRunning] = useState(false);
    const [photoLocation, setPhotoLocation] = useState(null);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setIsCameraRunning(true);
    }
  };

  useEffect(() => {
    startCamera();
  }, []);

  const takePhoto = async () => {
    if (!isCameraRunning) {
      console.log("Camera is not running");
      return;
    }

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
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onFocusName = () => {
    setIsShowKeyboard(true);
  };

  const onFocusLocation = () => {
    setIsShowKeyboard(true);
  };

  const sendPhoto = () => {
     navigation.navigate("Публікації", {
       photo,
       name,
       location,
       ...photoLocation,
     });
     setName("");
     setLocation("");
     setPhoto(null);
     setIsShowKeyboard(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.photo}>
            <Camera
              style={styles.camera}
              onPress={keyboardHide}
              ref={setCamera}
            >
              {photo && (
                <View style={styles.boxPhoto}>
                  <Image source={{ uri: photo }} />
                </View>
              )}
              <TouchableOpacity style={styles.boxIcon} onPress={takePhoto}>
                <Image
                  source={require("../../assets/icon/camera.png")}
                  style={styles.icon}
                ></Image>
              </TouchableOpacity>
            </Camera>
          </View>
          <TouchableOpacity>
            <Text style={styles.text}>Завантажити фото</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginTop: isShowKeyboard ? -85 : 32,
            }}
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Назва"
                placeholderTextColor="#BDBDBD"
                onFocus={onFocusName}
                value={state.name}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    name: value,
                    isPublishActive: value && state.location,
                  }))
                }
              />
            </View>
            <View style={styles.inputBox}>
              <Image
                style={styles.iconMap}
                source={require("../../assets/icon/map-pin.png")}
              ></Image>
              <TextInput
                style={{
                  ...styles.input,
                  borderBottomWidth: 0,
                }}
                placeholder="Місцевість ..."
                placeholderTextColor="#BDBDBD"
                onFocus={onFocusLocation}
                value={state.location}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    location: value,
                    isPublishActive: value && state.name,
                  }))
                }
              />
            </View>
            <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: state.isPublishActive ? "#FF6C00" : "#F6F6F6",
              }}
              onPress={sendPhoto}
              disabled={!state.isPublishActive}
            >
              <Text
                style={{
                  ...styles.textBtn,
                  color: state.isPublishActive ? "#fff" : "#BDBDBD",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
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
  camera: {
    width: "100%",
    height: 270,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "red",
  },
  textBtn: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: "regular",
    fontSize: 16,
    lineHeight: 15,
    color: "#BDBDBD",
  },
  btn: {
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 100,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
