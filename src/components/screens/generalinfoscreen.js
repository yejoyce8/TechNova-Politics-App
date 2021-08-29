import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function GeneralInfoScreen() {
  return (

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="General Info Home" component={GeneralInfoHome} />
                <Stack.Screen name="Ways to Vote" component={WaysToVoteScreen} />
            </Stack.Navigator>
    
  );
}

function GeneralInfoHome({navigation}){
    return(
        <SafeAreaView>
            <ScrollView>
            <View>
            <View style = {{alignItems: 'center'}}>
            <Text style={{fontSize:20, padding: 20}}> Elections Info </Text>
            </View>
        
            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Ways To Vote' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Students' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Jobs' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Accessible Voting' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Canadians Abroad' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Seniors Residences and Long-Term Care Facilities' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='ID To Vote' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='Voter Information Card' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>

            <View style = {{backgroundColor: "white", margin: 10, borderRadius: 10}}>
            <Button title='FAQs' onPress={() => navigation.navigate('Ways to Vote')}/>
            
            </View>
        </View>
                
            </ScrollView>
        </SafeAreaView>
       

        
    )
   
}

//ways to vote
function WaysToVoteScreen({navigation, route}){
    return(
        <SafeAreaView>
            <ScrollView>
            <View>
                <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
                    <Text style={{fontSize: 20, padding: 10, alignSelf:'center'}}>Vote on Election Day </Text>
                    <Text style={{padding: 10}}>Vote at your assigned polling station on election day, Monday, September 20, 2021. Polls will be open for 12 hours (hours vary by time zone).</Text>
                </View>

                <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
                    <Text style={{fontSize: 20, padding: 10, alignSelf:'center'}}>Vote on advance polling days </Text>
                    <Text style={{padding: 10}}>Vote at your assigned polling station from 9:00 a.m. to 9:00 p.m. on: Friday, September 10; Saturday, September 11; Sunday, September 12; Monday, September 13.</Text>
                    <Text style={{padding: 10, color: 'rgb(10,122,255)'}} onPress={()=> Linking.openURL('https://www.elections.ca/content2.aspx?section=faq&document=faqvot&lang=e#vot18')}>Know the difference between federal and provincial voting.</Text>
                </View>

                <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
                    <Text style={{fontSize: 20, padding: 10, alignSelf:'center'}}>Vote by mail </Text>
                    <Text style={{padding: 10}}>To vote by mail, apply online or at any Elections Canada office across Canada. Don't wait – deadlines apply. You must apply before Tuesday, September 14, 6:00 p.m. You will vote using the special ballot process.

Once you have applied to vote by special ballot, you can't change your mind and vote at advance polls or on election day.</Text>
                    <Text style={{padding: 10, color: 'rgb(10,122,255)'}} onPress={()=> Linking.openURL('https://www.elections.ca/content2.aspx?section=vote&dir=app&document=index&lang=e')}>Application</Text>
                </View>

                <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
                    <Text style={{fontSize: 20, padding: 10, alignSelf:'center'}}>Vote at any Elections Canada office</Text>
                    <Text style={{padding: 10}}>There are over 500 Elections Canada offices open across Canada. Vote at any one of them before Tuesday, September 14, 6:00 p.m.

You will vote using the special ballot process.

</Text>
<Text style={{padding: 10}}>Our offices are open seven days a week:

Monday to Friday: 9:00 a.m. to 9:00 p.m.
Saturday: 9:00 a.m. to 6:00 p.m.
Sunday: noon to 4:00 p.m.</Text>
                    <Text style={{padding: 10, color: 'rgb(10,122,255)'}} onPress={()=> Linking.openURL('https://www.elections.ca/content2.aspx?section=vote&dir=spe&document=index&lang=e')}>You will vote using the special ballot process.</Text>
                    
                </View>


                <Button title='Home' onPress={() => navigation.goBack()}/>
            </View>

            </ScrollView>

        </SafeAreaView>
        
    )
}
