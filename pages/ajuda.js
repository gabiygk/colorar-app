import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Ajuda({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      <View style={{ backgroundColor: '#3708ad', 
      borderBottomRightRadius: 15, 
      borderBottomLeftRadius: 15, 
      height: windowWidth }}>

        <View style={{ flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: windowHeight / 18 }}>

          <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
            <Entypo name="flower" size={windowWidth / 9} color="white" style={{ marginLeft: windowWidth / 48 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image source={require('../images/flower.jpg')} style={{ width: windowWidth / 10, 
            height: windowWidth / 10, 
            marginLeft: windowWidth / 48, 
            marginTop: windowHeight / 160, 
            marginRight: 8, 
            borderRadius: 20 }} />
          </TouchableOpacity>

        </View>

        <Image source={require('../images/logoroxoneon.jpeg')}
        style={{ width: windowWidth - 20, 
        height: windowWidth / 2 - 10, 
        marginLeft: 10, 
        borderRadius: 20 }} />

        <View style={{ marginBottom: windowWidth / 48 }}>

          <Text style={{ color: 'white', 
          fontSize: windowWidth / 13, 
          marginLeft: windowWidth / 48, 
          fontWeight: 'bold' }}>Need help?</Text>
          <Text style={{ color: '#A88EEB', 
          fontSize: windowWidth / 29, 
          marginLeft: windowWidth / 48 }}>We got what you need.</Text>
          <Text style={{ color: '#A88EEB', 
          fontSize: windowWidth / 29, 
          marginLeft: windowWidth / 48 }}>You are not alone.</Text>

        </View>

        <View style={{ marginTop: windowWidth / 120, 
        backgroundColor: '#A88EEB', 
        width: windowWidth / 1.05, 
        height: windowWidth / 8, 
        marginLeft: windowWidth / 48, 
        alignItems: 'center', flexDirection: 'row', 
        justifyContent: 'center', borderRadius: 10 }}>

          <Text style={{ fontSize: windowWidth / 15, 
          fontWeight: 'bold', 
          color: 'white' }}>Alarm</Text>

          <MaterialCommunityIcons name='alarm-light' size={windowWidth / 9} color='#3708ad' />

          <Text style={{ fontSize: windowWidth / 15, 
          fontWeight: 'bold', 
          color: 'white' }}>Flowers</Text>

        </View>
      </View>

      <Text style={{ color: '#3708ad', 
      fontSize: windowWidth / 13, 
      marginLeft: windowWidth / 48, 
      fontWeight: 'bold', 
      marginTop: windowWidth / 10 }}>Flowers</Text>

      <View style={{ height: 180 }}>
        <Image source={require('../images/flowerdanger.jpeg')} 
        style={{ width: windowWidth - 20, 
        height: windowWidth / 2 - 10, 
        marginLeft: 10, 
        marginTop: 8, 
        borderRadius: 20 }} />
      </View>

      <Text style={{ color: '#3708ad', 
      fontSize: windowWidth / 13, 
      marginLeft: windowWidth / 48, 
      fontWeight: 'bold', 
      marginTop: windowWidth / 20 }}>Services</Text>

      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../images/aid2.jpeg')}
          style={{ width: windowWidth / 2.15, 
          height: windowWidth / 2 - 10, 
          marginLeft: 10, 
          marginTop: 8, 
          borderRadius: 20 }} />

          <Image source={require('../images/aid4.jpeg')} 
          style={{ width: windowWidth / 2.15, 
          height: windowWidth / 2 - 10, 
          marginLeft: 10, 
          marginTop: 8, 
          borderRadius: 20 }} />

        </View>

        <View style={{ flexDirection: 'row' }}>

          <Image source={require('../images/aid1.jpeg')} 
          style={{ width: windowWidth / 2.15, 
          height: windowWidth / 2 - 10, 
          marginLeft: 10, 
          marginTop: 8, 
          borderRadius: 20 }} />

          <Image source={require('../images/aid3.jpeg')} 
          style={{ width: windowWidth / 2.15, 
          height: windowWidth / 2 - 10, 
          marginLeft: 10, 
          marginTop: 8, 
          borderRadius: 20 }} />
          
        </View>
      </View>

      <View style={{ height: windowHeight / 36, marginTop: windowWidth / 30 }}></View>
    </ScrollView>
  );
}