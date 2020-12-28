import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <MealsNavigator />;
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
