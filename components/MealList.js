import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

export default function MealList({ data, navigation }) {
  const favMeals = useSelector((state) => state.meals.favMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = favMeals.some((meal) => meal.id === itemData.item.id);
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite: isFavorite,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
