import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.scss"
import { motion } from "framer-motion";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const usernameRef = useRef()

    const { SignUp, currentUser, LogOut } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!')
        }

        try {
            setError('')
            setLoading(true)
            await SignUp(emailRef.current.value, passwordRef.current.value, usernameRef.current.value)
        } catch (err) {
            setLoading(false)
            setError("Failed to create account")
        }
    }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
        <div className="sign-up-w">
            {error && <h1> {error} </h1>}
            {currentUser && <button onClick={() => LogOut()}> Sign Out </button>}
            <form onSubmit={handleSubmit} className="sign-up-f">
                <label htmlFor="username">Display Name</label>
                <input type="text" name="username" id="username" ref={usernameRef} required />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" ref={emailRef} required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" ref={passwordRef} required minLength={6} />
                <label htmlFor="password">Password Confirmation</label>
                <input type="password" name="password" id="password" ref={passwordConfirmRef} required minLength={6} />
                <button type="submit" disabled={loading} id="sign-up-btn">Sign Up</button>
            </form>
            <div className="login-instead">
                <Link> Already have an account? Login </Link>
            </div>
        </div>
        </motion.div>
        
    )
}