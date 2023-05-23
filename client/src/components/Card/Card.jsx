import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss"

/* The following code defines a Card component that displays information about a product. */
export default function Card(prop) {
    /* Extracting the product information from the `products` prop */
    const product = prop.products
    return (
        /* Creating a link to the product page using the Link component */
        <Link to={`/products/${product.id}`}>
            <div className="card-container">
                {/* Displaying the product image */}
                <div className="card-img-w">
                    <div className="card-trending-box">{product.attributes.type}</div>
                    <div className="card-trending-box-2">{product.attributes.isNew ? "New" : "Stock"}</div>
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + product.attributes.img.data.attributes.url} alt="" className="card-image" />
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + product.attributes.img2.data.attributes.url} alt="" className="card-image-2" />
                </div>
                {/* Displaying the product title */}
                <div className="card-title">{product.attributes.title}</div>
                {/* Displaying the product price */}
                <div className="card-price"><b>${product.attributes.price}</b></div>
            </div>
        </Link>
    )
}

/*

- The component imports the Link component from the react-router-dom library, which is used to create a link to the product page.
- The Card component takes a prop called `products` which contains information about the product.
- Inside the Card component, the product information is extracted from the `products` prop and used to display an image, the product title, and price.
- When the user clicks on the Card component, the Link component is used to redirect them to the product page.

*/