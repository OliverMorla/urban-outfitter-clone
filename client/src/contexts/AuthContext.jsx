import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [profilePhoto, setProfilePhoto] = useState()
    const [loading, setLoading] = useState(true)

    async function SignUp(email, password, username, phone) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userCredential.user, { displayName: username })
    }

    function Login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function ModifyProfile(){
        console.log('We update the profile')
    }

    async function UploadPhoto(file){
        const storageRef = ref(storage, `${currentUser?.uid}`)
        setProfilePhoto(file)
            try{
                const res = await uploadBytes(storageRef, file)
                if (res){
                    const imageURL = await getDownloadURL(storageRef)
                    await updateProfile(currentUser, { photoURL: imageURL})
                    console.log('Upload was successful!')
                    console.log(imageURL)
                    console.log(file)
                    console.log(currentUser.photoURL)
                }
             }catch(err){
                     console.log(err)       
             }
        }   


    function LogOut() {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return currentUser;
    }, [])

    const value = {
        currentUser,
        ModifyProfile,
        profilePhoto,
        setProfilePhoto,
        UploadPhoto,
        SignUp,
        Login,
        LogOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>)
}