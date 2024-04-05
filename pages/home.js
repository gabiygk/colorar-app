import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Home({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: '#ebecff' }}>

      <ImageBackground source={require('../images/background.jpg')} style={{ width: windowWidth, height: 3 * windowWidth / 1.26 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: windowHeight / 18 }}>

          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => navigation.navigate('fake3')}>
              <Entypo name='flower' size={windowWidth / 9} color='#3708ad' style={{ marginLeft: windowWidth / 48 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('gallery')}>
              <Entypo name='folder-images' size={windowWidth / 9} color='#3708ad' style={{ marginLeft: windowWidth / 48 }} />
            </TouchableOpacity>

          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <View style={{ marginRight: 15 }}>
              <Text style={{ color: 'white' }}>LogIn here</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image source={require('../images/flower.jpg')} style={{ width: windowWidth / 9, height: windowWidth / 9, marginLeft: 10, marginTop: windowHeight / 160, marginRight: 8, borderRadius: 20 }} />
          </TouchableOpacity>

        </View>

        <Image source={require('../images/logoroxoneon.jpeg')} style={{ width: windowWidth - 20, height: windowWidth / 2 - 10, marginLeft: 10, marginTop: 20, borderRadius: 20 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: windowHeight / 24, backgroundColor: '#EBF0F2', width: windowWidth - 20, borderRadius: 20, marginLeft: 10, marginTop: windowHeight / 60 }}>

          <Entypo name='magnifying-glass' size={windowWidth / 16} color='grey' style={{ marginTop: windowHeight / 150, marginLeft: windowWidth / 110 }} />

          <TextInput placeholder=' Search' style={{ color: 'grey', backgroundColor: '#EBF0F2', marginLeft: 5, width: windowWidth - 63, borderRadius: 5, height: windowHeight / 28, fontSize: 18, marginTop: 3 }} />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Text style={{ color: '#3708ad', fontSize: windowWidth / 13, marginLeft: windowWidth / 48, fontWeight: 'bold', marginTop: windowWidth / 48 }}>Content</Text>

          <AntDesign name='rightcircle' size={windowWidth / 16} color='#3708ad' style={{ marginRight: 15, marginTop: 20 }} />

        </View>

        <ScrollView horizontal style={{ flexDirection: 'row', marginTop: 8 }}>

          <TouchableOpacity onPress={() => navigation.navigate('content')}>
            <Image source={require('../images/content.jpeg')} style={{ width: 3 * windowWidth / 10, height: windowHeight / 4, marginLeft: 10, borderRadius: 20 }} />
          </TouchableOpacity>

          <Image source={require('../images/instacol.jpeg')} style={{ width: 3 * windowWidth / 10, height: windowHeight / 4, marginLeft: 10, borderRadius: 20 }} />

          <Image source={require('../images/tiktokcol.jpeg')} style={{ width: 3 * windowWidth / 10, height: windowHeight / 4, marginLeft: 10, borderRadius: 20 }} />

          <Image source={require('../images/youtubecol.jpeg')} style={{ width: 3 * windowWidth / 10, height: windowHeight / 4, marginLeft: 10, borderRadius: 20 }} />

        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 1 }}>

          <Text style={{ color: '#3708ad', fontSize: windowWidth / 13, marginLeft: 10, fontWeight: 'bold', marginTop: 5 }}>Talk to ColorAI</Text>

          <AntDesign name='rightcircle' size={windowWidth / 13} color='#3708ad' style={{ marginRight: 15, marginTop: 11 }} />

        </View>
        <View style={{ height: 180 }}>

          <TouchableOpacity onPress={() => navigation.navigate('colorai')}>
            <Image source={require('../images/colorAI.jpg')} style={{ width: windowWidth - 20, height: windowWidth / 2 - 10, marginLeft: 10, marginTop: 8, borderRadius: 20 }} />

          </TouchableOpacity>
          
        </View>
        <View style={{ height: windowHeight / 9 }}></View>
      </ImageBackground>
    </ScrollView>
  );
}
