import React from "react";
import { Text, View, Image, StyleSheet,SafeAreaView,TouchableOpacity } from "react-native";

import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export default function RepProfileScreen({ route, navigation }) {
  const profile = route.params.profile;
  console.log({ profile });
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: profile.photo_url }}
        defaultSource={require("../assets/profile.jpg")}
      />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
     
      <Text style={styles.party_name}>{profile.party_name}</Text>
      <Text style={styles.district_name}>{profile.district_name}</Text>
      <Text style={styles.representative_set_name}>{profile.representative_set_name}</Text>
      <Text style={styles.elected_office}>{profile.elected_office}</Text>
      {/* <Text style={styles.paragraph}>
        {JSON.stringify(profile, undefined, 2)}
      </Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 12,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    borderRadius: 1000000,
    backgroundColor: "darkgray",
    left:2,
    top:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    //marginLeft:35,
    position: 'absolute',
    
  },
  name: {
    fontSize: 26,
    fontWeight: "900",
    fontFamily: 'Avenir-Heavy',
    top:30,
    right:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
  },

  party_name: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:30,
    right:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    color: "red"
  },

  district_name: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:30,
    right:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    //color: "red"
  },
  representative_set_name: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:30,
    right:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    //color: "red"
  },
  elected_office: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:30,
    right:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    //color: "red"
  },
});
