import React, {createContext} from 'react'

const config = {
  apiKey: "AIzaSyDu80rUZipt21ZYp0ejmauUuchBdmGbA68",
  authDomain: "netflix-db-50b8b.firebaseapp.com",
  databaseURL:
    "https://netflix-db-50b8b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-db-50b8b",
  storageBucket: "netflix-db-50b8b.appspot.com",
  messagingSenderId: "775232914856",
  appId: "1:775232914856:web:4c6a4e249c9dd4993b099d",
  measurementId: "G-BSH6F17YYX",
};

export const FirebaseContext = createContext(null);

const firebase = window.firebase.initializeApp(config);

const FirebaseProvider = ({children}) => {
    return (
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        {children}
      </FirebaseContext.Provider>
    );
}

export default FirebaseProvider
