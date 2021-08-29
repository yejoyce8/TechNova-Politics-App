import * as React from 'react';
import { StyleSheet, Text, View, Linking, Button, SafeAreaView, ScrollView, ImageBackground, Image} from 'react-native';
import CountDownTimer from '../countdowntimer'


const liberalpartylogo = {uri: 'https://s31184.pcdn.co/wp-content/uploads/sites/292/2019/11/liberal-OG-1024x538.png'}


//header:
// style={{fontFamily: 'Avenir-Heavy', fontSize: 26}}

//dark blue: 
// color: '#071A5D'

//normal:
// style={{fontFamily:'Avenir-Light', fontSize: 16}}

export default function HomeScreen() {
  
  const hoursMinSecs = {hours:23, minutes: 20, seconds: 40}

  
  return (
    <SafeAreaView> 
      <ScrollView>
        <ImageBackground style={{width:'100%'}} source={require("../../../assets/homepagebackground2.png")}>
        <View style={{ flexDirection: "column", flex: 1,
        padding: 20}}>
          <View style = {{borderRadius: 10}}>
            <Text style={{alignSelf:"center", fontFamily:'Avenir-Light', fontSize: 16}}>
              APP NAME
            </Text>

            <View style = {{alignItems: 'center', marginTop: 100, marginBottom: 100}}>
            <Text style = {{fontFamily: 'Avenir-Heavy', fontSize: 30, color: '#071A5D'}}>Elections end in:</Text>
              <ImageBackground style = {{width:'100%', alignItems: 'center', paddingTop: 10, paddingBottom: 10}} source={require("../../../assets/darkbluebox.png")} >
                <CountDownTimer hoursMinSecs={hoursMinSecs} />
              </ImageBackground>


            </View>
            
          </View>
          

          <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 26}}>
              Upcoming Events:
            </Text>
          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            
            <ImageBackground style = {{width: '100%'}} source ={require("../../../assets/bluebox.png")} resizeMode = 'cover'>
              <Button style={{color: 'blue'}} 
              title='Liberal Party events'
              onPress={() => Linking.openURL('http://google.com')}/>

              <Text style={{color: "white",
    backgroundColor: "#000000c0", padding: 10}}>9 a.m. making an announcement and holding a media availability at Nafisa Middle Eastern Cuisine in Mississauga.
                    5 p.m. meeting with supporters at the Hampton Inn in Bolton, Ont.</Text>
            </ImageBackground>
    
              

          </View>

          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Conversative Party events'
            onPress={() => Linking.openURL('http://google.com')}/>

            <Text>9:30 a.m. making an announcement and holding a media availability at the Glynmill Inn in Corner Brook, N.L.
    5 p.m. attending an event with supporters at the North Sydney Firefighters Club in North Sydney, N.S.</Text>
          </View>
          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='NDP Party events'
            onPress={() => Linking.openURL('http://google.com')}/>

            <Text>9:30 a.m. making an announcement on health care and holding a media availability at the Valhalla Inn Hotel.
2 p.m. meeting with regional First Nations leaders at the Valhalla Inn Hotel.
3:30 p.m. visiting a local bakery.
4 p.m. attending the campaign kick-off for the NDP candidate in Thunder Bay-Rainy River.</Text>
          </View>

          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Bloc Québécois Party events'
            onPress={() => Linking.openURL('http://google.com')}/>

            <Text> 9:45 a.m. holding a press conference on the aluminum sector at the Citizen Square in Chicoutimi.
2:30 p.m. holding a press conference on green energy projects at the Port of Saguenay.</Text>
          </View>

          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Green Party events'
            onPress={() => Linking.openURL('http://google.com')}/>

            <Text>11:45 a.m. delivering remarks at the Masjid Toronto mosque on Adelaide St.
2:30 p.m. holding a press conference in St. James Park to address the situation in Afghanistan.
5 p.m. attending community events in the Regent Park neighbourhood.</Text>
          </View>
          

        </View>

        </ImageBackground>
        

      </ScrollView>

    </SafeAreaView>

      
  );
}



