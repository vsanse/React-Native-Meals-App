import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import BodyText from "../components/BodyText";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen({ navigation }) {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const catId = navigation.getParam("categoryId");

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <>
      {!!displayedMeals.length ? (
        <MealList data={displayedMeals} navigation={navigation} />
      ) : (
        <View style={styles.screen}>
          <BodyText>No meals found. maybe check you filters?</BodyText>
        </View>
      )}
    </>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
