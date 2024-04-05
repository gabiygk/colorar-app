import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Fake2({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Image
        source={require('../images/logoroxoneon.jpeg')}
        style={{ width: windowWidth / 1.2, height: windowWidth / 2, borderRadius: 20, marginTop: windowWidth / 5, marginLeft: windowWidth / 12 }}
      />
      <Text style={{ color: '#3708ad', fontSize: 20, marginTop: 20, textAlign: 'center' }}>We're almost there!</Text>
      <Text style={{ color: '#3708ad', textAlign: 'center', marginTop: 20, marginLeft: 10 }}>Color the drawing with a maximum of three colors.</Text>

      <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Image
          source={require('../images/fakeflor1.jpg')}
          style={{ width: windowWidth / 1.1, height: 1.3 * windowWidth }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image
            source={require('../images/aquarela.png')}
            style={{ width: windowWidth / 1.1, height: windowWidth / 1.3, margin: 'auto' }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: windowHeight / 12 }}></View>
    </ScrollView>
  );
}
