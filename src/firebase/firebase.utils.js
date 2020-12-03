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
      console.log('error ', error);
      return error;
    });

  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      console.log('userauth', userAuth);
      if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)  ;
    const snapShot = await userRef.get();
    
    console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt= new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
  }

  const firebaseApp = firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const db = firebaseApp.firestore();

  export default firebase;