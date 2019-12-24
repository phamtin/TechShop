import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCOtZNAoEUOKOvWUxFyGiTH_yUJ3xCtYJo",
  databaseURL: "https://techshop-2202.firebaseio.com",
  projectId: "techshop-2202",
  storageBucket: "techshop-2202.appspot.com",
  appId: "1:166085694476:web:ae80b469dcaedc7274ca29",
  authDomain: "techshop-2202.firebaseapp.com"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(firebaseConfig);

export const transformCollectionSnapshot = snapshot => {
  const transformedCollection = snapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const addCollectionAndItems = async (collectionKey, items) => {
  const batch = firestore.batch();
  const collectionRef = firestore.collection(collectionKey);
  items.forEach(item => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
