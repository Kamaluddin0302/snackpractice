import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Buffer } from "buffer";
global.Buffer = Buffer; // very important
// import Speech from "./Screen/Speech";
// import PushNotification from "./Screen/pushnotification/pushnotification";
// import PhoneAuthendication from "./Screen/phoneAuthendication/Phoneauthendication";
// import Facebooklogin from "./Screen/Facebookauth/FacebookAuth";
// import Share from "./Screen/Share/Share";
// import ScreenShot from "./Screen/Screenshot/ScreenShot";
import PDFdoenload from "./Screen/PDFdownload/PDFdownload";
export default function App() {
  return <PDFdoenload />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
