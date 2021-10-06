import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const labels = [
  "I think it's",
  "Maybe it's",
  "Could it be?",
  "Most likely",
  "So, it should be",
  "Am I close yet?",
  "Almost there,yeah?",
];
const generateRandomLabel = () => {
  let index = generateRandomBetween(0, labels.length, null);
  return labels[index];
};

const GameScreen = (props) => {
  const [rounds, setRounds] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.choice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { choice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.choice) {
      onGameOver(rounds);
    }
  }, [currentGuess, choice, onGameOver]);

  const guessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < choice) ||
      (direction == "greater" && currentGuess > choice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setRounds((curRounds) => curRounds + 1);
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>{generateRandomLabel()}</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <View>
          <MainButton
            iconName="arrow-circle-down"
            iconColor="white"
            onPress={guessHandler.bind(this, "lower")}
            title={"Lower"}
            color={colors.accent}
          />
        </View>
        <View>
          <MainButton
            iconName="arrow-circle-up"
            iconColor="white"
            onPress={guessHandler.bind(this, "greater")}
            title={"Greater"}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  label: {
    fontFamily: "open-sans",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default GameScreen;
