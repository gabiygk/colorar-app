import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Fake1({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Image
        source={require('../images/logoroxoneon.jpeg')}
        style={{ width: windowWidth / 1.2, height: windowWidth / 2, borderRadius: 20, marginTop: windowWidth / 5, marginLeft: windowWidth / 12 }}
      />
      <Text style={{ color: '#3708ad', fontSize: 20, marginTop: 20, textAlign: 'center' }}>Create your log in pattern</Text>
      <Text style={{ color: '#3708ad', textAlign: 'center', marginTop: 20 }}>Select a drawing to proceed the pattern creation.</Text>

      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: windowWidth / 48, marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
          <Image
            source={require('../images/fakeflor1.jpg')}
            style={{ width: windowWidth / 2.2, height: 200 }}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/fakeflor2.jpg')}
          style={{ width: windowWidth / 2.2, height: 190, marginLeft: 10 }}
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Image
          source={require('../images/fakeflor3.jpg')}
          style={{ width: windowWidth / 2.2, height: 200 }}
        />
        <Image
          source={require('../images/fakeflor4.jpg')}
          style={{ width: windowWidth / 2.2, height: 190, marginLeft: 10 }}
        />
      </View>
    </ScrollView>
  );
}