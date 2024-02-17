import React,{useState} from 'react';
import { View, Text, TextInput, StyleSheet,Keyboard } from 'react-native';
import Button from '../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
const CreateAccountScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setusername] = React.useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,}$/;
  const handleCreateAccount = () => {
    // Handle create account logic here
    if (email.trim() === '' || confirmPassword.trim() === '' || username.trim() === '' || password.trim() === '') {
      alert('Fill in all inputs.');
    } else if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else if (!passwordRegex.test(password)) {
      alert('Please enter a strong password. Password must have at least 8 characters, including at least one uppercase letter, one number, and one symbol.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    }else {
      // All conditions are met, you can proceed with account creation logic here
       Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setusername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Icon
          name={showPassword ? 'check-square-o' : 'square-o'}
          size={20}
          color="#000"
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
        <TextInput
        style={styles.input}
        placeholder="confirm-password"
        secureTextEntry={!showPassword}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
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
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordTextInput: {
    width: '85%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top:10
  },
});

export default CreateAccountScreen;
