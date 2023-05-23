import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";
import { motion } from "framer-motion"
import Form from "../../components/Form/Form";
import "./Contact.scss"

export default function Contact() {
    const [openForm, setOpenForm] = useState(false)
    const [showCalendly, setShowCalendly] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
        <div className="contact-wrapper">
            <div className="contact-wrapper-left">
                <div className="contact-wrapper-text">Help</div>
                <div className="contact-wrapper-text">Account + Sign-in</div>
                <div className="contact-wrapper-text">Shipping</div>
                <div className="contact-wrapper-text">International Shipping</div>
                <div className="contact-wrapper-text">Orders + Payments</div>
                <div className="contact-wrapper-text">Cancellation Policy</div>
                <div className="contact-wrapper-text">Store Pickup</div>
                <div className="contact-wrapper-text">Collection Points</div>
                <div className="contact-wrapper-text">Frequently Asked Questions</div>
                <div className="contact-wrapper-text">Gift Cards</div>
                <div className="contact-wrapper-text">Size Charts</div>
                <div className="contact-wrapper-text">UO Rewrapperards</div>
                <div className="contact-wrapper-text">UO MRKT</div>
                <div className="contact-wrapper-text">UO UP Membership FAQs</div>
                <div className="contact-wrapper-text">Connect</div>
                <div className="contact-wrapper-text">Store Locations</div>
                <div className="contact-wrapper-text">UO Affiliates</div>
                <div className="contact-wrapper-text">Your Privacy Rights</div>
                <div className="contact-wrapper-text">Legal</div>
                <div className="contact-wrapper-text">Current Promotions</div>
                <div className="contact-wrapper-text">Privacy Policy</div>
                <div className="contact-wrapper-text">California Consumer Privacy Act</div>
                <div className="contact-wrapper-text">Virginia Consumer Privacy Act</div>
                <div className="contact-wrapper-text">Terms of Use</div>
                <div className="contact-wrapper-text">Cookies</div>
                <div className="contact-wrapper-text">UO UP Membership Terms & Conditions</div>
                <div className="contact-wrapper-text">Unsubscribe</div>
            </div>
            <div className="contact-wrapper-right">
                <div className="contact-wrapper-banner">
                    <img src="banners/contact/c-banner-1.jpg" alt="banner-1.jpg" className="banner-contact" />
                    <div className="contact-wrapper-title">Chat</div>
                    <p className="contact-wrapper-p">Quick question? UO Chat has you covered with order status info, return details and more.</p>
                    <div className="contact-wrapper-comment">Click on the link below to chat with a support agent.</div>
                    <button id="chat-with-us-btn" onClick={() => setOpenForm(!openForm)}>Email Us </button>
                    {openForm && <Form openForm={openForm} setOpenForm={setOpenForm} />}  
                </div>
                <div className="contact-wrapper-banner">
                    <img src="banners/contact/c-banner-2.jpg" alt="banner-18.jpg" className="banner-contact" />
                    <div className="contact-wrapper-title">Social</div>
                    <p className="contact-wrapper-p">Twitter: Have a quick question about an item or want specific
                        info about your order? Mention @UOHelpMe, @UrbanOutfitters or
                        use #UOHelpMe and we’ll respond as fast as we can.</p>
                    <div className="contact-wrapper-comment">Facebook: Like our UO Facebook page to send us a private message. We'll get back to you quickly.</div>
                </div>
                <div className="contact-wrapper-banner">
                    <img src="banners/contact/c-banner-3.jpg" alt="banner-19.jpg" className="banner-contact" />
                    <div className="contact-wrapper-title">Text</div>
                    <p className="contact-wrapper-p">Text us! Click on the link below to chat with a support agent
                        via SMS text message. Message and data rates may apply.
                        Text messaging may not be available via all carriers.
                        You can also text us at 800-282-2200.</p>
                    <button id="chat-with-us-btn" onClick={() => setShowCalendly(!showCalendly)}>Text Us</button>
                    {showCalendly && 
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    >
                        <PopupWidget
                            url="https://calendly.com/olivermiguel1129"
                            rootElement={document.getElementById("root")}
                            text="Click here to schedule!"
                            textColor="#ffffff"
                            color="#00a2ff"
                        />
                    </motion.div>}
                </div>
            </div>
        </div>
        </motion.div>
    )
}