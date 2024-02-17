import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './button';
const CreateAccountScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log('Create Account button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Create Account" onPress={handleCreateAccount} backgroundColor='#067fd0'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161a7b', // Primary color

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff', // White background color
    borderColor: '#067fd0', // Secondary color
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default CreateAccountScreen;
