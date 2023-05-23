// Importing required modules from external libraries
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
// Importing the action creator to remove an item from the cart
import { removeItem } from "../../redux/cartReducer";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// Importing the styles for the Cart component
import "./Cart.scss"
import { makeRequest } from "../../makeRequest";
// Defining the Cart component
export default function Cart() {

  // Initializing the useDispatch and useSelector hooks from the react-redux library
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.products)

  const stripePromise = loadStripe(
    "pk_test_51MoDqhLIyLncFJS9aPDIpZQw0bz6KxVtxrF1QnlOfAZC3QLRd8b1dtb5rQ4XyYZFORDS7qG4vcAa3pV7MRmnGJWI00w8jLperS"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  // Rendering the Cart component
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}>
      <div className="cart-wrapper">

        {/* Rendering the title of the Cart component */}
        <div className="cart-title">Bag (<span className="cart-item-number">{products?.length}</span>) items</div>

        {/* Rendering each product in the cart */}
        {products?.map((item) => (
          <div className="cart-item-w">
            <div className="cart-product-w">

              {/* Rendering the product image */}
              <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img1} alt="" className="cart-p-img" />

              <div className="cart-p-right-w">

                {/* Rendering the product name */}
                <div className="cart-p-name">{item.title}</div>

                {/* Rendering the product price */}
                <div className="cart-p-price">$<span>{item.price}</span>.00</div>

                {/* Rendering the product color */}
                <div className="cart-p-color"><span>Color:</span> Brown</div>

                {/* Rendering the product size */}
                <div className="cart-p-size"><span>Size:</span> S</div>

                <div className="cart-p-qty">{item.quantity}</div>
                {/* Rendering the trash icon to remove the product from the cart */}
                <FontAwesomeIcon icon={faTrash} className="cart-trash-icon" onClick={() => dispatch(removeItem(item.id))}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        ))}

        {/* Rendering the Checkout button */}
        <button id="cart-checkout-btn" onClick={handlePayment}>Checkout</button>
      </div>
    </motion.div>

  )
}

