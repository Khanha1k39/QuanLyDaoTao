import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHanlder(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    console.log("jo");
    console.log(courseGoals);
    setCourseGoals((pre) => {
      return [...pre, enteredGoalText];
    });
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHanlder}
        ></TextInput>
        <Button title="Add goals" onPress={addGoalHandler}></Button>
      </View>
      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map((goal, i) => {
          return (
            <Text style={{ color: "red" }} key={i}>
              {goal}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputContainer: {
    flexDirection: "row",
  },
  goalsContainer: {},
  textInput: {
    width: "70%",
  },
});
