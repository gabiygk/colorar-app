import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function ColorAI({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [typing, setTyping] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    // Logic for sending message
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: windowHeight / 18 }}>
        <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
          <Entypo name='flower' size={windowWidth / 9} color='#3708ad' style={{ marginLeft: windowWidth / 48 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Image source={require('../images/flower.jpg')} 
          style={{ width: windowWidth / 10, 
          height: windowWidth / 10, 
          marginLeft: windowWidth / 48, 
          marginTop: windowHeight / 160, 
          marginRight: 8, 
          borderRadius: 20 }} />
        </TouchableOpacity>

        <Entypo name='warning' size={windowWidth / 9} color='#3708ad' style={{ marginRight: windowWidth / 48 }}/>
      </View>

      <View style={{ height: windowWidth / 2.1 }}></View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'grey' }}>03/11/2022</Text>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: windowWidth / 48 }}>
          <Text style={{ fontWeight: 'bold' }}>Me</Text>
          <Text style={{ color: 'grey' }}> 4:54PM</Text>
        </View>

        <View style={{ backgroundColor: '#A88EEB', 
        width: windowWidth / 1.5, 
        alignItems: 'center', 
        height: windowWidth / 7, 
        borderBottomLeftRadius: 10, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        marginLeft: windowWidth / 3.3, 
        marginTop: windowWidth / 48 }}>

          <Text style={{ fontSize: windowWidth / 23, 
          color: 'white', 
          marginLeft: windowWidth / 48, 
          marginTop: windowWidth / 48 }}>When did women have access to vote in Brazil?</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', 
      justifyContent: 'flex-start', 
      marginLeft: windowWidth / 48, 
      marginTop: windowWidth / 48 }}>
        <Text style={{ fontWeight: 'bold' }}>ColorAI</Text>
        <Text style={{ color: 'grey' }}> 4:54PM</Text>
      </View>

      <View style={{ backgroundColor: '#3708ad', 
      width: windowWidth / 1.2, 
      alignItems: 'center', 
      height: windowWidth / 1.3, 
      borderBottomRightRadius: 20, 
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10, 
      marginLeft: windowWidth / 48, 
      marginTop: windowWidth / 48 }}>

        <Text style={{ fontSize: windowWidth / 23, 
        color: 'white', 
        marginLeft: windowWidth / 48, 
        marginTop: windowWidth / 48 }}>
        Women in Brazil gained the right to vote in 1932, through a constitutional amendment that was passed on May 24 of that year. However, it's worth noting that this right was initially restricted to literate women who were at least 21 years old and who met certain property requirements. It was only in 1945, after a new constitution was adopted, that all women in Brazil were granted full suffrage, regardless of their education or property status.</Text>
      </View>

      <KeyboardAvoidingView behavior="padding" style={{ marginTop: windowWidth / 12 }}>
        <View style={{ flexDirection: 'row', 
        backgroundColor: '#eee', 
        width: windowWidth / 1.05, 
        marginLeft: windowWidth / 48, 
        borderRadius: 10 }}>
          <TextInput
            value={typing}
            style={{ paddingHorizontal: 20, fontSize: 18, flex: 1 }}
            underlineColorAndroid="transparent"
            placeholder="Type a message..."
            onChangeText={text => setTyping(text)}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Text style={{ alignSelf: 'center', 
            color: '#3708ad', 
            fontSize: 16, 
            fontWeight: 'bold', 
            padding: 20 }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </ScrollView>
  );
}