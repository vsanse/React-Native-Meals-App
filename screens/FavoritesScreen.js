import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import BodyText from "../components/BodyText";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";

export default function FavoritesScreen({ navigation }) {
  const availableMeals = useSelector((state) => state.meals.favMeals);
  return (
    <>
      {!!availableMeals.length ? (
        <MealList data={availableMeals} navigation={navigation} />
      ) : (
        <View style={styles.screen}>
          <BodyText>No favorites meals found. Start adding some!</BodyText>
        </View>
      )}
    </>
  );
}

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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
