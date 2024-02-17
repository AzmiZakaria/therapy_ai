// LogoScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const LogoScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.reset({
            index: 0, // reset the stack to the first screen (SignInScreen)
            routes: [{ name: 'SignIn' }],
          });    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logosbg.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#067fd0',
  },
  logo: {
    width: '80%', // Make the image take up the full width of its container
    height: undefined, // Automatically calculate the height based on the aspect ratio
    aspectRatio: 1, // Maintain the aspect ratio to prevent distortion
    margin: 20,
  },
});

export default LogoScreen;
