// SignInScreen.js

import React from 'react';
import { View, TextInput, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Button from './button';
const SignInScreen = ({ navigation ,route}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button title="Sign In" onPress={() => {navigation.navigate('chat')}}   backgroundColor="#161a7b" />
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
