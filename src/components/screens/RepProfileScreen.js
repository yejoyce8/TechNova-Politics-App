import React from "react";
import { Text, View, Image, StyleSheet,SafeAreaView,Button, ImageBackground} from "react-native";

import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

export default function RepProfileScreen({ route, navigation }) {
  const profile = route.params.profile;
  //console.log({ profile });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ImageBackground source={require("../../../assets/bluebox.png")} resizeMode="cover" style={{width: '100%', height: 200}}>
      <Image 
        style={styles.image}
        source={{ uri: profile.photo_url }}
        defaultSource={require("../../../assets/profile.jpg")}
      />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      
      
      <Text style={styles.party_name}>{profile.party_name}</Text>
              
      
      <Text style={styles.district_name}>{profile.district_name}</Text>
      
      <Text style={styles.elected_office}>{profile.elected_office}</Text>

      <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 26, alignSelf: 'center', marginTop: 150}}>Twitter Feed</Text>
      
      </ImageBackground>

      {/* <Text style={styles.paragraph}>
        {JSON.stringify(profile, undefined, 2)}
      </Text> */}

      <View>
        <ImageBackground style={{width:'100%', height:1300}}source={require("../../../assets/chaggerfeed.jpg")} resizeMode="cover">

        </ImageBackground>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  backgroundimage: {
    flex: 1,
    justifyContent: "center"
  },
  paragraph: {
    fontSize: 12,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    borderRadius: 1000000,
    backgroundColor: "#605962",
    left:2,
    top:20,
    alignSelf: 'flex-end',
    marginTop: 5,
    //marginLeft:35,
    position: 'absolute',
    
  },
  name: {
    fontSize: 23,
    fontWeight: "900",
    fontFamily: 'Avenir-Heavy',
    top:40,
    right:18,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    
    borderColor:"white",
    borderWidth:10,
    borderRadius:5
  },

  party_name: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:90,
    right:156,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    color: "red"
  },

  district_name: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:90,
    right:25,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    //color: "red"
  },
  
  elected_office: {
    fontSize: 16,
    fontWeight: "200",
    fontFamily: 'Avenir-Light',
    top:20,
    right:188,
    alignSelf: 'flex-end',
    marginTop: 5,
    position: 'absolute',
    //color: "red"
  },
});
