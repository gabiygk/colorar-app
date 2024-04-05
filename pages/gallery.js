import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import React , {useState} from 'react';

let recording = new Audio.Recording(); 

export default function ajuda({ navigation }) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;


  const recorderRef = React.useRef();
  const [duration, setDuration] = React.useState(0);
  const [isInProgress, setIsInProgress] = React.useState(false);
  const [isRecordingCompleted, setIsRecordingCompleted] = React.useState(false);
  const [shouldTerminate, setShouldTerminate] = React.useState(false);

  /**
   * This function updates the duration for recording.
   * It also calls stop once current time is greater than 1 minute.
   */
  const onRecordingStatusUpdate = ({durationMillis}) => {
    setDuration(durationMillis);
    if(durationMillis>40000){
      setShouldTerminate(true);
    }
  }

  /**
   * This function updates the duration.
   * It also calls stop once current time is greater than 1 minute.
   */
  const onPlaybackStatusUpdate = ({positionMillis}) => {
    setDuration(positionMillis);
  }

  /**
   * This function prepares the recorder and starts recording.
   */
  const record = async function() {
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        allowsRecordingIOS: true,
        staysActiveInBackground: true,
    });
    const recorder = new Audio.Recording();
    recorder.setOnRecordingStatusUpdate(onRecordingStatusUpdate);
    await recorder.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    await recorder.startAsync();
    setIsInProgress(true);
    recorderRef.current = recorder;
  }

  /**
   * This function prepares the sound and starts playing.
   */
  const play = async function() {
    const uri = recorderRef.current.getURI(); 
    const {sound, status} = await Audio.Sound.createAsync({uri}) 
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    sound.playAsync();
    setDuration(0);
    setIsInProgress(true);
  }

  /**
   * This useEffect shuts down the recording
   */
  React.useEffect(()=>{
    if(shouldTerminate){
      recorderRef.current.stopAndUnloadAsync();   
      setIsRecordingCompleted(true);
      setIsInProgress(false); 
    }
  },[shouldTerminate])


  if(isInProgress){
    return(
      <View style={{backgroundColor:'#3708ad', flex:1}}>
        <Text style={{color:'white'}}>Seconds: {Math.round(duration/1000)}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View
        style={{
          backgroundColor: '#3708ad',
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          height: wid,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hei / 18,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('fake2')}>
            <Entypo
              name="flower"
              size={wid / 9}
              color="white"
              style={{ marginLeft: wid / 48 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image
              source={require('../images/flower.jpg')}
              style={{
                width: wid / 10,
                height: wid / 10,
                marginLeft: wid / 48,
                marginTop: hei / 160,
                marginRight: 8,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require('../images/logoroxoneon.jpeg')}
          style={{
            width: wid - 20,
            height: wid / 2 - 10,
            marginLeft: 10,
            borderRadius: 20,
          }}
        />

        <View style={{marginBottom: wid/48}}>
          <Text
            style={{
              color: 'white',
              fontSize: wid / 13,
              marginLeft: wid / 48,
              fontWeight: 'bold',
            }}>
            Here is safe.
          </Text>

          <Text
            style={{
              color: '#A88EEB',
              fontSize: wid / 29,
              marginLeft: wid / 48,
            }}>
            Those audios are stored only in the app.
          </Text>
          <Text
            style={{
              color: '#A88EEB',
              fontSize: wid / 29,
              marginLeft: wid / 48,
            }}>
            Feel safe to record whatever you want.
          </Text>
        </View>


        <TouchableOpacity onPress={record}>

        <View style={{ marginTop: wid / 120, backgroundColor:'#A88EEB', width:wid/1.05, height:wid/8, marginLeft:wid/48, alignItems:'center', flexDirection:'row', justifyContent:'center', borderRadius:10}}>
        <Text style={{fontSize:wid/15, fontWeight:'bold', color:'white'}}>Record</Text>

        <MaterialCommunityIcons name='microphone' size={wid/9} color='#3708ad'/>

        </View>

        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: '#3708ad',
          fontSize: wid / 13,
          marginLeft: wid / 48,
          fontWeight: 'bold',
          marginTop: wid / 10,
        }}>
        Last Records
      </Text>

      <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: 'white',
          borderRadius: 10,
          width: wid/1.05,
          marginLeft: wid / 48,
          height: wid /4,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 15}}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:wid/48, color:'#3708ad', fontWeight:'bold', fontSize:wid/20, marginTop:wid/48}}>03-11-2022 Recording</Text>
        <Entypo name='dots-three-vertical' size={wid/13} color="#3708ad" style={{marginRight:wid/48, marginTop:wid/48}} />
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:wid/48}}>
         <Text style={{marginLeft:wid/48, color:'grey', fontWeight:'bold', fontSize:wid/25, marginTop:wid/20}}>02:43</Text>

          <Image
          source={require('../images/record.jpg')}
          style={{
            width: wid/1.5,
            height: wid/7,
            marginRight: 5,
            borderRadius: 20,
          }}
        />

        <View style={{width:wid/10, height:wid/10, borderRadius:50, alignItems:'center', backgroundColor:'#A88EEB', marginTop:wid/33, marginRight:wid/48}}>
        <AntDesign name='stepforward' size={wid/18} color="white" style={{marginTop:wid/48}} />
        </View>
        </View>
      </View>

          <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: wid / 20,
          backgroundColor: 'white',
          borderRadius: 10,
          width: wid/1.05,
          marginLeft: wid / 48,
          height: wid /4,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 15}}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:wid/48, color:'#3708ad', fontWeight:'bold', fontSize:wid/20, marginTop:wid/48}}>03-11-2022 Recording</Text>
        <Entypo name='dots-three-vertical' size={wid/13} color="#3708ad" style={{marginRight:wid/48, marginTop:wid/48}} />
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:wid/48}}>
         <Text style={{marginLeft:wid/48, color:'grey', fontWeight:'bold', fontSize:wid/25, marginTop:wid/20}}>03:24</Text>

          <Image
          source={require('../images/record.jpg')}
          style={{
            width: wid/1.5,
            height: wid/7,
            marginRight: 5,
            borderRadius: 20,
          }}
        />

        <View style={{width:wid/10, height:wid/10, borderRadius:50, alignItems:'center', backgroundColor:'#A88EEB', marginTop:wid/33, marginRight:wid/48}}>
        <AntDesign name='stepforward' size={wid/18} color="white" style={{marginTop:wid/48}} />
        </View>
        </View>
      </View>

          <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: wid / 20,
          backgroundColor: 'white',
          borderRadius: 10,
          width: wid/1.05,
          marginLeft: wid / 48,
          height: wid /4,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 15}}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:wid/48, color:'#3708ad', fontWeight:'bold', fontSize:wid/20, marginTop:wid/48}}>03-09-2022 Recording</Text>
        <Entypo name='dots-three-vertical' size={wid/13} color="#3708ad" style={{marginRight:wid/48, marginTop:wid/48}} />
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:wid/48}}>
         <Text style={{marginLeft:wid/48, color:'grey', fontWeight:'bold', fontSize:wid/25, marginTop:wid/20}}>01:54</Text>

          <Image
          source={require('../images/record.jpg')}
          style={{
            width: wid/1.5,
            height: wid/7,
            marginRight: 5,
            borderRadius: 20,
          }}
        />

        <View style={{width:wid/10, height:wid/10, borderRadius:50, alignItems:'center', backgroundColor:'#A88EEB', marginTop:wid/33, marginRight:wid/48}}>
        <AntDesign name='stepforward' size={wid/18} color="white" style={{marginTop:wid/48}} />
        </View>
        </View>
      </View>

          <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: wid / 20,
          backgroundColor: 'white',
          borderRadius: 10,
          width: wid/1.05,
          marginLeft: wid / 48,
          height: wid /4,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 15}}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:wid/48, color:'#3708ad', fontWeight:'bold', fontSize:wid/20, marginTop:wid/48}}>03-08-2022 Recording</Text>
        <Entypo name='dots-three-vertical' size={wid/13} color="#3708ad" style={{marginRight:wid/48, marginTop:wid/48}} />
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:wid/48}}>
         <Text style={{marginLeft:wid/48, color:'grey', fontWeight:'bold', fontSize:wid/25, marginTop:wid/20}}>07:43</Text>

          <Image
          source={require('../images/record.jpg')}
          style={{
            width: wid/1.5,
            height: wid/7,
            marginRight: 5,
            borderRadius: 20,
          }}
        />

        <View style={{width:wid/10, 
        height:wid/10, 
        borderRadius:50, 
        alignItems:'center', backgroundColor:'#A88EEB', marginTop:wid/33, marginRight:wid/48}}>
        <AntDesign name='stepforward' size={wid/18} color="white" style={{marginTop:wid/48}} />
        </View>
        </View>
      </View>

      <View style={{ height: hei / 18, marginTop: wid / 30 }}></View>
    </ScrollView>
  );
}
