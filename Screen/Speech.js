import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

export default class App extends React.Component {
  speak() {
    var thingToSay = "My Name is kkkkk ";
    Speech.speak(thingToSay, {
      language: "IETF BCP 47",
      pitch: 2.5,
      rate: 0.1,
    });
  }

  stop() {
    Speech.stop();
  }

  pause() {
    Speech.pause();
  }

  resume() {
    Speech.resume();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Press to hear some words" onPress={this.speak} />
        <Button title="Press to hear some words" onPress={this.stop} />
        <Button title="Press to hear some words" onPress={this.pause} />
        <Button title="Press to hear some words" onPress={this.pause} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
