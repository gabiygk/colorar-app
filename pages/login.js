import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Login({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../images/logoroxoneon.jpeg')} style={{ width: windowWidth / 1.2, height: windowWidth / 2, marginBottom: 20, borderRadius: 20, marginTop: windowWidth / 5 }} />
        
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Mail address or phone number" 
            placeholderTextColor="#2E2E2E"
            onChangeText={text => setEmail(text)}
          />
        </View>
        
        <View style={styles.inputView}>
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#2E2E2E"
            onChangeText={text => setPassword(text)}
          />
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('fake1')}>
          <Text style={styles.forgot}>Can't remember your password? Log in with your pattern.</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.signupText}>If you don't have an account, sign up!</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.parceiroText}>Learn more about becoming a Colorar partner here.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#DFDFDF",
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#2E2E2E"
  },
  forgot: {
    color: "#3808AC",
    fontSize: 11
  },
  loginButton: {
    width: "80%",
    backgroundColor: "#3808AC",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  signupText: {
    color: "#3808AC",
    marginTop: 80,
  },
  parceiroText: {
    color: "#3808AC",
  }
});
