import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './LogoScreen';
import CreateAccountScreen from './CreateAccount';
import SignInScreen from './SignInScreen';
import ChatPage from './Chat';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Logo">
      <Stack.Screen name="Logo" component={LogoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="create" component={CreateAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="chat" component={ChatPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
