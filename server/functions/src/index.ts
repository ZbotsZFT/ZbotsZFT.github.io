import * as functions from 'firebase-functions';
import Mail from "./mail";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});



export const sendEmail = functions.https.onRequest((request, response) => {

    
    console.log(request);
    Mail.to = "yarkostefanyshyn@gmail.com";
    Mail.subject = "cyt6";
    Mail.message = "message.message long ride";
    Mail.sendMail();

    response.send().status(200);
});
