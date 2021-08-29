import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Platform,
  Dimensions,
  SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react'

//import the component pages
import HomeScreen from './screens/homepagescreen'
import TwitterLiveFeedScreen from './screens/twitterlivefeedscreen'
import GeneralInfoScreen from './screens/generalinfoscreen'
import LocationServiceScreen from './screens/locationservicescreen'
import MPDatabaseScreen from './screens/mpdatabasescreen'
import MapScreen from "./screens/MapScreen";
import RepProfileScreen from "./screens/RepProfileScreen";




const Tab = createBottomTabNavigator();

//Tabs menu 
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Twitter" component={TwitterLiveFeedScreen} />
      <Tab.Screen name="Elections" component={GeneralInfoScreen} />
      <Tab.Screen name="Local" component={MapScreen} />
      <Tab.Screen name="MPs" component={MPDatabaseScreen} />
    </Tab.Navigator>
  );
}




// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Map" component={MapScreen} />
//         <Stack.Screen name="RepProfile" component={RepProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }



export default function App() {
  
  return (
    <NavigationContainer>
      
      <MyTabs />
      
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonStyle: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});





