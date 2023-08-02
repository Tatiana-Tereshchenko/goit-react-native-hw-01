import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostScreen from "../DefaultPostScreen/DefaultPostScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import MapScreen from "../MapScreen/MapScreen";

const includScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <includScreen.Navigator screenOptions={{ headerShown: false }}>
      <includScreen.Screen
        name="DefaultScreen"
        component={DefaultPostScreen}
      />
      <includScreen.Screen
        name="Comments"
        component={CommentsScreen}
              screenOptions={{ headerShown: false }}
              options={{
                    headerTitle: "Коментарі",
                    headerTitleStyle: {
                        color: "#212121",
                        fontSize: 18,
                        fontFamily: "Roboto-Medium",
                        fontWeight: "medium",
                    },
                    headerRight: () => {
                        const img = require("../../assets/icon/arrow-left.png");
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("DefaultScreen")
                                }
                            >
                                <Image source={img}></Image>
                            </TouchableOpacity>
                        );
                    },
                    headerTitleAlign: "center",
                    headerRightContainerStyle: { paddingHorizontal: 16 },
                    tabBarShowLabel: false,
                }}
      />
      <includScreen.Screen
        name="Map"
        component={MapScreen}
        screenOptions={{ headerShown: false }}
      />
    </includScreen.Navigator>
  );
};

export default PostsScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#ffffff",
//         paddingHorizontal: 16,
//     },
//     headerBox: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         marginTop: 32,
// },
//     boxPhoto: {
//         width: 60,
//         height: 60,
//         borderRadius: 16,
//         marginRight: 8,
//         backgroundColor:  "#F6F6F6",
//     },
//     textName: {
//         fontFamily: "Roboto-Bold",
//         fontWeight: "bold",
//         fontSize: 14,
//         color: "#212121",
//         lineHeight: 15,
//         textAlign: "center",
//     },
//     textEmail: {
//         fontFamily: "Roboto-Regular",
//         fontWeight: "400",
//         fontSize: 12,
//         textAlign: "center",
//         color: "rgba(33, 33, 33, 0.8)",
//     }
// })
