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
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function content({ navigation }) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
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

        <View>
          <Text
            style={{
              color: 'white',
              fontSize: wid / 13,
              marginLeft: wid / 48,
              fontWeight: 'bold',
            }}>
            Hi, Malu
          </Text>

          <Text
            style={{
              color: '#A88EEB',
              fontSize: wid / 29,
              marginLeft: wid / 48,
            }}>
            What would you like to learn
          </Text>
          <Text
            style={{
              color: '#A88EEB',
              fontSize: wid / 29,
              marginLeft: wid / 48,
            }}>
            today? Search below.
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: wid / 100 }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hei / 50,
              marginLeft: wid / 48,
              backgroundColor: '#EBF0F2',
              borderRadius: 10,
              height: hei / 17,
            }}>
            <Entypo
              name="magnifying-glass"
              size={wid / 13}
              color="grey"
              style={{ marginLeft: wid / 96, marginTop: hei / 80 }}
            />

            <TextInput
              placeholder=" Search"
              style={{
                color: 'grey',
                backgroundColor: '#EBF0F2',
                marginLeft: wid / 96,
                width: wid / 1.4,
                borderRadius: 5,
                height: hei / 19,
                fontSize: wid / 18,
                marginTop: hei / 175,
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              width: '12%',
              height: hei / 17,
              backgroundColor: '#A88EEB',
              borderRadius: 10,
              marginLeft: wid / 48,
              marginTop: hei / 50,
            }}>
            <AntDesign
              name="bars"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 96 }}
            />
          </View>
        </View>
      </View>

      <Text
        style={{
          color: '#3708ad',
          fontSize: wid / 13,
          marginLeft: wid / 48,
          fontWeight: 'bold',
          marginTop: wid / 10,
        }}>
        Try those!
      </Text>

      <View style={{ marginTop: wid / 30 }}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: '#A88EEB',
              alignItems: 'center',
            }}>
            <Entypo
              name="text"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 27 }}>
              Laws In Favor Of Women
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 30 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#A88EEB"
          style={{ marginRight: wid / 48, marginTop: wid / 70 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: '#A88EEB',
              alignItems: 'center',
            }}>
            <Entypo
              name="text"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 27 }}>
              Am I An Abusive Relationship?
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 30 }}>42 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#A88EEB"
          style={{ marginRight: wid / 48, marginTop: wid / 70 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: '#A88EEB',
              alignItems: 'center',
            }}>
            <Entypo
              name="text"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 27 }}>
              The Specter Of Fear: Not Alone
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 30 }}>17 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#A88EEB"
          style={{ marginRight: wid / 48, marginTop: wid / 70 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: '#A88EEB',
              alignItems: 'center',
            }}>
            <Entypo
              name="text"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 27 }}>
              The scenario After Reporting
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 30 }}>35 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#A88EEB"
          style={{ marginRight: wid / 48, marginTop: wid / 70 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: '#A88EEB',
              alignItems: 'center',
            }}>
            <Entypo
              name="text"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 27 }}>
              Family And Society
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 30 }}>21 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#A88EEB"
          style={{ marginRight: wid / 48, marginTop: wid / 70 }}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#3708ad',
              borderRadius: 12,
              alignItems: 'center',
              alignContent: 'center',
              height: 40,
              width: 100,
              marginLeft: 0,
              shadowColor: '#98A6B3',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 15,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 7.5,
                color: 'white',
              }}>
              See more
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: hei / 36, marginTop: wid / 30 }}></View>
    </ScrollView>
  );
}
