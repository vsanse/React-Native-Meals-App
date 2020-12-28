import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        itemData={itemData}
        onSelect={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
              color: itemData.item.color,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={styles.screen}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
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
    backgroundColor: "#fff",
  },
});
