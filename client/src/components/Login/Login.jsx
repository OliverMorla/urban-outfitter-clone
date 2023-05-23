import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useGlobal } from "../../contexts/GlobalContext";
import { motion } from "framer-motion";
import Signup from "../Signup/Signup";
import "./Login.scss"

export default function Login() {

    const [openSignUp, setOpenSignUp] = useState(false)
    const [displayStatus, setDisplayStatus] = useState(true)

    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const { Login, currentUser } = useAuth()
    const { showLoginModal, setLoginModal } = useGlobal()

    const [currentStatus, setCurrentStatus] = useState(currentUser !== null ? true : false)

    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            const userCredentials = await Login(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            setLoginModal(!showLoginModal)
        } catch (err) {
            const errorDetails = JSON.stringify(err.code)
            errorDetails === "\"auth/user-not-found\""
                ? setError("User not found")
                : errorDetails === "\"auth/user-wrong-password\""
                    ? setError("Wrong password")
                    : errorDetails === "\"auth/invalid-email\""
                        ? setError("Invalid email")
                        : {}
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, zIndex: 4 }}
            animate={{ opacity: 1 }}
        >
            {currentStatus
                ? <CurrentUser />
                : (
                    
                    <div className="sign-in-w">
                        <button id="sign-in-close-btn" onClick={() => { setLoginModal(!showLoginModal) }}>X</button>
                        <div className="sign-in-p" style={{ display: displayStatus ? 'flex' : 'none' }}>
                            <div className="sign-in-t">Sign In</div>
                            <div className="sign-in-c">Sign in so you can save items to your wishlists, track your orders and check out faster!</div>
                            {error && <div className="sign-err-w"> {error} </div>}
                            <form className="sign-in-f" onSubmit={handleSubmit}>
                                <label htmlFor="email">Email*</label>
                                <input type="text" name="email" id="email" ref={emailRef} required />
                                <label htmlFor="password">Password*</label>
                                <input type="password" name="password" id="password" ref={passwordRef} required autoComplete="current-password" />
                                <button type="submit">Sign In</button>
                            </form>
                            <div className="sign-up-t">Sign Up</div>
                            <div className="sign-up-c">Hey! It's quick and easy to set up a UO account.</div>
                            <div className="signup-instead">
                                <Link onClick={() => { setOpenSignUp(!openSignUp); setDisplayStatus(!displayStatus) }}>Create an Account</Link>
                            </div>
                        </div>
                        {openSignUp && <Signup />}
                    </div>
                )}
        </motion.div>
    )
}

const CurrentUser = () => {
    const { LogOut, currentUser, profilePhoto, setProfilePhoto, UploadPhoto } = useAuth()
    const { showLoginModal, setLoginModal } = useGlobal()
    
    console.log(currentUser)
    const handlePhoto =  (e) => {
        const file = e.target.files[0]
        UploadPhoto(file)
        try {
            if (file){
                console.log(file)
            }
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className="current-user-w">
            <button id="current-close-btn" onClick={() => { setLoginModal(!showLoginModal) }}>X</button>
            <img src={currentUser ? currentUser?.photoURL : 'banners/user-icon-grey.png'} alt="" className="current-user-photo" />
            <input type="file" name="current-user-photo" id="current-user-photo" onChange={handlePhoto} />
            <div className="current-user-name"> Display Name: {currentUser?.displayName} </div>
            <div className="current-user-email">Email: {currentUser?.email} </div>
            <div className="current-user-btn-w"> 
                {/* <button id="update-profile-btn">Update Profile</button> */}
                <button id="sign-out-btn" onClick={() => { LogOut(); setLoginModal(!showLoginModal) }}>Sign Out</button>
            </div>
        </div>
    );
}
