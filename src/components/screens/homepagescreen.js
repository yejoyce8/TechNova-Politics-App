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

            <View style = {{alignItems: 'center', marginTop: 100, marginBottom: 120}}>
            <Text style = {{fontFamily: 'Avenir-Heavy', fontSize: 30, color: '#071A5D'}}>Elections end in:</Text>
              <ImageBackground style = {{width:'100%', alignItems: 'center', paddingTop: 10, paddingBottom: 10}} source={require("../../../assets/darkbluebox.png")} >
                <CountDownTimer hoursMinSecs={hoursMinSecs} />
              </ImageBackground>


            </View>
            
          </View>
          

          <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 26}}>
              Upcoming Events:
            </Text>
          <View style={{ backgroundColor: "white", marginTop: 20, borderRadius: 10 }}>
            
            <ImageBackground style = {{width: '100%', color: 'white'}} resizeMode = 'cover'>
              <Button style={{color: '#071A5D'}} 
              title='Liberal Party events'
              onPress={() => Linking.openURL('https://event.liberal.ca/')}/>

              <Text style={{color: "white",
    backgroundColor: "#5968AB", padding: 15, fontSize: 16,fontFamily: 'Avenir-Light'}}>Tomorrow at 9 a.m. making an announcement and holding a media availability at Nafisa Middle Eastern Cuisine in Mississauga.
                    </Text>
                    
            </ImageBackground>
          </View>


          <View style={{ backgroundColor: "white", marginTop: 20, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Conversative Party events'
            onPress={() => Linking.openURL('https://www.conservative.ca/events/')}/>
            <Text style={{color: "white",
    backgroundColor: "#5968AB", padding: 15, fontSize: 16, fontFamily: 'Avenir-Light'}}>Thursday at 9:30 a.m. making an announcement and holding a media availability at the Glynmill Inn in Corner Brook, N.L.
  </Text>

          </View>



          <View style={{ backgroundColor: "white", marginTop: 20, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='NDP Party events'
            onPress={() => Linking.openURL('https://www.ontariondp.ca/events')}/>

            <Text style={{color: "white",
    backgroundColor: "#5968AB", padding: 15, fontSize: 16, fontFamily: 'Avenir-Light'}}> Tuesday at 9:30 a.m. making an announcement on health care and holding a media availability at the Valhalla Inn Hotel.
</Text>
          </View>

          <View style={{ backgroundColor: "white", marginTop: 20, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Bloc Québécois Party events'
            onPress={() => Linking.openURL('https://www.blocquebecois.org/')}/>

            <Text style={{color: "white",
    backgroundColor: "#5968AB", padding: 15, fontSize: 16, fontFamily: 'Avenir-Light'}}>Friday at 9:45 a.m. holding a press conference on the aluminum sector at the Citizen Square in Chicoutimi.
</Text>
          </View>

          <View style={{ backgroundColor: "white", marginTop: 20, borderRadius: 10 }}>
            <Button style={{color: 'blue'}} 
            title='Green Party events'
            onPress={() => Linking.openURL('https://www.greenparty.ca/en/events/all')}/>

            <Text style={{color: "white",
    backgroundColor: "#5968AB", padding: 15, fontSize: 16, fontFamily: 'Avenir-Light'}}>Wednesday at 11:45 a.m. delivering remarks at the Masjid Toronto mosque on Adelaide St.
</Text>
          </View>
          

        </View>

        </ImageBackground>
        

      </ScrollView>

    </SafeAreaView>

      
  );
}



