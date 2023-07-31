import { TouchableOpacity, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen"
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen"
import ProfileScreen from "../ProfileScreen/ProfileScreen"

const bottomNav = createBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <bottomNav.Navigator  screenOptions={{
                tabBarStyle: {
                    paddingBottom: 24,
                    paddingTop: 8,
                    height: 80,
                    shadowColor: "rgba(0, 0, 0, 0.8)",
                    shadowOffset: { width: 0, height: -0.5 },
                },
                headerStyle: {
                    shadowColor: "rgba(0, 0, 0, 0.8)",
                    shadowOffset: { width: 0, height: -0.5 },
                },
            }}>
            <bottomNav.Screen name="Публікації" component={PostsScreen}
                options={{
                    hederTitle: "Публікації",
                    headerRight: () =>  (
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Image source={require("../../assets/icon/log-out2.png")}/>
                            </TouchableOpacity>
                        ),
                    headerTitleAlign: "center",
                    headerRightContainerStyle: { paddingHorizontal: 16 },
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require("../../assets/icon/grid.png")}></Image>
                        )
                    }
            }}
            />
            <bottomNav.Screen
                name="Create" component={CreatePostsScreen} options={{
                    headerTitle: "Створити публікацію",
                    headerTitleStyle: {
                        fontFamily: "Roboto-Medium",
                        fontWeight: "medium",
                        color: "#212121",
                        fontSize: 18,
                    },
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                                <Image source={require("../../assets/icon/arrow-left.png")}></Image>
                            </TouchableOpacity>
                        )
                    },
                    headerTitleAlign: "center",
                    headerLeftContainerStyle: { paddingHorizontal: 16 },
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require("../../assets/icon/bigPlus.png")}></Image>
                        )
                    },
                }}
            />
            
            <bottomNav.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require("../../assets/icon/user.png")}></Image>
                        )
                    },
                }}
            />

        </bottomNav.Navigator>
    )
}


export default Home;