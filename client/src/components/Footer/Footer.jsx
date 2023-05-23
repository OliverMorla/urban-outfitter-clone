import React from "react";
import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruck, faStar} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export default function Footer(){
    return( 
        <footer className="footer-wrapper">
            <div className="footer-btn-wrapper">
                <div className="btn-info-wrapper">
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <button id="btn-info">Sign Up for Rewards + Special Offers</button>
                </div>
                <div className="btn-info-wrapper">
                    <img src="src/components/footer/images/uo_logo.png" alt="" className="uo-logo"/>
                    <button id="btn-info">Download the UO App</button>
                </div>
                <div className="btn-info-wrapper">
                    <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                    <button id="btn-info">Free Shipping on orders over $75</button>
                </div>
            </div>
            <div className="footer-about-wrapper">
                <div className="footer-about-title">About UO</div>
                <p className="footer-about-p">
                Urban Outfitters is a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. 
                Founded in 1970 in a small space across the street from the University of Pennsylvania, Urban Outfitters now operates over 200 stores in the United States, 
                Canada and Europe, offering experiential retail environments and a well-curated mix of on-trend women’s and men’s clothes, from boho dresses, denim and 
                graphics to shoes, hats, and backpacks, as well as beauty, intimates, swim and a collection of handpicked vintage clothing. Urban Outfitters also carries 
                everything you need to decorate your small space, apartment or dorm, with a UO Home collection that includes bedding, tapestries, rugs, shower curtains 
                and furniture. Our Music + Tech collection is a go-to destination for vinyl, record players and tech accessories. Visit our stores, where all are welcome 
                and there’s always something new to see, or shop online at UrbanOutfitters.com and get free shipping on qualifying US orders. For special offers, one-of-a-kind 
                prizes and more, download the UO app and join UO Rewards! Want to be part of the conversation? Follow, share and shop @UrbanOutfitters.
                </p>
                <input type="checkbox" name="" id="" className="see-more-btn" />
            </div>
            <div className="footer-menu-top">
                <div className="footer-menu-right-w">
                    <div className="footer-menu-left">
                        <div className="footer-menu-text">Sign Up For Email</div>
                        <p className="footer-menu-text-p">Sign up to receive Urban Outfitters emails and get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                    </div>
                    <div className="footer-menu-right">
                        <label className="footer-menu-text">Email Address</label>
                        <div className="footer-textbox-wrapper">
                            <input type="text" className="email-textbox"/>
                            <button id="email-sub-btn">Submit</button>
                        </div>
                    </div>
                </div>
            <div className="footer-bottom-text">By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our Privacy Policy here and you may unsubscribe at any time.</div>
            </div>
            <div className="footer-menu-bottom">
                <div className="help-section"><span>Help</span> 
                    <div className="help-link">Order Status</div>
                    <div className="help-link">Start A Return Or Exchange</div>
                    <div className="help-link">Returns + Exchanges</div>
                    <div className="help-link">Shipping</div>
                    <div className="help-link">Orders + Payments</div>
                    <div className="help-link">FAQ</div>
                    <div className="help-link"><Link to="/contact-us">Contact Us</Link></div>
                    <div className="help-link">See All Help Topics</div>
                </div>
                <div className="quick-section"><span>Quick Links</span> 
                    <div className="quick-link">Brands</div>
                    <div className="quick-link">Gift Cards</div>
                    <div className="quick-link">Careers</div>
                    <div className="quick-link">Shop Europe</div>
                    <div className="quick-link">Shop Canada</div>
                </div>
                <div className="extras-section"><span>Extras</span>
                    <div className="extras-link">Afterpay</div>
                    <div className="extras-link">Klarna</div>
                    <div className="extras-link">UO MRKT</div>
                    <div className="extras-link">UO Community</div>
                    <div className="extras-link">UO Events</div>
                    <div className="extras-link">Our Impact</div>
                    <div className="extras-link">Creative Services</div>
                    <div className="extras-link">UO Spacest</div>
                </div>
                <div className="selector-section">
                    <div className="selector-link">Store Locator</div>
                    <div className="selector-link">Sign Up For Email</div>
                    <div className="selector-link">Sign Up For Texts</div>
                </div>
            </div>
            <div className="footer-socials">
                <img src="src/components/footer/images/apple_download.svg" alt="" className="f-download-icon"/>
                <img src="src/components/footer/images/google_download.png" alt="" className="f-download-icon"/>
                <img src="src/components/footer/images/facebook.svg" alt="" className="f-social-icon"/>
                <img src="src/components/footer/images/pinterest.svg" alt="" className="f-social-icon"/>
                <img src="src/components/footer/images/instagram.svg" alt="" className="f-social-icon"/>
                <img src="src/components/footer/images/spotify.svg" alt="" className="f-social-icon"/>
                <img src="src/components/footer/images/twitter.svg" alt="" className="f-social-icon"/>
                <img src="src/components/footer/images/youtube.svg" alt="" className="f-social-icon"/>
            </div>
            <div className="footer-copyright-wrapper">
                <div className="footer-copyright left">
                    <div className="copyright-text">Privacy Policy</div>
                    <div className="copyright-text">Terms of Use</div>
                    <div className="copyright-text">CA Transparency</div>
                    <div className="copyright-text">Accessibility</div>
                    <div className="copyright-text">URBN.com</div>
                    <div className="copyright-text">For CA and VA Residents</div>
                </div>
                <div className="footer-copyright right">
                    <div className="copyright-text">© 2023 Urban Outfitters All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}