import React from "react";
import { Link } from "react-router-dom";
import "./HomeCards.scss";

export default function HomeCards(prop) {
  const product = prop.products;
  if (prop.type === product?.attributes?.type) {
    return <FeaturedCards />;
  } else if (prop.type === product?.attributes?.type) {
    return <FeaturedCards />;
  }
  function FeaturedCards() {
    return (
      <Link to={`/products/${product.id}`}>
        <div className="h-card-container">
          <div className="h-card-img-w">
            <div className="h-card-trending-box">{product.attributes.type}</div>
            <div className="h-card-trending-box-2">
              {product.attributes.isNew ? "New" : "Normal"}
            </div>
            <img
              src={
                import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                product?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="h-card-image"
            />
            <img
              src={
                import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                product?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              className="h-card-image-2"
            />
          </div>
          <div className="h-card-title">{product.attributes.title}</div>
          <div className="h-card-price">
            <b>${product.attributes.price}</b>
          </div>
        </div>
      </Link>
    );
  }
}
