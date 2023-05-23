import React, { useRef, useState } from "react";
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import "./Form.scss"

export default function Form({ openForm, setOpenForm }) {
    const formRef = useRef()

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const [isDisabled, setDisabled] = useState(false)

    async function sendForm(e) {
        e.preventDefault();

        try {
            setError(false)
            setLoading(true)
            const res = await emailjs.sendForm(import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY)
            setData(res)
            setLoading(false)
            setDisabled(true)
            alert('Your email was sent!')
        } catch (err) {
            setDisabled(false)
            setLoading(false)
            setError(true)
            alert(JSON.stringify(err))
        }
    }
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div className="form-wrapper">
                <form ref={formRef} onSubmit={sendForm}>
                    <button id="contact-exit-btn" onClick={() => setOpenForm(!openForm)}>X</button>
                    <label htmlFor="user_name">Name*</label>
                    <input type="text" name="from_name" id="user_name" placeholder="Enter your name" required />
                    <label htmlFor="user_email">Email*</label>
                    <input type="email" name="user_email" id="user_email" placeholder="Enter your email" required />
                    <label htmlFor="message">Message*</label>
                    <textarea type="text" name="message" id="message" placeholder="Enter your message" required />
                    <button id="contact-submit-btn" type="submit" value="Send" disabled={isDisabled}>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}