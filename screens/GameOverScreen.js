import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.label}>GAME OVER!</Text>
      <Image
        source={require("../assets/gotcha.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.label}>
        Your "smart" phone needed{" "}
        <Text style={styles.highlightlabel}>{props.numberOfRounds}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlightlabel}>{props.choice}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <MainButton
          title="New Game"
          onPress={props.restart}
          color={colors.primary}
          iconName="replay-circle-filled"
          iconColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
  },
  highlightlabel: {
    color: colors.accent,
    fontFamily: "open-sans-bold",
  },
  image: {
    marginVertical: 20,
    width: "80%",
    height: 200,
  },
  buttonContainer: {
    marginVertical: 15,
  },
});

export default GameOverScreen;
