import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import Card from "../card/Card";

import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productsSlice";

const baseURL = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart, setAdd }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await fetch(`${baseURL}/brands`);
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    }

    async function fetchColors() {
      try {
        const response = await fetch(`${baseURL}/colors`);
        const data = await response.json();
        setColors(data);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    }

    fetchBrands();
    fetchColors();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }
      if (sort) {
        params.push(`_sort=price&_order=${sort}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await fetch(query);
        const data = await response.json();
        dispatch(addProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor, sort, dispatch]);

  return (
    <div>
      <div className={styles.filterblovc}>
        <div>
          <p className={styles.filterby}>Filter by:</p>
        </div>
        <div className={styles.filter}>
          <nav className={styles.nav}>
            <select className={styles.select}
              name="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="asc">arzon</option>
              <option value="desc">qimmat</option>
            </select>
          </nav>
        </div>
      </div>
      <div className={styles.container}>
        <aside>
          <div className={styles.filter}>
            <h3>BRAND</h3>
            <ul>
              {brands.map((brand, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    value={brand}
                    name="brand"
                    id={brand}
                    checked={brand === selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>COLORS</h3>
            <ul className={styles.colorsContainer}>
              {colors.map((color, index) => (
                <li key={index}>
                  <div
                    style={{
                      background: color,
                      outline: selectedColor === color ? "3px solid red" : "",
                    }}
                    className={styles.color}
                    onClick={() => setSelectedColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main>
          {loading ? (
            <p>Loading...</p>
          ) : products.length ? (
            <div className={styles.grid}>
              {products.map((product) => (
                <Card className={styles.card}
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  setAdd={setAdd}
                />
              ))}
            </div>
          ) : (
            <p>No products found</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
