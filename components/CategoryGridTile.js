import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";

export default function CategoryGridTile({ itemData, onSelect }) {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}>
      <TouchableComponent
        style={{ flex: 1 }}
        activeOpacity={0.8}
        onPress={onSelect}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: itemData.item.imageUrl,
          }}
        >
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <BodyText style={styles.text} numberOfLines={2}>
                {itemData.item.title}
              </BodyText>
            </View>
          </View>
        </ImageBackground>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 23
        ? "hidden"
        : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: Colors.accentColor,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "right",
    color: "white",
  },
});
