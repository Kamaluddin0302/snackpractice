import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Facebook from "expo-facebook";
import firebase from "./../Config/firebase ";

export default class FacebookAuth extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loginWithFacebook = async () => {
    try {
      await Facebook.initializeAsync("620636322191373");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "620636322191373",
        {
          Permissions: ["public_profile"],
        }
      );
      if (type === "success" && token) {
        let user;
        var credential = await firebase.auth.FacebookAuthProvider.credential(
          token
        );
        await firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          .then((result) => {
            user = {
              name: result.user.displayName,
              photoURL: result.user.photoURL,
              uid: result.user.uid,
            };
            console.log("User Detail ==>", result.user.uid);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("allUser")
              .doc(user.name)
              .set(user)
              .then(() => {
                this.props.currentuser(user);
                this.props.navigation.navigate("Home", user);
              });
          })

          .catch((err) => {
            console.log("Error==>", err);
          });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.loginWithFacebook()}
        style={{
          alignContent: "center",
          alignSelf: "center",
          backgroundColor: "blue",
          alignItems: "center",
          marginTop: 200,
          height: 50,
        }}
      >
        <Text>Login Wit Facebook</Text>
      </TouchableOpacity>
    );
  }
}
