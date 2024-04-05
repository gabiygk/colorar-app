import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Content({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: '#eef2ff' }}>

      <View style={{ backgroundColor: '#3708ad', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, height: windowWidth, flexDirection: 'column', justifyContent: 'space-between' }}>
        <ImageBackground source={require('../images/donuts.jpg')} style={{ width: windowWidth, height: windowWidth, borderRadius: 15 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: windowHeight / 18 }}>

            <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
              <Entypo name='flower' size={windowWidth / 9} color='white' style={{ marginLeft: windowWidth / 48 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <Image source={require('../images/flower.jpg')} style={{ width: windowWidth / 10, height: windowWidth / 10, marginLeft: windowWidth / 48, marginTop: windowHeight / 160, marginRight: 8, borderRadius: 20 }} />
            </TouchableOpacity>

          </View>

          <View>
            <Text style={{ color: 'white', fontSize: windowWidth / 10, marginLeft: windowWidth / 48, fontWeight: 'bold', marginTop: windowWidth / 3 }}>Yummy Donuts</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: windowWidth / 4.7 }}>
            <View style={{ flexDirection: 'row', marginTop: windowHeight / 50, marginLeft: windowWidth / 48, backgroundColor: '#EBF0F2', borderRadius: 10, height: windowHeight / 17 }}>
              <Entypo name='magnifying-glass' size={windowWidth / 13} color='grey' style={{ marginLeft: windowWidth / 96, marginTop: windowHeight / 80 }} />

              <TextInput placeholder=' Send a message' style={{ color: 'grey', backgroundColor: '#EBF0F2', marginLeft: windowWidth / 96, width: windowWidth / 1.4, borderRadius: 5, height: windowHeight / 19, fontSize: windowWidth / 18, marginTop: windowHeight / 175 }} />
            </View>

            <View style={{ alignItems: 'center', width: '12%', height: windowHeight / 17, backgroundColor: '#A88EEB', borderRadius: 10, marginLeft: windowWidth / 48, marginTop: windowHeight / 50 }}>
              <FontAwesome name='send' size={windowWidth / 12} color='white' style={{ marginTop: windowWidth / 60 }} />
            </View>
          </View>

        </ImageBackground>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: windowWidth / 7 }}>

        <View style={{ flexDirection: 'row', marginLeft: windowWidth / 48 }}>
          <AntDesign name='star' size={windowWidth / 13} color='#3708ad' />
          <AntDesign name='star' size={windowWidth / 13} color='#3708ad' />
          <AntDesign name='star' size={windowWidth / 13} color='#3708ad' />
          <AntDesign name='star' size={windowWidth / 13} color='#3708ad' />
          <AntDesign name='staro' size={windowWidth / 13} color='#3708ad' />
        </View>

        <Text style={{ marginRight: windowWidth / 48, color: '#3708ad', fontSize: windowWidth / 13, fontWeight: 'bold' }}>$10.50</Text>

      </View>

      <Text style={{ marginTop: windowWidth / 20, marginLeft: windowWidth / 48, color: '#3708ad', fontSize: windowWidth / 13, fontWeight: 'bold' }}>About Products</Text>
      <Text style={{ marginLeft: windowWidth / 48, color: 'grey' }}>Everyday, I bake delicious, yummy donuts at my own house. There are many different flavors: chocolate, double chocolate, mint, blueberry, strawberry frosted, Cinnamon Twist, Old-fashioned, and more. If it is the customer's preference, I can do the flavor you want even if it is not in the menu.</Text>

      <View style={{ flexDirection: 'row' }}>

        <View>

          <Text style={{ marginTop: windowWidth / 20, marginLeft: windowWidth / 48, color: '#3708ad', fontSize: windowWidth / 13, fontWeight: 'bold' }}>Contact</Text>
          <Text style={{ marginLeft: windowWidth / 48, color: 'grey' }}>donuts730@gmail.com </Text>
          <Text style={{ marginLeft: windowWidth / 48, color: 'grey' }}>+55 085 94943-8338</Text>

        </View>

        <View>

          <Text style={{ marginTop: windowWidth / 20, marginLeft: windowWidth / 12, color: '#3708ad', fontSize: windowWidth / 13, fontWeight: 'bold' }}>Location</Text>
          <Text style={{ marginLeft: windowWidth / 12, color: 'grey' }}>Sobral, Ceará </Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row', marginLeft: windowWidth / 48 }}>

        <View style={{ alignItems: 'center', marginTop: windowWidth / 10 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#3708ad', borderRadius: 12, alignItems: 'center', alignContent: 'center', height: windowWidth / 8, width: 100, marginLeft: 0, shadowColor: '#98A6B3', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 15 }}>
              <AntDesign name='heart' size={windowWidth / 10} color='white' style={{ marginTop: windowWidth / 70 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: windowWidth / 10, marginLeft: windowWidth / 48 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#3708ad', borderRadius: 12, alignItems: 'center', alignContent: 'center', height: windowWidth / 8, width: windowWidth / 1.44, marginLeft: 0, shadowColor: '#98A6B3', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 15 }}>
              <Text style={{ fontWeight: 'bold', fontSize: windowWidth / 20, marginTop: windowWidth / 35, color: 'white' }}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ height: 20, marginTop: windowWidth / 30 }}></View>

    </ScrollView>
  );
}