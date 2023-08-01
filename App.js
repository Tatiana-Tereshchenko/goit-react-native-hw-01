import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'; 
import Registration from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import  Home from './Screens/Home/Home';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

   useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
    
  }

  return (
   <View style={styles.container} onLayout={onLayout}>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Registration" component={Registration} options={{ test: "test" }} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

