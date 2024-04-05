import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import 'react-native-reanimated';


import home from './pages/home';
import fake1 from './pages/fake1';
import fake2 from './pages/fake2';
import fake3 from './pages/fake3';
import forum from './pages/forum';
import login from './pages/login';
import vitrine from './pages/vitrine';
import ajuda from './pages/ajuda';
import profile from './pages/profile';
import gallery from './pages/gallery';
import colorai from './pages/colorai';
import content from './pages/content';
import content1 from './pages/content1';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// constante para implementar a navegacao entre telas do tipo stack

function Tabs() {
  return (
     <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#622A8E',
        }}>
        <Tab.Screen
          name="home"
          component={home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color="#3708ad" size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="forum"
          component={forum}
          options={{
            headerShown: false,
            tabBarLabel: 'Forum',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="forum"
                color="#3708ad"
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="vitrine"
          component={vitrine}
          options={{
            headerShown: false,
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping"
                color="#3708ad"
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ajuda"
          component={ajuda}
          options={{
            headerShown: false,
            tabBarLabel: 'Aid',
            tabBarIcon: ({ color, size }) => (
              <Foundation name="torsos" color="#3708ad" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
 
function App() {
  return ( 
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Tabs}   options={{headerShown: false}}/>
      <Stack.Screen name="profile" component={profile}   options={{headerShown: false}}/>
      <Stack.Screen name="content" component={content} options={{headerShown: false}} />
      <Stack.Screen name="gallery" component={gallery} options={{headerShown: false}}/>
      <Stack.Screen name="colorai" component={colorai} options={{headerShown: false}}/>
      <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
      <Stack.Screen name="content1" component={content1} options={{headerShown: false}} />
      <Stack.Screen name="forum" component={forum} options={{headerShown: false}} />
      <Stack.Screen name="fake1" component={fake1} options={{headerShown: false}} />
      <Stack.Screen name="fake2" component={fake2} options={{headerShown: false}} />
      <Stack.Screen name="fake3" component={fake3} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;