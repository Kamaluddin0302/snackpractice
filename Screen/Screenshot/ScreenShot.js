import {
  preventScreenCaptureAsync,
  allowScreenCaptureAsync,
} from "expo-screen-capture";
import React from "react";
import ViewShot from "react-native-view-shot";

// import { takeSnapshotAsync } from "expo";
import { Button, View, Text, ScrollView, Image } from "react-native";

// export default class ScreenCaptureExample extends React.Component {
//   screenShot = async () => {
//     try {
//       let result = await takeSnapshotAsync(this.pageView, {
//         format: "jpg",
//         result: "file",
//         quality: 1.0,
//       });
//       console.log(result);
//     } catch (error) {
//       console.log(error.message);
//     }
//     // const file = {
//     //   uri: result,
//     //   name: this.state.shiftIDclean + "-clockIn.jpg",
//     //   type: "image/jpeg",
//     // };
//   };
//   render() {
//     return (
//       // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       //   <Button onPress={this._activate} title="Activated" />
//       //   <Button onPress={this._deactivate} title="Deactivated" />
//       // </View>

//       <View
//         collapsable={false}
//         ref={(view) => {
//           this.pageView = view;
//         }}
//       >
//         <Text>TEST CONTENT GOES HERE</Text>
//         <Button onPress={this.screenShot} title="Deactivated" />
//       </View>
//     );
//   }

//   _activate = () => {
//     preventScreenCaptureAsync();
//   };

//   _deactivate = () => {
//     allowScreenCaptureAsync();
//   };
// }

export default class ExampleCaptureScrollViewContent extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: "",
    };
  }
  onCapture = (uri) => {
    console.log("do something with ", uri);
    this.setState({
      uri: uri,
    });
  };
  render() {
    return (
      <ScrollView style={{ marginTop: 200 }}>
        <ViewShot onCapture={this.onCapture} captureMode="mount">
          <Text>...The Scroll View Content Goes Here...</Text>
        </ViewShot>
        <Image
          source={{ uri: this.state.uri }}
          style={{ width: 800, height: 30 }}
        />
      </ScrollView>
    );
  }
}
