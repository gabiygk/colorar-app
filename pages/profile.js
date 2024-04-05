import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Ionicons, Foundation } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      <View style={{ borderBottomLeftRadius: 15, backgroundColor: '#3708ad', borderBottomRightRadius: 15, height: 130, flexDirection: 'row' }}>

        <Image source={require('../images/flower.jpg')} style={{ width: 100, height: 100, marginLeft: 10, marginTop: 60, borderRadius: 100 }} />

        <View style={{ flexDirection: 'column', marginTop: 65, marginLeft: 8 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Malu Pertuzatti</Text>
          <Text style={{ color: 'white', fontSize: 12 }}>Last save on 01/03/2023</Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row', margin: 20, marginTop: 60 }}>
        <Ionicons name='person' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>Username</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>Malu Pertuzatti</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#BFBFBF', width: 380, height: 1, marginLeft: 20, marginTop: 10 }}></View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Entypo name='mail' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>E-mail</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>malu1@gmail.com</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#BFBFBF', width: 380, height: 1, marginLeft: 20, marginTop: 10 }}></View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Entypo name='calendar' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>Birthday date</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>09/07/1996</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#BFBFBF', width: 380, height: 1, marginLeft: 20, marginTop: 10 }}></View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Foundation name='telephone' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>Cellphone</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>+11 8835-8392</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#BFBFBF', width: 380, height: 1, marginLeft: 20, marginTop: 10 }}></View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <FontAwesome5 name='city' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>State</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>São Paulo</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#BFBFBF', width: 380, height: 1, marginLeft: 20, marginTop: 10 }}></View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <FontAwesome5 name='city' size={30} color="#3708ad" />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#3708ad' }}>City</Text>
          <Text style={{ fontSize: 17, color: '#4C5958' }}>São Paulo</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#3708ad', borderRadius: 12, alignItems: 'center', height: 40, width: 100, marginTop: 20, shadowColor: '#98A6B3', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 30 }}></View>

    </ScrollView>
  );
}
