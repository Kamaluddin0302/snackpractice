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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      uri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540loopdev9%252Ffacebooklogin/Print/bd33edca-2ba8-416d-bc7e-0b0c4fea9c2e.pdf",
    };
  }
  async createPDF() {
    const html = `
    <h1>Kamal uddin kunbhar</h1>
    <h1>Kamal uddin kunbhar</h1>`;
    const html2 = `
    <h1>2nd Pdf"</h1>
    <h1>2PDF`;
    const { base64 } = await Print.printToFileAsync({ html, base64: true });
    // this.setState({ uri: base64 });
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
        base64: base64,
      }),
    })
      .then((response) => {
        alert("Sent"), response.json();
      })
      .then((err) => console.log(err));

    const secPDF = await Print.printToFileAsync({ html: html2, base64: true });
    // this.setState({ uri: base64 });
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
        base64: secPDF.base64,
      }),
    })
      .then((response) => {
        alert("Sent"), response.json();
      })
      .then((err) => console.log(err));
  }

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
