const functions = require('firebase-functions');
const admin = require('firebase-admin');  // Gives us access to admin SDK to interact with different services
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {  // function responsible for creating a new document in the notifications collection
  return admin.firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
}


exports.projectCreated = functions.firestore  // function responsible for creating new project notification
  .document('projects/{projectId}') // References specific document in the projects collection
  .onCreate(doc => {  // When a document is created
    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstname} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})