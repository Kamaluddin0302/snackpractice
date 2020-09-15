import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  //   let openImagePickerAsync = async () => {
  //     /* most contents of this function were hidden here to keep the example brief */

  //     setSelectedImage({ localUri: pickerResult.uri });
  //   };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} />
        <TouchableOpacity onPress={openShareDialogAsync}>
          <Text>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Our logo, instructions, and picker button are hidden here to keep the example brief */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
