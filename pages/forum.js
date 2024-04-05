import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, SimpleLineIcons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Forum({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{ backgroundColor: '#ebecff' }}>

      <View style={{ backgroundColor: '#3708ad', height: windowWidth / 1.6, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: windowHeight / 18 }}>

          <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
            <Entypo name='flower' size={windowWidth / 9} color='white' style={{ marginLeft: windowWidth / 48 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image source={require('../images/flower.jpg')} style={{ width: windowWidth / 10, height: windowWidth / 10, marginLeft: windowWidth / 48, marginTop: windowHeight / 160, marginRight: 8, borderRadius: 20 }} />
          </TouchableOpacity>
        </View>

        <Text style={{ color: 'white', fontSize: windowWidth / 13, marginLeft: windowWidth / 48, fontWeight: 'bold', marginTop: windowWidth / 48 }}>Hi, Malu</Text>
        <Text style={{ color: '#D9D9D9', fontSize: windowWidth / 30, marginLeft: windowWidth / 48, marginTop: windowWidth / 48 }}>You are not alone! Take it off your chest.</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: windowHeight / 24, backgroundColor: '#EBF0F2', width: windowWidth / 1.1, borderRadius: 20, marginLeft: 10, marginTop: windowHeight / 60 }}>
          <Entypo name='magnifying-glass' size={windowWidth / 16} color='grey' style={{ marginTop: windowHeight / 150, marginLeft: windowWidth / 110 }} />
          <TextInput
            placeholder=' Search'
            style={{ color: 'grey', backgroundColor: '#EBF0F2', marginLeft: 5, width: windowWidth / 1.3, borderRadius: 5, height: windowHeight / 28, fontSize: 18, marginTop: 3 }}
          />
        </View>

      </View>

      <ScrollView horizontal style={{ flexDirection: 'row' }}>

        <View style={{ marginTop: 10, marginLeft: windowWidth / 48, backgroundColor: '#CCB8FF', width: windowWidth / 5, height: windowWidth / 15, alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: '#794CEC', fontWeight: 'bold', fontSize: windowWidth / 25, marginTop: windowWidth / 100 }}>Popular</Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: windowWidth / 48, backgroundColor: '#CCB8FF', width: windowWidth / 3, height: windowWidth / 15, alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: '#794CEC', fontWeight: 'bold', fontSize: windowWidth / 25, marginTop: windowWidth / 100 }}>Recommended</Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: windowWidth / 48, backgroundColor: '#CCB8FF', width: windowWidth / 3.5, height: windowWidth / 15, alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: '#794CEC', fontWeight: 'bold', fontSize: windowWidth / 25, marginTop: windowWidth / 100 }}>Most recent</Text>
        </View>

      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Text style={{ color: '#3708ad', fontSize: windowWidth / 13, marginLeft: windowWidth / 48, fontWeight: 'bold', marginTop: windowWidth / 35 }}>Popular Topics</Text>

        <AntDesign name='rightcircle' size={windowWidth / 16} color='#3708ad' style={{ marginRight: windowWidth / 48, marginTop: windowWidth / 20 }} />

      </View>

      <ScrollView horizontal style={{ flexDirection: 'row', marginTop: windowWidth / 35 }}>
        <Image source={require('../images/topic1.jpeg')} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, marginLeft: windowWidth / 48, marginTop: 5, borderRadius: 5 }} />
        <Image source={require('../images/topic4.jpeg')} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, marginLeft: windowWidth / 48, marginTop: 5, borderRadius: 5 }} />
        <Image source={require('../images/topic3.jpeg')} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, marginLeft: windowWidth / 48, marginTop: 5, borderRadius: 5 }} />
        <Image source={require('../images/topic2.jpeg')} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, marginLeft: windowWidth / 48, marginTop: 5, borderRadius: 5 }} />
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Text style={{ color: '#3708ad', fontSize: windowWidth / 13, marginLeft: windowWidth / 48, fontWeight: 'bold', marginTop: windowHeight / 35 }}>Trending posts</Text>

        <AntDesign name='rightcircle' size={windowWidth / 16} color='#3708ad' style={{ marginRight: windowWidth / 48, marginTop: windowHeight / 25 }} />

      </View>

      {/* Trending posts content */}
      {/* Repeat the content block for each post */}
      {/* Content block starts */}
      <View style={{ backgroundColor: 'white', borderRadius: 10, margin: 12, shadowColor: '#98A6B3', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 15 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <Image source={require('../images/flower.jpg')} style={{ width: 40, height: 40, borderRadius: 100, borderWidth: 1, borderColor: 'white' }} />
            <View style={{ flexDirection: 'column', marginLeft: windowWidth / 48, marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>I am scared.</Text>
              <Text style={{ fontWeight: 'bold', color: '#3708ad', fontSize: 10 }}>Abusive Relationship • 1d ago</Text>
            </View>
          </View>
          <SimpleLineIcons name='options-vertical' size={20} color="#4B4952" style={{ marginTop: 10 }} />
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ color: "#766E78" }}>My husband, who I've been married to for 10 years, has been threatening to abuse me physically. His outbursts of jealousy worry me. How can I seek help?</Text>
        </View>

        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='heart-multiple' size={22} color="#3708ad" />
            <Text style={{ marginLeft: 4, marginTop: 2, color: "#4B4952" }}>78 likes</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='message-reply-text-outline' size={22} color="#3708ad" />
            <Text style={{ marginLeft: 4, marginTop: 1, color: "#4B4952" }}>21 replies</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='eye' size={22} color="#3708ad" />
            <Text style={{ marginLeft: 4, marginTop: 1, color: "#4B4952" }}>298 views</Text>
          </View>
        </View>

      </View>
      {/* Content block ends */}

      {/* Repeat the content block for each post */}

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#3708ad', borderRadius: 12, alignItems: 'center', alignContent: 'center', height: 40, width: 100, marginLeft: 0, shadowColor: '#98A6B3', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 7.5, color: 'white' }}>See more</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 30 }}></View>

    </ScrollView>
  );
}
