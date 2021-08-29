import React, { useState, useEffect } from "react";

import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView from "react-native-maps";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepProfileScreen from "./RepProfileScreen";


const Stack = createNativeStackNavigator();

export default function LocationServiceScreen() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Map" component={MapScreen} />
       <Stack.Screen name="RepProfile" component={RepProfileScreen} />
    </Stack.Navigator>
  );
}



function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionsGranted, setPermissionsGranted] = useState(false); // we use the useState functionality to 'store' persistent data, like whether we've been granted permissions to use the device's location
  const [mapRegion, setMapRegion] = useState(null);
  const [reps, setReps] = useState([]);

  useEffect(() => {
    if (location) {
      (async () => {
        const res = await fetch(
          `https://represent.opennorth.ca/representatives/?point=${location.coords.latitude},${location.coords.longitude}`
        );
        const data = await res.json();

        let repsWithLocation = [];
        for (const rep of data.objects) {
          for (const office of rep.offices) {
            if (office.postal) {
              rep.location = office.postal;
            }
          }
          if (rep.location) {
            const locationParts = rep.location.split("\n");
            rep.location = [
              locationParts[1],
              locationParts[locationParts.length - 1],
            ].join(", ");
            rep.location = rep.location.substring(
              0,
              rep.location.length - 8
            );
            repsWithLocation.push(rep);
          }
        }

        let repsWithCoords = [];
        for (const rep of repsWithLocation) {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
              rep.location
            )}&format=json`
          );
          const places = await res.json();
          if (places.length > 0) {
            rep.coords = {
              latitude: places[0].lat,
              longitude: places[0].lon,
            };
            repsWithCoords.push(rep);
          }
        }
        setReps(repsWithCoords);
      })();
    } else {
      setReps([]);
    }
  }, [location]);

  // we define the function to be used when the button is clicked here. we can also inline it inside the button
  const requestPermissions = async () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
      );
      return;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    setPermissionsGranted(true); // store this for use later
  };

  // use effect is a function that is run whenever this component renders or re-renders
  // react works by causing a re-render whenever relevant state has changed.
  // we can use the second argument of useEffect to tell react when we want this function to run
  // in this case, we only want the function to run when the 'permissionsGranted' variable is updated
  useEffect(() => {
    (async () => {
      if (!permissionsGranted) return;
      const currentLocation = await Location.getCurrentPositionAsync({});

      // TODO: Use currentLocation instead of hard-coded Waterloo location.
      setLocation({
        coords: {
          latitude: "43.47042992775547",
          longitude: "-80.53625834458663",
        },
      }); // store this information for use in later renders
    })();
  }, [permissionsGranted]); // react will only run this function when permissionsGranted is updated
  // to runt his function on other conditions, change what's inside the [],
  // or leave it empty and it will run when the component is mounted.

  let text = "Retrieving Location..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    //text = JSON.stringify(location);
    text = "Your nearest Election Office is 5.9km away";
  }

  return (
    <View style={styles.container}>
      <View style={styles.floatingBox}>
        <TouchableOpacity
          style={{ marginBottom: 25, padding: 5 }}
          onPress={async () => {
            // need to make sure to await
            await requestPermissions();
          }}
        >
          <Text adjustsFontSizeToFit={true} numberOfLines={1}>
            Click here to find My Local MP and nearest Election Office
          </Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
      <MapView
        style={styles.mapStyle}
        region={mapRegion}
        onRegionChange={setMapRegion}
      >
        {location && (
          <>
            <MapView.Marker coordinate={location.coords} title="  Me " />
            <MapView.Marker
              coordinate={{
                latitude: 43.51132655075163,
                longitude: -80.52223644643036,
              }}
              title="Elections Canada"
              description="Open 9:00am - 9:00pm"
              pinColor="rebeccapurple"
            />
          </>
        )}
        {reps.map((rep) => {
          return (
            <MapView.Marker
              //key={rep.email}
              coordinate={rep.coords}
              title={rep.name}
              description={rep.party_name}
              pinColor="green"
              onPress={() => {
                navigation.navigate('RepProfile', {
                  profile: rep,
                });
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    //padding: 20,
  },
  paragraph: {
    fontSize: 12,
    textAlign: "center",
  },
  mapStyle: { width: "100%", flex: 1 },
  floatingBox: { backgroundColor: "white" },
});
