import React from "react";
import { StyleSheet, Text } from "react-native";

export default function BodyText(props) {
  return (
    <Text style={{ ...textStyles.text, ...props.style }} {...props}>
      {props.children}
    </Text>
  );
}

const textStyles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
