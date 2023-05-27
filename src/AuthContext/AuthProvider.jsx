import React, { createContext, useEffect, useState } from 'react';
import { app } from './../firebase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  
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
        return singOut(auth)
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
        logIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;