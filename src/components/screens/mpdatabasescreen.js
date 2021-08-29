import * as React from 'react';
import { Text, View, FlatList, TextInput, Button, ImageBackground } from 'react-native';
import MpProfile from '../mpprofile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

function MPHomePage({navigation}){
  const [searchValue, onChangeText] = useState();
  return(
    <View>
      <ImageBackground style={{width:'100%', height:500}} source={require("../../../assets/homepagebackground1.png")}>
        <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 26, alignSelf:'center', marginTop: 40}}>Find Your Local MP</Text>
      <SearchBarInput
      onChangeText={text => onChangeText(text)}
      value={searchValue}
      />
      <Button title='Enter' style={{borderWidth:1, padding: 10, alignSelf: 'center', marginTop: 40}}
      onPress={() => navigation.navigate(searchValue)}/>
      </ImageBackground>
    </View>
  )
}  

function SearchBarInput(props){
  return(
    <View>

      <TextInput
      {...props}
      editable
      maxLength={40}
      style={{height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10, marginTop: 25}}
    
      placeholder="Search for city or region..."
      />


    </View>
  )
}



export default function MPDatabaseScreen(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Search Engine" component={MPHomePage} />
      <Stack.Screen name="Waterloo" component={MPWaterlooScreen} />
      <Stack.Screen name="Kitchener centre" component={MPKC} />
      <Stack.Screen name="Kitchener conestoga" component={MPKCon} />
      <Stack.Screen name="Kitchener south-hespeler" component={MPKSH} />
      <Stack.Screen name="Cambridge" component={MPCambridge} />
      <Stack.Screen name="Guelph" component={MPGuelph} />
      <Stack.Screen name="Brantford brant" component={MPBB} />
      <Stack.Screen name="Wellington halton hills" component={MPWHH} />
      <Stack.Screen name="Perth wellington" component={MPPW} />
      <Stack.Screen name="Oxford" component={MPOxford} />
      <Stack.Screen name="Huron bruce" component={MPHB} />
    </Stack.Navigator>
  )
}


const waterlooObj = 
  [{
    name: "Bardish Chagger",
    party: "Liberal - incumbent",
    website: "https://bardishchagger.liberal.ca/"
  }, {
    name: "Meghan Shannon",
    party: "Conservative",
    website: "https://meghanshannon.com/"
  }, {
    name: "Jonathan Cassels",
    party: "NDP",
    website: "https://waterloo.ndp.ca/"
  }, {
    name: "Patrick Doucette",
    party: "People's Party",
    website: "https://www.facebook.com/patrick.forcanada"
  }]




  function MPWaterlooScreen({navigation, route}) {

    return (
      <ScrollView>
        <ImageBackground style={{width:'100%', height:'100%'}} source={require("../../../assets/bluebox.png")}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
        <Text style = {{marginTop: 40, fontFamily:'Avenir-Light', fontSize: 16}}>MPs in 'WATERLOO' region:</Text>
        <MpProfile name={waterlooObj[0].name} party={waterlooObj[0].party} website={waterlooObj[0].website} />
        <MpProfile name={waterlooObj[1].name} party={waterlooObj[1].party} website={waterlooObj[1].website} />
        <MpProfile name={waterlooObj[2].name} party={waterlooObj[2].party} website={waterlooObj[2].website} />
        <MpProfile name={waterlooObj[3].name} party={waterlooObj[3].party} website={waterlooObj[3].website} />
        </View>
        </ImageBackground>
      </ScrollView>
      
      
    );
  }
  
  function MPKC({navigation, route}){
    return (
      <ScrollView>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MPs in 'KITCHENER CENTER' region</Text>
        <MpProfile name={MPKCObj[0].name} party={MPKCObj[0].party} website={MPKCObj[0].website} />
        <MpProfile name={MPKCObj[1].name} party={MPKCObj[1].party} website={MPKCObj[1].website} />
        <MpProfile name={MPKCObj[2].name} party={MPKCObj[2].party} website={MPKCObj[2].website} />
        <MpProfile name={MPKCObj[3].name} party={MPKCObj[3].party} website={MPKCObj[3].website} />
        <MpProfile name={MPKCObj[5].name} party={MPKCObj[5].party} website={MPKCObj[5].website} />
      </View>

      </ScrollView>
      
     
    );
  }
  
  function MPKCon({navigation, route}){
    return(
      <ScrollView>
         <View>
        <Text>MPs in 'KITCHENER CONESTOGA' region</Text>
        <MpProfile name={MPKConObj[0].name} party={MPKConObj[0].party} website={MPKConObj[0].website} />
        <MpProfile name={MPKConObj[1].name} party={MPKConObj[1].party} website={MPKConObj[1].website} />
        <MpProfile name={MPKConObj[2].name} party={MPKConObj[2].party} website={MPKConObj[2].website} />
        
  
      </View>

      </ScrollView>
     
    )
  }
  
  function MPKSH({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'KITCHENER SOUTH-HESPELER' region</Text>
        <MpProfile name={MPKSHObj[0].name} party={MPKSHObj[0].party} website={MPKSHObj[0].website} />
        <MpProfile name={MPKSHObj[1].name} party={MPKSHObj[1].party} website={MPKSHObj[1].website} />
        <MpProfile name={MPKSHObj[2].name} party={MPKSHObj[2].party} website={MPKSHObj[2].website} />
        <MpProfile name={MPKSHObj[3].name} party={MPKSHObj[3].party} website={MPKSHObj[3].website} />
        <MpProfile name={MPKSHObj[4].name} party={MPKSHObj[4].party} website={MPKSHObj[4].website} />
      </View>
      </ScrollView>
      
    )
  }
  
  function MPCambridge({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'CAMBRIDGE' region</Text>
        <MpProfile name={MPCambridgeObj[0].name} party={MPCambridgeObj[0].party} website={MPCambridgeObj[0].website} />
        <MpProfile name={MPCambridgeObj[1].name} party={MPCambridgeObj[1].party} website={MPCambridgeObj[1].website} />
        <MpProfile name={MPCambridgeObj[2].name} party={MPCambridgeObj[2].party} website={MPCambridgeObj[2].website} />
        <MpProfile name={MPCambridgeObj[3].name} party={MPCambridgeObj[3].party} website={MPCambridgeObj[3].website} />
        <MpProfile name={MPCambridgeObj[4].name} party={MPCambridgeObj[4].party} website={MPCambridgeObj[4].website} />
  
      </View>

      </ScrollView>
      
    )
  }
  
  function MPGuelph({navigation, route}){
    return(
      <ScrollView>
         <View>
        <Text>MPs in 'GUELPH' region</Text>
        <MpProfile name={MPGuelphObj[0].name} party={MPGuelphObj[0].party} website={MPGuelphObj[0].website} />
        <MpProfile name={MPGuelphObj[1].name} party={MPGuelphObj[1].party} website={MPGuelphObj[1].website} />
        <MpProfile name={MPGuelphObj[2].name} party={MPGuelphObj[2].party} website={MPGuelphObj[2].website} />
        <MpProfile name={MPGuelphObj[3].name} party={MPGuelphObj[3].party} website={MPGuelphObj[3].website} />
        <MpProfile name={MPGuelphObj[4].name} party={MPGuelphObj[4].party} website={MPGuelphObj[4].website} />
  
      </View>

      </ScrollView>
     
    )
  }
  
  function MPBB({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'BRANTFORD-BRANT' region</Text>
        <MpProfile name={MPBBObj[0].name} party={MPBBObj[0].party} website={MPBBObj[0].website} />
        <MpProfile name={MPBBObj[1].name} party={MPBBObj[1].party} website={MPBBObj[1].website} />
        <MpProfile name={MPBBObj[2].name} party={MPBBObj[2].party} website={MPBBObj[2].website} />
        <MpProfile name={MPBBObj[3].name} party={MPBBObj[3].party} website={MPBBObj[3].website} />
  
      </View>

      </ScrollView>
      
    )
  }
  
  function MPWHH({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'WELLINGTON-HALTON HILLS' region</Text>
        <MpProfile name={MPWHHObj[0].name} party={MPWHHObj[0].party} website={MPWHHObj[0].website} />
        <MpProfile name={MPWHHObj[1].name} party={MPWHHObj[1].party} website={MPWHHObj[1].website} />
        <MpProfile name={MPWHHObj[2].name} party={MPWHHObj[2].party} website={MPWHHObj[2].website} />
        <MpProfile name={MPWHHObj[3].name} party={MPWHHObj[3].party} website={MPWHHObj[3].website} />
  
      </View>
      </ScrollView>

      
    )
  }
  
  function MPPW({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'PERTH-WELLINGTON' region</Text>
        <MpProfile name={MPPWObj[0].name} party={MPPWObj[0].party} website={MPPWObj[0].website} />
        <MpProfile name={MPPWObj[1].name} party={MPPWObj[1].party} website={MPPWObj[1].website} />
        <MpProfile name={MPPWObj[2].name} party={MPPWObj[2].party} website={MPPWObj[2].website} />
        <MpProfile name={MPPWObj[3].name} party={MPPWObj[3].party} website={MPPWObj[3].website} />
  
      </View>

      </ScrollView>
      
    )
  }
  
  function MPOxford({navigation, route}){
    return(
      <ScrollView>
         <View>
        <Text>MPs in 'OXFORD' region</Text>
       <MpProfile name={MPOxfordObj[0].name} party={MPOxfordObj[0].party} website={MPOxfordObj[0].website} />
       <MpProfile name={MPOxfordObj[1].name} party={MPOxfordObj[1].party} website={MPOxfordObj[1].website} />
       <MpProfile name={MPOxfordObj[2].name} party={MPOxfordObj[2].party} website={MPOxfordObj[2].website} />
       <MpProfile name={MPOxfordObj[3].name} party={MPOxfordObj[3].party} website={MPOxfordObj[3].website} />
  
      </View>

      </ScrollView>
     
    )
  }
  
  function MPHB({navigation, route}){
    return(
      <ScrollView>
        <View>
        <Text>MPs in 'HURON-BRUCE' region</Text>
        <MpProfile name={MPHBObj[0].name} party={MPHBObj[0].party} website={MPHBObj[0].website} />
        <MpProfile name={MPHBObj[1].name} party={MPHBObj[1].party} website={MPHBObj[1].website} />
        <MpProfile name={MPHBObj[2].name} party={MPHBObj[2].party} website={MPHBObj[2].website} />
        <MpProfile name={MPHBObj[3].name} party={MPHBObj[3].party} website={MPHBObj[3].website} />
  
      </View>

      </ScrollView>
      
    )
  }



const MPKCObj = [{
  "name": "Raj Saini",
  "party": "Liberal - incumbent",
  "website": "https://rajsaini.liberal.ca/"
}, {
  "name": "Mary Henein Thorn",
  "party": "Conservative",
  "website": "https://maryheneinthorn.com/"
}, {
  "name": "Beisan Zubi",
  "party": "NDP",
  "website": "https://www.beisanzubi.ca/"
}, {
  "name": "Mike Morrice",
  "party": "Green Party",
  "website": "https://mikemorrice.ca/"
}, {
  "name": "Diane Boskovic",
  "party": "People's Party of Canada",
  "website": "https://kwcppc.ca/our-ridings/kitchener-centre/"
}]

const MPKConObj = [{
  "name": "Tim Louis",
  "party": "Liberal - incumbent",
  "website": "https://timlouis.liberal.ca/"
}, {
  "name": "Carlene Hawley",
  "party": "Conservative",
  "website": "https://carlenehawley.ca/"
}, {
  "name": "Kevin Dupuis",
  "party": "People's Party",
  "website": "https://kevindupuis.com/"
}]

const MPKSHObj = [{
  "name": "Valerie Bradford",
  "party": "Liberal",
  "website": "https://valeriebradford.liberal.ca/"
}, {
  "name": "Tyler Calver",
  "party": "Conservative",
  "website": "https://www.tylercalver.ca/"
}, {
  "name": "Suresh Arangath",
  "party": "NDP",
  "website": "https://kitchenersouthhespeler.ndp.ca/"
}, {
  "name": "Melissa Baumgaertner",
  "party": "People's Party",
  "website": "https://www.peoplespartyofcanada.ca/melissa_baumgaertner"
}, {
  "name": "Gabe Rose",
  "party": "Green Party",
  "website": "https://www.kshgreens.ca/mp-candidate-cdn"
}]

const MPCambridgeObj = [{
  "name": "Bryan May",
  "party": "Liberal - incumbent",
  "website": "https://liberal.ca/ridings/35016/"
}, {
  "name": "Connie Cody",
  "party": "Conservative",
  "website": "https://conniecody.ca/"
}, {
  "name": "Lorne Bruce",
  "party": "NDP",
  "website": "https://cambridge.ndp.ca/"
}, {
  "name": "Michelle Braniff",
  "party": "Green",
  "website": "https://www.greenparty.ca/en/riding/2013-35016"
}, {
  "name": "Maggie Segounis",
  "party": "People's Party",
  "website": "https://www.peoplespartyofcanada.ca/maggie_segounis"
}]

const MPGuelphObj = [{
  "name": "Lloyd Longfield",
  "party": "Liberal - incumbent",
  "website": "https://liberal.ca/ridings/35032/"
}, {
  "name": "Ashish Sachan",
  "party": "Conservative",
  "website": "https://ashishsachan.ca/"
}, {
  "name": "Aisha Jahangir",
  "party": "NDP",
  "website": "https://aishajahangir.ndp.ca/"
}, {
  "name": "Michelle Bowman",
  "party": "Green Party",
  "website": "https://www.facebook.com/4Guelph/"
}, {
  "name": "Joshua Leier",
  "party": "People's Party",
  "website": "https://www.peoplespartyofcanada.ca/joshua_leier"
}]

const MPBBObj = [{
  "name": "Alison Macdonald",
  "party": "Liberal",
  "website": "https://liberal.ca/ridings/35013/"
}, {
  "name": "Larry Brock",
  "party": "Conservative",
  "website": "https://larrybrock.ca/"
}, {
  "name": "Adrienne Roberts",
  "party": "NDP",
  "website": "http://adrienneroberts.ndp.ca"
}, {
  "name": "Cole Squire",
  "party": "People's Party",
  "website": "https://www.peoplespartyofcanada.ca/cole_squire"
}]

const MPWHHObj =[{
  "name": "Melanie Lang",
  "party": "Liberal",
  "website": "https://melanielang.liberal.ca/"
}, {
  "name": "Michael Chong",
  "party": "Conservative - incumbent",
  "website": "http://michaelchong.ca"
}, {
  "name": "Ran Zhu",
  "party": "Green Party",
  "website": "https://www.whhgreens.com/"
}, {
  "name": "Sylvain Carle",
  "party": "People's Party",
  "website": "https://whh-ppc-eda.square.site/our-candidate"
}]

const MPPWObj =  [{
  "name": "Brendan Knight ",
  "party": "Liberal",
  "website": "http://brendanknight.liberal.ca"
}, {
  "name": "John Nater",
  "party": "Conservative - incumbent",
  "website": "https://www.perthwellington.ca/"
}, {
  "name": "Kevin Kruchkywich",
  "party": "NDP",
  "website": "https://perthwellington.ndp.ca/?_gl=1*j82r2j*_ga*NzQ4NzY0NjQyLjE2MjkyMTczNzc.*_ga_97QLYMLC56*MTYyOTk4NDA1MS4zLjEuMTYyOTk4NDU0MC4w"
}, {
  "name": "Wayne Baker",
  "party": "People's Party",
  "website": "https://www.peoplespartyofcanada.ca/wayne_baker"
}]

const MPOxfordObj = [{
  "name": "Elizabeth Quinto",
  "party": "Liberal",
  "website": "https://elizabethquinto.liberal.ca/"
}, {
  "name": "Dave Mackenzie",
  "party": "Conservative - incumbent",
  "website": "https://davemackenzie.ca/"
}, {
  "name": "Matthew Chambers",
  "party": "NDP",
  "website": "https://twitter.com/MatthewNewDem"
}, {
  "name": "Wendy Martin",
  "party": "People's Party",
  "website": "https://www.facebook.com/wendymartinppc/"
}]

const MPHBObj = [{
  "name": "James Rice",
  "party": "Liberal",
  "website": "https://jamesrice.liberal.ca/"
}, {
  "name": "Ben Lobb",
  "party": "Conservative - incumbent",
  "website": "http://www.benlobb.com/"
}, {
  "name": "Jack Stecho",
  "party": "People's Party",
  "website": "https://twitter.com/jackstechoppc?lang=en"
}, {
  "name": "Justin L. Smith",
  "party": "Independent",
  "website": "http://www.justinlsmith.ca"
}]
