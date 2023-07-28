import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Registration from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
    
  }

return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}


