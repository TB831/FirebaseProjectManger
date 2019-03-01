export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => { // getFirebase, getFirestore are passed in from index.js line 17.
    // Make async call to database
    dispatch({ type: 'CREATE_PROJECT' , project: project });
  }
};