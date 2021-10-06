import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextPropTypes,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
      <View
        style={[
          styles.button,
          {
            backgroundColor: props.color,
            paddingVertical: props.iconName != null ? 7 : 10,
          },
        ]}
      >
        {props.iconName != null ? (
          <MaterialIcons
            name={props.iconName}
            size={24}
            color={props.iconColor}
            style={styles.icon}
          />
        ) : null}
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: 100,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: "white",
  },
  icon: {
    marginRight: 5,
  },
});

export default MainButton;
