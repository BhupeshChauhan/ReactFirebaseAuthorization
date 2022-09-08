import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    
    return (
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            const userRef = doc(db, "Users", user.uid)
            console.log(userRef,"userRef")
            const userData = {
                Email: email,
                Password: password,
                Username: null,
                Role: {user: true, editor: false, admin: false},
                userID: user.uid
            }
            setDoc(userRef, userData)
        })
    );
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
        console.log(currentuser, 'user')
        if(currentuser !== null) {
            const userID = currentuser.uid;
            const userDoc = doc(db, "Users", userID)
            getDoc(userDoc).then((snapShot) => {
                return (
                    setUser(snapShot.data())
                )
            })
        } else if (currentuser === null) {
            setUser(currentuser);
        }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}