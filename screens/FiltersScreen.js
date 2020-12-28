import React, { useState, useEffect, useCallback } from "react";
import { Platform, StyleSheet, Switch, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BodyText from "../components/BodyText";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => (
  <View style={styles.filterContainer}>
    <BodyText>{props.label}</BodyText>
    <Switch
      trackColor={{
        true: Colors.primaryColor,
        false: "#e7e7e7",
      }}
      thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
      value={props.value}
      onValueChange={props.onChange}
    />
  </View>
);

export default function FiltersScreen(props) {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: isGlutenFree,
      isLactoseFree: isLactoseFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
    };
    console.log("appliedFilters :>> ", appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Available Filters</BodyText>
      <FilterSwitch
        value={isGlutenFree}
        onChange={() => setIsGlutenFree((state) => !state)}
        label={"Gluten-Free"}
      />
      <FilterSwitch
        value={isLactoseFree}
        onChange={() => setIsLactoseFree((state) => !state)}
        label={"Lactose-Free"}
      />
      <FilterSwitch
        value={isVegan}
        onChange={() => setIsVegan((state) => !state)}
        label={"Vegan"}
      />
      <FilterSwitch
        value={isVegetarian}
        onChange={() => setIsVegetarian((state) => !state)}
        label={"Vegetarian"}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam("save")}
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
    // justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});
