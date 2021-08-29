import * as React from 'react';
import { Text, View, FlatList,Linking } from 'react-native';

export default function MpProfile (props){
    return(
        <View style={{backgroundColor: "white", marginTop: 10, borderRadius: 10, padding: 20 }}>
            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 26, color: '#071A5D'}}>{props.name}</Text>
            <Text style={{fontFamily: 'Avenir-Light', fontSize:18, color: '#071A5D'}}>{props.party}</Text>
            <Text style={{fontFamily: 'Avenir-Heavy', color: '#0777f8' }}onPress={()=>Linking.openURL(props.website)}>Website</Text>
        </View>
    )
}