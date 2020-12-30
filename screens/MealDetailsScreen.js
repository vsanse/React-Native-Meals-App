import React, { useCallback, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import BodyText from "../components/BodyText";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <BodyText>{props.children}</BodyText>
    </View>
  );
};

export default function MealDetailsScreen({ navigation }) {
  const mealId = navigation.getParam("mealId");
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state.meals.meals);
  const isFavorite = useSelector((state) =>
    state.meals.favMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFavorite: isFavorite });
  }, [isFavorite]);
  return (
    <ScrollView style={styles.screen}>
      <Image
        style={styles.image}
        source={{
          uri: selectedMeal.imageUrl,
        }}
      />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <BodyText style={styles.footerText}>{selectedMeal.duration}m</BodyText>
        <BodyText style={styles.footerText}>
          {selectedMeal.complexity.toUpperCase()}
        </BodyText>
        <BodyText style={styles.footerText}>
          {selectedMeal.affordability.toUpperCase()}
        </BodyText>
      </View>
      <BodyText style={styles.title}>Ingredients</BodyText>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <BodyText style={styles.title}>Steps</BodyText>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={navigationData.navigation.getParam("toggleFav")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  mealRow: {
    flexDirection: "row",
    backgroundColor: "#d6d6d6",
  },
  mealDetail: {
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    marginTop: 10,
    textAlign: "center",
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
