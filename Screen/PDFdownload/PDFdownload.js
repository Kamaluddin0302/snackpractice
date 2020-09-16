import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import * as Print from "expo-print";
import PDFReader from "rn-pdf-reader-js";
import * as MailComposer from "expo-mail-composer";
import * as FileSystem from "expo-file-system";
import base64 from "base-64";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      uri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540loopdev9%252Ffacebooklogin/Print/bd33edca-2ba8-416d-bc7e-0b0c4fea9c2e.pdf",
    };
  }
  createPDF = async () => {
    try {
      const html = `
    <h1>Kamal uddin kunbhar</h1>
    <h1>Kamal uddin kunbhar</h1>`;
      const html2 = `
    <h1>2nd Pdf"</h1>
    <h1>2PDF`;
      const pdf1url = await Print.printToFileAsync({ html });
      const pdf1ur2 = await Print.printToFileAsync({ html: html2 });

      let pdf1 = await FileSystem.readAsStringAsync(pdf1url, {
        encoding: FileSystem.EncodingType.Base64,
      });

      let pdf2 = await FileSystem.readAsStringAsync(pdf1ur2, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await fetch("https://sendpdf1.herokuapp.com/route/sendemail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tomail: ["kamalloungani11@gmail.com", "kamaluldin1999@gmail.com"],
          title: "Your code is 5015",
          subject: "Mail send from ERGTESTAPP",
          base64: pdf1s,
        }),
      }).then((response) => {
        alert("Sent"), response.json();
      });
    } catch (err) {
      console.log(err);
    }

    // await fetch("https://sendpdf1.herokuapp.com/route/sendemail", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     tomail: ["kamalloungani11@gmail.com", "kamaluldin1999@gmail.com"],
    //     title: "Your code is 5015",
    //     subject: "Mail send from ERGTESTAPP",
    //     base64: base641,
    //   }),
    // })
    //   .then((response) => {
    //     alert("Sent"), response.json();
    //   })
    //   .then((err) => console.log(err));

    // const secPDF = await Print.printToFileAsync({ html: html2, base64: true });
    // // this.setState({ uri: base64 });
    // await fetch("https://sendpdf1.herokuapp.com/route/sendemail", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     tomail: ["kamalloungani11@gmail.com", "kamaluldin1999@gmail.com"],
    //     title: "Your code is 5015",
    //     subject: "Mail send from ERGTESTAPP",
    //     base64: secPDF.base64,
    //   }),
    // })
    //   .then((response) => {
    //     alert("Sent"), response.json();
    //   })
    //   .then((err) => console.log(err));
  };

  Sendmail = () => {
    let email = "kamaluldin1999@gmail.com"; // The email exists.
    MailComposer.composeAsync({
      recipients: [email],
      subject: `Subject`,
      attachments: [this.state.uri],
      body: "",
      isHtml: false,
    });
  };

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.createPDF} style={styles.Main}>
          <Text>Create PDF</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.Sendmail} style={styles.Main}>
          <Text>Send Mail</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Main: { marginTop: 100 },
});
