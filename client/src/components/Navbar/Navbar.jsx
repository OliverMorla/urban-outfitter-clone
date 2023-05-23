import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCreditCard, faMagnifyingGlass, faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "../../contexts/AuthContext";
import { useGlobal } from "../../contexts/GlobalContext";
import useFetch from "../../hooks/useFetch";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import "./Navbar.scss"

// Navbar component for the application
export default function Navbar() {
    // Get the current route from React Router
    const currentRoute = useLocation()

    // Get the current user from the authentication context
    const { currentUser } = useAuth()

    // Set the initial states for cart and login status
    const { showLoginModal, setLoginModal } = useGlobal()
    const { showCartModal, setCartModal } = useGlobal()
    const { searchValue, setSearchValue } = useGlobal()

    // Set the initial states for mens and womens modal
    const [showWomensModal, setShowWomensModal] = useState(false)
    const [showMensModal, setShowMensModal] = useState(false)

    // Set the initial for focus attribute
    const [onFocus, setFocus] = useState(false)

    const navigate = useNavigate()

    // Run this effect when the current route changes
    useEffect(() => {
        // Close the cart or login modal if they are open and the user navigates to a different page
        if (currentRoute.pathname !== "/" && (showLoginModal || showCartModal)) {
            setLoginModal(false)
            setCartModal(false)
        }
    }, [currentRoute.pathname])
    
    const searchBoxRef = useRef()

    // const { data, loading, error } = useFetch(`/products?populate=*&filters[title][$contains]=${searchBoxRef.current?.value}`)

    const handleSearch = (e) => {
        if(e.key === "Enter") {
            console.log(e.key) 
            setSearchValue(searchBoxRef.current.value)
            searchValue && navigate(`/products?populate=*&search=${searchValue}`)
        }
    }

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-top">
                <div className="navbar-top-left">
                    <div className="navbar-top-left-text">Free Shipping On Orders $75+</div>
                    <div className="navbar-top-left-text">Details</div>
                </div>
                <div className="navbar-top-right">
                    <div className="navbar-top-right-text">
                        <FontAwesomeIcon icon={faStar} />
                        <span>UO Rewards</span>
                    </div>
                    <div className="navbar-top-right-text">
                        <FontAwesomeIcon icon={faCreditCard} />
                        <span>Gift Cards</span>
                    </div>
                    <div className="navbar-top-right-text" onClick={() => setLoginModal(!showLoginModal)}>
                        <FontAwesomeIcon icon={faCircleUser} />
                        <span>{currentUser ? currentUser?.displayName : "Sign in"}</span>
                    </div>
                </div>
            </div>
            <div className="navbar-middle">
                <div className="navbar-title">
                    <Link to="/">
                        <img src="brand/uo-logo.svg" alt="" />
                    </Link>
                </div>
                <div className="search-box-wrapper">
                    <div className="input-w">
                        <input type="text" placeholder="Search" className="search-box" onFocus={() => setFocus(!onFocus)} onBlur={() => setFocus(!onFocus)} onKeyDown={handleSearch} ref={searchBoxRef}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" style={ onFocus && {backgroundColor: 'black', color: 'white', padding: '1rem'}}/>
                    </div>
                    <FontAwesomeIcon icon={faShoppingBag} className="cart-icon" onClick={() => setCartModal(!showCartModal)} />
                </div>
            </div>
            <div className="navbar-bottom">
                <NavLink className="navbar-bottom-text" to="/">Home</NavLink>
                <div className="navbar-bottom-text">
                    <NavLink
                        onMouseEnter={() => setShowWomensModal(!showWomensModal)}
                        to="/womens-clothing">
                        Women's
                    </NavLink>
                    <AnimatePresence>
                        {showWomensModal &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="womens-modal-w"
                                onMouseLeave={() => setShowWomensModal(!showWomensModal)}
                            >
                                <div className="w-modal-label-1">
                                    <div className="category-label">Shop by Category</div>
                                    <Link className="w-modal-link">Shop All Women's</Link>
                                    <Link className="w-modal-link">New Arrivals</Link>
                                    <Link className="w-modal-link">Rompers + Jumpsuits</Link>
                                    <Link className="w-modal-link">Tops</Link>
                                    <Link className="w-modal-link">Graphic Tees</Link>
                                    <Link className="w-modal-link">Jacket</Link>
                                    <Link className="w-modal-link">Pants</Link>
                                    <Link className="w-modal-link">Skirts</Link>
                                    <Link className="w-modal-link">Jeans</Link>
                                </div>
                                <div className="w-modal-label-2">
                                    <Link className="w-modal-link">Bottoms</Link>
                                    <Link className="w-modal-link">Activewear</Link>
                                    <Link className="w-modal-link">Intimates</Link>
                                    <Link className="w-modal-link">Swim</Link>
                                    <Link className="w-modal-link">Vintage</Link>
                                    <Link className="w-modal-link">Shoes</Link>
                                    <Link className="w-modal-link">Accessories</Link>
                                    <Link className="w-modal-link">Sale</Link>
                                </div>
                                <div className="w-modal-label-3">
                                    <div className="category-label">Featured</div>
                                    <Link className="w-modal-link">UO Denim</Link>
                                    <Link className="w-modal-link">Balletcore Trend</Link>
                                    <Link className="w-modal-link">Essentially UO</Link>
                                    <Link className="w-modal-link">The Sun Shop</Link>
                                    <Link className="w-modal-link">Party Clothes</Link>
                                </div>
                                <div className="w-modal-label-4">
                                    <div className="category-label">Brands</div>
                                    <Link className="w-modal-link">BAGGU</Link>
                                    <Link className="w-modal-link">BDG</Link>
                                    <Link className="w-modal-link">Dickies</Link>
                                    <Link className="w-modal-link">Levi's</Link>
                                    <Link className="w-modal-link">OBEY</Link>
                                    <Link className="w-modal-link">Out From Under</Link>
                                    <Link className="w-modal-link">The North Face</Link>
                                    <Link className="w-modal-link">True Religion</Link>
                                    <Link className="w-modal-link">Urban Renewal</Link>
                                </div>
                            </motion.div>}
                    </AnimatePresence>
                </div>
                <div className="navbar-bottom-text">
                    <NavLink
                        onMouseEnter={() => setShowMensModal(!showMensModal)}
                        to="/mens-clothing">
                        Men's
                    </NavLink>
                    <AnimatePresence>
                        {showMensModal && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mens-modal-w"
                            onMouseLeave={() => setShowMensModal(!showMensModal)}
                        >
                            <div className="m-modal-label-1">
                                <div className="category-label">Shop by Category</div>
                                <Link className="m-modal-link">Shop All Mens's</Link>
                                <Link className="m-modal-link">New Arrivals</Link>
                                <Link className="m-modal-link">Graphic Tees</Link>
                                <Link className="m-modal-link">Tops</Link>
                                <Link className="m-modal-link">Hoodies + Sweatshirts</Link>
                                <Link className="m-modal-link">Jacket</Link>
                                <Link className="m-modal-link">Jeans</Link>
                                <Link className="m-modal-link">Bottoms</Link>
                                <Link className="m-modal-link">Activewear</Link>
                            </div>
                            <div className="m-modal-label-2">
                                <Link className="m-modal-link">Shoes</Link>
                                <Link className="m-modal-link">Underwear + Lounge</Link>
                                <Link className="m-modal-link">Grooming</Link>
                                <Link className="m-modal-link">Vintage</Link>
                                <Link className="m-modal-link">Hats</Link>
                                <Link className="m-modal-link">Accessories</Link>
                                <Link className="m-modal-link">Sale</Link>
                            </div>
                            <div className="m-modal-label-3">
                                <div className="category-label">Featured</div>
                                <Link className="m-modal-link">The Sun Shop</Link>
                                <Link className="m-modal-link">The Cargo Shop</Link>
                                <Link className="m-modal-link">Essentially UO</Link>
                                <Link className="m-modal-link">Standard Cloth</Link>
                                <Link className="m-modal-link">UO Denim</Link>
                                <Link className="m-modal-link">NBA Sports Shop</Link>
                            </div>
                            <div className="m-modal-label-4">
                                <div className="category-label">Brands</div>
                                <Link className="m-modal-link">Adidas</Link>
                                <Link className="m-modal-link">BDG</Link>
                                <Link className="m-modal-link">Dickies</Link>
                                <Link className="m-modal-link">Levi's</Link>
                                <Link className="m-modal-link">OBEY</Link>
                                <Link className="m-modal-link">Out From Under</Link>
                                <Link className="m-modal-link">The North Face</Link>
                                <Link className="m-modal-link">True Religion</Link>
                                <Link className="m-modal-link">Urban Renewal</Link>
                            </div>
                        </motion.div>}
                    </AnimatePresence>
                </div>
                <div className="navbar-bottom-text">Urban Renewal</div>
                <div className="navbar-bottom-text">Music</div>
                <div className="navbar-bottom-text">Lifestyle</div>
                <div className="navbar-bottom-text">Beauty</div>
                <div className="navbar-bottom-text">Brands</div>
                <NavLink className="navbar-bottom-text" to="/news">News</NavLink>
                <div className="navbar-bottom-text">Sale</div>
            </div>
            {/* // Render the Cart component if cartStatus is true */}
            {showCartModal && <Cart />}
            {/* // Render the Login component if loginStatus is true */}
            {showLoginModal && <Login />}
        </nav>
    )
}