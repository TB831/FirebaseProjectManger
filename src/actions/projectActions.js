export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => { // getFirebase, getFirestore are passed in from index.js line 17.
    // Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project, 
      authorFirstname: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({ type: 'CREATE_PROJECT' , project: project });
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    });
  }
};