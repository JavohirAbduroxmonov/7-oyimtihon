import React, { useEffect, useState } from "react";
import aylana from "../../../public/Frame.png";
import yulduz from "../../../public/yulduz.svg";
import bus from "../../../public/bus.svg";
import sumka from "../../../public/somka.svg";
import img1_font from "../../../public/font1.svg";
import img2_font from "../../../public/font2.svg";
import img3_font from "../../../public/font3.svg";
import img4_font from "../../../public/font4.svg";
import img5_font from "../../../public/font5.svg";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";
const baseURL = import.meta.env.VITE_BASE_URL;
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const Product = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {product && (
          <>
            <p className={styles.sarlavha}>
              Products / Gaming Headsets & Audio / Astro A50 X Wireless Headset
            </p>
            <div>
              <img
                src={product.image_url}
                alt={product.name}
                className={styles.productImage}
              />
             <div className={styles.fontimg}>
              <img className={styles.fontstili} src={img1_font} alt="" />
              <img className={styles.fontstili} src={img2_font} alt="" />
              <img className={styles.fontstili} src={img3_font} alt="" />
              <img className={styles.fontstili} src={img4_font} alt="" />
              <img className={styles.fontstili} src={img5_font} alt="" />
             </div>
              <div className={styles.productDetails}>
                {/* Add additional product details if needed */}
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <h2 className={styles.productName}>ASTRO A50 X</h2>
        <p className={styles.productText}>
          LIGHTSPEED Wireless Gaming Headset + Base Station
        </p>
        <img className={styles.yulduz} src={yulduz} alt="" />
        <span className={styles.span}></span>
        <p className={styles.money}>$399.00 or 99.99/month</p>
        <p className={styles.text2}>
          Suggested payments with 6 month special financing
        </p>
        <span className={styles.span2}></span>
        <h2 className={styles.title}>Choose a color</h2>
        <div className={styles.Productaylana}>
          <div className={styles.aylana}></div>
          <div className={styles.aylana2}></div>
        </div>
        <span className={styles.span3}></span>
        <div className={styles.Only}>
          <div className={styles.aylana3}>
            <img src={aylana} alt="" />
          </div>
          <p className={styles.text3}>
            Only <span className={styles.span4}>16 items</span> left! Don’t miss
            it{" "}
          </p>
        </div>
        <div className={styles.div_like}>
          <button className={styles.button}>Add to cart</button>

          <div onClick={toggleLike} className={styles.yurak_like}>
            {liked ? <FcLike /> : <FaRegHeart />}
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.text4}>
            <div>
              <img className={styles.bus} src={bus} alt="" />
            </div>
            <div>
              <p className={styles.ptext}>Free delivery</p>
              <p className={styles.ptext2}>
                Enter your Postal Code for Delivery Availability
              </p>
            </div>
          </div>
          <div className={styles.text5}>
            <div>
              <img className={styles.somka} src={sumka} alt="" />
            </div>
            <div>
              <p className={styles.ptext3}>Return Delivery</p>
              <p className={styles.ptext4}>Free delivery 30 Days return</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
