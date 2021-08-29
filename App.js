import React, { useState, useEffect } from "react";

import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from "./screens/MapScreen";
import RepProfileScreen from "./screens/RepProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="RepProfile" component={RepProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}