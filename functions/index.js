const functions = require("firebase-functions");
var fetch = require("node-fetch");
var admin = require("firebase-admin");  
admin.initializeApp();

const db = admin.firestore();
exports.sendPushNotification = functions.firestore
  .document("/MissingPerson/{id}")
  .onCreate((data, context) => {
    let id = context.params.id;
    console.log(id);
    // return db.collection("userData").doc(id).set({
    //     name: "unknown name",
    //     id: id
    // })
  });
