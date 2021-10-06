import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Keyboard,
} from "react-native";
import colors from "../constants/colors";
import NumberContainer from "./NumberContainer";
import MainButton from "./MainButton";

const NumberInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const { label, onStartGame } = props;
  const handleTextInput = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.confirmedOutput}>
        <Text style={styles.numberSelectedText}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          iconName="run-circle"
          title="START GAME"
          iconColor="white"
          color={colors.primary}
          onPress={onStartGame.bind(this, selectedNumber)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={"##"}
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        blurOnSubmit
        onChangeText={handleTextInput}
        value={enteredValue}
      />
      <View style={styles.buttonsContainer}>
        <MainButton
          onPress={resetInputHandler}
          title={"Reset"}
          color={colors.accent}
          iconName="cancel"
          iconColor="white"
        />
        <MainButton
          onPress={confirmInputHandler}
          title={"Confirm"}
          color={colors.primary}
          iconName="check-circle"
          iconColor="white"
        />
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "open-sans",
  },
  input: {
    color: colors.text,
    fontSize: 30,
    fontFamily: "open-sans-bold",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: 100,
    fontWeight: "bold",
    fontSize: 20,
  },
  numberSelectedText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: colors.accent,
  },
  confirmedOutput: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 3,
    borderColor: colors.primary,
    paddingVertical: 20,
    borderRadius: 20,
  },
});

export default NumberInput;
