import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAn_O0eI3_qcHN3aNuXfQ6iwhXfMiqOKsc",
    authDomain: "mailboxmia-72147.firebaseapp.com",
    databaseURL: "https://mailboxmia-72147.firebaseio.com",
    projectId: "mailboxmia-72147",
    storageBucket: "mailboxmia-72147.appspot.com",
    messagingSenderId: "323690356736",
    appId: "1:323690356736:web:7f3739c89c9f178fe0f8e5",
    measurementId: "G-CXVJPG0J4W"
  };


  
  const firebaseApp = firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const db = firebaseApp.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const signupWithEmailAndPassword = async (email, password) => {
    return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then( (Snapshot) => {
      return Snapshot.user;
    })
    .catch((error) => {
      console.log('error signupWithEmailAndPassword ', error);
      return error
    })
  }

  export const signinWithEmailAndPassword = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(snapshot => {
        const {email, displayName, uid} = snapshot.user
        const usr = {
            email, 
            displayName,
            uid
        }
      return usr;
    })
    .catch(error => {
      //Do something with the error if you want!
      return error;
    });

  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

    const userRef = db.collection('users').where('email','==',userAuth.email);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email, uid} = userAuth;
        const createdAt= new Date();
        const userAdded = {
          displayName: displayName === null ? '': displayName,
          email,
          uid,
          createdAt,
          ...additionalData
      };
        try{
            await firestore.collection('users').add(userAdded)
        }
        catch(error){
            console.log('error creating user createUserProfileDocument ', error.message);
            return error;
        }
    }

    return userRef;
  }


  export default firebase;