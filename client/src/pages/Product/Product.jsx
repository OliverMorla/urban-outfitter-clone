import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Products from "../Products/Products/Products";
import Cart from "../../components/Cart/Cart";
import "./Product.scss"
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export default function Product(product) {
    
    const dispatch = useDispatch()
    const { data, loading, error } = useFetch("/products?populate=*&")
    const [ quantity, setQuantity] = useState()
    const { id } = useParams()
    data?.map((items) => {
        if (items.id === parseInt(id)) {
            product = items
        }
    })

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [ selectedImage, setSelectedImage ] = useState(0)
    const productImages = [
        import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.attributes?.img2?.data?.attributes?.url,
        import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.attributes?.img?.data?.attributes?.url
    ]

    return (
        <div className="product-wrapper">
            <div className="product-top-w">Men's / Tops</div>
            <div className="product-main-w">
                <div className="product-main-left-w">
                    <div className="p-main-images-w">
                        <div className="p-main-side-i-w">
                            <img src={productImages[0]} alt="" className="p-img-2"  onClick={() => setSelectedImage(0)}/>
                            <img src={productImages[1]} alt="" className="p-img-2"  onClick={() => setSelectedImage(1)}/>
                        </div>
                            <img src={productImages[selectedImage]} alt="" className="p-img-1" />
                    </div>
                </div>
                <div className="product-main-middle-w">
                    <div className="p-name">{product?.attributes?.title}</div>
                    <div className="p-name-link">See all Standard Cloth</div>
                    <div className="p-ratings">&#9733;&#9733;&#9733;&#9733;&#9733;(<span id="p-rating-value">42</span>)</div>
                    <div className="p-price">${product?.attributes?.price}<span id="p-price-value"></span>.00</div>
                    <div className="p-payment-info">Or 4 interest-free installments of $7.25 with <span>Klarna</span> or <span>Afterpay</span></div>
                    <div className="p-category-mode">Online Only</div>
                    <div className="p-category">Top Rated</div>
                    <div className="p-color-w">Color*
                        <select name="color-selection" id="color-selection">
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="grey">Grey</option>
                        </select>
                    </div>
                    <div className="p-size-w">Size*
                        <select name="qty" id="qty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="p-qty-w" onChange={(e) => setQuantity(e.target.value)}>Qty*
                        <select name="qty" id="qty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="p-buy-btn-w">
                        <button id="add-to-bag-btn" onClick={() => dispatch(addToCart({
                            id: product?.id,
                            title: product?.attributes?.title,
                            img1: product?.attributes?.img.data.attributes.url,
                            img2: product?.attributes?.img2.data.attributes.url,
                            price: product?.attributes?.price,
                            quantity
                        }))}>Add to Bag</button>
                    </div>
                    <div className="p-wishlist-w">Add to Wish List</div>
                </div>
                <div className="product-main-right-w">
                    <div className="p-main-right-text">You May Also Like</div>
                </div>
            </div>
            <div className="product-pav-w"></div>
            <div className="product-reviews-w">
                <div className="p-reviews-text">Reviews</div>
                <div className="p-reviews-c">
                    <div className="p-number-reviews-w">
                        <div className="p-rating">4.7 <span>stars</span></div>
                        <div className="p-total">42 <span>Reviews</span></div>
                    </div>
                    <div className="p-recommended-w">
                        <div className="p-recommended-text">93% <span>Recommended</span></div>
                    </div>
                    <div className="p-customer-w">
                        <div className="p-recommended-text">Customers Say: <span>Runs Large</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}