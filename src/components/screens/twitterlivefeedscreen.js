import * as React from 'react';
import { Text, View, ActivityIndicator, WebView, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
// const { View, WebView, StyleSheet, ActivityIndicator } = ReactNative

const TwitterFeed = {uri:'https://cdn.discordapp.com/attachments/880081852558372926/881405690139250769/twitterfeedwmp.png'}
export default function TwitterLiveFeedScreen() {
  return (
    <SafeAreaView>
      <ScrollView>

   
    <ImageBackground style = {{width: "100%", height: 2600}} source ={TwitterFeed} resizeMode = 'cover'>

      <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
        
          

        
      </View>
      
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}
