import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'

import Home from './components/Home'
import Class from './components/Class'
import DomesticMtn from './components/DomesticMtn'
import ForeignMtn from './components/ForeignMtn'
import Detail from './components/Detail'
import Like from './components/Like'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Class" component={Class} options={{title:"Class", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="DomesticMtn" component={DomesticMtn} options={{title:"DomesticMtn", headerTitleAlign:"center"}} />
      <ListStack.Screen name="ForeignMtn" component={ForeignMtn} options={{title:"ForeignMtn", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const LikeStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Like" component={Like} options={{title:"Like", headerTitleAlign:"center"}} />
    </ListStack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Like" component={LikeStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home': // focus가 있으면 'home', 아니면 home-outline
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Like':
        iconName = focused
          ? 'star'
          : 'star-outline'; 
        break;
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions= {
  activeTintColor: '#66ffff',
  inactiveTintColor: 'black',
}


// <View style={styles.container}>   </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

      //  <StatusBar style="auto" />
