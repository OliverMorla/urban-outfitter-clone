import React, { useState, useRef } from "react";
import { motion } from "framer-motion"
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import "./Products.scss"
import { useGlobal } from "../../contexts/GlobalContext";

export default function Products() {
    const { pathname } = useLocation()
    if (pathname === "/mens-clothing") {
        return <MensClothing />
    } else if (pathname === "/womens-clothing") {
        return <WomensClothing />
    } else if (pathname === "/products") {
        return <SearchProducts />
    }
}

function SearchProducts () {
    const [filterMax, setFilterMax] = useState(1000);
    const [priceModal, setPriceModal] = useState(false)

    const maxRef = useRef()
    const minRef = useRef()

    const {searchValue} = useGlobal()

    const [sort, setSort] = useState('asc');

    const { data, loading, error } = useFetch(`/products?populate=*&filters[title][$contains]=${searchValue}`)

    const handleCat = (e) => {
        e.target.checked ? (setSubCats(e.target.value), setMainCat('sub_categories')) : (setMainCat('categories'), setSubCats('men'))
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="products-wrapper">
                <div className="products-banner-w">
                    <img src="banners/banner-13.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-14.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-15.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-16.jpg" alt="" className="products-banner" />
                </div>
                <div className="products-list-w">
                    <div className="p-category-w">
                        <div className="p-category-text">Browse By:</div>
                        <div className="p-category-text">---</div>
                        <div className="p-category-text">
                            <input type="checkbox" name="All Men's" id="All Men's" value={"All Men's"} onChange={handleCat} />
                            <label htmlFor="All Men's">All Men's</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="New Arrivals" id="New Arrivals" value={"New Arrivals"} onChange={handleCat} />
                            <label htmlFor="New Arrivals">New Arrivals</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Graphic Tees" id="Graphic Tees" value={"Graphic Tees"} onChange={handleCat} />
                            <label htmlFor="Graphic Tees">Graphic Tees</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Top" id="Top" value={"Top"} onChange={handleCat} />
                            <label htmlFor="Top">Top</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="HoodiesSweatshirts" id="HoodiesSweatshirts" value={"HoodiesSweatshirts"} onChange={handleCat} />
                            <label htmlFor="HoodiesSweatshirts">Hoodies + Sweatshirts</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jackets" id="Jackets" value={"Jackets"} onChange={handleCat} />
                            <label htmlFor="Jackets">Jackets</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Coats" id="Coats" value={"Coats"} onChange={handleCat} />
                            <label htmlFor="Coats">Coats</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jeans" id="Jeans" value={"Jeans"} onChange={handleCat} />
                            <label htmlFor="Jeans">Jeans</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Bottoms" id="Bottoms" value={"Bottoms"} onChange={handleCat} />
                            <label htmlFor="Bottoms">Bottoms</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Activewear" id="Activewear" value={"Activewear"} onChange={handleCat} />
                            <label htmlFor="Activewear">Activewear</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Grooming" id="Grooming" value={"Grooming"} onChange={handleCat} />
                            <label htmlFor="Grooming">Grooming</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Vintage" id="Vintage" value={"Vintage"} onChange={handleCat} />
                            <label htmlFor="Vintage">Vintage</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Hats" id="Hats" value={"Hats"} onChange={handleCat} />
                            <label htmlFor="Hats">Hats</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Accessories" id="Accessories" value={"Accessories"} onChange={handleCat} />
                            <label htmlFor="Accessories">Accessories</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Sale" id="Sale" value={"Sale"} onChange={handleCat} />
                            <label htmlFor="Sale">Sale</label>
                        </div>
                        <div className="p-category-filter-w">
                            <div className="p-filter-title">Filter By:</div>
                            <div className="p-price-filter-w" style={priceModal ? { height: '500px' } : {}}>
                                <button className="price-btn" onClick={() => setPriceModal(!priceModal)}>Price <span> + </span> </button>
                                <button className="filter-price-btn">Less Than $25</button>
                                <button className="filter-price-btn">$25 - $50</button>
                                <button className="filter-price-btn">$50 - $100</button>
                                <button className="filter-price-btn">$100 - $200</button>
                                <button className="filter-price-btn">$200 - $500</button>
                                <button className="filter-price-btn">More than $500</button>
                                <div className="p-filter-item">
                                    <label htmlFor="">$</label>
                                    <input type="text" name="min" id="min" placeholder="Min" ref={minRef} />
                                    <label htmlFor="">$</label>
                                    <input type="text" name="max" id="max" placeholder="Max" ref={maxRef} />
                                    <button id="filter-price-btn" onClick={() => setFilterMax(maxRef.current.value)}>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-filter-w">
                        <div className="p-filter-text">
                            Men's Clothing
                            <span> {data ? data?.length : 0} products</span>
                            <div className="p-sort-w">
                                <div className="p-sort-text">Sort:</div>
                                <select name="sort" id="sort" className="p-sort-selector">
                                    <option value="all">All</option>
                                    <option value="featured">Featured</option>
                                    <option value="trending">Trending</option>
                                    <option value="latest">Latest</option>
                                    <option value="desc">Price: Highest to Lowest</option>
                                    <option value="asc">Price: Lowest to Highest</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-items-w">
                            {error ? <h2> Server is not running </h2>
                                : loading ? <h2> Loading </h2>
                                    : data?.map((product) => { return <Card key={product?.id} products={product} /> })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function WomensClothing() {
    const [filterMax, setFilterMax] = useState(null);
    const [priceModal, setPriceModal] = useState(false)

    const [sort, setSort] = useState('asc');

    const [subCats, setSubCats] = useState(["women"])
    const [mainCat, setMainCat] = useState(["categories"])

    const maxRef = useRef()
    const minRef = useRef()

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][${mainCat}][title][$eq]=${subCats}&filters[categories][title][$eq]=women&[filters][price][$lte]=${filterMax}&sort=price:${sort}`)

    const handleCat = (e) => {
        e.target.checked ? (setSubCats(e.target.value), setMainCat('sub_categories')) : (setMainCat('categories'), setSubCats('women'))
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="products-wrapper">
                <div className="products-banner-w">
                    <img src="banners/banner-9.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-10.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-11.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-12.jpg" alt="" className="products-banner" />
                </div>
                <div className="products-list-w">
                    <div className="p-category-w">
                        <div className="p-category-text">Browse By:</div>
                        <div className="p-category-text">---</div>
                        <div className="p-category-text">
                            <input type="checkbox" name="All Womens's" id="All Womens's" value={"All Womens's"} onChange={handleCat} />
                            <label htmlFor="All Womens's">All Womens's</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="New Arrivals" id="New Arrivals" value={"New Arrivals"} onChange={handleCat} />
                            <label htmlFor="New Arrivals">New Arrivals</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="dresses" id="dresses" value={"dresses"} onChange={handleCat} />
                            <label htmlFor="dresses">Dresses</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Rompers + Jumpsuits" id="Rompers + Jumpsuits" value={"Rompers + Jumpsuits"} onChange={handleCat} />
                            <label htmlFor="Rompers + Jumpsuits">Rompers + Jumpsuits</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Tops" id="Tops" value={"Tops"} onChange={handleCat} />
                            <label htmlFor="Tops">Tops</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Graphic Tees" id="Graphic Tees" value={"Graphic Tees"} onChange={handleCat} />
                            <label htmlFor="Graphic Tees">Graphic Tees</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jackets" id="Jackets" value={"Jackets"} onChange={handleCat} />
                            <label htmlFor="jackets">Jackets</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Pants" id="Pants" value={"Pants"} onChange={handleCat} />
                            <label htmlFor="Pants">Pants</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jeans" id="Jeans" value={"Jeans"} onChange={handleCat} />
                            <label htmlFor="Jeans">Jeans</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Bottoms" id="Bottoms" value={"Bottoms"} onChange={handleCat} />
                            <label htmlFor="Bottoms">Bottoms</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Activewear" id="Activewear" value={"Activewear"} onChange={handleCat} />
                            <label htmlFor="Activewear">Activewear</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Skirts" id="Skirts" value={"Skirts"} onChange={handleCat} />
                            <label htmlFor="Skirts">Skirts</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Intimates + Lounge" id="Intimates + Lounge" value={"Intimates + Lounge"} onChange={handleCat} />
                            <label htmlFor="Intimates + Lounge">Intimates + Lounge</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Swim" id="Swim" value={"Swim"} onChange={handleCat} />
                            <label htmlFor="Swim">Swim</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Vintage" id="Vintage" value={"Vintage"} onChange={handleCat} />
                            <label htmlFor="Vintage">Vintage</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Shoes" id="Shoes" value={"Shoes"} onChange={handleCat} />
                            <label htmlFor="Shoes">Shoes</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Accessories" id="Accessories" value={"Accessories"} onChange={handleCat} />
                            <label htmlFor="Accessories">Accessories</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Sale" id="Sale" value={"Sale"} onChange={handleCat} />
                            <label htmlFor="Sale">Sale</label>
                        </div>
                        <div className="p-category-filter-w">
                            <div className="p-filter-title">Filter By:</div>
                            <div className="p-price-filter-w" style={priceModal ? { height: '500px' } : {}}>
                                <button className="price-btn" onClick={() => setPriceModal(!priceModal)}>Price <span> + </span> </button>
                                <button className="filter-price-btn">Less Than $25</button>
                                <button className="filter-price-btn">$25 - $50</button>
                                <button className="filter-price-btn">$50 - $100</button>
                                <button className="filter-price-btn">$100 - $200</button>
                                <button className="filter-price-btn">$200 - $500</button>
                                <button className="filter-price-btn">More than $500</button>
                                <div className="p-filter-item">
                                    <label htmlFor="">$</label>
                                    <input type="text" name="min" id="min" placeholder="Min" ref={minRef} />
                                    <label htmlFor="">$</label>
                                    <input type="text" name="max" id="max" placeholder="Max" ref={maxRef} />
                                    <button id="filter-go-btn" onClick={() => setFilterMax(maxRef.current.value)}>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-filter-w">
                        <div className="p-filter-text">
                            Women's Clothing:
                            <span> {data ? data?.length : 0} products</span>
                            <div className="p-sort-w">
                                <div className="p-sort-text">Sort:</div>
                                <select name="sort" id="sort" className="p-sort-selector">
                                    <option value="all">All</option>
                                    <option value="featured">Featured</option>
                                    <option value="trending">Trending</option>
                                    <option value="latest">Latest</option>
                                    <option value="desc">Price: Highest to Lowest</option>
                                    <option value="asc">Price: Lowest to Highest</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-items-w">
                            {error ? <h2> Server is not running </h2>
                                : loading ? <h2> Loading </h2>
                                    : data?.map((product) => { return <Card key={product?.id} products={product} /> })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function MensClothing() {
    const [filterMax, setFilterMax] = useState(1000);
    const [priceModal, setPriceModal] = useState(false)

    const maxRef = useRef()
    const minRef = useRef()

    const [sort, setSort] = useState('asc');
    const [subCats, setSubCats] = useState(["men"])
    const [mainCat, setMainCat] = useState(["categories"])

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][${mainCat}][title][$eq]=${subCats}&filters[categories][title][$eq]=men&[filters][price][$lte]=${filterMax}&sort=price:${sort}`)

    const handleCat = (e) => {
        e.target.checked ? (setSubCats(e.target.value), setMainCat('sub_categories')) : (setMainCat('categories'), setSubCats('men'))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="products-wrapper">
                <div className="products-banner-w">
                    <img src="banners/banner-13.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-14.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-15.jpg" alt="" className="products-banner" />
                    <img src="banners/banner-16.jpg" alt="" className="products-banner" />
                </div>
                <div className="products-list-w">
                    <div className="p-category-w">
                        <div className="p-category-text">Browse By:</div>
                        <div className="p-category-text">---</div>
                        <div className="p-category-text">
                            <input type="checkbox" name="All Men's" id="All Men's" value={"All Men's"} onChange={handleCat} />
                            <label htmlFor="All Men's">All Men's</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="New Arrivals" id="New Arrivals" value={"New Arrivals"} onChange={handleCat} />
                            <label htmlFor="New Arrivals">New Arrivals</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Graphic Tees" id="Graphic Tees" value={"Graphic Tees"} onChange={handleCat} />
                            <label htmlFor="Graphic Tees">Graphic Tees</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Top" id="Top" value={"Top"} onChange={handleCat} />
                            <label htmlFor="Top">Top</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="HoodiesSweatshirts" id="HoodiesSweatshirts" value={"HoodiesSweatshirts"} onChange={handleCat} />
                            <label htmlFor="HoodiesSweatshirts">Hoodies + Sweatshirts</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jackets" id="Jackets" value={"Jackets"} onChange={handleCat} />
                            <label htmlFor="Jackets">Jackets</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Coats" id="Coats" value={"Coats"} onChange={handleCat} />
                            <label htmlFor="Coats">Coats</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Jeans" id="Jeans" value={"Jeans"} onChange={handleCat} />
                            <label htmlFor="Jeans">Jeans</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Bottoms" id="Bottoms" value={"Bottoms"} onChange={handleCat} />
                            <label htmlFor="Bottoms">Bottoms</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Activewear" id="Activewear" value={"Activewear"} onChange={handleCat} />
                            <label htmlFor="Activewear">Activewear</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Grooming" id="Grooming" value={"Grooming"} onChange={handleCat} />
                            <label htmlFor="Grooming">Grooming</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Vintage" id="Vintage" value={"Vintage"} onChange={handleCat} />
                            <label htmlFor="Vintage">Vintage</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Hats" id="Hats" value={"Hats"} onChange={handleCat} />
                            <label htmlFor="Hats">Hats</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Accessories" id="Accessories" value={"Accessories"} onChange={handleCat} />
                            <label htmlFor="Accessories">Accessories</label>
                        </div>
                        <div className="p-category-text">
                            <input type="checkbox" name="Sale" id="Sale" value={"Sale"} onChange={handleCat} />
                            <label htmlFor="Sale">Sale</label>
                        </div>
                        <div className="p-category-filter-w">
                            <div className="p-filter-title">Filter By:</div>
                            <div className="p-price-filter-w" style={priceModal ? { height: '500px' } : {}}>
                                <button className="price-btn" onClick={() => setPriceModal(!priceModal)}>Price <span> + </span> </button>
                                <button className="filter-price-btn">Less Than $25</button>
                                <button className="filter-price-btn">$25 - $50</button>
                                <button className="filter-price-btn">$50 - $100</button>
                                <button className="filter-price-btn">$100 - $200</button>
                                <button className="filter-price-btn">$200 - $500</button>
                                <button className="filter-price-btn">More than $500</button>
                                <div className="p-filter-item">
                                    <label htmlFor="">$</label>
                                    <input type="text" name="min" id="min" placeholder="Min" ref={minRef} />
                                    <label htmlFor="">$</label>
                                    <input type="text" name="max" id="max" placeholder="Max" ref={maxRef} />
                                    <button id="filter-price-btn" onClick={() => setFilterMax(maxRef.current.value)}>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-filter-w">
                        <div className="p-filter-text">
                            Men's Clothing
                            <span> {data ? data?.length : 0} products</span>
                            <div className="p-sort-w">
                                <div className="p-sort-text">Sort:</div>
                                <select name="sort" id="sort" className="p-sort-selector">
                                    <option value="all">All</option>
                                    <option value="featured">Featured</option>
                                    <option value="trending">Trending</option>
                                    <option value="latest">Latest</option>
                                    <option value="desc">Price: Highest to Lowest</option>
                                    <option value="asc">Price: Lowest to Highest</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-items-w">
                            {error ? <h2> Server is not running </h2>
                                : loading ? <h2> Loading </h2>
                                    : data?.map((product) => { return <Card key={product?.id} products={product} /> })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}