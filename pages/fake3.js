import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Fake2({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ height: windowHeight / 12 }}></View>

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
