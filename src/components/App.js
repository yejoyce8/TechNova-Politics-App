import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import styles from './stylestest.js'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    //wrap everything around the navigationcontainer
    // <NavigationContainer>
      <View style={styles.container}>
        <Text style={[{color: 'white'},{backgroundColor: 'black'}]}>ONE</Text>
        <Text style={{color: 'blue'}}>TWO</Text>
        <Text style={{color: 'blue'}}>THREE</Text>
        
        <StatusBar style="auto" />
      </View>

      // <MyTabs />
      
    // </NavigationContainer>
    
    
  );
}





//styles
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 80,
    paddingHorizontal: 30
    

  },
});



