import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/Firebase';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
    const logOut = () => {
      return signOut(auth)
    }

const userProfileUpdate=(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:photo  
    })
}


    useEffect(() => {

        const unscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        logOut,
        logIn,
        userProfileUpdate,
        singIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;