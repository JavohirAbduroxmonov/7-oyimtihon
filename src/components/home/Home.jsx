import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./home.module.scss";

const Home = ({ cart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles["home-container"]}>
      <div className={styles["cartHeader"]}>
        <Link className={styles["link"]} to={`/`}>
          <p className={styles["goback"]}>Go Back</p>
        </Link>
        <h2 className={styles["title"]}>SHOPPING CART</h2>
      </div>
      <strong className={styles["line"]}>
        -------------------------------------------------------------------------------------------------------------------------------------
      </strong>
      <div className={styles["carttext"]}>
        <h1 className={styles["product"]}>Product</h1>
        <h1 className={styles["quantity"]}>Description</h1>
        <h1 className={styles["price"]}>Price</h1>
      </div>
      <strong className={styles["line"]}>
        -------------------------------------------------------------------------------------------------------------------------------------
      </strong>
      <div className={styles["productsContainerMain"]}>
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <div className={styles["productContainer"]}>
                <img
                  className={styles["cartImg"]}
                  src={item.image_url}
                  alt={item.name}
                />
                <div>
                  <p className={styles["productName"]}>{item.name}</p>
                  <p className={styles["description"]}>{item.description}</p>
                </div>
                <p className={styles["productprice"]}>${item.price}</p>
              </div>
              <strong className={styles["line"]}>
                -------------------------------------------------------------------------------------------------------------------------------------
              </strong>
            </div>
          ))}
        </div>
        <div className={styles["totalpriceContainer"]}>
          <h1 className={styles["totalCart"]}>CART TOTALS</h1>
          <p className={styles["shipping"]}>Shipping (3-5 Business Days)</p>
          <p className={styles["tax"]}>
            TAX (estimated for the United States (US)) $0
          </p>
          <p className={styles["subtotal"]}>Subtotal</p>
          <h1 className={styles["totalprice"]}>Total Price = {totalPrice}$</h1>
          <div className={styles["checkout"]}>
            <Link className={styles["linkcheck"]} to={`/`}></Link>
            <Button>
              <span className={styles["checkouttext"]}>Checkout</span>
            </Button>
          </div>
          <p className={styles["goback"]}>Go Back</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
