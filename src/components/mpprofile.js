import * as React from 'react';
import { Text, View, FlatList,Linking } from 'react-native';

export default function MpProfile (props){
    return(
        <View style={{backgroundColor: "white", marginTop: 10, borderRadius: 10, padding: 20 }}>
            <Text style={{fontFamily: 'Copperplate', fontSize: 25}}>{props.name}</Text>
            <Text>{props.party}</Text>
            <Text onPress={()=>Linking.openURL(props.website)}>Website</Text>
        </View>
    )
}