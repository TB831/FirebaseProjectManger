export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
    .then (() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    )
    .then((res) => {  // Responsible for creating a new user in firestore
      return firestore.collection('users').doc(res.user.uid).set({    //.doc(res.user.uid) get us the user id from firebase, that way id is the same for firestore and firebase.
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    })
    .then(() => { // Responsible for dispatching our action
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .catch((err) => { // Responsible for catching any errors when making a new user
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}