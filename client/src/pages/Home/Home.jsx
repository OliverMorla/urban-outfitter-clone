import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import HomeCards from "../../components/HomeCards/HomeCards";
import useFetch from "../../hooks/useFetch";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.scss"

export default function Home() {
    const { data, loading, error } = useFetch(`/products?populate=*&`)
    const [transformStyle, setTransformStyle] = useState('translateX(0vw)');
    const [transformStyle_2, setTransformStyle_2] = useState('translateX(0vw)');
    const na_wrapper = useRef(null);
    const mp_wrapper = useRef(null);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: .4
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: .6
            }
        }
    }

    return (
        <motion.main
            variants={container}
            initial="hidden"
            animate="visible"
            className="home-wrapper"
        >
            <div className="home-top-banner">
                <img src="banners/shop-banner.jpg" alt="banner.jpg" className="shop-banner" />
            </div>
            <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                className="home-top-mid-banner">

                {/* <div className="arrow-w">
                    <FontAwesomeIcon icon={faArrowLeft} className="left-arrow-btn" />
                    <FontAwesomeIcon icon={faArrowRight} className="right-arrow-btn" />
                </div> */}

                <Carousel autoPlay infiniteLoop showThumbs={false} className="banner-carousel-w">
                    <img src="banners/slideshow/banner-1.jpg" alt="banner-1.jpg" className="carousel-banner-1" />
                    <img src="banners/slideshow/banner-2.jpg" alt="banner-2.jpg" className="carousel-banner-2" />
                    <img src="banners/slideshow/banner-3.jpg" alt="banner-3.jpg" className="carousel-banner-3" />
                </Carousel>

                <div className="btn-banner-wrapper">
                    <Link to="/womens-clothing">
                        <button id="shop-btn">Shop Dresses</button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                className="home-mid-banner">
                <div className="home-mid-left-banner">
                    <img src="banners/banner-2.jpg" alt="banner-2.jpg" className="shop-banner-2" />
                    <div className="btn-banner-wrapper">
                        <button id="shop-btn">Shop The Collection</button>
                    </div>
                </div>
                <div className="home-mid-right-banner">
                    <img src="banners/banner-3.jpg" alt="banner-3.jpg" className="shop-banner-3" />
                    <div className="btn-banner-wrapper">
                        <button id="shop-btn">Shop Standard Cloth</button>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                className="home-bottom-banner">
                <img src="banners/banner-4.jpg" alt="banner-4.jpg" className="shop-banner-4" />
                <div className="btn-banner-wrapper">
                    <button id="shop-btn">Shop The Collection</button>
                </div>
            </motion.div>
            <motion.div
                className="new-arrivals-wrapper">
                <div className="new-arrivals-text">New Arrivals <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span> </div>
                <div className="na-items-wrapper" ref={na_wrapper}>
                    {data && <FontAwesomeIcon icon={faArrowLeft} className="left-btn" onClick={() => { setTransformStyle(`translateX(0vw)`); }}></FontAwesomeIcon>}
                    <div className="na-item-wrapper" style={{ transform: transformStyle }}>
                        {error ? (<h2> There was an error! </h2>)
                            : loading ? (<h2> Loading </h2>)
                                : data?.map((product) => { return <HomeCards key={product?.id} products={product} type="New Arrivals" /> })}
                    </div>
                    {data && <FontAwesomeIcon icon={faArrowRight} className="right-btn" onClick={() => { setTransformStyle(`translateX(-${(na_wrapper?.current?.offsetWidth / 100) / 2}vw`); }}></FontAwesomeIcon>}
                </div>
            </motion.div>
            <motion.div
                className="most-popular-wrapper">
                <div className="most-popular-text">Most Popular <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span> </div>
                <div className="mp-items-wrapper" ref={mp_wrapper}>
                    {data && <FontAwesomeIcon icon={faArrowLeft} className="left-btn" onClick={() => { setTransformStyle_2(`translateX(0vw)`); }}></FontAwesomeIcon>}
                    <div className="mp-item-wrapper" style={{ transform: transformStyle_2 }}>
                        {error ? (<h2> There was an error! </h2>)
                            : loading ? (<h2> Loading </h2>)
                                : data?.map((product) => { return <HomeCards key={product?.id} products={product} type="Trending" /> })}
                    </div>
                    {data && <FontAwesomeIcon icon={faArrowRight} className="right-btn" onClick={() => { setTransformStyle_2(`translateX(-${(mp_wrapper?.current?.offsetWidth / 100) / 2}vw`); }}></FontAwesomeIcon>}
                </div>
            </motion.div>
            <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                className="community-banner-wrapper">
                <img src="banners/shop-banner-2.jpg" alt="shop-banner-2.jpg" className="shop-banner-2" />
                <div className="c-3-wrapper">
                    <img src="banners/banner-6.jpg" alt="banner-6.jpg" className="banner-6" />
                    <img src="banners/banner-7.jpg" alt="banner-7.jpg" className="banner-7" />
                    <img src="banners/banner-8.jpg" alt="banner-8.jpg" className="banner-8" />
                </div>
            </motion.div>
        </motion.main>
    )
}