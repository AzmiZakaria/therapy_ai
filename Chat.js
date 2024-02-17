import React, { useState } from 'react';
import { View, TextInput, Animated, FlatList, StyleSheet,TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo vector icons
import { Audio } from 'expo-av';

const ChatPage = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [iconScale] = useState(new Animated.Value(1));
  // State to control the visibility of the logout text
  const handleSendMessage = () => {
    if (inputText.trim() === '') return; // Prevent sending empty messages

    // Add user message to the chat
    setMessages(prevMessages => [
      { id: prevMessages.length, text: inputText, sender: 'user' },
      ...prevMessages,
    ]);

    // Simulate bot's response
    setTimeout(() => {
      setMessages(prevMessages => [
        { id: prevMessages.length, text: 'This is a bot response.', sender: 'bot' },
        ...prevMessages,
      ]);
    }, 1000); // Simulating some processing time

    // Clear the input field after sending message
    setInputText('');
  };

  const renderItem = ({ item }) => (
    <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
      <Text>{item.text}</Text>
    </View>
  );
  const handleIconPress = () => {
    setIsLogoutVisible(!isLogoutVisible); // Toggle the visibility of the logout text
  };

  const animateIcon = () => {
    Animated.sequence([
      Animated.timing(iconScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.timing(iconScale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Therapist Chat</Text>
            <TouchableOpacity onPress={handleIconPress}>
                <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
        </View>            
        {isLogoutVisible && (
        <TouchableOpacity style={styles.logoutOption} onPress={()=>navigation.navigate("SignIn")}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      )}
    <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        inverted // Newest messages at the bottom
        style={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSendMessage} onPressIn={animateIcon}>
        <MaterialIcons name="send" size={24} color="#067fd0" />
        </TouchableOpacity>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // To have the input at the bottom
    paddingBottom: 16,
    paddingTop:17,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingRight:8
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEE',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#067fd0',
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutOption: {
    position: 'absolute',
    top: 15, // Adjust the position as needed
    right: 30, // Adjust the position as needed
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255,0)', // Transparent white background
    width: 100,
    // marginLeft: 90,
  },
  logoutText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#000',
  },
});

export default ChatPage;
