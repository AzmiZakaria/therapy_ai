// SignInScreen.js

import React from 'react';
import { View, TextInput, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Button from '../components/button';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo vector icons
const SignInScreen = ({ navigation ,route}) => {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,}$/;
  const handler = () => {
    if (Email.trim() === '') {
      alert('Please enter your email.');
    } else if (!emailRegex.test(Email)) {
      alert('Please enter a valid email address.');
    } else if (Password.trim() === '') {
      alert('Please enter your password.');
    } else if(!passwordRegex.test(Password)){
      alert('Please enter a strong password. Password must have at least 8 characters, including at least one uppercase letter, one number, and one symbol.');
    }else {
      // If all conditions are met, navigate to the next screen
      navigation.replace('chat');
    }
    
  };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={Password}
            onChangeText={setPassword}
          />
          <Button title="Sign In" onPress={handler}   backgroundColor="#161a7b" />
          <TouchableOpacity  onPress={() => {navigation.navigate('create')}}>
            <Text style={styles.pressableText}>sign up</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#067fd0', // Secondary color
      },
      title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#161a7b', // Primary color
        borderRadius: 5,
      },
      pressableText: {
        textDecorationLine: 'underline',
        marginTop: 10,
      },
    });
    

export default SignInScreen;
