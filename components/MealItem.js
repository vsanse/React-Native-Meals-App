import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import BodyText from "./BodyText";

export default function MealItem({ meal, bg, onSelectMeal }) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{
                uri: meal.imageUrl,
              }}
            >
              <View style={styles.titleContainer}>
                <BodyText style={styles.title} numberOfLines={1}>
                  {meal.title}
                </BodyText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <BodyText style={styles.footerText}>{meal.duration}m</BodyText>
            <BodyText style={styles.footerText}>
              {meal.complexity.toUpperCase()}
            </BodyText>
            <BodyText style={styles.footerText}>
              {meal.affordability.toUpperCase()}
            </BodyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#f5f5f5",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  footerText: {
    // fontFamily: "open-sans-bold",
  },
});
