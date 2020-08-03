import React from "react";
import StarsIcon from "@material-ui/icons/Stars";
import "./checkoutProduct.css";
import { useStateValue } from "../State/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(_ => (
              <p>
                <StarsIcon />
              </p>
            ))}
        </div>
        <button onClick={removeBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
