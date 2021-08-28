import * as React from 'react';
import { StyleSheet, Text, View, Linking, Button, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import CountDownTimer from '../countdowntimer'

const imageexpo = { uri: "https://reactjs.org/logo-og.png" };

const liberalpartylogo = {uri: 'https://s31184.pcdn.co/wp-content/uploads/sites/292/2019/11/liberal-OG-1024x538.png'}



export default function HomeScreen() {
  
  const hoursMinSecs = {hours:23, minutes: 20, seconds: 40}
  

  return (
    <SafeAreaView> 
      <ScrollView>
        <View style={{ flexDirection: "column", flex: 1,
        padding: 20}}>
          <View style = {{borderRadius: 10}}>
            <Text style = {{padding: 10, fontSize: '30'}}>Welcome to the home page</Text>

            <View style = {{alignItems: 'center'}}>
              
               <Text style = {{fontFamily: 'Copperplate', fontSize: 20}}>Elections end in:</Text>
              <CountDownTimer hoursMinSecs={hoursMinSecs} />
             

            </View>
            
          </View>
          

          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <ImageBackground style = {{width: '100%', opacity: 0.3}} source ={liberalpartylogo} resizeMode = 'cover'>
              <Button style={{color: 'blue'}} 
              title='Liberal Party events'
              onPress={() => Linking.openURL('http://google.com')}/>

              <Text >9 a.m. making an announcement and holding a media availability at Nafisa Middle Eastern                         Cuisine in Mississauga.
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

      </ScrollView>

    </SafeAreaView>

      
  );
}



