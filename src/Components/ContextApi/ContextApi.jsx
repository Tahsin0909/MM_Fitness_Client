/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../SDK";




const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // emailAndPassword Authentication
    const [AuthUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create User with Email
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update User
    const UpdateUser = (name, photo_Url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo_Url
        })
    }

    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    //Sign In User
    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out User
    const LogOut = () => {
        setLoading(true)
        setAuthUser(null)
        return signOut(auth)
    }

    //Manage User

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setLoading(false)
                const UserInfo = {
                    email: user?.email
                }

            } else {
                setLoading(false)
            }
        });
        return () => Unsubscribe()
    }, [])


    const contextInfo = {
        AuthUser,
        loading,
        createUser,
        UpdateUser,
        SignInUser,
        GoogleSignUp,
        LogOut
    }


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };